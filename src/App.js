import logo from "./logo.svg";
import "./App.css";
import ParticlesComponent from "./Components/Particles";
import Nav from "./Components/Nav/Nav";
import Skills from "./Components/Skills/Skills";
import About from "./Components/About/About";
function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Skills />
      <ParticlesComponent id="particles" />
    </div>
  );
}

export default App;
