// Deps
import classNames from "classnames";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Hooks
import useScramble from "~/hooks/useScramble";

const HeroSection = () => {
  // States
  const [go, setGo] = useState(false);

  // Hooks
  const name = useScramble("RAMADHANU", go),
    { scrollY } = useScroll();

  // Transforms
  const heroY = useTransform(scrollY, [0, 700], [0, 120]),
    heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const t = setTimeout(() => setGo(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      aria-label="Introduction"
      className={classNames(
        "flex",
        "pb-24",
        "bg-bg",
        "flex-col",
        "relative",
        "scanlines",
        "justify-end",
        "min-h-screen",
        "overflow-hidden",
      )}
    >
      {/* Large background index number — decorative */}
      <div
        aria-hidden="true"
        className={classNames(
          "z-0",
          "top-1/2",
          "absolute",
          "-right-8",
          "text-deco",
          "font-sans",
          "md:right-4",
          "lg:right-8",
          "select-none",
          "leading-none",
          "font-extrabold",
          "-translate-y-1/2",
          "text-white/2.5",
          "pointer-events-none",
        )}
      >
        01
      </div>

      {/* Thin vertical red line accent */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className={classNames(
          "w-px",
          "top-0",
          "left-4",
          "bottom-0",
          "absolute",
          "sm:left-6",
          "md:left-10",
          "lg:left-16",
          "origin-top",
          "bg-red/30",
        )}
      />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className={classNames(
          "z-10",
          "px-8",
          "w-full",
          "sm:px-12",
          "md:px-20",
          "lg:px-28",
          "xl:px-36",
          "relative",
          "max-w-7xl",
          "2xl:max-w-352",
        )}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className={classNames(
            "flex",
            "items-center",
            "gap-3",
            "mb-6",
            "md:mb-8",
          )}
        >
          <span
            className={classNames(
              "w-1.5",
              "h-1.5",
              "bg-red",
              "rounded-full",
              "animate-pulse",
            )}
          />
          <span
            className={classNames(
              "font-mono",
              "uppercase",
              "text-label",
              "text-white/40",
              "tracking-[0.35em]",
            )}
          >
            Full Stack Engineer · Jakarta, ID
          </span>
        </motion.div>

        {/* Main heading */}
        <div className={classNames("overflow-hidden", "mb-4")}>
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className={classNames(
              "font-sans",
              "text-hero",
              "text-white",
              "font-extrabold",
              "leading-[0.88]",
              "tracking-tight",
            )}
          >
            {name}
          </motion.h1>
        </div>

        {/* Subtitle row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className={classNames(
            "flex",
            "gap-8",
            "mt-6",
            "md:mt-10",
            "flex-col",
            "md:flex-row",
            "md:items-end",
            "justify-between",
          )}
        >
          <p
            className={classNames(
              "max-w-sm",
              "font-sans",
              "text-prose",
              "font-light",
              "text-white/40",
              "leading-relaxed",
              "lg:max-w-md",
            )}
          >
            I build production-grade systems — microservices, cross-platform
            apps, and the infrastructure that keeps them alive. Five years, zero
            compromises.
          </p>

          <div
            className={classNames("flex", "items-center", "gap-5", "shrink-0")}
          >
            <a
              href="mailto:rdhanurzid@gmail.com"
              className={classNames(
                "px-6",
                "py-3",
                "group",
                "bg-red",
                "text-tag",
                "relative",
                "font-sans",
                "font-bold",
                "uppercase",
                "text-white",
                "overflow-hidden",
                "tracking-widest",
                "transition-colors",
                "hover:bg-red-hover",
              )}
            >
              Hire me
            </a>
            <a
              href="https://github.com/RZID"
              target="_blank"
              rel="noreferrer"
              className={classNames(
                "pb-0.5",
                "text-tag",
                "border-b",
                "font-mono",
                "uppercase",
                "text-white/35",
                "tracking-widest",
                "transition-colors",
                "hover:text-white",
                "border-transparent",
                "hover:border-white/30",
              )}
            >
              GitHub ↗
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className={classNames(
            "flex",
            "pt-8",
            "mt-10",
            "gap-8",
            "border-t",
            "md:pt-10",
            "md:mt-14",
            "sm:gap-10",
            "lg:gap-16",
            "border-white/[0.07]",
          )}
        >
          {[
            { num: "5+", label: "Years shipped" },
            { num: "3", label: "Active roles" },
            { num: "∞", label: "Stacks mastered" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div
                className={classNames(
                  "text-2xl",
                  "sm:text-3xl",
                  "lg:text-4xl",
                  "font-sans",
                  "text-white",
                  "leading-none",
                  "font-extrabold",
                )}
              >
                {num}
              </div>
              <div
                className={classNames(
                  "mt-1.5",
                  "uppercase",
                  "font-mono",
                  "text-label",
                  "text-white/30",
                  "tracking-widest",
                )}
              >
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue — hidden on mobile to reduce clutter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        aria-hidden="true"
        className={classNames(
          "gap-2",
          "hidden",
          "sm:flex",
          "flex-col",
          "absolute",
          "right-10",
          "bottom-10",
          "items-center",
        )}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className={classNames(
            "w-px",
            "h-10",
            "from-red/50",
            "bg-linear-to-b",
            "to-transparent",
          )}
        />
        <span
          className={classNames(
            "mt-3",
            "text-2xs",
            "font-mono",
            "uppercase",
            "rotate-90",
            "origin-center",
            "text-white/20",
            "tracking-[0.3em]",
          )}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
