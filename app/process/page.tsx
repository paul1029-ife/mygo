"use client";

import { ReactElement, useRef, useState } from "react";
import {
  Comment01Icon,
  ChefIcon,
  CheckmarkBadge03Icon,
  Rocket01Icon,
  Add01Icon,
  MinusSignIcon,
} from "hugeicons-react";
import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
  useTransform,
  Variants,
} from "motion/react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import { FillButton } from "../about/page";

interface Step {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: ReactElement;
}

const steps: Step[] = [
  {
    id: "01",
    title: "The Brief",
    subtitle: "Initiation",
    description:
      "Submit your request via our secure member portal or dedicated WhatsApp line. No forms to fill, just a conversation.",
    icon: <Comment01Icon size={24} />,
  },
  {
    id: "02",
    title: "The Curation",
    subtitle: "Orchestration",
    description:
      "Our team leverages global networks to source options, negotiate terms, and curate a tailored itinerary.",
    icon: <ChefIcon size={24} />,
  },
  {
    id: "03",
    title: "The Greenlight",
    subtitle: "Approval",
    description:
      "Review the options. Once you approve, we handle all logistics, payments, and compliance immediately.",
    icon: <CheckmarkBadge03Icon size={24} />,
  },
  {
    id: "04",
    title: "The Execution",
    subtitle: "Delivery",
    description:
      "We monitor the execution in real-time. We remain the invisible hand ensuring everything goes according to plan.",
    icon: <Rocket01Icon size={24} />,
  },
];

const faqs = [
  {
    question: "Is membership required?",
    answer:
      "While membership offers priority access and zero booking fees, we do accept ad-hoc requests for non-members.",
  },
  {
    question: "How are payments handled?",
    answer:
      "We operate a pre-funded wallet system for members or direct invoicing. Details remain strictly confidential.",
  },
  {
    question: "What is the response time?",
    answer:
      "For Premium members, response is immediate (under 15 minutes). For Essential members, within 1 hour.",
  },
];

const textReveal: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HowItWorksPage() {
  const router = useRouter();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <main className="font-mono bg-[#020202] min-h-screen text-white selection:bg-[#D4AF37] selection:text-black overflow-x-hidden relative">
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: "url('/noise.jpg')" }}
      />

      <section className="relative pt-40 pb-20 md:pt-60 md:pb-32 px-6">
        <div className="max-w-350 mx-auto">
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
                Methodology
              </motion.span>
            </div>

            <h1 className="font-sans text-6xl md:text-8xl leading-[0.9] text-white tracking-tight">
              <div className="overflow-hidden">
                <motion.div
                  variants={textReveal}
                  initial="hidden"
                  animate="visible"
                >
                  Complexity,
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
                  Simplified
                </motion.div>
              </div>
            </h1>
          </motion.div>
        </div>
      </section>

      <section
        ref={containerRef}
        className="py-24 max-w-350 mx-auto px-6 relative"
      >
        <div className="flex gap-8 md:gap-24">
          {/* Progress Line */}
          <div className="hidden md:flex flex-col items-center relative w-1">
            <div className="absolute top-0 bottom-0 w-px bg-white/10" />
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute top-0 bottom-0 w-0.5 bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-32">
            {steps.map((step, index) => (
              <StepItem key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* --- FAQ --- */}
      <section className="py-32 bg-neutral-900/10 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-sans text-4xl text-white mb-4">
              Common Questions
            </h2>
            <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em]">
              Details matter
            </p>
          </div>
          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
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

function StepItem({ step, index }: { step: Step; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      transition={{ duration: 0.8 }}
      className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start"
    >
      <div className="md:hidden flex items-center gap-4">
        <span className="text-[#D4AF37] font-mono text-sm">0{index + 1}</span>
        <div className="h-px bg-white/20 flex-1" />
      </div>

      <div className="md:col-span-4 md:text-right md:pt-4">
        <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
          {step.subtitle}
        </span>
        <h3 className="text-4xl md:text-5xl font-sans text-white">
          {step.title}
        </h3>
      </div>

      <div className="hidden md:flex md:col-span-2 justify-center pt-5">
        <div className="w-14 h-14 rounded-full bg-[#020202] border border-white/20 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center justify-center text-neutral-500 group-hover:text-[#D4AF37] transition-all duration-500 z-10">
          {step.icon}
        </div>
      </div>

      <div className="md:col-span-6 md:pt-6">
        <p className="text-base text-neutral-400 leading-relaxed max-w-md group-hover:text-white transition-colors duration-500">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

function AccordionItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-8 text-left group"
      >
        <span
          className={`text-lg transition-colors duration-300 ${
            isOpen
              ? "text-[#D4AF37]"
              : "text-neutral-300 group-hover:text-white"
          }`}
        >
          {question}
        </span>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#D4AF37]" : "text-neutral-500"
          }`}
        >
          <Add01Icon size={20} className={isOpen ? "hidden" : "block"} />
          <MinusSignIcon size={20} className={isOpen ? "block" : "hidden"} />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="pb-8">
              <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
