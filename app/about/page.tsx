"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CheckmarkBadge01Icon,
  SecurityCheckIcon,
  Time01Icon,
  ArrowRight01Icon,
  Mail01Icon,
  ComputerIcon,
} from "hugeicons-react";
import {
  motion,
  Transition,
  useScroll,
  useTransform,
  Variants,
} from "motion/react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const transition: Transition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] };

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition },
};

const lineAnim: Variants = {
  hidden: { width: "0%" },
  visible: { width: "100%", transition: { duration: 1.5, ease: "easeInOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export default function AboutPage() {
  const router = useRouter();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <main
      ref={containerRef}
      className="font-mono bg-[#020202] min-h-screen text-white selection:bg-[#D4AF37] selection:text-black overflow-x-hidden relative"
    >
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: "url('/noise.jpg')" }}
      ></div>

      <section className="relative w-full h-[80vh] flex flex-col justify-end pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-[#1a1a1a] via-[#020202] to-[#020202] opacity-60" />
        </div>

        <div className="max-w-350 mx-auto w-full relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ y: yHero }}
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-medium">
                The Firm
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-sans text-6xl md:text-8xl lg:text-9xl leading-[0.9] text-white tracking-tight"
            >
              Invisible <br />
              <span className="font-serif italic text-neutral-500 hover:text-neutral-100 transition-colors ease-in-out duration-300">
                Excellence.
              </span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <section className="py-32 border-t border-white/10 bg-[#050505] relative">
        <div className="max-w-350 mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm font-mono text-neutral-400 uppercase tracking-widest mb-4"
              >
                About MyGo
              </motion.h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={lineAnim}
                className="h-px bg-[#D4AF37] mb-8"
              />
            </div>
          </div>

          {/* Right: The Content */}
          <div className="lg:col-span-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.p
                variants={fadeInUp}
                className="text-3xl md:text-5xl font-sans leading-tight mb-16 text-neutral-200"
              >
                MYGO is a{" "}
                <span className="text-[#D4AF37]">premium concierge</span> and
                lifestyle services company built around efficiency, discretion,
                and reliability.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24"
              >
                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <Time01Icon className="text-[#D4AF37]" size={24} />
                    <h3 className="font-sans text-2xl">Efficiency</h3>
                  </div>
                  <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
                    We value your time as the ultimate currency. Our workflows
                    are streamlined to execute complex requests with zero
                    friction.
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <SecurityCheckIcon className="text-[#D4AF37]" size={24} />
                    <h3 className="font-sans text-2xl">Discretion</h3>
                  </div>
                  <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
                    Privacy is our cornerstone. We operate in the background,
                    ensuring your movements and requests remain strictly
                    confidential.
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckmarkBadge01Icon
                      className="text-[#D4AF37]"
                      size={24}
                    />
                    <h3 className="font-sans text-2xl">Reliability</h3>
                  </div>
                  <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-500">
                    Consistency is the true mark of luxury. Every request is
                    handled with the same level of care, urgency, and attention
                    to detail.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full h-[60vh] relative overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/background-v1.png"
            alt="MyGo Atmosphere"
            fill
            className="object-cover object-center opacity-40 grayscale"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center px-6"
          >
            <motion.p
              variants={fadeInUp}
              className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs mb-6"
            >
              Our Promise
            </motion.p>
            <motion.h3
              variants={fadeInUp}
              className="font-serif italic text-4xl md:text-6xl text-white"
            >
              &quot;Every request handled with care.&quot;
            </motion.h3>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#020202]">
        <div className="max-w-350 mx-auto px-6 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transition}
            viewport={{ once: true }}
            className="font-sans text-5xl md:text-7xl mb-8"
          >
            Ready to elevate <br /> your lifestyle?
          </motion.h2>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/request")}
            className="group relative flex items-center gap-4 px-8 py-5 bg-white text-black hover:bg-[#D4AF37] transition-colors duration-500"
          >
            <span className="uppercase tracking-widest text-sm font-bold">
              Become a Member
            </span>
            <ArrowRight01Icon
              size={20}
              className="transition-transform duration-500 group-hover:translate-x-1"
            />
          </motion.button>
        </div>
      </section>

      <footer className="pt-20 pb-10 border-t border-white/10 bg-[#020202]">
        <div className="max-w-350 mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/logo-black.png"
              width={130}
              height={30}
              alt="Mygo logo"
            />
            <p className="text-neutral-400 text-sm max-w-xs mb-8 mt-6">
              Nigeria-rooted, Global-standard. Premium concierge services for
              those who value time above all else.
            </p>
            <div className="flex gap-4">
              <motion.div
                whileHover={{ color: "#D4AF37" }}
                className="text-neutral-400 cursor-pointer"
              >
                <Mail01Icon />
              </motion.div>
              <motion.div
                whileHover={{ color: "#D4AF37" }}
                className="text-neutral-400 cursor-pointer"
              >
                <ComputerIcon />
              </motion.div>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Contact
            </h5>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li>info@mygo.com</li>
              <li>Lagos, Nigeria</li>
              <li className="relative font-mono block overflow-hidden group h-fit text-sm uppercase tracking-tight text-gray-400">
                <span
                  data-text="Chat on Whatsapp"
                  className="text-[#D4AF37] cursor-pointer block relative transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full after:content-[attr(data-text)] after:block after:absolute after:left-0 after:top-full after:text-[#D4AF37]"
                >
                  Chat on WhatsApp
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-350 mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-400 uppercase tracking-widest">
          <p>© 2026 MYGO Services.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
