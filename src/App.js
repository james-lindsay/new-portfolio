import logo from "./logo.svg";
import "./App.css";
import ParticlesComponent from "./Components/Particles";
import Nav from "./Components/Nav/Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <ParticlesComponent id="particles" />
    </div>
  );
}

export default App;
