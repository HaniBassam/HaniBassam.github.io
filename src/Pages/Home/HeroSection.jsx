import { Typewriter } from "react-simple-typewriter";

export const data = {
  
}


export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <p className="section--title">Hey, I'm Hani</p>
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section-title--color"></span> <br />
            <Typewriter
              words={["Front-End Developer"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <p className="hero--section-description1">
            I create modern,
            <br /> user-friendly designs and <br /> innovative solutions for web{" "}
            <br /> and digital media.
          </p>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
