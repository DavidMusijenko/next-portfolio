import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import mainPic from "../public/mainPic.png";
import Image from "next/image";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {};

const originalColors = ["#CA67FB", "white", "#CA67FB", "#d88aff", "#CA67FB"];

const Navbar = () => (
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
      data-keepplaying
      z-index="10"
    >
      <source src="/mainVideo.mp4" type="video/mp4" />
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
        <source media="(max-width: 812px)" srcset="/shopm.png" />
        <Image
          src="/shop1.png"
          alt="e-commerce store"
          width={2560}
          height={1440}
        />
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

    <h2 className="mobile">
      Apps for iOS and Android <br /> via React Native
    </h2>

    <div className="iphone-one">
      <picture>
        <source media="(max-width: 812px)" srcset="/iphonesm.png" />
        <Image
          src="/iphones.png"
          alt="iPhone app with Uber-clone"
          width={1154 / 1.5}
          height={1324 / 1.5}
        />
      </picture>
    </div>
  </div>
);

const PageFour = () => (
  <div className="section">
    <Navbar />

    <h2 className="misc-text">Bots, parsers, data pipelines</h2>
    <div className="misc">
      <picture>
        <source media="(max-width: 812px)" srcset="/miscm.png" />
        <Image src="/miscpage.png" alt="Chat bots" width={1796} height={1035} />
      </picture>
    </div>
  </div>
);

const PageFive = () => (
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
          <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        <ReactFullpage
          licenseKey={"gplv3-license"}
          pluginWrapper={pluginWrapper}
          keyboardScrolling={true}
          anchors={["Hello", "Web", "Mobile", "Misc", "Contact"]}
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
              </ReactFullpage.Wrapper>
            )
          }
        />
      </div>
    );
  }
}

export default App;
