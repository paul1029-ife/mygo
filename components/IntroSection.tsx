import { useScroll, useTransform, motion, MotionValue } from "motion/react";
import { useRef } from "react";

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block mr-1.5 mt-1">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

const ScrollRevealParagraph = ({ children }: { children: string }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.91", "end 0.6"],
  });

  const words = children.split(" ");
  return (
    <p
      ref={container}
      className="flex flex-wrap text-2xl md:text-[32px] leading-[1.4] font-light text-white"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const MaskedTitle = () => {
  return (
    <div className="overflow-hidden">
      <motion.h2
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`font-serif text-5xl md:text-7xl leading-[1.1] mb-8 text-white`}
      >
        Concierge. <br />
        <span className="text-neutral-500 italic hover:text-neutral-100 transition-colors ease-in-out duration-300">
          Simplified.
        </span>
      </motion.h2>
    </div>
  );
};

export default function IntroSection() {
  return (
    <section className="py-18 md:py-46 bg-[#020202] relative">
      <div className="max-w-350 mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          <div className="lg:sticky lg:top-32 h-fit">
            <MaskedTitle />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className="h-px bg-[#D4AF37] mt-8"
            />
          </div>

          <div className="space-y-12">
            <ScrollRevealParagraph>
              MYGO is a premium concierge and lifestyle services company built
              around efficiency, discretion, and reliability. At MYGO, we handle
              the details so you can focus on what truly matters. Every request
              is handled with care, urgency, and attention to detail. From
              bespoke travel to daily errands, we are the architects of your
              free time.
            </ScrollRevealParagraph>
          </div>
        </div>
      </div>
    </section>
  );
}
