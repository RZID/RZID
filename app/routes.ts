import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("pages/Home/index.tsx"),
  route("experience", "pages/Experience/index.tsx"),
  route("skills", "pages/Skills/index.tsx"),
  route("contact", "pages/Contact/index.tsx"),
] satisfies RouteConfig;
