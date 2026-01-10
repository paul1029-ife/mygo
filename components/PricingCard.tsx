import { CheckmarkCircle01Icon } from "hugeicons-react";
import { motion, Transition } from "motion/react";

const transition: Transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition },
};

export const PricingCard = ({
  tier,
  price,
  features,
  isPremium = false,
  onClick,
}: {
  tier: string;
  price: string;
  features: string[];
  isPremium?: boolean;
  onClick?: () => void;
}) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ y: -10 }}
    className={`relative p-10 border flex flex-col justify-between h-full transition-colors duration-500 ${
      isPremium
        ? "border-[#D4AF37]/40 bg-[#D4AF37]/5"
        : "border-white/10 hover:border-white/20 bg-neutral-900/20"
    }`}
  >
    {isPremium && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-[9px] font-bold uppercase tracking-widest px-3 py-1 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
        Most Popular
      </div>
    )}
    <div>
      <h4 className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-4">
        {tier}
      </h4>
      <div className={`font-sans text-4xl mb-8`}>
        {price} <span className="text-sm font-sans text-neutral-500">/ yr</span>
      </div>
      <ul className="space-y-4">
        {features.map((feat, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-sm text-neutral-300"
          >
            <CheckmarkCircle01Icon
              size={16}
              className={isPremium ? "text-[#D4AF37]" : "text-neutral-400"}
            />
            {feat}
          </li>
        ))}
      </ul>
    </div>
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`w-full mt-10 py-4 text-xs uppercase tracking-widest transition-all ${
        isPremium
          ? "bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.2)]"
          : "border border-white/20 hover:bg-white hover:text-black"
      }`}
    >
      Request Service
    </motion.button>
  </motion.div>
);
