import React from "react";
import "./About.css";
import HeadingMain from "./HeadingMain";

function About() {
  return (
    <div className="about">
      <HeadingMain
        h1="About Me"
        p="I am a passionate web developer with a strong background in data structures and algorithms. I am proficient in Java Language. My goal is to continuously improve my problem-solving skills along with my development skills."
      />
      <HeadingMain
        h1="Other Activities and Hobbies"
        p="I have a deep interest in topics like Operating Systems, Computer Networks, and Database Management Systems. I'm always eager to learn more and enhance my knowledge in these areas. In addition to my technical skills, I also focus on improving my communication skills and my ability to work effectively in a team. Apart from these, I also enjoy reading personal growth books. Lastly, SkyBlue is my favorite color."
      />
      <HeadingMain
        h1="My Tech Stack"
        p="HTML, CSS, JavaScript, MongoDB, ReactJS, ExpressJS, NodeJS, Bootstrap, JQuery, MaterialUI, MySql. "
      />
      <HeadingMain
      h1="Currently Learning"
      p="Docker, Socket.io and Firebase Integration with NodeJS apps."
    />
    </div>
    
  );
}

export default About;
