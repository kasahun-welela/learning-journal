import { useEffect, useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  // useEffect(() => {
  //   const isDarkMode = darkMode ? "true" : "false";
  //   localStorage.setItem("darkMode", isDarkMode);
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [darkMode]);
  return (
    <div className="bg-gray-50 dark:bg-slate-800 dark:text-slate-300">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
