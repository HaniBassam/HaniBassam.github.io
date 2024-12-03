export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.png" alt="About Me" />
      </div>

      <div className="hero--section--content--box about--section--box">
        <h1 className="about-me-heading">About Me</h1>
        <span className="About-text"></span> Hi, I’m Hani, a front-end developer
        and multimediedesigner passionate about creating user-friendly digital
        experiences. With skills in HTML, CSS, JavaScript, and React, I enjoy
        solving complex problems with creative solutions. My background in
        graphic design adds a unique touch to my work. I’m detail-oriented,
        adaptable, and always eager to grow.

        <div className="about-me-random">
          <h1 className="about-me-random---heading">Random Facts</h1>
          <span className="random"></span> I fuel my creativity with energy
          drinks and love exploring all kinds of design, from sleek UI layouts
          to bold ideas. Watching TV is my ultimate way to relax, and I enjoy
          experimenting with spicy flavors in the kitchen. A clean space keeps
          me focused, and I try live life with no regrets.
        </div>
      </div>
    </section>
  );
}
