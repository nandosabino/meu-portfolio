export const defaultTransition = {
  duration: 1.2,
  ease: "easeInOut",
};

export const fadeInUp = (delay = 0.3) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { ...defaultTransition, delay },
});

export const bounceAnimation = {
  animate: { y: [0, 10, 0] },
  transition: {
    repeat: Infinity,
    duration: 1.5,
    ease: "easeInOut",
  },
};