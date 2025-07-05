import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const ThemeToggleMobile = () => {
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

  if (!mounted) return null;

  return (
    <div className="sm:hidden relative">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-primary/20 transition mx-auto flex items-center justify-center relative z-50"
        aria-label="Alternar tema"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDarkMode ? "dark" : "light"}
            initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex items-center justify-center"
          >
            {isDarkMode ? (
              <FiSun className="h-6 w-6 text-yellow-300" />
            ) : (
              <FiMoon className="h-6 w-6 text-indigo-500" />
            )}
          </motion.div>
        </AnimatePresence>
      </button>
    </div>
  );
};
