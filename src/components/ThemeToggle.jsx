import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const iconVariants = {
    initial: { rotate: -90, opacity: 0, scale: 0.8 },
    animate: { rotate: 0, opacity: 1, scale: 1 },
    exit: { rotate: 90, opacity: 0, scale: 0.8 },
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 cursor-pointer",
        "focus:outline-hidden"
      )}
      aria-label="Alternar tema"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDarkMode ? "dark" : "light"}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          {isDarkMode ? (
            <IoSunnyOutline className="h-8 w-8 text-yellow-300" />
          ) : (
            <IoMoonOutline className="h-8 w-8 text-indigo-600" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};
