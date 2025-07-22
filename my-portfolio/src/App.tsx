import './App.css'
import { ThemeProvider } from './contexts/ThemeProvider';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';

function App() {

    return (
        <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
            <div className="min-h-screen">
                <Navigation />
                <Hero />
                <About />
                
            </div>
        </ThemeProvider>
    );
}

export default App
