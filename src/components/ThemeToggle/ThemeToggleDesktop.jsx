import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { ThemeTransitionOverlay } from "./ThemeTransitionOverlay";

export const ThemeToggleDesktop = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

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

  const toggleTheme = (e) => {
    const { clientX, clientY } = e
    setClickPosition({ x: clientX, y: clientY })
    setIsTransitioning(true);
    setShowOverlay(true);

    setTimeout(() => {
      if (isDarkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        setIsDarkMode(false);
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setIsDarkMode(true);
      }
    }, 150);

    setTimeout(() => {
      setIsTransitioning(false);
      setShowOverlay(false);
    }, 600);
  };

  const iconVariants = {
    initial: { rotate: -90, opacity: 0, scale: 0.8 },
    animate: { rotate: 0, opacity: 1, scale: 1 },
    exit: { rotate: 90, opacity: 0, scale: 0.8 },
  };

  if (!mounted) return null;

  return (
    <div className="fixed max-sm:hidden top-5 right-5 z-50">
      <button
        onClick={toggleTheme}
        className={cn(
          "relative p-2 rounded-full transition-colors duration-300 cursor-pointer focus:outline-hidden"
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

        <ThemeTransitionOverlay
          isVisible={showOverlay}
          isDarkMode={isDarkMode}
          position={clickPosition}
        />
      </button>
    </div>
  );
};
