function About({ name, description }) {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>

      <p>
        Hello! I'm <strong>{name}</strong>.
      </p>

      <p>{description}</p>
    </section>
  );
}

export default About;