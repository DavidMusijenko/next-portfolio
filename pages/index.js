import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import mainPic from "../public/mainPic.png";
import Image from "next/image";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {};

const originalColors = [
  "#CA67FB",
  "white",
  "#15202b",
  "#CA67FB",
  "#d88aff",
  "#CA67FB",
];

const Navbar = () => (
  <div className="icons">
    <div class="absolute top-1 right-3 z-10">
      <div class=" w-9 h-9 mt-10">
        <a href="#Contact">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </a>
      </div>
      <div class="mt-7 -ml-4">
        <a href="https://github.com/DavidMusijenko/">
          <Image src="/github.svg" alt="GitHub" height={70} width={70} />
        </a>
      </div>

      <div class="mt-7 pl-0.5">
        <a href="https://www.linkedin.com/in/david-musijenko//">
          <Image src="/linkedin.png" alt="GitHub" height={31} width={31} />
        </a>
      </div>
    </div>
  </div>
);

const PageOne = () => (
  <div className="section">
    <Navbar />

    <video
      className="video-element"
      poster="/mainPic.png"
      autoPlay
      loop
      muted
      playsInline
      data-keepplaying
    >
      <source src="/mainVideo.mp4" type="video/mp4" />
      <source
        src="/mobile.mp4"
        type="video/mp4"
        media="only screen and (max-width: 440px)"
      />
    </video>
  </div>
);

const PageTwo = () => (
  <div className="section">
    <div className="clean">
      <h2 className="clean-text">*even without any UI libraries</h2>

      <Image src="/clean.png" alt="Clean UI" width={1000} height={1000} />
    </div>
    <div className="shop-one">
      <picture>
        <source media="(max-width: 440px)" srcset="/shopm.png" />
        <img src="/shop1.png" alt="e-commerce store" />
      </picture>
    </div>

    <TechStack />
  </div>
);

const TechStack = () => (
  <div className="collapse">
    <input type="checkbox" className="peer" />
    <div className="collapse-title bg-[#CA67FB] text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
      What tech stack do you use?
    </div>
    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
      <p>
        <br />
        React, Next.js, Redux, GraphQL, SQL, Jest, Node.js, Express, Vercel,
        Tailwind CSS, DaisyUI. <br /> <br />
        Check{" "}
        <a
          href="https://www.linkedin.com/in/david-musijenko//"
          class="text-blue-300"
        >
          LinkedIn
        </a>{" "}
        for updates.
      </p>
    </div>
  </div>
);

const PageThree = () => (
  <div className="section">
    <Navbar />

    <h2 className="web3">
      Web 3.0
      <br /> is the very reason <br /> I became a developer
    </h2>

    <div className="shop-one">
      <picture>
        <source media="(max-width: 440px)" srcset="/web3m.png" />
        <img src="/web3.png" alt="Twitter-clone app" />
      </picture>
    </div>
  </div>
);

const PageFour = () => (
  <div className="section">
    <Navbar />

    <h2 className="mobile">
      Apps for iOS and Android <br /> via React Native
    </h2>

    <div className="iphone-one">
      <picture>
        <source media="(max-width: 440px)" srcset="/iphonesm.png" />
        <img src="/iphones.png" alt="iPhone app with Uber-clone" />
      </picture>
    </div>
    <MobileButton />
  </div>
);

const MobileButton = () => (
  <div className="collapse-mobile">
    <div className="collapse">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-white text-[#CA67FB] text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        How good are you?
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        <p>
          I am a proud Junior. <br /> I can make stuff happen in some way. I am
          not qualified to architecture scalable solutions for now, yet I can
          come up with a justified suggestion.
        </p>
      </div>
    </div>
  </div>
);

const PageFive = () => (
  <div className="section">
    <Navbar />

    <h2 className="misc-text">Bots, parsers, data pipelines</h2>
    <div className="misc">
      <picture>
        <source media="(max-width: 440px)" srcset="/miscm.png" />
        <source media="(max-width: 812px)" srcset="/miscm4.png" />
        <source media="(max-width: 1100px)" srcset="/miscm3.png" />
        <source media="(max-width: 1500px)" srcset="/miscm2.png" />

        <img src="/miscpage.png" alt="Chat bots" />
      </picture>
    </div>
    <WhatIs />
  </div>
);

const WhatIs = () => (
  <div className="collapse">
    <input type="checkbox" className="peer" />
    <div className="collapse-title bg-[#CA67FB] text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
      What is a data pipeline?
    </div>
    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
      <p>
        Say you have an Excel table and you want to make an InDesign document
        out of it. You can write a script that will do it for you. This script
        is a data pipeline. It takes data from one place and puts it in another
        place. <br /> <br /> If this sounds oddly specific, it&apos;s because I
        have done it before.
      </p>
    </div>
  </div>
);

const PageSix = () => (
  <div className="section">
    <Navbar />
    <h2 className="lets">Let&apos;s build something cool</h2>
    <h3 className="email">
      <a href="mailto:david.musijenko@gmail.com">david.musijenko@gmail.com</a>
    </h3>
    <h4 className="vercel">
      <a href="https:/onemanarmy.vercel.app">onemanarmy.vercel.app</a>
    </h4>
  </div>
);

/* email form with DaisyUI looks ugly

const PageFive = () => (
  <div className="section">
    <Navbar />
    <h2>What are you trying to achieve? How can I help?</h2>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your Name</span>
      </label>
      <label className="input-group">
        <span>Name</span>
        <input
          type="text"
          placeholder="Please enter your name"
          className="input input-bordered"
        />
      </label>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your Email</span>
      </label>
      <label className="input-group">
        <span>Email</span>
        <input
          type="text"
          placeholder="info@site.com"
          className="input input-bordered"
        />
      </label>
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your Phone</span>
      </label>
      <label className="input-group">
        <span>Phone</span>
        <input
          type="text"
          placeholder="+420 XXX XXX XXX"
          className="input input-bordered"
        />
      </label>
    </div>
    <textarea class="textarea" placeholder="Your Message"></textarea>
  </div>
);

*/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
    };
  }

  onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  render() {
    return (
      <div className="App">
        <Head>
          <title>David Musijenko Portfolio</title>
        </Head>
        <ReactFullpage
          licenseKey={"gplv3-license"}
          pluginWrapper={pluginWrapper}
          keyboardScrolling={true}
          anchors={["Hello", "Web", "Web3", "Mobile", "Misc", "Contact"]}
          onLeave={this.onLeave.bind(this)}
          //scrollHorizontally={true}
          sectionsColor={this.state.sectionsColor}
          render={(comp) =>
            console.log("render prop change") || (
              <ReactFullpage.Wrapper>
                <PageOne />
                <PageTwo />
                <PageThree />
                <PageFour />
                <PageFive />
                <PageSix />
              </ReactFullpage.Wrapper>
            )
          }
        />
      </div>
    );
  }
}

export default App;
