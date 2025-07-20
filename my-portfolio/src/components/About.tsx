import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="about" 
            className="my-20 max-w-2xl mx-auto text-center"
        >
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-600 dark:text-gray-300">
                I'm a frontend developer based in the Philippines with 10 months of experience building modern, responsive, and user-friendly web apps using ReactJS, TypeScript, Tailwind CSS, and Laravel.
            </p>
        </motion.section>
    );
}

export default About;