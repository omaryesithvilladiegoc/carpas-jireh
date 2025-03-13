export const motionStyles = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  exit: { y: 40, opacity: 0 },
  transition: { duration: 0.5 },
};

export const sliderStyles = {
  initial: { scale: 0.8 },
  animate: { y: 0, scale: 1, transition: { duration: 0.5 } },
  exit: { scale: 0.8, transition: { duration: 0.5 } },
};
