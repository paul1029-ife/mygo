"use client";

import { useState, useRef, ReactElement, MouseEventHandler } from "react";
import {
  Shield01Icon,
  ArrowRight01Icon,
  Clock01Icon,
  StarIcon,
} from "hugeicons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  Variants,
} from "motion/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";
import { FillButton } from "../about/page";

const services = [
  {
    id: "01",
    title: "Travel & Aviation",
    description:
      "From private jet charters to complex multi-leg itineraries. We handle visa processing, tarmac transfers, and luxury accommodation worldwide.",
    image: "/points/point-1.png",
  },
  {
    id: "02",
    title: "Lifestyle Management",
    description:
      "Exclusive access to sold-out events, Michelin-star reservations, and bespoke gift sourcing. Your leisure is our business.",
    image: "/points/point-2.png",
  },
  {
    id: "03",
    title: "Corporate Concierge",
    description:
      "Executive relocation, office setup, and corporate retreat planning. We streamline operations for C-Suite executives.",
    image: "/points/point-3.png",
  },
  {
    id: "04",
    title: "Security & Logistics",
    description:
      "Close protection services, secure cargo transport, and discreet diplomatic routing for sensitive movements.",
    image: "/points/point-4.png",
  },
];

const textReveal: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesPage() {
  const router = useRouter();
  const [hoveredService, setHoveredService] = useState<number>(0);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="font-mono bg-[#020202] min-h-screen text-white selection:bg-[#D4AF37] selection:text-black relative">
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: "url('/noise.jpg')" }}
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
                Our Services
              </motion.span>
            </div>

            <h1 className="font-sans text-6xl md:text-8xl leading-[0.9] text-white tracking-tight">
              <div className="overflow-hidden">
                <motion.div
                  variants={textReveal}
                  initial="hidden"
                  animate="visible"
                >
                  The Art of
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
                  Completion
                </motion.div>
              </div>
            </h1>
          </motion.div>
        </div>
      </section>

      <section
        ref={containerRef}
        className="py-32 max-w-350 mx-auto px-6 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="flex flex-col relative z-10">
            {services.map((service, index) => (
              <ServiceItem
                key={service.id}
                service={service}
                index={index}
                isActive={hoveredService === index}
                onHover={() => setHoveredService(index)}
              />
            ))}
          </div>

          <div className="hidden lg:block relative h-full">
            <div className="sticky top-14 h-150 w-full">
              <motion.div
                style={{ y: yImage }}
                className="w-full h-full relative overflow-hidden border border-white/10 bg-[#050505]"
              >
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={hoveredService}
                    initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, zIndex: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0 z-10"
                  >
                    <Image
                      src={services[hoveredService].image}
                      alt="Service"
                      fill
                      className="object-cover opacity-60"
                    />
                    <div className="absolute bottom-0 left-0 p-8 z-20">
                      <h3 className="font-sans text-4xl text-white">
                        {services[hoveredService].title}
                      </h3>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-[#111]" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-32 bg-neutral-900/10 border-y border-white/5">
        <div className="max-w-350 mx-auto px-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          <GridValue
            icon={<Clock01Icon size={32} />}
            title="Efficiency"
            desc="Time is your most valuable asset."
          />
          <GridValue
            icon={<Shield01Icon size={32} />}
            title="Discretion"
            desc="Privacy is paramount. Invisible ops."
          />
          <GridValue
            icon={<StarIcon size={32} />}
            title="Reliability"
            desc="Global reach, local expertise."
          />
        </div>
      </section>

      <section className="py-40 flex flex-col items-center justify-center text-center px-6">
        <h2 className="font-sans text-5xl md:text-7xl mb-12">
          Ready to begin?
        </h2>
        <FillButton
          text="Request A Service"
          onClick={() => router.push("/request")}
        />
      </section>

      <Footer />
    </main>
  );
}

interface ServiceItemProps {
  service: {
    title: string;
    description: string;
  };
  index: number;
  isActive: boolean;
  onHover: MouseEventHandler<HTMLDivElement>;
}
function ServiceItem({ service, index, isActive, onHover }: ServiceItemProps) {
  return (
    <motion.div
      onMouseEnter={onHover}
      className={`group py-16 cursor-pointer relative border-t border-white/10 transition-all duration-500 ${
        isActive ? "opacity-100" : "opacity-30 hover:opacity-100"
      }`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-baseline gap-6">
          <span className="font-mono text-xl text-[#D4AF37]">0{index + 1}</span>
          <h2 className="font-sans text-4xl md:text-5xl text-white group-hover:translate-x-4 transition-transform duration-500 ease-out">
            {service.title}
          </h2>
        </div>
        <ArrowRight01Icon
          className={`text-[#D4AF37] transition-transform duration-500 ${
            isActive ? "-rotate-45" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-neutral-400 max-w-md text-sm leading-relaxed pl-12">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

interface GridValue {
  icon: ReactElement;
  title: string;
  desc: string;
}
function GridValue({ icon, title, desc }: GridValue) {
  return (
    <div className="p-12 text-center flex flex-col items-center group hover:bg-white/5 transition-colors duration-500">
      <div className="mb-6 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h4 className="font-sans text-xl text-white mb-2">{title}</h4>
      <p className="text-sm text-neutral-500">{desc}</p>
    </div>
  );
}
