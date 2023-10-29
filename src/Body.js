import React from "react";
import "./Body.css";
import introimg from "./introimg.jpg";

import IMAGES from "./images/index";

export default function Body() {
  return (
    <div className="container">
      <section className="grid gridTwoColumns">
        <div>
          <img src={introimg} alt="" className="introImage rounded" />
        </div>{" "}
        <div className="introParagraph">
          {" "}
          <h2>About Me</h2>
          <p>
            {" "}
            Hello, I am a passionate front-end developer with a background in
            healthcare junior and senior clinician roles. To diversify the way I
            enrich lifestyles and the health of others, I have immersed myself
            in software engineering, beginning with front-end development. I am
            currently seeking an extraordinary opportunity to bring bridge my
            newly gained front-end skills and my requisite clinical skills. With
            a unique knowledge base, I am confident that I will be an asset in
            this role.{" "}
          </p>
          <p>
            I am passionate about singing 🎤, travelling 🛫, trying new food
            🥙🥘, helping others 🤝 and much more. Everyday is a chance to do
            amazing things.
          </p>
          <p>
            I am currently in the design stage of my application for a handy
            blog for those at home needing a little extra help.
          </p>
          <p>
            I am currently based in <strong>Birmingham, UK </strong>
          </p>
        </div>
      </section>

      <section className="projectDisplay">
        <a
          href="https://nyashaweatherapp-js.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <h2>Project JavaScript Weather App</h2>
        </a>
        <section className="grid gridThreeColumns">
          <img src={IMAGES.WeatherAppOne} alt="" />
          <img src={IMAGES.WeatherAppTwo} alt="" />
          <img src={IMAGES.WeatherAppThree} alt="" />
        </section>

        <a
          href="https://nys-pink-dictionary.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <h2>Project React Dictionary</h2>
        </a>
        <section className="grid gridThreeColumns">
          <img src={IMAGES.PinkDictionaryOne} alt="" />
          <img src={IMAGES.PinkDictionaryTwo} alt="" />
        </section>

        <a
          href="https://oneroadtofreedom.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <h2>Project Philosophy Blog</h2>{" "}
        </a>
        <section className="grid gridThreeColumns">
          <img src={IMAGES.OneRoadOne} alt="" />
          <img src={IMAGES.OneRoadTwo} alt="" />{" "}
          <img src={IMAGES.OneRoadThree} alt="" />{" "}
          <img src={IMAGES.OneRoadFour} alt="" />
        </section>

        <a
          href="https://nyasha-swissadventure.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <h2>Project Responsive Travel Blog</h2>
        </a>
        <section className="grid gridThreeColumns">
          <img src={IMAGES.TravelBlogOne} alt="" />
          <img src={IMAGES.TravelBlogTwo} alt="" />{" "}
          <img src={IMAGES.TravelBlogThree} alt="" />{" "}
          <img src={IMAGES.TravelBlogFour} alt="" />{" "}
          <img src={IMAGES.TravelBlogFive} alt="" />
        </section>
      </section>
    </div>
  );
}
