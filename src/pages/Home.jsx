import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

import data from "../datas";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <NavBar />
      <Hero />

      {data.map((value) => (
        <Card
          key={value.id}
          title={value.title}
          description={value.description}
          dateOfPost={value.dateOfPost}
          src={value.src}
        />
      ))}
    </>
  );
}

export default Home;
