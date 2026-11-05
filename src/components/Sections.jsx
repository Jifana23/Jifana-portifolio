import {
  about,
  strengths,
  skills,
  experience,
  projects,
  education,
  certifications,
  languages,
} from "../data.js";

export function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <h2>About Me</h2>

        <div className="two">
          <div>
            {about.map((paragraph, index) => (
              <p className="body" key={index}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="card">
            <h3>My Strengths</h3>
            <ul className="chips">
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="section tint" id="skills">
      <div className="wrap">
        <h2>My Skills</h2>

        <div className="grid">
          {skills.map((group) => (
            <div className="card" key={group.group}>
              <h3>{group.group}</h3>

              <ul className="chips">
                {group.items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <h2>Experience</h2>

        <div className="card exp">
          <h3>{experience.role}</h3>
          <p className="meta">{experience.company}</p>

          <ul className="list">
            {experience.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section className="section tint" id="projects">
      <div className="wrap">
        <h2>My Projects</h2>

        <div className="grid two-col">
          {projects.map((project) => (
            <article className="card project" key={project.title}>
              {project.image ? (
                <img
                  className="shot"
                  src={project.image}
                  alt={project.title}
                />
              ) : (
                <div className="shot placeholder">
                  Project Preview
                </div>
              )}

              <h3>{project.title}</h3>
              <p className="body">{project.description}</p>
              <p className="meta">
                <strong>Impact:</strong> {project.impact}
              </p>

              {project.technologies.length > 0 && (
                <ul className="chips">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              )}

              {project.github && (
                <a
                  className="btn ghost small"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section className="section" id="education">
      <div className="wrap">
        <h2>Education</h2>

        <ul className="timeline">
          {education.map((item) => (
            <li key={item.title}>
              <h3>
                {item.title}
                {item.status && (
                  <span className="badge">{item.status}</span>
                )}
              </h3>

              <p className="meta">{item.detail}</p>
            </li>
          ))}
        </ul>

        <div className="two extras">
          <div>
            <h3>Certifications</h3>
            <ul className="list">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Languages</h3>
            <ul className="chips">
              {languages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
