import { isMobile } from "react-device-detect";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Tools from "./components/Tools";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      {!isMobile && <NavBar />}
      <div
        className="section-container"
        style={!isMobile ? { paddingTop: 100 } : {}}
      >
        <Home />
        <About />
        <Tools />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
