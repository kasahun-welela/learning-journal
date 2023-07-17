import React from "react";

function Card({ src, dateOfPost, title, description }) {
  return (
    <>
      <div className="hover:scale-105  mt-6 p-3 flex flex-col gap-2 max-w-md">
        <img src={src} className="" alt="card image" />
        <p className="text-gray-600">{dateOfPost}</p>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </>
  );
}

export default Card;
