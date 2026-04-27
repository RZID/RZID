import { type FC, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function useScramble(text: string, trigger: boolean) {
  const [out, setOut] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!trigger) return;
    let i = 0;
    clearInterval(ref.current!);
    ref.current = setInterval(() => {
      setOut(
        text
          .split("")
          .map((ch, idx) => {
            if (ch === " ") return " ";
            if (idx < i) return text[idx];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join(""),
      );
      if (i >= text.length) clearInterval(ref.current!);
      i += 0.6;
    }, 28);
    return () => clearInterval(ref.current!);
  }, [trigger, text]);

  return out;
}

export const HeroSection: FC = () => {
  const [go, setGo] = useState(false);
  const name = useScramble("RAMADHANU", go);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 700], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const t = setTimeout(() => setGo(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      aria-label="Introduction"
      className="scanlines relative min-h-screen flex flex-col justify-end pb-24 overflow-hidden bg-bg"
    >
      {/* Large background index number — decorative */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 -right-8 md:right-8 -translate-y-1/2 font-sans font-extrabold text-deco text-white/2.5 leading-none select-none pointer-events-none z-0"
      >
        01
      </div>

      {/* Thin vertical red line accent */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="absolute left-8 md:left-16 top-0 bottom-0 w-px bg-red/30 origin-top"
      />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 px-12 md:px-24 max-w-7xl"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-red animate-pulse" />
          <span className="font-mono text-label tracking-[0.35em] text-white/40 uppercase">
            Full Stack Engineer · Jakarta, ID
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-sans font-extrabold text-hero leading-[0.88] tracking-tight text-white"
          >
            {name}
          </motion.h1>
        </div>

        {/* Subtitle row — asymmetric split */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-10"
        >
          <p className="max-w-sm text-white/40 text-prose leading-relaxed font-sans font-light">
            I build production-grade systems — microservices, cross-platform
            apps, and the infrastructure that keeps them alive. Five years, zero
            compromises.
          </p>

          <div className="flex items-center gap-5 shrink-0">
            <a
              href="mailto:rdhanurzid@gmail.com"
              className="group relative overflow-hidden px-6 py-3 bg-red font-sans text-tag font-bold tracking-widest uppercase text-white hover:bg-red-hover transition-colors"
            >
              Hire me
            </a>
            <a
              href="https://github.com/RZID"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-tag text-white/35 tracking-widest uppercase hover:text-white transition-colors border-b border-transparent hover:border-white/30 pb-0.5"
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
          className="flex gap-10 mt-14 pt-10 border-t border-white/[0.07]"
        >
          {[
            { num: "5+", label: "Years shipped" },
            { num: "3", label: "Active roles" },
            { num: "∞", label: "Stacks mastered" },
          ].map(({ num, label }) => (
            <div key={label}>
              <div className="font-sans text-3xl font-extrabold text-white leading-none">
                {num}
              </div>
              <div className="font-mono text-label text-white/30 tracking-widest uppercase mt-1.5">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        aria-hidden="true"
        className="absolute bottom-10 right-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-[color:var(--color-red)]/50 to-transparent"
        />
        <span className="font-mono text-2xs text-white/20 tracking-[0.3em] uppercase rotate-90 origin-center mt-3">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};
