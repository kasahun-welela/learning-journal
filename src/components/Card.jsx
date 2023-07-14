import React from "react";

function Card() {
  return (
    <div className="border-2 border-x-yellow-900 mt-6 p-3 flex flex-col gap-2">
      <img src="./blog-image-06.png" className="" alt="card image" />
      <p className="text-gray-600">JULY 23, 2023</p>
      <h3 className="text-xl font-bold">Blog one</h3>
      <p className="text-gray-600">
        I'm excited to start a new learning journey as a Scrimba Bootcamp
        student! After several months of learning in the Frontend Developer
        Career Path.
      </p>
    </div>
  );
}

export default Card;
