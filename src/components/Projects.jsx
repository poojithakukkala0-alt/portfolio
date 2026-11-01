function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">

        <p className="section-label">MY WORK</p>
        <h2>My Projects</h2>

        <div className="projects-grid">

          {/* Project 1 */}
          <div className="project-card">
            <h3>CallMateAI</h3>
            <p>
              An AI-powered call assistant that helps counselors
              handle parent calls when they are unavailable.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>FastAPI</span>
              <span>PostgreSQL</span>
            </div>

            <a href="https://github.com/poojithakukkala0-alt/callmateai"
               target="_blank">
              View on GitHub &#8594;
            </a>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>Real-Time Chat Application</h3>
            <p>
              A real-time messaging application that allows users
              to communicate through instant messages.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Socket.IO</span>
              <span>MongoDB</span>
            </div>

            <a href="https://github.com/poojithakukkala0-alt/PRODIGY_FS_02"
               target="_blank">
              View on GitHub →
            </a>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <h3>Employee Management System</h3>
            <p>
              A web application designed to manage employee
              information and related records.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>

            <a href="https://github.com/poojithakukkala0-alt/PRODIGY_FS_01"
               target="_blank">
              View on GitHub →
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;