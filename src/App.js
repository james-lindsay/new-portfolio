import "./App.css";
import ParticlesComponent from "./Components/Particles";
import Nav from "./Components/Nav/Nav";

import About from "./Components/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProjectPage from "./Components/ProjectsPage/ProjectsPage";
import CV from "./Components/CV/CV";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
        <ParticlesComponent id="particles" />
      </BrowserRouter>
    </div>
  );
}

export default App;
