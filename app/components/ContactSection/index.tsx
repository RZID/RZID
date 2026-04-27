import { type FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CONTACT_LINKS } from "~/data";

export const ContactSection: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      aria-label="Contact"
      className="py-32 min-h-screen bg-bg"
    >
      <div className="max-w-5xl mx-auto px-8 md:px-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="font-mono text-label text-red/70 tracking-[0.4em] uppercase">
            04 / Connect
          </span>
          {/* Big CTA heading */}
          <h2 className="font-sans text-cta font-extrabold text-white leading-[0.9] mt-3">
            Let's build
            <br />
            <span className="text-white/20">something.</span>
          </h2>
          <p className="font-sans text-white/35 text-prose mt-8 max-w-sm leading-relaxed">
            Open to full-time roles, consulting, and interesting problems. I
            respond within 24 hours.
          </p>
        </motion.div>

        {/* Contact rows */}
        <div className="border-t border-white/[0.07]">
          {CONTACT_LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.09 + 0.3, duration: 0.5 }}
              className="group flex items-center justify-between py-5 border-b border-white/[0.07] hover:border-white/15 transition-colors duration-200"
            >
              <span className="font-mono text-label text-white/20 tracking-[0.3em] uppercase w-28">
                {link.label}
              </span>
              <span className="font-sans text-sm text-white/45 group-hover:text-white transition-colors flex-1 text-center">
                {link.value}
              </span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
                className="font-mono text-tag text-red/0 group-hover:text-red transition-colors"
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
