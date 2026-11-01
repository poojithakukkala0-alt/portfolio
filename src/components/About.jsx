
function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <p className="section-label">GET TO KNOW ME</p>
        <h2>About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>

            <p>
              I am a Computer Science student at Vignan University.
              I am interested in Full Stack Development and software
              engineering.
            </p>

            <p>
              I enjoy learning new technologies, solving coding
              problems, and developing real-world applications.
              My goal is to become a skilled software developer.
            </p>
          </div>

          <div className="about-cards">
            <div className="about-card">
              <h3>Education</h3>
              <p>B.Tech - Computer Science</p>
              <p>Vignan University</p>
            </div>

            <div className="about-card">
              <h3>Interests</h3>
              <p>Full Stack Development</p>
              <p>Problem Solving</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;