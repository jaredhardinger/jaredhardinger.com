import Canyonlands from "../../assets/canyonlands.jpg";
import "./about.scss";

function About() {
  return (
    <div id="about">
      <div className="about-section">
        <div className="section-header">About</div>
        <div className="section-content">
          <img
            src={Canyonlands}
            alt="A selfie from Canyonlands National Park"
          />
          <div className="section-text">
            <div>
              I worked for 3 different libraries, 2 universities, an art museum,
              a florist, and a composting company before trying my hand at
              software development.
            </div>
            <div>
              I have a certificate in <b>Front End Engineering</b> from Turing
              School of Software & Design and a B.A. in <b>History</b> (
              <b>Art History</b> minor) from Purdue University. My design skills
              were honed through Savannah College of Art & Design's{" "}
              <b>Graphic Design</b> program.
            </div>
            <div>
              In my free time, I like embroidering, drawing, screen printing,
              and walking along Lake Michigan.
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-down" />
    </div>
  );
}

export default About;
