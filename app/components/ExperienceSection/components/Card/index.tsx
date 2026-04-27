// Deps
import classNames from "classnames";
import { useRef } from "react";
import { useInView, motion, AnimatePresence } from "framer-motion";

// Types
import type ExperienceCardProps from "./types";

const ExperienceCard = ({
  exp,
  index,
  isOpen,
  onToggle,
}: ExperienceCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <button
        onClick={onToggle}
        className={classNames("w-full", "text-left", "group")}
        aria-expanded={isOpen}
      >
        <div
          className={classNames(
            "flex",
            "py-7",
            "border-t",
            "items-start",
            "duration-300",
            "justify-between",
            "transition-colors",
            {
              "border-red/40": isOpen,
              [`${classNames("border-white/[0.07]", "hover:border-white/15")}`]:
                !isOpen,
            },
          )}
        >
          <div className={classNames("flex", "items-start", "gap-6")}>
            {/* Index */}
            <span
              className={classNames(
                "w-6",
                "mt-1.5",
                "shrink-0",
                "font-mono",
                "text-label",
                "text-white/20",
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3
                className={classNames(
                  "text-lg",
                  "md:text-xl",
                  "font-sans",
                  "font-bold",
                  "leading-tight",
                  "transition-colors",
                  {
                    "text-white": isOpen,
                    [classNames("text-white/70 group-hover:text-white")]:
                      !isOpen,
                  },
                )}
              >
                {exp.title}
              </h3>
              <p
                className={classNames(
                  "mt-1",
                  "text-tag",
                  "font-mono",
                  "text-red/80",
                  "tracking-wide",
                )}
              >
                {exp.company}
              </p>
            </div>
          </div>

          <div
            className={classNames(
              "ml-4",
              "flex",
              "gap-4",
              "mt-0.5",
              "shrink-0",
              "items-center",
            )}
          >
            <span
              className={classNames(
                "hidden",
                "md:block",
                "font-mono",
                "text-label",
                "tracking-wide",
                "text-white/25",
              )}
            >
              {exp.period}
            </span>
            <span
              className={classNames(
                "py-1",
                "px-2.5",
                "border",
                "uppercase",
                "font-mono",
                "text-label",
                "tracking-widest",
                "transition-colors",
                {
                  [classNames("border-red/40", "text-red", "bg-red/10")]:
                    isOpen,
                  [classNames("border-white/10 text-white/30")]: !isOpen,
                },
              )}
            >
              {exp.tag}
            </span>
            {/* Expand icon */}
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.25 }}
              className={classNames(
                "text-lg",
                "font-light",
                "leading-none",
                "text-white/30",
                "transition-colors",
                "group-hover:text-white",
              )}
            >
              +
            </motion.span>
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={classNames("overflow-hidden")}
          >
            <ul className={classNames("pl-8", "md:pl-12", "pb-8", "space-y-3")}>
              {exp.bullets.map((b, i) => (
                <li
                  key={i}
                  className={classNames(
                    "flex",
                    "gap-3",
                    "text-body",
                    "items-start",
                    "text-white/40",
                    "leading-relaxed",
                  )}
                >
                  <span
                    className={classNames(
                      "mt-1",
                      "shrink-0",
                      "text-label",
                      "text-red/60",
                    )}
                  >
                    ◆
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ExperienceCard;
