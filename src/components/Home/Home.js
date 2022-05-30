import { isMobile } from "react-device-detect";
import airplane from "../../assets/airplane-gif.gif";
import "./home.scss";

function Home() {
  return (
    <div id="home">
      {!isMobile && <div className="arrow-down top-arrow" />}
      <div className="home-section">
        <div className="section-text">
          <div className="section-header">Hello!</div>
          <div className="section-description">I'm Carla.</div>
          <div className="section-description">
            I'm a Front-End Developer by day and a crafter by night.
          </div>
          <div className="section-description">
            Currently creating in Northern Michigan.
          </div>
        </div>
        <img src={airplane} alt="An illustrated gif of a paper airplane" />
      </div>
      <div className="arrow-down bottom-arrow" />
    </div>
  );
}

export default Home;
