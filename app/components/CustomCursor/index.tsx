// Deps
import classNames from "classnames";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  // Motion values
  const x = useMotionValue(-100),
    y = useMotionValue(-100);

  // Spring hooks
  const sx = useSpring(x, { stiffness: 600, damping: 45 }),
    sy = useSpring(y, { stiffness: 600, damping: 45 });

  // States
  const [active, setActive] = useState(false);

  // Effects
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  useEffect(() => {
    const on = () => setActive(true);
    const off = () => setActive(false);
    const els = document.querySelectorAll("a, button, [role=button]");
    els.forEach((el) => {
      el.addEventListener("mouseenter", on);
      el.addEventListener("mouseleave", off);
    });
    return () =>
      els.forEach((el) => {
        el.removeEventListener("mouseenter", on);
        el.removeEventListener("mouseleave", off);
      });
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        aria-hidden="true"
        className={classNames(
          "fixed",
          "z-9999",
          "bg-red",
          "rounded-full",
          "pointer-events-none",
        )}
        style={{
          x: sx,
          y: sy,
          width: 8,
          height: 8,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      {/* Ring */}
      <motion.div
        aria-hidden="true"
        className={classNames(
          "fixed",
          "z-9998",
          "border",
          "rounded-full",
          "border-red/40",
          "pointer-events-none",
        )}
        style={{
          x: sx,
          y: sy,
          translateX: "-50%",
          translateY: "-50%",
          width: active ? 40 : 24,
          height: active ? 40 : 24,
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
    </>
  );
};
