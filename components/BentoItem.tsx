import { motion, Transition } from "motion/react";
import Image from "next/image";

const transition: Transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition },
};

export const BentoItem = ({
  title,
  desc,
  imgSrc,
  colSpan = "col-span-1",
  rowSpan = "row-span-1",
}: {
  title: string;
  desc: string;
  imgSrc: string;
  colSpan?: string;
  rowSpan?: string;
}) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -2 }}
    className={`group relative ${colSpan} ${rowSpan} overflow-hidden bg-neutral-900 border border-white/5 min-h-80 cursor-pointer`}
  >
    <motion.div
      className="absolute inset-0 w-full h-full"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Image
        src={imgSrc}
        alt={title}
        fill
        className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 ease-out grayscale group-hover:grayscale-0"
      />
    </motion.div>

    <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent pointer-events-none" />

    <div className="absolute bottom-0 left-0 p-8 w-full z-10">
      <motion.div
        className="w-8 h-px bg-[#D4AF37] mb-6 origin-left"
        transition={{ duration: 0.5 }}
      />
      <h3 className={`font-sans text-3xl text-white mb-2`}>{title}</h3>
      <p className="text-neutral-300 text-xs leading-relaxed max-w-[90%] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
        {desc}
      </p>
    </div>
  </motion.div>
);
