// Deps
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";

// Constants
import { NAV_LINKS } from "~/data";

export const Navbar = () => {
  // States
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hooks
  const { scrollY } = useScroll();
  const location = useLocation();

  // Transforms
  const borderOpacity = useTransform(scrollY, [0, 60], [0, 1]);

  // Effects
  useEffect(() => {
    const u = scrollY.on("change", (v) => setScrolled(v > 40));
    return u;
  }, [scrollY]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={classNames(
          "z-40",
          "fixed",
          "top-0",
          "left-0",
          "right-0",
          "duration-500",
          "transition-all",
          scrolled
            ? classNames("bg-bg/95", "backdrop-blur-sm")
            : "bg-transparent",
        )}
      >
        <motion.div
          className={classNames(
            "h-px",
            "left-0",
            "right-0",
            "absolute",
            "bottom-0",
            "bg-white/10",
          )}
          style={{ opacity: borderOpacity }}
        />
        <div
          className={classNames(
            "px-6",
            "h-16",
            "flex",
            "mx-auto",
            "sm:px-8",
            "md:px-16",
            "max-w-7xl",
            "items-center",
            "justify-between",
          )}
        >
          <NavLink
            to="/"
            className={classNames("group", "flex", "items-center", "gap-2.5")}
          >
            <div
              className={classNames(
                "w-6",
                "h-6",
                "flex",
                "bg-red",
                "items-center",
                "justify-center",
              )}
            >
              <span
                className={classNames(
                  "text-tag",
                  "font-sans",
                  "text-white",
                  "leading-none",
                  "font-extrabold",
                )}
              >
                R
              </span>
            </div>
            <span
              className={classNames(
                "text-xs",
                "font-sans",
                "uppercase",
                "font-medium",
                "text-white/50",
                "tracking-widest",
                "transition-colors",
                "group-hover:text-white",
              )}
            >
              RZIDINC
            </span>
          </NavLink>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden sm:block">
            <ul className={classNames("flex", "items-center", "gap-1")}>
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      classNames(
                        "px-4",
                        "py-2",
                        "block",
                        "text-tag",
                        "relative",
                        "font-mono",
                        "uppercase",
                        "duration-200",
                        "tracking-widest",
                        "transition-colors",
                        isActive
                          ? "text-white"
                          : "text-white/35 hover:text-white/70",
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.label}
                        {isActive && (
                          <motion.span
                            layoutId="nav-indicator"
                            className={classNames(
                              "h-px",
                              "left-4",
                              "right-4",
                              "bg-red",
                              "bottom-0",
                              "absolute",
                            )}
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

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className={classNames(
              "flex",
              "sm:hidden",
              "flex-col",
              "gap-1.5",
              "items-center",
              "justify-center",
              "w-8",
              "h-8",
            )}
          >
            <span
              className={classNames(
                "w-5",
                "h-px",
                "bg-white/70",
                "transition-all",
                "duration-300",
                menuOpen ? "rotate-45 translate-y-[7px]" : "",
              )}
            />
            <span
              className={classNames(
                "w-5",
                "h-px",
                "bg-white/70",
                "transition-all",
                "duration-300",
                menuOpen ? "opacity-0" : "",
              )}
            />
            <span
              className={classNames(
                "w-5",
                "h-px",
                "bg-white/70",
                "transition-all",
                "duration-300",
                menuOpen ? "-rotate-45 -translate-y-[7px]" : "",
              )}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className={classNames(
              "fixed",
              "top-16",
              "left-0",
              "right-0",
              "z-39",
              "sm:hidden",
              "bg-bg/95",
              "backdrop-blur-sm",
              "border-b",
              "border-white/[0.07]",
            )}
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      className={({ isActive }) =>
                        classNames(
                          "flex",
                          "px-6",
                          "py-4",
                          "font-mono",
                          "text-tag",
                          "uppercase",
                          "tracking-widest",
                          "border-b",
                          "border-white/[0.05]",
                          "transition-colors",
                          isActive
                            ? "text-white border-l-2 border-l-red pl-5"
                            : "text-white/40",
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
