import "./App.css";
import ParticlesComponent from "./Components/Particles";
import Nav from "./Components/Nav/Nav";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./Components/Projects/Projects";
import ProjectPage from "./Components/ProjectsPage/ProjectsPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <About />
        <Skills />
        <Projects />
        <Routes>
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
        <ParticlesComponent id="particles" />
      </BrowserRouter>
    </div>
  );
}

export default App;
