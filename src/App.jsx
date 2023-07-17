import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
