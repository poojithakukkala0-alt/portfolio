function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="intro">Hello, I'm</p>
        <h1>
          Poojitha <span>.</span>
        </h1>
        <h2>
          Computer Science Student
          <br />
          & Aspiring Software Developer
        </h2>
        <p className="description">
          <p className="description">
  I am a Computer Science student passionate about Full Stack Development,
  problem-solving, and learning new technologies. I enjoy building
  practical web applications and turning ideas into useful solutions.
  I am continuously improving my technical skills and exploring
  opportunities to grow as a software developer.
</p>
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View My Projects
          </a>
          <a href="/resume.pdf" className="secondary-btn" target="_blank">
            Download Resume
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src="/pp.jpg" alt="Poojitha profile" />
      </div>
    </section>
  );
}
export default Hero;