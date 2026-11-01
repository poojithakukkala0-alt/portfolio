function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2>Poojitha.</h2>

        <p>
          Building my skills, one project at a time.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Poojitha. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;