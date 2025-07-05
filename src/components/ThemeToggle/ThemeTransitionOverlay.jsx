import { motion, AnimatePresence } from "motion/react";

export const ThemeTransitionOverlay = ({ isVisible, isDarkMode }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-40 pointer-events-none"
          style={{
            backgroundColor: isDarkMode
              ? "hsl(210, 60%, 98%)"
              : "hsl(220, 30%, 10%)",
          }}
        />
      )}
    </AnimatePresence>
  );
};
