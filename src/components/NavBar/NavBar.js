import { Link } from "react-scroll";
import "./navBar.scss";

function NavBar() {
  return (
    <div className="nav-bar">
      <Link
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        className="nav-bar-link"
      >
        Home
      </Link>
      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        className="nav-bar-link"
      >
        About
      </Link>
      <Link
        to="tools"
        spy={true}
        smooth={true}
        duration={500}
        className="nav-bar-link"
      >
        Tools
      </Link>
      <Link
        to="projects"
        spy={true}
        smooth={true}
        duration={500}
        className="nav-bar-link"
      >
        Projects
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        duration={500}
        className="nav-bar-link"
      >
        Contact
      </Link>
    </div>
  );
}

export default NavBar;
