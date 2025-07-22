import { projects } from "../data/dummProjectsData";
import { motion } from "framer-motion";
import ScrollFadeIn from "./ScrollFadeIn";

const Projects = () => {

    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    return (
        <section 
            id="projects" 
            className="py-20 bg-gray-50 dark:bg-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollFadeIn className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Here are some of my recent projects that showcase my skills and experience 
                        in full-stack development.
                    </p>
                </ScrollFadeIn>

                {/* Featured Projects */}
                <ScrollFadeIn direction="up" delay={0.2} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        
                </ScrollFadeIn>
            </div>
        </section>
    );
}

export default Projects;