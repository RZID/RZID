// Deps
import { animate, motion, useMotionValue } from "framer-motion";
import classNames from "classnames";
import { useEffect, useRef, useState, type ReactNode } from "react";

// Constants
import { NAV_LINKS } from "~/data";

const ROW = 53; // 6 + 40 + 6 padding + 1px divide border

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.5,
  fill: "none",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const ICONS: Record<string, ReactNode> = {
  home: (
    <svg viewBox="0 0 24 24" {...stroke} className="w-5 h-5">
      <path d="m3 10.5 9-7.5 9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </svg>
  ),
  experience: (
    <svg viewBox="0 0 24 24" {...stroke} className="w-5 h-5">
      <rect x="3" y="7" width="18" height="14" rx="0" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  skills: (
    <svg viewBox="0 0 24 24" {...stroke} className="w-5 h-5">
      <rect x="3" y="4" width="18" height="16" rx="0" />
      <path d="m7 9 3 3-3 3" />
      <path d="M12 15h5" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" {...stroke} className="w-5 h-5">
      <rect x="3" y="5" width="18" height="14" rx="0" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  ),
};

export const Navbar = () => {
  // States
  const [activeSection, setActiveSection] = useState("home");

  // Motion — indicator: collapses to a dot, travels, then widens back out
  const y = useMotionValue(0);
  const scaleX = useMotionValue(1);
  const prevIdx = useRef(0);

  // Effects — scroll-spy: highlight the section crossing the viewport middle
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    NAV_LINKS.forEach(({ to }) => {
      const el = document.getElementById(to.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Dot-travel animation: shrink → glide to next row → widen
  useEffect(() => {
    const idx = NAV_LINKS.findIndex((l) => l.to.slice(1) === activeSection);
    const delta = (idx - prevIdx.current) * ROW;
    prevIdx.current = idx;
    if (delta === 0) return;
    const base = y.get();
    animate(y, [base, base, base + delta, base + delta], {
      duration: 0.6,
      times: [0, 0.25, 0.75, 1],
      ease: [0.65, 0, 0.35, 1],
    });
    animate(scaleX, [1, 0.1, 0.1, 1], {
      duration: 0.6,
      times: [0, 0.25, 0.75, 1],
      ease: [0.65, 0, 0.35, 1],
    });
  }, [activeSection, y, scaleX]);

  return (
    <motion.nav
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
      aria-label="Section navigation"
      className={classNames(
        "fixed",
        "top-1/2",
        "right-4",
        "sm:right-6",
        "z-40",
        "flex",
        "flex-col",
        "-translate-y-1/2",
        "bg-bg/85",
        "backdrop-blur-sm",
        "divide-y",
        "divide-white/6",
        "border",
        "border-white/6",
        "rounded-2xl",
      )}
    >
      {/* Active indicator — 2px underline under the icon, dot while travelling */}
      <motion.span
        aria-hidden="true"
        className={classNames(
          "bg-red",
          "w-5",
          "h-0.5",
          "rounded-full",
          "absolute",
          "left-4",
          "top-[47px]",
        )}
        style={{ y, scaleX }}
      />

      {NAV_LINKS.map((link, i) => {
        const isActive = activeSection === link.to.slice(1);
        return (
          <motion.a
            key={link.label}
            href={link.to}
            aria-label={link.label}
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              delay: 0.5 + i * 0.07,
              type: "spring",
              stiffness: 320,
              damping: 24,
            }}
            className={classNames(
              "flex",
              "group",
              "p-1.5",
              "relative",
              "items-center",
              "justify-center",
              "outline-none",
              "rounded-xl",
              "focus-visible:bg-white/5",
            )}
          >
            {/* Icon */}
            <motion.span
              className={classNames(
                "flex",
                "h-10",
                "w-10",
                "relative",
                "z-10",
                "shrink-0",
                "items-center",
                "justify-center",
                "transition-colors",
                "duration-200",
                isActive
                  ? "text-red"
                  : "text-white/40 group-hover:text-white",
              )}
              animate={{ scale: isActive ? [0.8, 1.15, 1] : 1 }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.18,
                transition: { type: "spring", stiffness: 400, damping: 18 },
              }}
            >
              {ICONS[link.to.slice(1)]}
            </motion.span>
          </motion.a>
        );
      })}
    </motion.nav>
  );
};
