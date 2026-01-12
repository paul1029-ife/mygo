import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t border-white/10 bg-[#020202]">
      <div className="max-w-350 mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-sans font-bold text-white mb-6">
            MYGO.
          </h3>
          <p className="text-neutral-400 text-sm max-w-xs mb-8 mt-6">
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
            <li className="text-[#D4AF37] cursor-pointer hover:underline">
              Chat on WhatsApp
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-350 mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] text-neutral-400 uppercase tracking-widest">
        <p>© 2026 MYGO Services.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
