import React from "react";

export default function NavBar() {
  return (
    <div className="flex justify-between bg-rose-500 p-6">
      <div>
        <h1>My Learning Journal</h1>
      </div>
      <div>
        <ul className="flex gap-7">
          <li>HOME</li>
          <li>ABOUT ME</li>
        </ul>
      </div>
    </div>
  );
}
