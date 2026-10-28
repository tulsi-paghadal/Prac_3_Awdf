import { Link } from "react-router-dom";

function Header({ name, title }) {
  return (
    <header className="header">
      <div className="logo">🌸 Tulsi Portfolio</div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="intro">
        <h1>Hi, I'm {name}</h1>
        <p>{title}</p>
      </div>
    </header>
  );
}

export default Header;