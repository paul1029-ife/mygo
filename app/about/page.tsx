"use client";

import Image from "next/image";
import {
  CheckmarkBadge01Icon,
  SecurityCheckIcon,
  Time01Icon,
} from "hugeicons-react";
import { motion, useScroll, useTransform, Variants } from "motion/react";
import { ReactElement, useRef } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";

const textReveal: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutPage() {
  const router = useRouter();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main
      ref={containerRef}
      className="font-mono bg-[#020202] min-h-screen text-white selection:bg-[#D4AF37] selection:text-black overflow-x-hidden relative"
    >
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: "url('/noise.jpg')",
          backgroundRepeat: "repeat",
        }}
      />

      <section className="relative w-full h-[90vh] flex flex-col justify-end pb-32 px-6 overflow-hidden">
        <div className="max-w-350 mx-auto w-full relative z-10">
          <motion.div style={{ y: yHero, opacity: opacityHero }}>
            <div className="flex items-center gap-4 mb-8 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-px bg-[#D4AF37]"
              />
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-medium"
              >
                The Firm
              </motion.span>
            </div>

            <h1 className="font-sans text-6xl md:text-8xl leading-[0.9] text-white tracking-tight">
              <div className="overflow-hidden">
                <motion.div
                  variants={textReveal}
                  initial="hidden"
                  animate="visible"
                >
                  Invisible
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  variants={textReveal}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.1 }}
                  className="font-serif italic pb-4 inline-block text-neutral-500 hover:text-neutral-100 transition-colors ease-in-out duration-300"
                >
                  Excellence.
                </motion.div>
              </div>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT CONTENT --- */}
      <section className="py-32 border-t border-white/10 bg-[#050505] relative z-10">
        <div className="max-w-350 mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <span className="block text-xs font-mono text-[#D4AF37] uppercase tracking-[0.2em] mb-6">
                About MyGo
              </span>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-neutral-400 text-sm max-w-xs leading-relaxed"
              >
                We do not just manage tasks; we curate time. Our philosophy is
                rooted in the belief that luxury is the absence of friction.
              </motion.p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="text-3xl md:text-5xl font-sans leading-tight mb-24 text-neutral-200">
              MYGO is a{" "}
              <span className="text-[#D4AF37]">premium concierge</span> and
              lifestyle services company built around efficiency, discretion,
              and reliability.
            </p>

            <div className="grid grid-cols-1 gap-12">
              <ValueCard
                icon={<Time01Icon className="text-[#D4AF37]" size={28} />}
                title="Efficiency"
                desc="We value your time as the ultimate currency. Our workflows are streamlined to execute complex requests with zero friction."
              />
              <ValueCard
                icon={
                  <SecurityCheckIcon className="text-[#D4AF37]" size={28} />
                }
                title="Discretion"
                desc="Privacy is our cornerstone. We operate in the background, ensuring your movements and requests remain strictly confidential."
              />
              <ValueCard
                icon={
                  <CheckmarkBadge01Icon className="text-[#D4AF37]" size={28} />
                }
                title="Reliability"
                desc="Consistency is the true mark of luxury. Every request is handled with the same level of care, urgency, and attention to detail."
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- PARALLAX IMAGE --- */}
      <section className="w-full h-[70vh] relative overflow-hidden flex items-center justify-center">
        <ParallaxImage src="/background-v1.png" />
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 text-center px-6">
          <p className="text-[#D4AF37] uppercase tracking-[0.3em] text-xs mb-8">
            Our Promise
          </p>
          <h3 className="font-serif italic text-4xl md:text-6xl text-white">
            &quot;Every request handled with care.&quot;
          </h3>
        </div>
      </section>

      <section className="py-40 bg-[#020202] flex flex-col items-center justify-center text-center px-6">
        <h2 className="font-sans text-5xl md:text-7xl mb-12">
          Ready to elevate <br /> your lifestyle?
        </h2>
        <FillButton
          onClick={() => router.push("/request")}
          text="Request A Service"
        />
      </section>

      <Footer />
    </main>
  );
}

function ValueCard({
  icon,
  title,
  desc,
}: {
  icon: ReactElement;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group border-t border-white/10 pt-12 hover:border-[#D4AF37] transition-colors duration-500"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <div className="p-3 bg-white/5 rounded-full w-fit group-hover:bg-[#D4AF37]/10 transition-colors duration-500">
          {icon}
        </div>
        <div>
          <h3 className="font-sans text-3xl mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-md group-hover:text-neutral-300 transition-colors duration-300">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function FillButton({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className="group relative flex items-center gap-4 px-10 py-6 bg-white text-black overflow-hidden"
    >
      <span className="relative z-10 uppercase tracking-widest text-sm font-bold group-hover:text-white transition-colors duration-300">
        {text}
      </span>
      <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />
    </motion.button>
  );
}

function ParallaxImage({ src }: { src: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <motion.div ref={ref} style={{ scale }} className="absolute inset-0">
      <Image
        src={src}
        alt="Background"
        fill
        className="object-cover opacity-50 grayscale"
      />
    </motion.div>
  );
}
