import Navbar from "../components/Navbar";
import { ThemeToggleDesktop } from "@/components/ThemeToggle/ThemeToggleDesktop"
import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import Footer from "../components/Footer";
import { About } from "../components/About";

const Home = () => {
  return (
    <div className="relative z-10 min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ThemeToggleDesktop />

      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
