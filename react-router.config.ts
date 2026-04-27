import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: ["/", "/experience", "/skills", "/contact"],
} satisfies Config;
