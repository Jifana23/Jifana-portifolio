import { profile } from "../data.js";

export default function Contact() {
  return (
    <section className="section tint" id="contact">
      <div className="wrap">
        <h2>Let's Connect</h2>

        <p className="body">
          I'm open to entry-level opportunities, internships
          and learning experiences in Data Analytics and
          Software Development.
        </p>

        <ul className="contact-list">
          <li>
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </li>

          <li>
            <span>Phone</span>
            <a href={`tel:${profile.phoneLink}`}>
              {profile.phone}
            </a>
          </li>

          <li>
            <span>Location</span>
            <span>{profile.location}</span>
          </li>

          {profile.linkedin && (
            <li>
              <span>LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                View LinkedIn Profile
              </a>
            </li>
          )}

          {profile.github && (
            <li>
              <span>GitHub</span>
              <a href={profile.github} target="_blank" rel="noreferrer">
                View GitHub Profile
              </a>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
