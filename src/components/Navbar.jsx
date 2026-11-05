import { nav, profile } from "../data.js";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#home" className="logo">
          {profile.name}
        </a>

        <nav className="links" aria-label="Main navigation">
          {nav.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
