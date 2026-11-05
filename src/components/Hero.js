import { profile } from "../data.js";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-grid">
        <div>
          <p className="hello">Hello, welcome to my portfolio!</p>

          <h1>{profile.heading}</h1>

          <p className="lead">{profile.intro}</p>

          <div className="btns">
            <a href="#projects" className="btn primary">
              View My Projects
            </a>

            <a href={profile.cv} className="btn ghost" download>
              Download CV
            </a>
          </div>

          <p className="where">{profile.location}</p>
        </div>

        <div className="photo-frame">
          <img
            src={profile.photo}
            alt="Jifana - Portfolio Profile"
          />
        </div>
      </div>
    </section>
  );
}
