import { nav, profile } from "../data.js";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="wrap navbar-inner">
        <a href="#home" className="nav-brand">
          {profile.name}
        </a>

        <nav className="nav-links" aria-label="Main navigation">
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
