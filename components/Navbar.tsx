import Image from "next/image";
import Link from "next/link";

const navItems = ["About", "Services", "Process", "Request", "Contact"];

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 ">
      <Link href="/">
        <Image src="/logo.png" width={120} height={20} alt="logo-image" />
      </Link>

      <ul className="flex items-center gap-8 font-mono">
        {navItems.map((item) => (
          <li key={item} className="cursor-pointer">
            <Link
              href={`/${item.toLowerCase()}`}
              className="relative block overflow-hidden group h-fit text-sm uppercase tracking-tight text-gray-600"
            >
              <span
                data-text={item}
                className="
                  block 
                  transition-transform 
                  duration-500 
                  ease-[cubic-bezier(0.76,0,0.24,1)] 
                  group-hover:-translate-y-full
                  
                  after:content-[attr(data-text)]
                  after:block
                  after:absolute
                  after:left-0
                  after:top-full
                "
              >
                {item}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
