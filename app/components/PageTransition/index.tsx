import type { FC, ReactNode } from "react";
import { motion } from "framer-motion";

export const PageTransition: FC<{ children: ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, filter: "blur(4px)" }}
    animate={{ opacity: 1, filter: "blur(0px)" }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
  >
    {children}
  </motion.div>
);
