import React from "react";

function Hero() {
  return (
    <div className="relative">
      <img
        src="./article-image-hero.png"
        alt="hero image"
        className="w-full relative"
      />
      <div className="absolute bottom-0 right-0 text-white p-3">
        <p>JULY 23, 2022</p>
        <h1 className="text-3xl font-bold">
          My new journey as a bootcamp student.
        </h1>
        <p>
          After several months of learning in the Frontend Developer Career
          Path, I've made the big jump over to the Bootcamp to get expert code
          reviews of my Solo Projects projects and meet like-minded peers.
        </p>
      </div>
    </div>
  );
}

export default Hero;
