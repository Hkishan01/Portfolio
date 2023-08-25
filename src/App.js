import "./App.css";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Home from "./components/Home";
import Project from "./components/Project";
import Skill from "./components/Skill";

function App() {
  return (
    <div className="main">
      <Home />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
