import React from "react";

function Card({ src, dateOfPost, title, description }) {
  return (
    <>
      <div className="border-2 border-yellow-900 mt-6 p-3 flex flex-col gap-2">
        <img src={src} className="" alt="card image" />
        <p className="text-gray-600">{dateOfPost}</p>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </>
  );
}

export default Card;
