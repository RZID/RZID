// Deps
import { useRef } from "react";
import classNames from "classnames";
import { useInView, motion } from "framer-motion";

// Types
import type SkillBarProps from "./types";

const SkillBar = ({ skill, index }: SkillBarProps) => {
  // Refs
  const ref = useRef<HTMLDivElement>(null);

  // Hooks
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: index * 0.06 }}
      className={classNames("group", "flex", "items-center", "gap-5")}
    >
      <span
        className={classNames(
          "w-5",
          "shrink-0",
          "font-mono",
          "text-label",
          "text-white/20",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className={classNames("flex-1", "flex", "items-center", "gap-4")}>
        <span
          className={classNames(
            "w-28",
            "sm:w-36",
            "md:w-44",
            "lg:w-52",
            "text-sm",
            "shrink-0",
            "font-sans",
            "text-white/55",
            "transition-colors",
            "group-hover:text-white",
          )}
        >
          {skill.label}
        </span>
        <div
          className={classNames(
            "h-px",
            "flex-1",
            "relative",
            "bg-white/6",
            "overflow-hidden",
          )}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{
              duration: 1.4,
              delay: index * 0.06 + 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={classNames("absolute", "inset-y-0", "left-0", "bg-red")}
            style={{ height: "1px" }}
          />
        </div>
        <span
          className={classNames(
            "w-8",
            "shrink-0",
            "font-mono",
            "text-label",
            "text-right",
            "text-white/20",
          )}
        >
          {skill.level}
        </span>
      </div>
    </motion.div>
  );
};

export default SkillBar;
