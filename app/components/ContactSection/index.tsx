// Deps
import { useRef } from "react";
import classNames from "classnames";
import { motion, useInView } from "framer-motion";

// Constants
import { CONTACT_LINKS } from "~/data";

const ContactSection = () => {
  // Refs
  const ref = useRef<HTMLDivElement>(null);

  // Hooks
  const inView = useInView(ref, { once: true });

  return (
    <section
      aria-label="Contact"
      className={classNames("py-16", "sm:py-24", "lg:py-32", "min-h-screen", "bg-bg")}
    >
      <div className={classNames("max-w-5xl", "mx-auto", "px-6", "sm:px-8", "md:px-16", "2xl:max-w-6xl")}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className={classNames("mb-12", "md:mb-20")}
        >
          <span
            className={classNames(
              "font-mono",
              "uppercase",
              "text-label",
              "text-red/70",
              "tracking-[0.4em]",
            )}
          >
            04 / Connect
          </span>
          {/* Big CTA heading */}
          <h2
            className={classNames(
              "mt-3",
              "text-cta",
              "font-sans",
              "text-white",
              "leading-[0.9]",
              "font-extrabold",
            )}
          >
            Let's build
            <br />
            <span className={classNames("text-white/20")}>something.</span>
          </h2>
          <p
            className={classNames(
              "mt-8",
              "max-w-sm",
              "font-sans",
              "text-prose",
              "text-white/35",
              "leading-relaxed",
            )}
          >
            Open to full-time roles, consulting, and interesting problems. I
            respond within 24 hours.
          </p>
        </motion.div>

        {/* Contact rows */}
        <div className={classNames("border-t", "border-white/[0.07]")}>
          {CONTACT_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.09 + 0.3, duration: 0.5 }}
              className={classNames(
                "py-5",
                "flex",
                "group",
                "border-b",
                "duration-200",
                "items-center",
                "justify-between",
                "transition-colors",
                "border-white/[0.07]",
                "hover:border-white/15",
              )}
            >
              <span
                className={classNames(
                  "w-28",
                  "uppercase",
                  "font-mono",
                  "text-label",
                  "text-white/20",
                  "tracking-[0.3em]",
                )}
              >
                {link.label}
              </span>
              <span
                className={classNames(
                  "flex-1",
                  "text-sm",
                  "font-sans",
                  "text-center",
                  "text-white/45",
                  "transition-colors",
                  "group-hover:text-white",
                )}
              >
                {link.value}
              </span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                className={classNames(
                  "text-tag",
                  "font-mono",
                  "text-red/0",
                  "transition-colors",
                  "group-hover:text-red",
                )}
              >
                ↗
              </motion.span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
