import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "motion/react";
import { useRef } from "react";
interface StepItem {
  id: string;
  title: string;
  desc: string;
}
export const ProcessSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001,
  });

  const steps: StepItem[] = [
    {
      id: "01",
      title: "Request",
      desc: "Submit your requirements via our encrypted portal, email, or dedicated WhatsApp line.",
    },
    {
      id: "02",
      title: "Coordinate",
      desc: "Our team immediately activates, leveraging global partners to secure logistics.",
    },
    {
      id: "03",
      title: "Deliver",
      desc: "Seamless execution with real-time updates. You enjoy the result.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="py-32 bg-[#050505] border-y border-white/5 relative overflow-hidden"
    >
      <div className="max-w-350 mx-auto px-6 relative z-10">
        <div className="mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#D4AF37] text-xs font-mono uppercase tracking-[0.2em] mb-4 block"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-4xl md:text-5xl text-white"
          >
            Seamless Execution
          </motion.h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-15 left-0 w-full h-px bg-white/10" />

          <motion.div
            style={{ scaleX: progress, transformOrigin: "left" }}
            className="hidden md:block absolute top-15 left-0 w-full h-px bg-[#D4AF37] z-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-20">
            {steps.map((step, index) => {
              const rangeStart = index * 0.35;

              return (
                <StepItem
                  key={step.id}
                  step={step}
                  globalProgress={progress}
                  rangeStart={rangeStart}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const StepItem = ({
  step,
  globalProgress,
  rangeStart,
}: {
  step: StepItem;
  globalProgress: MotionValue;
  rangeStart: number;
}) => {
  const color = useTransform(
    globalProgress,
    [rangeStart, rangeStart + 0.1],
    ["#525252", "#D4AF37"]
  );
  const textColor = useTransform(
    globalProgress,
    [rangeStart, rangeStart + 0.1],
    ["#525252", "#FFFFFF"]
  );
  const titleColor = useTransform(
    globalProgress,
    [rangeStart, rangeStart + 0.1],
    ["#a3a3a3", "#D4AF37"]
  );

  const dotScale = useTransform(
    globalProgress,
    [rangeStart, rangeStart + 0.1],
    [0.5, 1.2]
  );
  const dotOpacity = useTransform(
    globalProgress,
    [rangeStart, rangeStart + 0.05],
    [0, 1]
  );

  return (
    <div className="relative pt-20 md:pt-24 group">
      <motion.div
        style={{
          backgroundColor: color,
          scale: dotScale,
          opacity: dotOpacity,
        }}
        className="hidden md:block absolute top-13.5 left-0 w-3 h-3 rounded-full shadow-[0_0_10px_currentColor] z-30"
      />

      <motion.div className="absolute top-0 left-0 -z-20 select-none pointer-events-none">
        <span className="text-[8rem] md:text-[10rem] font-bold leading-none text-[#676767] opacity-50">
          {step.id}
        </span>
      </motion.div>

      <div className="relative pl-2">
        <motion.h3
          style={{ color: titleColor }}
          className="text-2xl font-sans mb-4 transition-colors duration-200"
        >
          {step.title}
        </motion.h3>
        <motion.p
          style={{ color: textColor }}
          className="text-sm leading-relaxed max-w-70 transition-colors duration-200"
        >
          {step.desc}
        </motion.p>
      </div>
    </div>
  );
};

export default ProcessSection;
