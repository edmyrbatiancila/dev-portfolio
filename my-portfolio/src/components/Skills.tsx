import { skills } from "../data/dummySkillsData";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="skills" 
            className="my-20"
        >
            <h3 className="text-2xl font-semibold text-center mb-6">Tech Stack</h3>
            <ul className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
                <li
                    key={index}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-sm rounded-md shadow"
                >
                    {skill}
                </li>
            ))}
            </ul>
        </motion.section>
    );
}

export default Skills;