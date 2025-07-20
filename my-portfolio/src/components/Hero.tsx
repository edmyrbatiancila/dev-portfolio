import { motion } from "framer-motion";

const Hero = () => {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center my-20"
        >
            <h2 className="text-4xl font-bold mb-4">Hi, I'm Edmyr 👋</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
                A passionate Frontend Developer specializing in React, TypeScript, and Tailwind CSS.
            </p>
        </motion.section>
    );
}

export default Hero;