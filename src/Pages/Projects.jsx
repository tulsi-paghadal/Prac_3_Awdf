import { useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const [showDetails, setShowDetails] = useState(false);

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

      <main className="projects-page">
        <div className="projects-content">
          <p className="page-label">MY WORK</p>

          <h1>
            Projects <span>✦</span>
          </h1>

          <p className="page-subtitle">
            A small collection of ideas and projects that reflect my interest
            in technology, creativity, and meaningful problem-solving.
          </p>

          <div className="project-card">
            <div className="project-number">01</div>

            <h2>StreamWise</h2>

            <p>
              A data-driven recommendation system designed to help students
              explore suitable academic fields based on their interests,
              preferences, and strengths.
            </p>

            <button onClick={() => setShowDetails(!showDetails)}>
              {showDetails ? "Hide Details" : "View Project Details"}
            </button>

            {showDetails && (
              <div className="project-details">
                <p>
                  StreamWise focuses on combining user preferences and
                  thoughtful analysis to provide more meaningful academic
                  field recommendations.
                </p>

                <div className="project-tags">
                  <span>React</span>
                  <span>Data</span>
                  <span>UI/UX</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>Built with 💗 using React</p>
        <p>© 2026 Paghadal Tulsi B.</p>
      </footer>
    </div>
  );
}

export default Projects;