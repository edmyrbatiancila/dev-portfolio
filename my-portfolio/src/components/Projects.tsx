import { projects } from "../data/dummProjectsData";
import { motion } from "framer-motion";

const Projects = () => {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="projects" 
            className="my-20"
        >
            <h3 className="text-2xl font-semibold text-center mb-10">Projects</h3>
            <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="border p-6 rounded-lg shadow hover:shadow-lg transition"
                >
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                    </p>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                    >
                        View Project
                    </a>
                </div>
            ))}
            </div>
        </motion.section>
    );
}

export default Projects;