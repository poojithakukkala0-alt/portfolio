
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Update form data whenever the user types
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Submit form data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");

        // Clear the form
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      } else {
        alert(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Server connection failed!");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        <p className="section-label">GET IN TOUCH</p>

        <h2>Let's Connect</h2>

        <p className="contact-description">
          I am always interested in learning new technologies,
          exploring opportunities, and connecting with people
          in the software development community.
        </p>

        {/* Social Links */}
        <div className="contact-links">

          <a href="mailto:poojithakukkala0@gmail.com">
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/kukkalapoojitha/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/poojithakukkala0-alt"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.codechef.com/users/vu.241fa04703"
            target="_blank"
            rel="noreferrer"
          >
            CodeChef
          </a>

        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;
