import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen pt-28 pb-16 px-4 flex flex-col items-center justify-center text-center bg-zinc-200 dark:bg-zinc-950">
    <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-3">Page not found</h1>
    <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-md">
      That route does not exist. Head back to the portfolio home.
    </p>
    <Link
      to="/"
      className="px-5 py-2 rounded bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
    >
      Go home
    </Link>
  </div>
);

export default NotFound;
