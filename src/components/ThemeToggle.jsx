import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="flex justify-center items-center ">
      <div
        className="relative w-16 h-8 bg-secondary rounded-full flex items-center"
        onClick={toggleTheme}
        style={{ cursor: "pointer" }}
      >
        <motion.div
          className="absolute w-6 h-6 rounded-full flex items-center justify-center shadow-md"
          style={{
            backgroundColor: theme === "light" ? "#FFD700" : "#4B6CFF",
          }}
          animate={{
            x: theme === "light" ? 2 : 26,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {theme === "light" ? (
            <motion.span
              key="sun"
              role="img"
              aria-label="sun"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              ☀️
            </motion.span>
          ) : (
            <motion.span
              key="moon"
              role="img"
              aria-label="moon"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              🌙
            </motion.span>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ThemeToggle;
