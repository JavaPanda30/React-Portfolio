import React from "react";
import ImageRound from "./ImageRound";
import HeadingMain from "./HeadingMain";
import resume from "../Files/Resume_SuyashPandey.pdf"
import "./Home.css";
function Home() {
  return (
    <div className="home_container">
      <div className="home_row">
        <div className="home_column">
          <HeadingMain
            h1="Hello"
            h2="I am Suyash Pandey"
            p="I am currently an undergraduate student. I have a keen interest in modern technologies including web frontend and backend, machine learning, and various other areas. I have worked on a variety of projects using web development technologies."
          />
        </div>
        <div className="home_column">
          <ImageRound image="mainHomePageimg.jpg" />
        </div>
      </div>
      <div className="resume" align="center">
        <a href={resume} download="SuyashPandeyResume.pdf" target="_blank" rel="noreferrer">
          <button>Download Resume</button>
        </a>
      </div>
      <div className="home_row">
        <div className="home_column">
          <ImageRound image="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=400" />
        </div>
        <div className="home_column">
          <HeadingMain
            h1="Learning"
            h2="Web Technologies"
            p="I believe in learning by doing, striving to attain proficiency through active engagement in diverse projects. By immersing myself in hands-on experiences across various domains, I aim to cultivate practical skills and deepen my understanding of real-world applications."
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
