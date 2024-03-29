import React from "react";

function Hero() {
  return (
    <div className="relative mt-1">
      <img
        src="./article-image-hero.png"
        alt="hero image"
        className="w-full relative md:h-[600px]"
      />
      <div className="absolute bottom-0 left-0 text-white p-3 md:w-1/3 md:ml-32">
        <p className="text-sm dark:text-slate-300">JULY 23, 2023</p>
        <h1 className="text-2xl md:text-4xl font-bold dark:text-slate-300">
          My new journey as a bootcamp student.
        </h1>
        <p className="text-sm md:text-xl dark:text-slate-300">
          After several months of learning in the Frontend Developer Career
          Path, I've made the big jump over to the Bootcamp to get expert code
          reviews of my Solo Projects projects and meet like-minded peers.
        </p>
      </div>
    </div>
  );
}

export default Hero;
