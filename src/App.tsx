import { Navbar } from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import Highlights from "./sections/Highlights";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import TechnologyStack from "./sections/TechnologyStack";
import Credentials from "./sections/Credentials";

function App() {
  return (
    <main className="bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <Highlights />
      <Experience />
      <Projects />
      <TechnologyStack />
      <Credentials />
    </main>
  );
}

export default App;