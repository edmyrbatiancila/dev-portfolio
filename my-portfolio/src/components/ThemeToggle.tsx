import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const ThemeToggle = () => {

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved) {
            setTheme(saved);
            document.documentElement.classList.toggle("dark", saved === "dark");
        }
    }, []);

    const toggleTheme = () => {
        const nextTheme = theme === "light" ? "dark" : "light";
        setTheme(nextTheme);
        localStorage.setItem("theme", nextTheme);
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
    };

    return (
        <Button
            variant="outline"
            onClick={toggleTheme}
            className="ml-4 p-2 rounded bg-transparent"
        >
            {theme === "light" ? "🌙" : "☀️"}
        </Button>
    );
}

export default ThemeToggle;