// Deps
import classNames from "classnames";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Constants
import { NAV_LINKS } from "~/data";

export const Navbar = () => {
  // States
  const [scrolled, setScrolled] = useState(false);

  // Hooks
  const { scrollY } = useScroll();

  // Transforms
  const borderOpacity = useTransform(scrollY, [0, 60], [0, 1]);

  // Effects
  useEffect(() => {
    const u = scrollY.on("change", (v) => setScrolled(v > 40));
    return u;
  }, [scrollY]);

  return (
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
          "px-8",
          "h-16",
          "flex",
          "mx-auto",
          "md:px-16",
          "max-w-6xl",
          "items-center",
          "justify-between",
        )}
      >
        <NavLink
          to="/"
          className={classNames("group", "flex", "items-center", "gap-2.5")}
        >
          {/* Logo mark — a simple geometric R */}
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

        <nav aria-label="Main navigation">
          <ul className={classNames("flex items-center gap-1")}>
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
      </div>
    </motion.header>
  );
};
