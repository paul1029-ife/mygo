import { motion, Transition, Variants } from "motion/react";
import Link from "next/link";
import Image from "next/image";

const navVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const transition: Transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

export const Navbar = () => (
  <motion.nav
    initial="hidden"
    animate="visible"
    variants={navVariants}
    className="fixed top-0 w-full z-50 mix-blend-difference text-white backdrop-blur-xs"
  >
    <div className="max-w-7xl mx-auto px-3 h-20 flex items-center justify-between">
      <Link href="/">
        <Image src="/logo-black.png" width={90} height={20} alt="logo-image" />
      </Link>

      <div className="hidden md:flex items-center gap-12 text-[11px] uppercase tracking-[0.25em] font-semibold">
        {["Concierge", "Membership", "Process", "Contact"].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.5, ...transition }}
          >
            <Link
              href="#"
              className="relative font-mono block overflow-hidden group h-fit text-sm uppercase tracking-tight text-gray-400"
            >
              <span
                data-text={item}
                className="
                  block 
                  relative
                  transition-transform 
                  duration-500 
                  ease-[cubic-bezier(0.76,0,0.24,1)] 
                  group-hover:-translate-y-full
                  
                  after:content-[attr(data-text)]
                  after:block
                  after:absolute
                  after:left-0
                  after:top-full
                  after:text-white
                "
              >
                {item}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        className="hidden md:block cursor-pointer overflow-hidden border border-white/20 px-8 py-3 text-[10px] uppercase tracking-widest relative before:w-full before:bg-white before:text-black before:absolute "
      >
        Member Login
      </motion.button>
    </div>
  </motion.nav>
);
