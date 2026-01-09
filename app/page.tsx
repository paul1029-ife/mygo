import Navbar from "@/components/Navbar";
import {
  ArrowDownRight01Icon,
  Airplane01Icon,
  Calendar03Icon,
  ArrowRight01Icon,
  Tick01Icon,
  StarIcon,
} from "hugeicons-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-black selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-1 grid grid-cols-1 lg:grid-cols-12 border-t border-gray-200 overflow-hidden">
        <div className="lg:col-span-7 flex flex-col justify-between border-r border-gray-200 relative p-6 lg:p-12">
          {/* Top Label */}
          <div className="flex justify-between items-start mb-20">
            <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
              ( 001 — MYGO PREMIER )
            </span>
            <div className="hidden md:flex md:items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                Concierge Active
              </span>
            </div>
          </div>

          <h1 className="group text-[14vw] lg:text-[9vw] leading-[0.8] font-semibold tracking-tighter uppercase -ml-1 lg:-ml-2">
            <div className="transition-colors duration-300 group-hover:text-gray-300">
              Concierge.
            </div>
            <div className="text-gray-300 transition-colors duration-300 hover:text-gray-900">
              Simplified.
            </div>
          </h1>

          <div className="mt-12 lg:mt-0 flex flex-col md:flex-row gap-8 items-end justify-between">
            <div className="max-w-md">
              <p className="text-lg md:text-xl leading-relaxed font-medium tracking-tight">
                Seamless lifestyle services designed to save you time, remove
                friction, and deliver peace of mind.
              </p>
              <div className="mt-4 flex gap-4 text-sm font-mono text-gray-500 uppercase tracking-wide">
                <span>• Efficiency</span>
                <span>• Discretion</span>
                <span>• Reliability</span>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hidden lg:flex items-center justify-center w-12 h-12 border border-gray-200 rounded-full animate-bounce">
              <ArrowDownRight01Icon size={20} className="text-gray-900" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col h-full">
          <div className="flex-1 grid grid-cols-2">
            <div className="border-r border-b border-gray-200 p-6 flex flex-col justify-between hover:bg-gray-50 transition-colors duration-500 group">
              <Airplane01Icon
                size={32}
                className="text-gray-400 group-hover:text-black transition-colors"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest mb-2 text-gray-500">
                  Travel & Mobility
                </h3>
                <p className="text-sm font-medium">
                  Flight coordination, airport assistance & transfers.
                </p>
              </div>
            </div>

            {/* Cell 2: Lifestyle */}
            <div className="border-b border-gray-200 p-6 flex flex-col justify-between hover:bg-gray-50 transition-colors duration-500 group">
              <Calendar03Icon
                size={32}
                className="text-gray-400 group-hover:text-black transition-colors"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest mb-2 text-gray-500">
                  Lifestyle
                </h3>
                <p className="text-sm font-medium">
                  Reservations, events, and bespoke requests.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12 border-b border-gray-200 bg-white">
            <span className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-4 block">
              ( 002 — MEMBERSHIP )
            </span>
            <p className="text-md leading-normal text-gray-600 mb-4">
              From <span className="text-black font-medium">Essential</span>{" "}
              access to{" "}
              <span className="text-black font-medium">Corporate</span>{" "}
              retainers. We handle the details so you can focus on what truly
              matters.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-black/60 group cursor-pointer hover:text-black transition-colors">
              <span>View Tiers</span>
              <ArrowRight01Icon size={14} />
            </div>
          </div>

          <div className="relative flex-grow min-h-[250px] bg-[#111] overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-black to-black group-hover:opacity-60 transition-opacity duration-700"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="z-10 mix-blend-difference text-white">
                <span className="block font-mono text-xs uppercase tracking-widest mb-3 opacity-80">
                  Ready to delegate?
                </span>
                <span className="text-2xl lg:text-3xl font-semibold tracking-tight group-hover:scale-105 transition-transform duration-500 block">
                  Make a Request
                </span>
                <div className="mt-4 inline-flex items-center justify-center px-4 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-widest">
                  Via Web / Email / WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="w-full border-b border-gray-200 bg-white overflow-hidden flex flex-col lg:flex-row">
        <div className="p-6 border-b lg:border-b-0 lg:border-r border-gray-200 lg:w-[200px] shrink-0 flex items-center">
          <span className="font-mono text-xs uppercase tracking-widest text-gray-400">
            ( 002 — NETWORK )
          </span>
        </div>

        {/* Marquee Container */}
        <div className="flex-1 relative flex items-center overflow-hidden py-10 lg:py-0 h-32 lg:h-24">
          {/* Left/Right Fade Masks for elegance */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex whitespace-nowrap animate-scroll hover:[animation-play-state:paused]">
            {/* --- LOGO SET 1 --- */}
            <div className="flex items-center gap-16 mx-8">
              {/* Replace these spans with <Image /> components for actual logos */}
              <span className="text-2xl font-serif text-gray-400 hover:text-black transition-colors cursor-pointer">
                The Wheatbaker
              </span>
              <span className="text-xl font-sans font-bold tracking-widest text-gray-400 hover:text-black transition-colors cursor-pointer">
                EMIRATES
              </span>
              <span className="text-2xl font-serif italic text-gray-400 hover:text-black transition-colors cursor-pointer">
                Waldorf Astoria
              </span>
              <span className="text-xl font-mono font-semibold text-gray-400 hover:text-black transition-colors cursor-pointer">
                VISTAJET
              </span>
              <span className="text-2xl font-serif text-gray-400 hover:text-black transition-colors cursor-pointer">
                Ritz-Carlton
              </span>
              <span className="text-xl font-sans font-black tracking-tighter text-gray-400 hover:text-black transition-colors cursor-pointer">
                NOBU
              </span>
              <span className="text-2xl font-serif italic text-gray-400 hover:text-black transition-colors cursor-pointer">
                Four Seasons
              </span>
            </div>

            {/* --- LOGO SET 2 (Duplicate) --- */}
            <div className="flex items-center gap-16 mx-8">
              <span className="text-2xl font-serif text-gray-400 hover:text-black transition-colors cursor-pointer">
                The Wheatbaker
              </span>
              <span className="text-xl font-sans font-bold tracking-widest text-gray-400 hover:text-black transition-colors cursor-pointer">
                EMIRATES
              </span>
              <span className="text-2xl font-serif italic text-gray-400 hover:text-black transition-colors cursor-pointer">
                Waldorf Astoria
              </span>
              <span className="text-xl font-mono font-semibold text-gray-400 hover:text-black transition-colors cursor-pointer">
                VISTAJET
              </span>
              <span className="text-2xl font-serif text-gray-400 hover:text-black transition-colors cursor-pointer">
                Ritz-Carlton
              </span>
              <span className="text-xl font-sans font-black tracking-tighter text-gray-400 hover:text-black transition-colors cursor-pointer">
                NOBU
              </span>
              <span className="text-2xl font-serif italic text-gray-400 hover:text-black transition-colors cursor-pointer">
                Four Seasons
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-gray-200 bg-white">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-gray-200">
          <div className="lg:col-span-12 p-6 lg:p-12 flex flex-col md:flex-row items-baseline gap-4 md:gap-12">
            <span className="font-mono text-xs uppercase tracking-widest text-gray-400 shrink-0">
              ( 003 — TIERS )
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter uppercase leading-[0.9]">
              Select your level <br /> of access.
            </h2>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
          {/* Option 1: ESSENTIAL */}
          <div className="lg:col-span-5 border-r border-gray-200 p-8 lg:p-12 flex flex-col justify-between min-h-[500px] hover:bg-gray-50 transition-colors duration-500">
            <div>
              <div className="flex justify-between items-start mb-8">
                <h3 className="font-mono text-sm uppercase tracking-widest text-gray-500">
                  Mygo Essential
                </h3>
                <div className="px-3 py-1 border border-black rounded-full text-[10px] font-mono uppercase">
                  Entry
                </div>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-semibold tracking-tighter">
                  ₦250k
                </span>
                <span className="text-sm text-gray-500 ml-2">/ year</span>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                  <Tick01Icon size={16} className="mt-0.5 shrink-0" />
                  <span>Standard Concierge Access</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                  <Tick01Icon size={16} className="mt-0.5 shrink-0" />
                  <span>Pay-per-service execution</span>
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-gray-700">
                  <Tick01Icon size={16} className="mt-0.5 shrink-0" />
                  <span>Digital Requests (Web/WhatsApp)</span>
                </li>
              </ul>
            </div>

            <button className="w-full py-4 mt-12 border border-gray-200 uppercase text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-colors">
              Apply for Essential
            </button>
          </div>

          {/* Option 2: PREMIUM (Highlighted) */}
          <div className="lg:col-span-7 bg-[#1a1a1a] text-white p-8 lg:p-12 flex flex-col justify-between min-h-[500px] relative overflow-hidden group">
            {/* Decorative texture */}
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
              <StarIcon size={120} />
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <h3 className="font-mono text-sm uppercase tracking-widest text-gray-400">
                  Mygo Premium
                </h3>
                <div className="px-3 py-1 border border-white/30 rounded-full text-[10px] font-mono uppercase bg-white/10 backdrop-blur-md">
                  Recommended
                </div>
              </div>
              <div className="mb-8">
                <span className="text-4xl md:text-6xl font-semibold tracking-tighter">
                  ₦1.2M
                </span>
                <span className="text-sm text-gray-400 ml-2">/ year</span>
              </div>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-300">
                    <StarIcon
                      size={16}
                      className="mt-0.5 shrink-0 text-yellow-500 fill-yellow-500"
                    />
                    <span>Priority Handling (Skip the queue)</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-300">
                    <StarIcon
                      size={16}
                      className="mt-0.5 shrink-0 text-yellow-500 fill-yellow-500"
                    />
                    <span>Dedicated Concierge Manager</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-300">
                    <Tick01Icon size={16} className="mt-0.5 shrink-0" />
                    <span>Preferential Access to Events</span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-300">
                    <Tick01Icon size={16} className="mt-0.5 shrink-0" />
                    <span>Reduced Execution Fees</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm font-medium text-gray-300">
                    <Tick01Icon size={16} className="mt-0.5 shrink-0" />
                    <span>Extended Hours Support</span>
                  </li>
                </ul>
              </div>
            </div>

            <button className="relative z-10 w-full py-4 mt-12 bg-white text-black uppercase text-xs font-bold tracking-widest hover:scale-[1.01] transition-transform">
              Apply for Premium
            </button>
          </div>
        </div>
      </section>

      <footer className="w-full border-t border-gray-200 py-3 px-6 flex flex-col md:flex-row justify-between items-center bg-white z-10 gap-2">
        <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest text-gray-500">
          <span>Lat: 9.0579° N</span>
          <span>Lon: 7.4951° E</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-black">
          Service Coverage: Nigeria & International
        </div>
      </footer>
    </div>
  );
}
