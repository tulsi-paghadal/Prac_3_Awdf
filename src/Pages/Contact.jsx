import { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <header className="page-header">
        <div className="logo">🌸 Tulsi Portfolio</div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main className="contact-page">
        <div className="contact-content">
          <p className="page-label">GET IN TOUCH</p>

          <h1>
            Contact Me <span>✦</span>
          </h1>

          <p className="page-subtitle">
            Have an idea, project, or opportunity you'd like to share? I'd
            love to hear from you.
          </p>

          <form className="contact-card" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />

            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label htmlFor="message">Your Message</label>

            <textarea
              id="message"
              placeholder="Type your message here..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              maxLength="500"
              required
            />

            <div className="character-count">
              {message.length} / 500 characters
            </div>

            <button type="submit">Send Message</button>

            {submitted && (
              <div className="message-preview">
                <p>Message Received</p>
                <strong>
                  Thank you, {name}! Your message has been captured.
                </strong>
              </div>
            )}
          </form>
        </div>
      </main>

      <footer className="footer">
        <p>Contact: student@college.edu</p>
        <p>© 2026 Paghadal Tulsi B.</p>
      </footer>
    </div>
  );
}

export default Contact;