"use client";

import { ReactElement, useRef, useState } from "react";
//import Image from "next/image";
// import Link from "next/link";
import {
  Comment01Icon,
  Search01Icon,
  CreditCardAcceptIcon,
  Rocket01Icon,
  Add01Icon,
  MinusSignIcon,
} from "hugeicons-react";
import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
  Transition,
  Variants,
} from "motion/react";
import { useRouter } from "next/navigation";

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
      "Submit your request via our secure member portal or dedicated WhatsApp line. Whether it's a last-minute jet charter or a rare timepiece acquisition, simply tell us what you need. No forms to fill, just a conversation.",
    icon: <Comment01Icon size={24} />,
  },
  {
    id: "02",
    title: "The Curation",
    subtitle: "Orchestration",
    description:
      "Our team immediately activates. We leverage our global network to source options, negotiate terms, and curate a tailored itinerary or solution. You receive a single, concise proposal with transparent pricing.",
    icon: <Search01Icon size={24} />,
  },
  {
    id: "03",
    title: "The Greenlight",
    subtitle: "Approval",
    description:
      "Review the options. Once you approve, we handle all logistics, payments, and compliance. A single tap confirms the operation. We utilize secure, encrypted payment channels for instant clearing.",
    icon: <CreditCardAcceptIcon size={24} />,
  },
  {
    id: "04",
    title: "The Execution",
    subtitle: "Delivery",
    description:
      "We monitor the execution in real-time. Whether it's flight tracking or on-ground coordination, we remain the invisible hand ensuring everything goes according to plan. You simply arrive.",
    icon: <Rocket01Icon size={24} />,
  },
];

const faqs = [
  {
    question: "Is membership required?",
    answer:
      "While membership offers priority access and zero booking fees, we do accept ad-hoc requests for non-members subject to a service surcharge and availability checks.",
  },
  {
    question: "How are payments handled?",
    answer:
      "We operate a pre-funded wallet system for members or direct invoicing for specific tasks. All transaction details remain strictly confidential and off standard bank descriptors where legally permissible.",
  },
  {
    question: "What is the response time?",
    answer:
      "For Premium members, response is immediate (under 15 minutes). For Essential members, we guarantee a response within 1 hour during operational hours.",
  },
];

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

  return (
    <main className="font-mono bg-[#020202] min-h-screen text-white selection:bg-[#D4AF37] selection:text-black overflow-x-hidden relative">
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: "url('/noise.jpg')" }}
      ></div>

      <section className="relative pt-40 pb-20 md:pt-60 md:pb-32 px-6">
        <div className="max-w-350 mx-auto text-center md:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center md:justify-start gap-4 mb-8"
            >
              <div className="h-px w-12 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-medium">
                Methodology
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-sans text-5xl md:text-8xl lg:text-[7rem] leading-[0.9] text-white mb-12"
            >
              Complexity, <br />
              <span className="text-neutral-500 hover:text-neutral-100 transition-colors ease-in-out duration-300 italic font-light">
                Simplified.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-neutral-400 max-w-lg text-lg leading-relaxed"
            >
              From the moment you reach out to the moment we deliver, our
              process is designed to be as invisible as it is effective.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section
        ref={containerRef}
        className="py-24 max-w-350 mx-auto px-6 relative"
      >
        <div className="flex gap-8 md:gap-16">
          <div className="hidden md:flex flex-col items-center relative w-0.5">
            <div className="absolute top-0 bottom-0 w-px bg-white/10" />
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="absolute top-0 bottom-0 w-0.5 bg-[#D4AF37]"
            />
          </div>

          <div className="flex-1 flex flex-col gap-32">
            {steps.map((step, index) => (
              <StepItem key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-neutral-900/10 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-sans text-4xl text-white mb-4">
              Common Questions
            </h2>
            <p className="text-neutral-500 text-sm uppercase tracking-widest">
              Details matter
            </p>
          </div>

          <div className="flex flex-col gap-4">
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

      <section className="py-32 relative overflow-hidden flex flex-col items-center text-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#1a1a1a] via-[#020202] to-[#020202] opacity-60" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={transition}
          className="relative z-10"
        >
          <h2 className="font-sans text-5xl md:text-7xl mb-8">
            Ready to begin?
          </h2>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/request")}
            className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] transition-colors duration-300"
          >
            Request A Service
          </motion.button>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="pt-20 pb-10 border-t border-white/10 bg-[#020202]">
        <div className="max-w-350 mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-sans font-bold text-white mb-6">
              MYGO.
            </h3>
            <p className="text-neutral-400 text-sm max-w-xs">
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
            </ul>
          </div>
        </div>
        <div className="max-w-350 mx-auto px-6 pt-8 border-t border-white/5 flex justify-between text-[10px] text-neutral-400 uppercase tracking-widest">
          <p>© 2026 MYGO Services.</p>
        </div>
      </footer>
    </main>
  );
}

function StepItem({ step, index }: { step: Step; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
      transition={{ duration: 0.5 }}
      className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start"
    >
      <div className="md:hidden flex items-center gap-4">
        <span className="text-[#D4AF37] font-mono text-sm">0{index + 1}</span>
        <div className="h-px bg-white/20 flex-1" />
      </div>

      <div className="md:col-span-5 md:text-right md:pt-4">
        <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-2 block">
          {step.subtitle}
        </span>
        <h3 className="text-3xl md:text-5xl font-sans text-white transition-colors duration-500">
          {step.title}
        </h3>
      </div>

      <div className="hidden md:flex md:col-span-2 justify-center pt-5">
        <div className="w-12 h-12 rounded-full bg-[#111] border border-[#333] group-hover:border-[#D4AF37]  flex items-center justify-center text-neutral-500 group-hover:text-[#D4AF37] transition-all duration-500 z-10">
          {step.icon}
        </div>
      </div>

      <div className="md:col-span-5 md:pt-6">
        <p className="text-sm md:text-base leading-relaxedtext-neutral-300 max-w-md">
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
    <div className="border border-white/5 bg-white/2 overflow-hidden transition-colors hover:border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span
          className={`text-sm md:text-base uppercase tracking-wider ${
            isOpen ? "text-[#D4AF37]" : "text-neutral-300"
          }`}
        >
          {question}
        </span>
        <span className="text-[#D4AF37]">
          {isOpen ? <MinusSignIcon size={20} /> : <Add01Icon size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0">
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
