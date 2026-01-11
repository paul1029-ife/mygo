"use client";

import { useState, useEffect } from "react";
import { motion, Transition, Variants, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const transition: Transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

const navVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const menuVars: Variants = {
  initial: { scaleY: 0 },
  animate: {
    scaleY: 1,
    transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
  },
  exit: {
    scaleY: 0,
    transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVars: Variants = {
  initial: {
    transition: { staggerChildren: 0.09, staggerDirection: -1 },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const mobileLinkVars: Variants = {
  initial: {
    y: "30vh",
    transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] },
  },
  open: {
    y: 0,
    transition: { ease: [0, 0.55, 0.45, 1], duration: 0.7 },
  },
};

const navLinks = [
  { title: "About", href: "/about" },
  { title: "Concierge", href: "/concierge" },
  { title: "Process", href: "/process" },
  { title: "Contact", href: "/request" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className="fixed top-0 w-full z-50 text-white mix-blend-difference backdrop-blur-xs"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="relative z-50">
            <Image
              src="/logo-black.png"
              width={90}
              height={20}
              alt="logo-image"
              className="invert dark:invert-0"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12 text-[11px] uppercase tracking-[0.25em] font-semibold">
            {navLinks.map((item, i) => {
              const isActive = pathname === item.href;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.5, ...transition }}
                >
                  <Link
                    href={item.href}
                    className={`
                      relative font-mono block overflow-hidden group h-fit text-sm uppercase tracking-tight
                      ${isActive ? "text-white" : "text-gray-400"} 
                    `}
                  >
                    <span
                      data-text={item.title}
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
                      {item.title}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="hidden md:block cursor-pointer border border-white/20 px-8 py-3 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-500"
            >
              Member Login
            </motion.button>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1.5 md:hidden relative z-50 p-2"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-8 h-0.5 bg-white block"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-8 h-0.5 bg-white block"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-8 h-0.5 bg-white block"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 w-full h-screen bg-[#050505] origin-top z-40 flex flex-col justify-center px-6"
          >
            <div className="flex flex-col h-full justify-between py-32">
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-6"
              >
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <div key={index} className="overflow-hidden">
                      <motion.div variants={mobileLinkVars}>
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`
                            font-sans text-5xl font-light transition-colors duration-300 block
                            ${
                              isActive
                                ? "text-white"
                                : "text-neutral-500 hover:text-[#D4AF37]"
                            }
                          `}
                        >
                          {link.title}
                        </Link>
                      </motion.div>
                    </div>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="flex flex-col gap-4"
              >
                <button className="w-full py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest text-sm">
                  Member Login
                </button>
                <div className="flex justify-between text-neutral-500 text-xs uppercase tracking-widest mt-4">
                  <span>Lagos, Nigeria</span>
                  <span>© 2026 MYGO</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
