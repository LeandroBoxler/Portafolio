import type { Variants } from "framer-motion";

export const openMenuProyects: Variants = {
  hidden: {
    y: 24,
    opacity: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export const openMenu: Variants = {
  initial: {
    scale: 0.9,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export const cardsMobile: Variants = {
  minimize: {
    height: "auto",
    position: "right-0",

    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
  maximize: {
    height: "100%",
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      bounce: 0.5,
    },
  },
};
