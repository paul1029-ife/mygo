"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CheckmarkCircle02Icon,
  Loading03Icon,
  Call02Icon,
  WhatsappIcon,
  AlertCircleIcon,
} from "hugeicons-react";
import Footer from "@/components/Footer";

const CONTACT_EMAIL = "elite@mygolifestyle.com";
const PHONE_LINK = "tel:+2348173182409";

const WA_NUMBER = "2348173182409";
const WA_MESSAGE =
  "Hey, I want to make a request for ______. What are the details?";
export const WHATSAPP_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  WA_MESSAGE
)}`;

type TabType = "essential" | "premium" | "corporate";

const TABS: { id: TabType; label: string }[] = [
  { id: "essential", label: "Essential" },
  { id: "premium", label: "Premium" },
  { id: "corporate", label: "Corporate" },
];

const PLACEHOLDERS = {
  name: ["John Doe", "Jane Smith", "A. Einstein"],
  email: ["john@example.com", "contact@firm.com"],
  request: {
    essential: [
      "Dinner reservation at Nobu...",
      "Tickets to the opera...",
      "Airport transfer for two...",
    ],
    premium: [
      "Private jet to Monaco...",
      "Villa rental in Tuscany...",
      "Access to F1 Paddock Club...",
    ],
    corporate: [
      "Annual board meeting logistics...",
      "Executive retreat planning...",
      "Secure transport for VIP delegation...",
    ],
  },
};

const AnimatedInput = ({
  label,
  value,
  onChange,
  placeholders,
  type = "text",
  isTextArea = false,
}: {
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholders: string[];
  type?: string;
  isTextArea?: boolean;
}) => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayedPlaceholder, setDisplayedPlaceholder] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [typingPhase, setTypingPhase] = useState<
    "typing" | "deleting" | "pause"
  >("typing");

  useEffect(() => {
    if (value || isFocused) return;

    let timeout: NodeJS.Timeout;
    const currentFullText = placeholders[placeholderIndex];

    if (typingPhase === "typing") {
      if (displayedPlaceholder.length < currentFullText.length) {
        timeout = setTimeout(() => {
          setDisplayedPlaceholder(
            currentFullText.slice(0, displayedPlaceholder.length + 1)
          );
        }, 50 + Math.random() * 30);
      } else {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTypingPhase("pause");
      }
    } else if (typingPhase === "pause") {
      timeout = setTimeout(() => setTypingPhase("deleting"), 2000);
    } else if (typingPhase === "deleting") {
      if (displayedPlaceholder.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedPlaceholder(displayedPlaceholder.slice(0, -1));
        }, 30);
      } else {
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        setTypingPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayedPlaceholder,
    typingPhase,
    placeholderIndex,
    placeholders,
    value,
    isFocused,
  ]);

  const Component = isTextArea ? "textarea" : "input";

  return (
    <div className="relative group mb-8 w-full">
      <label className="text-[10px] uppercase tracking-widest text-[#D4AF37] mb-2 block font-medium">
        {label}
      </label>
      <div className="relative">
        <Component
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows={isTextArea ? 4 : undefined}
          className={`w-full bg-transparent border-b border-white/20 py-4 text-lg text-white placeholder-transparent focus:outline-none transition-colors duration-300 resize-none z-10 relative ${
            isTextArea ? "h-32" : ""
          }`}
        />
        {!value && (
          <div
            className={`absolute top-4 left-0 text-neutral-600 pointer-events-none font-light ${
              isFocused ? "opacity-0" : "opacity-100"
            } transition-opacity duration-300`}
          >
            {displayedPlaceholder}
            <span className="animate-pulse text-[#D4AF37]">|</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/20"></div>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: isFocused ? "100%" : "0%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-0 right-0 h-px bg-[#D4AF37] z-20"
        />
      </div>
    </div>
  );
};

// Generic Toast Component
const Toast = ({
  onClose,
  type,
  message,
}: {
  onClose: () => void;
  type: "success" | "error";
  message: string;
}) => {
  const isSuccess = type === "success";
  const iconColor = isSuccess ? "text-[#D4AF37]" : "text-red-500";
  const borderColor = isSuccess ? "border-[#D4AF37]/30" : "border-red-500/30";
  const bgBadge = isSuccess ? "bg-[#D4AF37]/10" : "bg-red-500/10";
  const progressColor = isSuccess ? "bg-[#D4AF37]" : "bg-red-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed bottom-10 right-6 md:right-10 z-60 bg-[#0A0A0A]/90 backdrop-blur-md border ${borderColor} p-6 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.5)] max-w-sm w-full`}
    >
      <div className="flex items-start gap-4">
        <div className={`mt-1 p-2 ${bgBadge} rounded-full ${iconColor}`}>
          {isSuccess ? (
            <CheckmarkCircle02Icon size={20} />
          ) : (
            <AlertCircleIcon size={20} />
          )}
        </div>
        <div>
          <h4 className="text-white font-serif text-lg mb-1">
            {isSuccess ? "Request Submitted" : "Submission Failed"}
          </h4>
          <p className="text-neutral-400 text-sm font-light leading-relaxed">
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-neutral-500 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 5 }}
        className={`absolute bottom-0 left-0 h-0.5 ${progressColor}`}
      />
    </motion.div>
  );
};

