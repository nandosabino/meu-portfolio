import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggleMobile } from "@/components/ThemeToggle/ThemeToggleMobile";

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
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="flex items-center justify-between px-6 max-w-7xl mx-auto relative">
        <a
          href="#hero"
          className="text-4xl font-bold text-primary relative z-10"
          aria-label="Voltar para o início"
        >
          <span className="text-foreground">Fernando</span>
        </a>

        <div className="hidden md:flex absolute inset-x-0 justify-center">
          <div className="bg-primary/10 backdrop:-blur-sm rounded-xl px-6 py-3 flex items-center space-x-8 text-2xl font-semibold shadow-md">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 flex items-center justify-center"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <IoClose size={32} /> : <IoMenu size={32} />}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-screen h-screen z-[9999] bg-background/95 backdrop-blur-md flex items-center justify-center px-8"
            >
              <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col space-y-8 text-3xl font-semibold w-full max-w-md"
              >
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground/80 hover:text-primary active:bg-primary/10 active:text-primary px-6 py-3 rounded-xl transition-all duration-200"
                  >
                    {item.name}
                  </a>
                ))}

                <ThemeToggleMobile />
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
