import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="contact" 
            className="my-20 text-center"
        >
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
                Feel free to reach out to me through my email or social platforms!
            </p>
            <a
                href="/Edmyr_Batiancila_Resume.pdf"
                download
                className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Download My Resume
            </a>
        </motion.section>
    );
}

export default Contact;