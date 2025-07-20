import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";

const Main = () => {
    return (
        <main className="flex-grow container mx-auto p-4">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
}

export default Main;