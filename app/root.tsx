// Deps
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
} from "react-router";
import classNames from "classnames";

// Styles
import "~/assets/styles/index.css";

// Components
import { Navbar } from "~/components/Navbar";
import { GrainOverlay } from "~/components/GrainOverlay";
import { CustomCursor } from "~/components/CustomCursor";

// Types
import type { Route } from "./+types/root";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&display=swap",
  },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ── SEO ── */}
        <title>Ramadhanu — Full Stack Engineer, Jakarta</title>
        <meta
          name="description"
          content="Ramadhanu is a Full Stack Engineer with 5+ years of experience building scalable microservices, cross-platform apps, and production infrastructure. Based in Jakarta, Indonesia."
        />
        <meta
          name="keywords"
          content="Full Stack Engineer, NestJS, React, React Native, Node.js, TypeScript, Jakarta, Software Engineer, Microservices"
        />
        <meta name="author" content="Ramadhanu" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rzidinc.com" />

        {/* ── Open Graph ── */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.rzidinc.com" />
        <meta property="og:title" content="Ramadhanu — Full Stack Engineer" />
        <meta
          property="og:description"
          content="5+ years building end-to-end products. NestJS, React, React Native, AWS, Docker. Based in Jakarta."
        />
        <meta
          property="og:image"
          content="https://www.rzidinc.com/og-image.jpg"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Ramadhanu" />

        {/* ── Twitter Card ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ramadhanu — Full Stack Engineer" />
        <meta
          name="twitter:description"
          content="5+ years building end-to-end products. NestJS, React, React Native, AWS, Docker."
        />
        <meta
          name="twitter:image"
          content="https://www.rzidinc.com/og-image.jpg"
        />

        {/* ── JSON-LD Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ramadhanu",
              url: "https://www.rzidinc.com",
              email: "rdhanurzid@gmail.com",
              telephone: "+62-811-66-4233",
              jobTitle: "Full Stack Engineer",
              description:
                "Full Stack Engineer with 5+ years experience in Node.js, React, NestJS, and cloud infrastructure.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Jakarta Barat",
                addressRegion: "DKI Jakarta",
                addressCountry: "ID",
              },
              sameAs: [
                "https://github.com/RZID",
                "https://www.linkedin.com/in/rama-ramadhanu/",
                "https://www.rzidinc.com",
              ],
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "Node.js",
                "NestJS",
                "React",
                "React Native",
                "Next.js",
                "AWS",
                "Docker",
                "Redis",
                "RabbitMQ",
                "PostgreSQL",
                "Linux",
                "Microservices",
                "REST API",
              ],
            }),
          }}
        />

        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

const App = () => {
  return (
    <div className={classNames("bg-bg", "min-h-screen")}>
      <GrainOverlay />
      <CustomCursor />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer
        className={classNames(
          "px-6",
          "py-8",
          "border-t",
          "sm:px-8",
          "md:px-16",
          "md:py-10",
          "border-white/6",
        )}
      >
        <div
          className={classNames(
            "flex",
            "mx-auto",
            "max-w-7xl",
            "items-center",
            "justify-between",
            "2xl:max-w-7xl",
          )}
        >
          <span
            className={classNames(
              "text-tag",
              "font-mono",
              "uppercase",
              "text-white/20",
              "tracking-widest",
            )}
          >
            © {new Date().getFullYear()} Ramadhanu
          </span>
          <span
            className={classNames(
              "text-tag",
              "font-mono",
              "uppercase",
              "text-white/10",
              "tracking-widest",
            )}
          >
            Jakarta, ID
          </span>
        </div>
      </footer>
    </div>
  );
};

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => {
  let message = "404";
  let details = "This page doesn't exist.";

  if (isRouteErrorResponse(error)) {
    message = String(error.status);
    details = error.status === 404 ? "Page not found." : error.statusText;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
  }

  return (
    <main
      className={classNames(
        "flex",
        "px-8",
        "bg-bg",
        "min-h-screen",
        "items-center",
        "justify-center",
      )}
    >
      <div>
        <p
          className={classNames(
            "mb-4",
            "text-tag",
            "uppercase",
            "font-mono",
            "text-red",
            "tracking-widest",
          )}
        >
          Error
        </p>
        <h1
          className={classNames(
            "mb-4",
            "font-sans",
            "text-giant",
            "text-white",
            "leading-none",
            "font-extrabold",
          )}
        >
          {message}
        </h1>
        <p className={classNames("text-white/30", "font-mono", "text-sm")}>
          {details}
        </p>
      </div>
    </main>
  );
};

export default App;
