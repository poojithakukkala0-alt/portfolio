function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        <p className="section-label">WHAT I KNOW</p>
        <h2>My Technical Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Frontend Development</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Backend Development</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <ul>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Programming & Tools</h3>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>DSA</li>
              <li>GitHub</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;