import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, PerspectiveCamera, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const ParticleSystem = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const count = 3000;
  
  // Create randomized positions and velocities
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Create a more structured cloud
      const r = 10 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      vel[i * 3] = (Math.random() - 0.5) * 0.02;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
    }
    return [pos, vel];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Rotate the entire group slowly
    pointsRef.current.rotation.y = time * 0.03;
    pointsRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;

    // Apply mouse influence
    const targetX = mouse.x * 2;
    const targetY = mouse.y * 2;
    pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, targetX, 0.05);
    pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, targetY, 0.05);

    // Dynamic movement for individual particles
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      positions[i * 3] += velocities[i * 3] + Math.sin(time + i) * 0.005;
      positions[i * 3 + 1] += velocities[i * 3 + 1] + Math.cos(time + i) * 0.005;
      positions[i * 3 + 2] += velocities[i * 3 + 2];
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#F2C75C"
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
};

const AtmosphericGlow = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const shaderData = useMemo(() => ({
    uniforms: {
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color("#090a0b") },
      uColor2: { value: new THREE.Color("#d4a23a") }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      uniform float uTime;
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      
      void main() {
        // Create a flowing gradient noise effect
        float n = sin(vUv.x * 3.0 + uTime * 0.4) * cos(vUv.y * 3.0 - uTime * 0.2);
        vec3 color = mix(uColor1, uColor2, n * 0.25 + 0.2);
        
        // Edge fallout
        float d = distance(vUv, vec2(0.5));
        float alpha = smoothstep(0.7, 0.0, d) * 0.6;
        
        gl_FragColor = vec4(color, alpha);
      }
    `
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -10]} scale={[50, 50, 1]}>
      <planeGeometry />
      <shaderMaterial args={[shaderData]} transparent depthWrite={false} />
    </mesh>
  );
};

const WebGLScene: React.FC = () => {
  return (
    <div className="three-container bg-primary-bg">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 18]} fov={40} />
        <color attach="background" args={['#090a0b']} />
        
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#F2C75C" />
        <pointLight position={[-10, -10, 10]} intensity={1.5} color="#D4A23A" />
        
        <AtmosphericGlow />
        
        <Float speed={3} rotationIntensity={0.8} floatIntensity={1.5}>
          <ParticleSystem />
        </Float>

        {/* Add secondary subtle star layer for depth */}
        <Stars radius={60} depth={60} count={3000} factor={6} saturation={0} fade speed={2} />
        
        <fog attach="fog" args={['#090a0b', 12, 40]} />
      </Canvas>
    </div>
  );
};

export default WebGLScene;
