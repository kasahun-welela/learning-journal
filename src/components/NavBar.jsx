import React from "react";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center p-2 bg-white py-6 font-bold">
      <div className="flex items-center md:mx-16">
        <img src="./logo.png" alt="logo" />
        <h1 className="text-xl">My Learning Journal</h1>
      </div>
      <div>
        <ul className="flex md:gap-7 gap-2">
          <li>
            <a href="/">HOME</a>{" "}
          </li>
          <li>
            <a className="md:mr-16" href="/about">
              ABOUT ME
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
