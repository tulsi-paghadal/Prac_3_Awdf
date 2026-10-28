import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const REPOSITORIES_URL =
  "https://api.github.com/users/tulsi-paghadal/repos?sort=updated&per_page=100";

function Spinner() {
  return (
    <div className="repo-status" role="status" aria-live="polite">
      <span className="spinner" aria-hidden="true" />
      <span>Loading repositories...</span>
    </div>
  );
}

function ErrorMessage({ message, onRetry }) {
  return (
    <div className="repo-error" role="alert">
      <p>Repositories could not be loaded: {message}</p>
      <button type="button" onClick={onRetry}>
        Try again
      </button>
    </div>
  );
}

function RepoList({ repos }) {
  if (repos.length === 0) {
    return <p className="repo-empty">No public repositories found.</p>;
  }

  return (
    <ul className="repo-list">
      {repos.map((repo) => (
        <li className="repo-item" key={repo.id}>
          <div>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
            {repo.description && <p>{repo.description}</p>}
          </div>
          <span className="repo-stars" aria-label={`${repo.stargazers_count} stars`}>
            ★ {repo.stargazers_count}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Projects() {
  const [showDetails, setShowDetails] = useState(false);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepositories() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(REPOSITORIES_URL, {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github+json" },
        });

        if (!response.ok) {
          throw new Error(`GitHub returned HTTP ${response.status}.`);
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error("GitHub returned an unexpected response.");
        }

        setRepos(data);
      } catch (fetchError) {
        if (fetchError.name !== "AbortError") {
          setError(fetchError.message || "Please check your connection.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadRepositories();
    return () => controller.abort();
  }, [retryCount]);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.trim().toLowerCase()),
  );

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

          <section className="repo-section" aria-labelledby="github-repos-title">
            <div className="repo-heading">
              <div>
                <p className="page-label">LIVE FROM GITHUB</p>
                <h2 id="github-repos-title">Repositories</h2>
              </div>
              {!loading && !error && (
                <span className="repo-count">{filteredRepos.length} shown</span>
              )}
            </div>

            {!loading && !error && (
              <label className="repo-search-label">
                <span>Filter repositories</span>
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search by repository name"
                />
              </label>
            )}

            {loading ? (
              <Spinner />
            ) : error ? (
              <ErrorMessage
                message={error}
                onRetry={() => setRetryCount((count) => count + 1)}
              />
            ) : (
              <RepoList repos={filteredRepos} />
            )}
          </section>
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