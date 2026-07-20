import { Navbar } from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import Highlights from "./sections/Highlights";
import Experience from "./sections/Experience";

function App() {
  return (
    <main className="bg-zinc-950 text-white">
      <Navbar />
      <Hero />
      <Highlights />
      <Experience />
    </main>
  );
}

export default App;