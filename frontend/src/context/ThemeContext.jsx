import React, { createContext, useContext, useEffect, useState } from "react";
const ThemeContext = createContext({ isDark: true, toggleTheme: () => {} });
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    try {
      return localStorage.getItem("theme") !== "light";
    } catch {
      return true;
    }
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = isDark ? "dark" : "light";
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* Storage can be disabled. */
    }
  }, [isDark]);
  return (
    <ThemeContext.Provider
      value={{ isDark, toggleTheme: () => setIsDark((value) => !value) }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => useContext(ThemeContext);
