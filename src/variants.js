export const fadeSlideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delayChildren: 0.4,
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};
