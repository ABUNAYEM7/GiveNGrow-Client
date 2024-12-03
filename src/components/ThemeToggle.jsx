import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme" || light));

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <svg
        className="swap-on fill-current w-10 h-10 text-yellow-500" // Sun Icon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 0 1 10 10c0 1.1-.2 2.2-.5 3.2-.1.2-.1.4-.3.6-.2.3-.5.4-.7.4s-.5-.1-.7-.4c-.1-.2-.2-.4-.3-.6-.3-1-.5-2.1-.5-3.2a8 8 0 0 0-8-8c-1.1 0-2.2.2-3.2.5-.2.1-.4.2-.6.3-.3.2-.4.5-.4.7s.1.5.4.7c.2.1.4.2.6.3C9.8 6 10.9 6 12 6c2.2 0 4 1.8 4 4s-1.8 4-4 4c-.7 0-1.4-.1-2-.3-.2-.1-.4-.2-.6-.3-.3-.2-.5-.5-.5-.7s.1-.5.4-.7c.2-.1.4-.2.6-.3C10.6 12 11.2 12 12 12c1.1 0 2-.9 2-2s-.9-2-2-2z" />
      </svg>

      <svg
        className="swap-off fill-current w-10 h-10 text-gray-800" 
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.76 4.84a9 9 0 0 0 12.48 12.48A6 6 0 0 1 17 18h-2a6 6 0 0 1-6-6V7a6 6 0 0 1 6-6h2a6 6 0 0 1 1.24 2.16z" />
      </svg>
    </label>
  );
};

export default ThemeToggle;