export default function RequestPage() {
  const [activeTab, setActiveTab] = useState<TabType>("essential");
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    type: "success" | "error";
    message: string;
  }>({ show: false, type: "success", message: "" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          type: activeTab,
        }),
      });

      if (response.ok) {
        setToast({
          show: true,
          type: "success",
          message:
            "We have received your details. A concierge will reach out shortly.",
        });
        setFormData({ name: "", email: "", details: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setToast({
        show: true,
        type: "error",
        message: "Could not submit form. Please use WhatsApp or Call us.",
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 5000);
    }
  };

  return (
    <main className="font-mono bg-[#020202] min-h-screen text-white selection:bg-[#D4AF37] selection:text-black overflow-x-hidden relative">
      <div
        className="fixed inset-0 w-full h-full pointer-events-none z-50 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: "url('/noise.jpg')" }}
      ></div>

      <section className="relative pt-32 pb-24 px-6 min-h-screen">
        <div className="absolute top-0 right-0 w-150 h-150 bg-[#D4AF37] rounded-full opacity-[0.03] blur-[150px] pointer-events-none" />

        <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-px w-8 bg-[#D4AF37]" />
                  <span className="text-[#D4AF37] text-[11px] uppercase tracking-[0.3em] font-medium">
                    Concierge Desk
                  </span>
                </div>

                <h1 className="font-sans text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-[0.9]">
                  Make a <br />
                  <span className="italic text-neutral-500 font-light hover:text-neutral-100 transition-colors ease-in-out duration-300">
                    Request.
                  </span>
                </h1>

                <p className="text-neutral-400 font-light max-w-sm text-lg leading-relaxed mb-12">
                  Whatever you need, wherever you are. Tell us, and consider it
                  done. We handle the logistics so you can handle life.
                </p>

                <div className="border-t border-white/10 pt-8 space-y-6">
                  <p className="text-xs text-neutral-500 uppercase tracking-widest mb-4">
                    Alternative Channels
                  </p>

                  <a
                    href={PHONE_LINK}
                    className="flex items-center gap-4 group cursor-pointer w-max"
                  >
                    <div className="p-3 border border-white/10 rounded-full group-hover:border-[#D4AF37] transition-colors duration-300">
                      <Call02Icon
                        size={18}
                        className="text-neutral-400 group-hover:text-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <span className="block text-sm text-white font-sans tracking-wide">
                        +234 818 212 4686
                      </span>
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider">
                        Urgent Requests
                      </span>
                    </div>
                  </a>

                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group cursor-pointer w-max"
                  >
                    <div className="p-3 border border-white/10 rounded-full group-hover:border-[#D4AF37] transition-colors duration-300">
                      <WhatsappIcon
                        size={18}
                        className="text-neutral-400 group-hover:text-[#D4AF37]"
                      />
                    </div>
                    <div>
                      <span className="block text-sm text-white">
                        WhatsApp Line
                      </span>
                      <span className="text-[10px] text-neutral-500 uppercase tracking-wider">
                        Direct Chat
                      </span>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-7 pt-8 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex mb-12 overflow-x-auto pb-2 scrollbar-hide">
                <div className="flex bg-white/5 p-1 border border-white/5 backdrop-blur-sm">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative px-6 py-3 text-xs uppercase tracking-widest transition-colors duration-300 whitespace-nowrap ${
                        activeTab === tab.id
                          ? "text-black font-bold"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-[#D4AF37] "
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <motion.form layout onSubmit={handleSubmit} className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 md:px-2">
                      <AnimatedInput
                        label="Full Name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholders={PLACEHOLDERS.name}
                      />
                      <AnimatedInput
                        label="Email Address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholders={PLACEHOLDERS.email}
                        type="email"
                      />
                    </div>

                    <AnimatedInput
                      label="Request Details"
                      value={formData.details}
                      onChange={(e) =>
                        setFormData({ ...formData, details: e.target.value })
                      }
                      placeholders={PLACEHOLDERS.request[activeTab]}
                      isTextArea={true}
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="mt-12 flex justify-start">
                  <motion.button
                    whileHover={{ filter: "brightness(1.1)" }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading}
                    className="group relative px-10 py-5 bg-linear-to-r from-[#B88746] via-[#FDF5A6] to-[#B88746] text-black font-bold uppercase tracking-widest text-xs flex items-center gap-3 disabled:opacity-70 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
                  >
                    {isLoading ? (
                      <Loading03Icon className="animate-spin" size={16} />
                    ) : (
                      <span>Submit Request</span>
                    )}
                  </motion.button>
                </div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {toast.show && (
          <Toast
            type={toast.type}
            message={toast.message}
            onClose={() => setToast((prev) => ({ ...prev, show: false }))}
          />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
