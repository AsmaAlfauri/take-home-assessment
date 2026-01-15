import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (<>
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
</>
  );
};

export default DarkModeToggle;
