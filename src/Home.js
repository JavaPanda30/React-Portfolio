import React from "react";
import ImageRound from "./ImageRound";
import HeadingMain from "./HeadingMain";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="home_row">
        <HeadingMain
          h1="Hello"
          h2="I am Suyash Pandey"
          p="I am Currently a undergraduate student. I have a keen Interest in Modern Technologies including Web FrontEnd and Backend, Machine Learning along with various . I have done variety of projects on Web Development technologies."
        />
        <ImageRound image="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400" />
      </div>
      <div className="home_row">
        <ImageRound image="https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?auto=compress&cs=tinysrgb&w=400" />
        <HeadingMain  h1='Learning' h2='Web Technologies' p='I belive in learning by doing and by following this doing project is the main part of having a strong Concept grasp .I aim to acheive such profeciency by making a Variety of projects.'/>
      </div>
    </>
  );
}

export default Home;
