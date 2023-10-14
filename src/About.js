import React from "react";
import "./About.css";
import HeadingMain from "./HeadingMain";
function About() {
  return (
    <div className="about">
      <HeadingMain
        h1="About Me"
        p="I am a Passionate Web developer. I have a strong background in data structures and algorithms,
      and I'm proficient in Java and C++. My goal is to continuously improve my problem-solving skills along with my development Skills."
      />
      <HeadingMain
        h1="Other Activities"
        h2="and Hobbies"
        p="
        I have a deep interest in topics like Operating Systems, Computer Networks, and Database Management Systems. I'm
        always eager to learn more and enhance my knowledge in these areas.
        In addition to my technical skills, I also focus on improving my communication skills and my ability to work
        effectively in a team. Apart from these I also like to read Personal Growth Books.Atlast as you have guessed SkyBlue is my favourite color."
      />
    </div>
  );
}

export default About;
