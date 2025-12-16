import "./App.css";
import "./index.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Highlights from "./components/Hightlights";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Intro />
      <Highlights />
    </div>
  );
}

export default App;
