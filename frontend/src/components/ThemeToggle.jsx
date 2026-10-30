import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
