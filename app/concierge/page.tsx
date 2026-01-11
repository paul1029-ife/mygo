"use client";

import { useState } from "react";
import {
  Airplane01Icon,
  DrinkIcon,
  Building03Icon,
  Shield01Icon,
  Clock01Icon,
  StarIcon,
  ArrowRight01Icon,
} from "hugeicons-react";
import { motion, AnimatePresence, Transition, Variants } from "motion/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const transition: Transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const services = [
  {
    id: "01",
    title: "Travel & Aviation",
    description:
      "From private jet charters to complex multi-leg itineraries. We handle visa processing, tarmac transfers, and luxury accommodation worldwide.",
    icon: <Airplane01Icon className="text-[#D4AF37]" size={24} />,
    image: "/points/point-1.png",
  },
  {
    id: "02",
    title: "Lifestyle Management",
    description:
      "Exclusive access to sold-out events, Michelin-star reservations, and bespoke gift sourcing. Your leisure is our business.",
    icon: <DrinkIcon className="text-[#D4AF37]" size={24} />,
    image: "/points/point-2.png",
  },
  {
    id: "03",
    title: "Corporate Concierge",
    description:
      "Executive relocation, office setup, and corporate retreat planning. We streamline operations for C-Suite executives.",
    icon: <Building03Icon className="text-[#D4AF37]" size={24} />,
    image: "/points/point-3.png",
  },
  {
    id: "04",
    title: "Security & Logistics",
    description:
      "Close protection services, secure cargo transport, and discreet diplomatic routing for sensitive movements.",
    icon: <Shield01Icon className="text-[#D4AF37]" size={24} />,
    image: "/points/point-4.png",
  },
];

const values = [
  {
    title: "Efficiency",
    desc: "Time is your most valuable asset. We refuse to waste it.",
    icon: <Clock01Icon size={32} />,
  },
  {
    title: "Discretion",
    desc: "Privacy is paramount. Our operations are invisible.",
    icon: <Shield01Icon size={32} />,
  },
  {
    title: "Reliability",
    desc: "Global reach, local expertise. Consistent excellence.",
    icon: <StarIcon size={32} />,
  },
];

export default function ServicesPage() {
  const router = useRouter();
  const [hoveredService, setHoveredService] = useState<number>(0);

  return (
    <main className="font-mono bg-[#020202] min-h-screen text-white selection:bg-[#D4AF37] selection:text-black relative">
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: "url('/noise.jpg')" }}
      ></div>

      <section className="relative pt-40 pb-20 md:pt-60 md:pb-32 px-6">
        <div className="max-w-350 mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-12 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-medium">
                Our Services
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-sans text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] text-white mb-12"
            >
              The Art of <br />
              <span className="text-neutral-500 hover:text-neutral-100 transition-colors ease-in-out duration-300 italic font-light">
                Getting Things Done.
              </span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      <section className="py-32 max-w-350 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                onMouseEnter={() => setHoveredService(index)}
                onViewportEnter={() => setHoveredService(index)}
                viewport={{ margin: "-7% 0px -7% 0px" }}
                className="group border-t border-white/10 py-12 cursor-pointer relative transition-colors duration-500 hover:border-[#D4AF37]/50"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#D4AF37] opacity-60">
                      0{index + 1}
                    </span>
                    <h2 className="font-sans text-3xl md:text-4xl text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                      {service.title}
                    </h2>
                  </div>
                  <motion.div
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: -45 }}
                    className="text-neutral-500 group-hover:text-[#D4AF37] transition-colors"
                  >
                    <ArrowRight01Icon />
                  </motion.div>
                </div>

                <p className="text-neutral-500 max-w-md text-sm leading-relaxed group-hover:text-neutral-300 transition-colors duration-300 pl-10">
                  {service.description}
                </p>
              </motion.div>
            ))}
            <div className="border-t border-white/10" />
          </motion.div>

          <div className="hidden lg:block relative h-full">
            <div className="sticky top-18 h-150 w-full">
              <div className="w-full h-full relative overflow-hidden bg-white/5 border border-white/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hoveredService}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={services[hoveredService].image}
                      alt={services[hoveredService].title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/20" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-4 border border-[#D4AF37]/20 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-900/20 border-y border-white/5">
        <div className="max-w-350 mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10"
          >
            {values.map((value, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="px-0 py-8 md:px-8 text-center flex flex-col items-center group"
              >
                <div className="mb-6 p-4 rounded-full border border-white/5 bg-white/5 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                  {value.icon}
                </div>
                <h4 className="font-sans text-xl text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-neutral-500 max-w-xs">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-[#020202] to-[#111]" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 max-w-3xl mx-auto text-center px-6"
        >
          <h2 className="font-sans text-5xl md:text-7xl mb-8 text-white">
            Ready to Elevate?
          </h2>
          <p className="text-neutral-400 mb-12 font-light">
            Access the impossible. Your request is our command.
          </p>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/request")}
            className="px-10 py-5 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-shadow duration-300"
          >
            Request A Service
          </motion.button>
        </motion.div>
      </section>

      <footer className="pt-20 pb-10 border-t border-white/10 bg-[#020202]">
        <div className="max-w-350 mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-sans font-bold text-white mb-6">
              MYGO.
            </h3>
            <p className="text-neutral-400 text-sm max-w-xs mb-8">
              Nigeria-rooted, Global-standard. Premium concierge services for
              those who value time above all else.
            </p>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-white mb-6">
              Contact
            </h5>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li>info@mygo.com</li>
              <li>Lagos, Nigeria</li>
              <li className="text-[#D4AF37] cursor-pointer hover:underline">
                Chat on WhatsApp
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-350 mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-neutral-400 uppercase tracking-widest">
          <p>© 2026 MYGO Services.</p>
        </div>
      </footer>
    </main>
  );
}
