import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <div className={isDark ? "dark" : "App"}>
      <h1 className="customh1 dark:bg-dark_bg_1">
        <p className="text-black dark:text-white">Welcome to frontend</p>
      </h1>
      <button
        className="bg-blue-300 p-3 rounded-md"
        onClick={() => setIsDark((prev) => !prev)}
      >
        Switch For {isDark ? "LIGHT" : "DARK"}
      </button>
    </div>
  );
}

export default App;
