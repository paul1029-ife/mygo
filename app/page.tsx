"use client";

import Image from "next/image";
import {
  Shield01Icon,
  Time01Icon,
  Globe02Icon,
  DashboardSpeed01Icon,
  Ticket01Icon,
} from "hugeicons-react";
import { motion, Transition, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { BentoItem } from "@/components/BentoItem";
import { PricingCard } from "@/components/PricingCard";
import IntroSection from "@/components/IntroSection";
import { useRouter } from "next/navigation";
import { ProcessSection } from "@/components/ProcessSection";
import Footer from "@/components/Footer";
const transition: Transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export default function Page() {
  const router = useRouter();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main
      className={`font-mono bg-[#020202] min-h-screen text-white selection:bg-[#D4AF37] selection:text-black overflow-x-hidden relative`}
    >
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: "url('/noise.jpg')" }}
      ></div>

      <section
        ref={targetRef}
        className="relative w-full h-screen min-h-200 flex flex-col justify-center overflow-hidden"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <Image
              src="/background-v1.png"
              alt="Luxury Jet Background"
              fill
              priority
              className="object-cover object-center md:object-[80%_center]"
              quality={95}
            />
          </motion.div>
          <div className="absolute inset-0 bg-linear-to-r from-[#020202] via-[#020202]/80 to-transparent sm:via-[#020202]/40" />
          <div className="absolute inset-0 bg-linear-to-t from-[#020202] via-transparent to-black/40" />
        </motion.div>

        <div className="relative z-10 w-full max-w-350 mx-auto px-6 grid grid-cols-1 md:grid-cols-12 h-full items-center">
          <motion.div
            className="md:col-span-8 lg:col-span-7"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={fadeInUp}
              className="items-center gap-4 mb-6 group inline-flex"
            >
              <div className="h-px w-6 bg-[#D4AF37] transition-all duration-300 ease-out group-hover:w-12 group-hover:opacity-100 opacity-60" />

              <span className="text-[#D4AF37] text-[11px] uppercase tracking-[0.3em] font-medium transition-transform duration-300 ease-out group-hover:translate-x-1">
                Premium Concierge
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className={`font-sans text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.9] text-white mb-8`}
            >
              Life. <br />
              <span className="italic text-neutral-500 hover:text-neutral-100 transition-colors ease-in-out duration-300 font-light">
                Handled.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-neutral-300 text-lg font-light max-w-md leading-relaxed mb-10 opacity-80"
            >
              Seamless lifestyle management designed to remove friction, save
              time, and deliver peace of mind.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-5"
            >
              <motion.button
                whileHover={{
                  filter: "brightness(1.1)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={transition}
                onClick={() => router.push("/request")}
                className="px-6 py-4 bg-linear-to-r from-[#B88746] via-[#FDF5A6] to-[#B88746] text-black font-bold uppercase tracking-widest text-sm w-full md:w-auto shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                Request A Service
              </motion.button>
              <motion.button
                whileHover={{ color: "#D4AF37", borderColor: "#D4AF37" }}
                className="px-6 py-4 border-b border-white/30 text-white text-[11px] uppercase tracking-[0.2em] text-left sm:text-center w-fit"
              >
                Explore Membership
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-0 left-0 w-full z-20"
        >
          <div className="max-w-350 mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <Time01Icon size={24} className="text-[#D4AF37] opacity-80" />
              <div>
                <span className="text-base text-neutral-500 uppercase tracking-widest block mb-1">
                  Availability
                </span>
                <span className="text-white font-serif text-2xl">24/7/365</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Globe02Icon size={24} className="text-[#D4AF37] opacity-80" />
              <div>
                <span className="text-base text-neutral-500 uppercase tracking-widest block mb-1">
                  Coverage
                </span>
                <span className="text-white font-serif text-2xl">
                  Global & Local
                </span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <DashboardSpeed01Icon
                size={24}
                className="text-[#D4AF37] opacity-80"
              />
              <div>
                <span className="text-base text-neutral-500 uppercase tracking-widest block mb-1">
                  Response
                </span>
                <span className="text-white font-serif text-2xl">
                  Immediate
                </span>
              </div>
            </div>
            <div className="flex items-center justify-end">
              <div className="flex items-center gap-2 border border-[#D4AF37]/30 px-3 py-2 rounded-full bg-[#D4AF37]/5 backdrop-blur-sm">
                <Ticket01Icon size={14} className="text-[#D4AF37]" />
                <p className="text-[10px] text-[#D4AF37] uppercase tracking-widest text-right">
                  Invitation Only
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <IntroSection />

      <section className="py-24 bg-[#050505] border-t border-white/5">
        <div className="max-w-350 mx-auto px-6 mb-16 flex justify-between items-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-md"
          >
            <span className="text-[#D4AF37] text-xs uppercase tracking-widest mb-4 block">
              Our Expertise
            </span>
            <h2 className={`font-sans text-5xl text-white`}>
              Bespoke Solutions
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, ...transition }}
            className="hidden md:block text-right"
          >
            <p className="text-neutral-300 text-sm max-w-xs">
              Tailored solutions for unique needs. <br /> If you can imagine it,
              we can arrange it.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-350 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <BentoItem
            colSpan="lg:col-span-2"
            title="Travel & Mobility"
            desc="Flight coordination, airport assistance, ground transfers, and private vessel coordination. Global floating routing handled meticulously."
            imgSrc="/points/point-1.png"
          />
          <BentoItem
            title="Lifestyle"
            desc="Restaurant reservations, event access, leisure planning, and private dining experiences."
            imgSrc="/points/point-2.png"
          />
          <BentoItem
            title="Executive"
            desc="Board travel, executive bubbles, labor securing, and secure digital operations."
            imgSrc="/points/point-3.png"
          />
          <BentoItem
            colSpan="lg:col-span-2"
            title="Assets & Property"
            desc="Home restlessness management, vehicle caretakes, and connascence supervision."
            imgSrc="/points/point-4.png"
          />
        </motion.div>
      </section>

      <ProcessSection />

      <section className="py-32 max-w-350 mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className={`font-sans text-5xl mb-6`}>Membership</h2>
          <p className="text-neutral-300 font-light">
            Choose the level of access that suits your lifestyle. Execution fees
            and urgent request premiums apply and are communicated upfront.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <PricingCard
            tier="MYGO Essential"
            price="₦250k"
            onClick={() => router.push("/request")}
            features={[
              "Access to concierge services",
              "Pay-per-service execution",
              "Standard response time",
              "Business hours support",
            ]}
          />
          <PricingCard
            tier="MYGO Premium"
            price="₦1.2M"
            onClick={() => router.push("/request")}
            isPremium={true}
            features={[
              "Priority handling",
              "Dedicated concierge manager",
              "Preferential access",
              "24/7 Support",
              "Zero booking fees",
            ]}
          />
          <motion.div
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="p-10 border border-white/10 flex flex-col justify-center items-center text-center bg-neutral-900/50 hover:border-white/20 transition-colors duration-500"
          >
            <Shield01Icon
              size={48}
              className="text-[#D4AF37] mb-6 opacity-50"
            />
            <h4 className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-4">
              MYGO Corporate
            </h4>
            <div className={`font-sans text-4xl mb-6 text-white`}>Custom</div>
            <p className="text-sm text-neutral-400 mb-8">
              Multi-user access, account management, and tailored workflows for
              organizations.
            </p>
            <button className="relative font-mono block overflow-hidden group h-fit text-sm uppercase tracking-tight text-gray-400">
              <span
                data-text="Contact Sales"
                className="text-white cursor-pointer block underline
                  relative
                  transition-transform 
                  duration-500 
                  ease-[cubic-bezier(0.76,0,0.24,1)] 
                  group-hover:-translate-y-full
                  
                  after:content-[attr(data-text)]
                  after:block
                  after:absolute
                  after:left-0
                  after:top-full
                  after:text-white
                  after:underline"
              >
                Contact Sales
              </span>
            </button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
