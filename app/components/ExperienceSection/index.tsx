import { type FC, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import type { Experience } from "~/types";
import { EXPERIENCES } from "~/data";

const ExperienceCard: FC<{
  exp: Experience;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ exp, index, isOpen, onToggle }) => {
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
        className="w-full text-left group"
        aria-expanded={isOpen}
      >
        <div
          className={`flex items-start justify-between py-7 border-t transition-colors duration-300 ${
            isOpen
              ? "border-[color:var(--color-red)]/40"
              : "border-white/[0.07] hover:border-white/15"
          }`}
        >
          <div className="flex items-start gap-6">
            {/* Index */}
            <span className="font-mono text-label text-white/20 mt-1.5 w-6 shrink-0">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3
                className={`font-sans text-xl font-bold leading-tight transition-colors ${
                  isOpen ? "text-white" : "text-white/70 group-hover:text-white"
                }`}
              >
                {exp.title}
              </h3>
              <p className="font-mono text-tag text-red/80 tracking-wide mt-1">
                {exp.company}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 shrink-0 ml-4 mt-0.5">
            <span className="font-mono text-label text-white/25 tracking-wide hidden md:block">
              {exp.period}
            </span>
            <span
              className={`font-mono text-label px-2.5 py-1 border tracking-widest uppercase transition-colors ${
                isOpen
                  ? "border-[color:var(--color-red)]/40 text-red bg-red/10"
                  : "border-white/10 text-white/30"
              }`}
            >
              {exp.tag}
            </span>
            {/* Expand icon */}
            <motion.span
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.25 }}
              className="text-white/30 text-lg font-light leading-none group-hover:text-white transition-colors"
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
            className="overflow-hidden"
          >
            <ul className="pl-12 pb-8 space-y-3">
              {exp.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white/40 text-body leading-relaxed"
                >
                  <span className="text-red/60 shrink-0 mt-1 text-label">
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

export const ExperienceSection: FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      aria-label="Work experience"
      className="py-32 min-h-screen bg-bg"
    >
      <div className="max-w-5xl mx-auto px-8 md:px-16">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <span className="font-mono text-label text-red/70 tracking-[0.4em] uppercase">
              02 / Work
            </span>
            <h2 className="font-sans text-5xl font-extrabold text-white mt-2 leading-none">
              Experience
            </h2>
          </div>
          <p className="font-mono text-tag text-white/20 tracking-wide hidden md:block max-w-45 text-right leading-relaxed">
            Click each role to expand details
          </p>
        </motion.div>

        {/* Accordion */}
        <div>
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard
              key={i}
              exp={exp}
              index={i}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/[0.07]" />
        </div>
      </div>
    </section>
  );
};
