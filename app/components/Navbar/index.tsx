import { type FC, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { NAV_LINKS } from "~/data";

export const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const borderOpacity = useTransform(scrollY, [0, 60], [0, 1]);

  useEffect(() => {
    const u = scrollY.on("change", (v) => setScrolled(v > 40));
    return u;
  }, [scrollY]);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-bg/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-white/10"
        style={{ opacity: borderOpacity }}
      />
      <div className="max-w-6xl mx-auto px-8 md:px-16 flex items-center justify-between h-16">
        <NavLink to="/" className="group flex items-center gap-2.5">
          {/* Logo mark — a simple geometric R */}
          <div className="w-6 h-6 bg-red flex items-center justify-center">
            <span className="font-sans text-white text-tag font-extrabold leading-none">
              R
            </span>
          </div>
          <span className="font-sans text-white/50 text-xs font-medium tracking-widest uppercase group-hover:text-white transition-colors">
            rzid.dev
          </span>
        </NavLink>

        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `relative px-4 py-2 font-mono text-tag tracking-widest uppercase transition-colors duration-200 block ${
                      isActive
                        ? "text-white"
                        : "text-white/35 hover:text-white/70"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-4 right-4 h-px bg-red"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 35,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};
