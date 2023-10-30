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
          </p>{" "}
          <a
            href="https://www.dropbox.com/scl/fi/0bp5j505dwl4c9suck2uy/Nyasha-Tavatya-Software-Developer-CV.docx?rlkey=o9uhmqico8d949sfgg9lzvnok&dl=0"
            target="_blank"
            rel="noreferrer"
            className=" resume btn btn-secondary btn-lg btn-block "
            type="button"
          >
            My Resume
          </a>
        </div>
      </section>

      <section className="projectDisplay">
        <a
          href="https://nyashaweatherapp-js.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <h2 className="mb-5">Project Weather App</h2>
        </a>
        <section className="grid gridTwoColumns">
          <img
            className="projectImages"
            src={IMAGES.WeatherAppTwo}
            alt=""
            href="https://nyashaweatherapp-js.netlify.app/"
            target="_blank"
            rel="noreferrer"
          />

          <h4 className="mt-5">
            I have developed a sleek and user-friendly weather application using
            JavaScript that provides real-time weather information at your
            fingertips. The application boasts a clean and intuitive interface,
            making it easy for users to access the latest weather data for their
            desired locations.
            <br />
            Staying informed about the weather has never been more convenient
            and visually appealing. Users can simply input a city or location
            name, and the application retrieves up-to-date weather conditions,
            including temperature, humidity, wind speed, and a detailed
            forecast. It also features visually appealing icons and graphics to
            represent weather conditions, enhancing the user experience.{" "}
          </h4>
        </section>

        <a
          href="https://nys-pink-dictionary.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="mb-5">Project React Dictionary</h2>
        </a>
        <section className="grid gridTwoColumns">
          <h4 className="mt-5">
            I've developed an innovative dictionary application built with React
            that delivers a seamless and dynamic language reference experience.
            This app combines the power of a dictionary with the flexibility of
            a modern web application.
            <br /> This dictionary app is a valuable resource for students,
            writers, and language enthusiasts, providing an efficient and
            engaging way to explore and expand one's vocabulary.
          </h4>
          <img
            className="projectImages"
            src={IMAGES.PinkDictionaryOne}
            alt=""
          />
        </section>

        <a
          href="https://oneroadtofreedom.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="mb-5">Project Philosophy Blog</h2>{" "}
        </a>
        <section className="grid gridTwoColumns">
          <img className="projectImages" src={IMAGES.OneRoadFive} alt="" />
          <h4 className="mt-5">
            I've meticulously crafted a thought-provoking philosophy blog that
            showcases the power of advanced CSS and HTML, incorporating dynamic
            grid layouts to present philosophical insights in a visually
            engaging manner. <br />
            Utilizing advanced CSS techniques, the layout is responsive, making
            it accessible and visually appealing across various devices. I've
            seamlessly integrated embedded content, enriching the blog with
            multimedia elements.
          </h4>
        </section>

        <a
          href="https://nyasha-swissadventure.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <h2 className="mb-5">Project Responsive Travel Blog</h2>
        </a>
        <section className="grid gridTwoColumns">
          <h4 className="mt-5">
            I've designed a captivating travel guide using responsive HTML and
            CSS, offering a visually appealing and informative resource for
            globetrotters and adventure seekers. This travel guide seamlessly
            adapts to various screen sizes, making it accessible on both
            desktops and mobile devices.{" "}
          </h4>
          <img className="projectImages" src={IMAGES.TravelBlogOne} alt="" />
        </section>
      </section>
    </div>
  );
}
