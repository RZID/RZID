// Deps
import { useRef } from "react";
import classNames from "classnames";
import { motion, useInView } from "framer-motion";

// Constants
import { SKILL_TAGS, SKILLS } from "~/data";

// Components
import SkillBar from "./components/SkillBar";

const SkillsSection = () => {
  // Refs
  const ref = useRef<HTMLDivElement>(null);

  // Hooks
  const inView = useInView(ref, { once: true });

  return (
    <section
      aria-label="Technical skills"
      className={classNames("py-16", "sm:py-24", "lg:py-32", "min-h-screen", "bg-surface")}
    >
      <div className={classNames("max-w-5xl", "mx-auto", "px-6", "sm:px-8", "md:px-16", "2xl:max-w-6xl")}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className={classNames("mb-10", "md:mb-16")}
        >
          <span
            className={classNames(
              "uppercase",
              "font-mono",
              "text-label",
              "text-red/70",
              "tracking-[0.4em]",
            )}
          >
            03 / Arsenal
          </span>
          <h2
            className={classNames(
              "mt-2",
              "text-3xl",
              "sm:text-4xl",
              "md:text-5xl",
              "font-sans",
              "text-white",
              "leading-none",
              "font-extrabold",
            )}
          >
            Skills
          </h2>
        </motion.div>

        {/* Skill bars */}
        <div className={classNames("space-y-5", "mb-20")}>
          {SKILLS.map((s, i) => (
            <SkillBar key={s.label} skill={s} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div className={classNames("border-t", "border-white/6", "mb-12")} />

        {/* Tag grid */}
        <div className={classNames("flex", "flex-wrap", "gap-2")}>
          {SKILL_TAGS.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.03 + 0.5 }}
              className={classNames(
                "px-3",
                "py-1.5",
                "border",
                "uppercase",
                "font-mono",
                "text-label",
                "transition-all",
                "cursor-default",
                "tracking-widest",
                "text-white/30",
                "border-white/[0.07]",
                "hover:border-red/40",
                "hover:text-white/60",
              )}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
