import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1>Welcome to the Home Page</h1>

      <div className="flex flex-col gap-2">
        <Link to="/hero" className="text-blue-500 hover:underline">
          Go to Hero Page
        </Link>
        <Link to="/carousal" className="text-blue-500 hover:underline">
          Go to Carousal Page
        </Link>
      </div>
    </div>
  );
}
