import React from "react";
import "./Projects.css";
import Card from "./Card";
function Projects() {
  return (
    <>
      <div className="project_container">
        <Card
          heading="Portfolio Website"
          image="https://images.pexels.com/photos/574080/pexels-photo-574080.jpeg?auto=compress&cs=tinysrgb&w=400"
          para="This Project includes a Single Page website using React. This is the project i have made as an Intern Trainee at Ethnus."
        />
        <Card
          heading="E-Commerce Clone Website"
          image="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=400"
          para="This is also a Project having Single Page website using React. This E-commerce app uses firebase authentication and Integrated React Context API."
        />
        <Card
          heading="Formula-1 Blog Website"
          image="https://images.pexels.com/photos/12795/pexels-photo-12795.jpeg?auto=compress&cs=tinysrgb&w=400"
          para="This Site is Made using Bootstrap and JS. This website shows top 10 F1 drivers in the current Season and much more aot them in form of flash card."
        />
      </div>
      <div className="project_container">
        d
        <Card
          heading="Formula-1 Blog Website"
          image="https://images.pexels.com/photos/12795/pexels-photo-12795.jpeg?auto=compress&cs=tinysrgb&w=400"
          para="This Site is Made using Bootstrap and JS. This website shows top 10 F1 drivers in the current Season and much more aot them in form of flash card."
        />
        <Card
          heading="E-Commerce Clone Website"
          image="https://images.pexels.com/photos/3888151/pexels-photo-3888151.jpeg?auto=compress&cs=tinysrgb&w=400"
          para="This is also a Project having Single Page website using React. This E-commerce app uses firebase authentication and Integrated React Context API."
        />
      </div>
    </>
  );
}

export default Projects;
