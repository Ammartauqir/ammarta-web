import React from "react";
import { useTheme } from "../context/ThemeContext";
import Icon from "./Icon";
export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="icon-button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Icon name={isDark ? "sun" : "moon"} size={18} />
    </button>
  );
}
