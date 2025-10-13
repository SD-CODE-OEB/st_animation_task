import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("carousal", "./routes/motion.tsx"),
  route("hero", "./routes/motion01.tsx"),
] satisfies RouteConfig;
