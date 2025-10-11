import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("animation", "./routes/motion.tsx"),
] satisfies RouteConfig;
