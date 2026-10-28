function Skills({ skills }) {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>

      <div className="skills-list">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;