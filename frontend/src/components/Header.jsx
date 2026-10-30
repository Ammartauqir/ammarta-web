import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goHomeTop = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const goHash = (hash) => {
    navigate({ pathname: "/", hash });
    setIsMenuOpen(false);
  };

  const go = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full shadow z-50 duration-300 backdrop-blur-sm bg-white/80 dark:bg-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300">
          Muhammad Ammar Tauqir | Portfolio
        </Link>

        <button
          type="button"
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-colors"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <nav className="hidden md:flex items-center space-x-4" aria-label="Primary">
          <button type="button" onClick={goHomeTop} className="hover:underline">Home</button>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <button type="button" onClick={() => goHash("#about")} className="hover:underline">About me</button>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <button type="button" onClick={() => goHash("#projects")} className="hover:underline">Projects</button>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <button type="button" onClick={() => go("/blog")} className="hover:underline">Blog</button>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <button type="button" onClick={() => go("/sandbox")} className="hover:underline">Sandbox</button>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <button type="button" onClick={() => go("/contact")} className="hover:underline">Contact</button>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <ThemeToggle />
        </nav>

        <div
          className={`md:hidden fixed top-[72px] left-0 w-full bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="flex flex-col p-4 space-y-2" aria-label="Mobile">
            <button type="button" onClick={goHomeTop} className="hover:underline text-left py-1">Home</button>
            <div className="h-px bg-gray-200 dark:bg-gray-700" />
            <button type="button" onClick={() => goHash("#about")} className="hover:underline text-left py-1">About me</button>
            <div className="h-px bg-gray-200 dark:bg-gray-700" />
            <button type="button" onClick={() => goHash("#projects")} className="hover:underline text-left py-1">Projects</button>
            <div className="h-px bg-gray-200 dark:bg-gray-700" />
            <button type="button" onClick={() => go("/blog")} className="hover:underline text-left py-1">Blog</button>
            <div className="h-px bg-gray-200 dark:bg-gray-700" />
            <button type="button" onClick={() => go("/sandbox")} className="hover:underline text-left py-1">Sandbox</button>
            <div className="h-px bg-gray-200 dark:bg-gray-700" />
            <button type="button" onClick={() => go("/contact")} className="hover:underline text-left py-1">Contact</button>
            <div className="h-px bg-gray-200 dark:bg-gray-700" />
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
