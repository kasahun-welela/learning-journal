import React from "react";
import NavBar from "../components/NavBar";
import data from "../datas";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Detail() {
  return (
    <>
      {" "}
      <NavBar />
      <div className="mx-6">
        <div className="md:w-[70%] mx-auto">
          <p className="text-gray-600 text-sm md:text-base mt-7 ">
            JULY 23,2022
          </p>
          <h1 className="text-2xl md:text-4xl font-bold my-4">
            My new journey as a bootcamp student.
          </h1>
          <p>
            After several months of learning in the Frontend Developer Career
            Path, I've made the big jump over to the Bootcamp to get expert code
            reviews of my Solo Projects projects and meet like-minded peers.
          </p>
        </div>
        <img
          src="./article-image-hero.png"
          alt="image"
          //   className="w-11/12 mx-auto my-6 md:h-[600px] "
          className="w-11/12 mx-auto my-6 md:h-[600px]"
        />

        <div className="mt-6 md:w-[70%] mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold">
            How I stay committed to learning
          </h3>
          <p className="mt-2">
            I like to think of myself as a lifelong learner. I used to spend
            hours and hours learning, then try to create simple projects using
            what I learned or work new techniques into existing projects.
          </p>
          <br></br>
          <p>
            {" "}
            While that was fun, I felt like it would be helpful to share what I
            was learning and most things about my journey with the world.
          </p>
          <h3 className="text-3xl md:text-4xl font-bold mt-3">
            How I got started{" "}
          </h3>
          <p className="mt-2">
            I started simple and gradually grew my learning journal site. I
            would take notes about what I was learning. After each learning
            session, I'd use my notes to not only reflect on what I learned but
            also write short summaries of what I learned using my own words.
          </p>
          <br></br>
          <p>
            That helped me grok what I was learning, and I realized that posting
            my learning summaries was also helping others learn and stay
            motivated.
          </p>
        </div>

        <h3 className="text-3xl text-center md:text-4xl font-bold mt-2">
          Recent posts
        </h3>
        <div className="md:grid grid-cols-3 gap-2 md:w-3/4 mx-auto ">
          {data.slice(0, 3).map((value, key) => (
            <Card
              key={value.id}
              title={value.title}
              description={value.description}
              dateOfPost={value.dateOfPost}
              src={value.src}
            />
          ))}
        </div>
      </div>{" "}
      <Footer />
    </>
  );
}

export default Detail;
