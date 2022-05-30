import "./tools.scss";

function Tools() {
  return (
    <div id="tools">
      <div className="tools-section">
        <div className="section-header">Tools & Tech</div>
        <div className="section-text">
          <div className="experience">
            <div className="text-header">More Experience:</div>
            <div className="tool-icons">
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-css3-plain-wordmark"></i>
              <i className="devicon-html5-plain-wordmark"></i>
              <i className="devicon-react-original-wordmark"></i>
              <i className="devicon-redux-original"></i>
              <i className="devicon-jquery-plain-wordmark"></i>
              <i className="devicon-less-plain-wordmark"></i>
              <i className="devicon-sass-original"></i>
              <i className="devicon-vscode-plain"></i>
              <i className="devicon-git-plain-wordmark"></i>
              <i className="devicon-illustrator-plain"></i>
              <i className="devicon-xd-plain"></i>
            </div>
          </div>
          <div className="experience">
            <div className="text-header">Some Experience:</div>
            <div className="tool-icons">
              <i className="devicon-typescript-plain"></i>
              <i className="devicon-jest-plain"></i>
              <i className="devicon-mocha-plain"></i>
              <i className="devicon-graphql-plain"></i>
              <i className="devicon-d3js-plain"></i>
              <i className="devicon-tailwindcss-plain"></i>
              <i className="devicon-figma-plain"></i>
            </div>
            <div className="end-text">And always learning more!</div>
          </div>
        </div>
      </div>
      <div className="arrow-down" />
    </div>
  );
}

export default Tools;
