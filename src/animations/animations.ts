import type { Variants } from "framer-motion";

export const openMenuProyects:Variants = {
  hidden: {
    x: "100%",
    transition: { duration: 0.5 },
  },
  visible: {
    x: 0,
    transition: { duration: 0.5 },
  },

};

  export const openMenu: Variants = {
  initial: {
    scale: 0.9,
    opacity: 0,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" },
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.3,
       ease: "easeOut" },
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

