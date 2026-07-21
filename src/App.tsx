import { Navbar } from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import Highlights from "./sections/Highlights";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import TechnologyStack from "./sections/TechnologyStack";
import Credentials from "./sections/Credentials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import ScrollToTop from "./components/common/ScrollToTop";

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
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

export default App;