import React from 'react';
import { IoLogoGithub } from "react-icons/io";
import { FaMedium } from "react-icons/fa";

import './App.css';

const portfolioData = [
  {picture: "hearthstone.jpg", link: "https://github.com/maxvwalbert/hearthScrape", titleText: "eSports Web Scraper", bodyText: "Developed a script that scraped websites to gather data on eSports oppnenents. Used by Michigan Varsity Athletics program for eSport tournaments. This is a python script that uses beautiful soup framework for scraping."},
  {picture: "bueller.svg", link: "https://github.com/bfreiband/bueller2", titleText: "Bueller", bodyText: "Full stack web application to provide data analytics to professors. Allows students to provide real-time analytics to professors to improve their lecture. Technologies: HTML, CSS, Javascript, and Python. Worked on a colabrative team of two developers"},
];

function Left() {
  return (
    <div id="column1">
      <h1 id="text01">Max Albert</h1>
      <p id="text02">Software Developer / Writer</p>
      <p id="text03">I develop full-stack applications in RX-Java, React, and Swift. I also write blogs on agile development principals. <i>Contact me at maxvwalbert@gmail.com</i></p>
      <ul id="icons01">
        <li><a href="https://github.com/maxvwalbert"><IoLogoGithub /></a></li>
        <li><a href="https://medium.com/@maxvwalbert"><FaMedium /></a></li>
      </ul>
    </div>
  );
}

function Right(props) {
  return (
    <a href={props.link}>
      <div id="project">
        <div id="imageContainer"><img src={props.picture}></img></div>
        <div id="text">
          <h1>{props.titleText}</h1>
          <p>{props.bodyText}</p>
        </div>
    </div>
    </a>
  );
}

function App() {
  return (
    <div id="main">
      <div id="Text">
        <Left />
      </div>
      <div id="Projects">
        {portfolioData.map(project => <Right {...project}/>)}
      </div>
    </div>
  );
}

export default App;
