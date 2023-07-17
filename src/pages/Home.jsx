import React from "react";
import Hero from "../components/Hero";
import data from "../datas";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <Hero />
      <div className="md:grid grid-cols-3 gap-2 md:w-3/4 mx-auto ">
        {data.map((value) => (
          <Card
            key={value.id}
            title={value.title}
            description={value.description}
            dateOfPost={value.dateOfPost}
            src={value.src}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
