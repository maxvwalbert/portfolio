import React from 'react';
import SimpleCard from './projectCard.js'
import { IoLogoGithub } from "react-icons/io";
import { FaMedium } from "react-icons/fa";
import Card from '@material-ui/core/Card';

import './App.css';

const portfolioData = [
  {picture: "favicon.svg", link: "https://github.com/maxvwalbert/portfolio", titleText: "Portfolio Website", bodyText: "A simple website to store all my creations. This was my introduction learning exercise into react. I used create-react-app and the continuous delivery platform Vercel to bring this to life. I also used Javascript, CSS, basic HTML as well."},
  {picture: "pair.svg", link: "https://hackernoon.com/the-ultimate-guide-to-pair-programming-b606625bc784", titleText: "Pair Programming", bodyText: "Hackernoon blog post on agile development principals: Pair Programming. This blog post is a deep dive into the pros and cons of pair programming. It was co-authored by a best-selling tech writer Rich Sheridan and built on \"menlonian\" ideals of agile principals. This article alone was read over 25,000 times!"},
  {picture: "hearthstone.jpg", link: "https://github.com/maxvwalbert/hearthScrape", titleText: "eSports Web Scraper", bodyText: "Developed a script that scraped websites to gather data on eSports oppnenents. Used by Michigan Varsity Athletics program for eSport tournaments. This is a python script that uses beautiful soup framework for scraping."},
  {picture: "bueller.svg", link: "https://github.com/bfreiband/bueller2", titleText: "Bueller", bodyText: "Full stack web application to provide data analytics to professors. Allows students to provide real-time analytics to professors to improve their lecture. Technologies: HTML, CSS, Javascript, and Python. Worked on a colabrative team of two developers"},
  {picture: "estimation.svg", link: "https://medium.com/better-programming/a-junior-developer-explains-task-estimation-cf4b16b70f6b", titleText: "Task Estimation", bodyText: "Medium blog post on agile development principals: task estimation. This blog post was a top story on Medium and was published by the prestigious collection Better Programming. This recieved over 1K reads!"},
];

function Left() {
  return (
    <div id="column1">
      <h1 id="text01">Max Albert</h1>
      <p id="text02">Software Developer</p>
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
    <div id="cardDiv">
      <a href={props.link}>
        <Card variant="outlined">
          <div id="project">
            <div id="imageContainer"><img src={props.picture}></img></div>
            <div id="text">
              <h1>{props.titleText}</h1>
              <p>{props.bodyText}</p>
            </div>
          </div>
        </Card>
      </a>
      <div style={{height: "20px"}}></div>
    </div>
  );
}

function App() {
  return (
    <div id="main">
      <div id="Text">
        <Left />
      </div>
      <div id="Projects">
        <div style={{height: "10px"}}></div>
        {portfolioData.map(project => <Right {...project}/>)}
      </div>
    </div>
  );
}

export default App;
