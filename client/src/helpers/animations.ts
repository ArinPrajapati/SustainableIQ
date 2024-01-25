export const transition = { type: "spring", duration: 2 };

export const slideAnimation = (direction: string) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0 },
  },
};

export const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
};

export const headContentAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2,
  },
};

export const headContainerAnimation = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};

// Additional Animation Configurations

export const scaleAnimation = {
  initial: {
    scale: 0.8,
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: { scale: 1, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { scale: 0.8, opacity: 0, transition: { ...transition, delay: 0 } },
};

export const rotateAnimation = {
  initial: {
    rotate: -45,
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
  animate: { rotate: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { rotate: -45, opacity: 0, transition: { ...transition, delay: 0 } },
};

export const pulseAnimation = {
  initial: {
    scale: 1,
    opacity: 0.5,
    transition: { loop: Infinity, duration: 1, repeatDelay: 1 },
  },
  animate: {
    scale: 1.2,
    opacity: 1,
    transition: { loop: Infinity, duration: 1, repeatDelay: 1 },
  },
  exit: {
    scale: 1,
    opacity: 0.5,
    transition: { loop: Infinity, duration: 1, repeatDelay: 1 },
  },
};
