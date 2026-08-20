import React from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

const CeoMessage: React.FC = () => {
  return (
    <div className="-mt-[100px] overflow-hidden bg-[#f3efe7] md:-mt-[110px] lg:-mt-[120px]">
      <SEO
        title="Founding CEO's Message"
        description="A message from Meriem Berkani, Founder and CEO of TIMGAD Government Transaction Services."
      />

      <section className="relative overflow-hidden bg-[#f3efe7] pt-[100px] md:min-h-screen md:pt-[110px] lg:pt-[120px]">
        <img
          src="https://res.cloudinary.com/dfjezzfhc/image/upload/v1787161806/24ecff8d-efa8-4768-8d64-2665d62060a5_sk3u7e.png"
          alt="Meriem Berkani, Founder and CEO of TIMGAD"
          className="absolute inset-x-0 bottom-0 h-auto w-full object-contain object-bottom md:inset-0 md:h-full md:object-cover md:object-center"
        />

        <div className="relative z-10 mx-auto flex max-w-[1536px] items-start px-5 pb-12 pt-12 sm:px-8 md:min-h-[calc(100vh-110px)] md:items-center md:px-12 md:py-16 lg:px-16 xl:px-20">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[650px] text-[#111820] md:max-w-[50%]"
          >
            <div className="mb-7">
              <p className="text-[11px] font-bold tracking-[0.42em] text-[#a87824] sm:text-xs">LEADERSHIP</p>
              <div className="mt-4 h-px w-14 bg-gradient-to-r from-[#a87824] via-[#d8b15a] to-[#f4d98a]" />
            </div>

            <h1 className="font-sans text-[2.15rem] font-bold leading-[0.94] tracking-[-0.055em] text-[#111820] sm:text-[clamp(3rem,5vw,4.4rem)]">
              Founding CEO&apos;s<br />
              Message
            </h1>

            <div className="my-6 h-px w-full max-w-[580px] bg-gradient-to-r from-[#a87824] via-[#d8b15a] to-transparent shadow-[120px_0_18px_rgba(216,177,90,0.18)]" />

            <div className="max-w-[590px] space-y-4 break-words font-sans text-[15px] leading-[1.7] sm:text-base">
              <p className="text-[clamp(1.05rem,1.45vw,1.3rem)] font-semibold leading-[1.55] tracking-[-0.015em] text-[#111820]">
                “At TIMGAD, we are not just offering services – we are simplifying the lives of entrepreneurs, investors, and professionals who make the UAE their base of success.”
              </p>
              <p className="!text-[#1a2028]">
                From the day I founded TIMGAD, my vision was clear: to create a platform that harmonizes business growth with government compliance. Every great idea deserves a foundation that allows it to thrive without getting lost in bureaucracy.
              </p>
              <p className="!text-[#1a2028]">
                The UAE, with its dynamic economy and visionary leadership, offers limitless opportunities. But navigating its regulatory framework demands precision, connections, and expertise. TIMGAD was born to fill that gap—offering structured, dependable, and seamless transaction management across all Emirates.
              </p>
              <p className="!text-[#1a2028]">
                Our mission is not merely to process paperwork; it&apos;s to empower our clients—by turning administrative challenges into streamlined, digital-first solutions. Every transaction is handled with confidentiality, speed, and accuracy, reflecting our commitment to excellence.
              </p>
              <p className="pt-2 font-medium text-[#111820]">
                With gratitude to our clients, partners, and dedicated team, I welcome you to experience TIMGAD&apos;s excellence in service and ethics.
              </p>
            </div>

            <div className="mt-6 flex flex-col items-start gap-3 border-t border-[#c89b3c]/45 pt-5 sm:flex-row sm:items-center sm:gap-5">
              <p className="font-serif-heading text-[clamp(1.65rem,2.2vw,2.15rem)] font-normal italic tracking-[-0.035em] text-[#111820]">Meriem Berkani</p>
              <div className="h-px w-12 bg-[#c89b3c]/70 sm:h-11 sm:w-px" />
              <div className="min-w-0">
                <p className="font-sans text-xs font-semibold tracking-[0.14em] text-[#a87824]">FOUNDER &amp; CEO</p>
                <p className="mt-1 break-words font-sans text-[10px] font-medium tracking-[0.08em] text-[#1a2028] sm:text-[11px]">TIMGAD GOVERNMENT TRANSACTION SERVICES</p>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </div>
  );
};

export default CeoMessage;
