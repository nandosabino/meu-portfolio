import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";

const navItems = [
  { name: "Início", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Sobre mim", href: "#about" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="relative flex items-center px-6">
        <a
          href="#hero"
          className="text-4xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-foreground">Fernando</span>
          </span>
        </a>

        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8 text-2xl font-bold">
          <div className="bg-primary/10 backdrop:-blur-sm rounded-xl px-6 py-3 flex items-center space-x-8 text-2xl font-bold shadow-md">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-blue-600 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <IoIosClose size={24} /> : <IoIosMenu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
