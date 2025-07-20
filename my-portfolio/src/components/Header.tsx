import ThemeToggle from "./ThemeToggle";

const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Edmyr Batiancila</h1>
                <nav className="space-x-4">
                    <a href="#about" className="hover:text-blue-400">About</a>
                    <a href="#projects" className="hover:text-blue-400">Projects</a>
                    <a href="#contact" className="hover:text-blue-400">Contact</a>
                </nav>
                <ThemeToggle />
            </div>
        </header>
    );
}

export default Header;