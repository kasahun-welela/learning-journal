import { useEffect, useState } from "react";

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    const isDarkMode = darkMode ? "true" : "false";
    localStorage.setItem("darkMode", isDarkMode);

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex justify-between items-center p-2 bg-white py-6 font-bold dark:bg-slate-900 dark:text-white">
      <div className="flex items-center md:mx-16">
        <img src="/logo.png" alt="logo" />
        <h1 className="text-xl">My Learning Journal</h1>
      </div>
      <div>
        <ul className="flex md:gap-7 gap-2">
          <li>
            <a href="/">HOME</a>{" "}
          </li>
          <li>
            <a href="/about">ABOUT ME</a>{" "}
          </li>
          <li>
            <button onClick={toggleDarkMode} className="md:mr-16">
              {darkMode ? (
                <img src="/moon-fill.png" />
              ) : (
                <img src="/sun-fill.png" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
