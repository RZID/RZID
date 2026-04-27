import { type FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Skill } from "~/types";
import { SKILL_TAGS, SKILLS } from "~/data";

const SkillBar: FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: index * 0.06 }}
      className="group flex items-center gap-5"
    >
      <span className="font-mono text-label text-white/20 w-5 shrink-0">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex-1 flex items-center gap-4">
        <span className="font-sans text-sm text-white/55 group-hover:text-white transition-colors w-52 shrink-0">
          {skill.label}
        </span>
        <div className="flex-1 h-px bg-white/6 relative overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{
              duration: 1.4,
              delay: index * 0.06 + 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-y-0 left-0 bg-red"
            style={{ height: "1px" }}
          />
        </div>
        <span className="font-mono text-label text-white/20 w-8 text-right shrink-0">
          {skill.level}
        </span>
      </div>
    </motion.div>
  );
};

export const SkillsSection: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      aria-label="Technical skills"
      className="py-32 min-h-screen bg-surface"
    >
      <div className="max-w-5xl mx-auto px-8 md:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-mono text-label text-red/70 tracking-[0.4em] uppercase">
            03 / Arsenal
          </span>
          <h2 className="font-sans text-5xl font-extrabold text-white mt-2 leading-none">
            Skills
          </h2>
        </motion.div>

        {/* Skill bars */}
        <div className="space-y-5 mb-20">
          {SKILLS.map((s, i) => (
            <SkillBar key={s.label} skill={s} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/6 mb-12" />

        {/* Tag grid */}
        <div className="flex flex-wrap gap-2">
          {SKILL_TAGS.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.03 + 0.5 }}
              className="font-mono text-label tracking-widest uppercase px-3 py-1.5 border border-white/[0.07] text-white/30 hover:border-[color:var(--color-red)]/40 hover:text-white/60 transition-all cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};
