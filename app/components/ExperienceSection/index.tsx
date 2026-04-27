// Deps
import classNames from "classnames";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// Constants
import { EXPERIENCES } from "~/data";

// Components
import ExperienceCard from "./components/Card";

const ExperienceSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      aria-label="Work experience"
      className={classNames("py-16", "sm:py-24", "lg:py-32", "min-h-screen", "bg-bg")}
    >
      <div className={classNames("max-w-5xl", "mx-auto", "px-6", "sm:px-8", "md:px-16", "2xl:max-w-6xl")}>
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className={classNames(
            "flex",
            "mb-10",
            "md:mb-16",
            "items-end",
            "justify-between",
          )}
        >
          <div>
            <span
              className={classNames(
                "uppercase",
                "font-mono",
                "text-label",
                "text-red/70",
                "tracking-[0.4em]",
              )}
            >
              02 / Work
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
              Experience
            </h2>
          </div>
          <p
            className={classNames(
              "hidden",
              "md:block",
              "max-w-45",
              "text-tag",
              "font-mono",
              "text-right",
              "tracking-wide",
              "text-white/20",
              "leading-relaxed",
            )}
          >
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
          <div className={classNames("border-t", "border-white/[0.07]")} />
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
