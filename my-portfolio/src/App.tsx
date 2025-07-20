// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BackToTop from './components/BsckToTop';
import { ThemeProvider } from './contexts/ThemeProvider';

function App() {
    // const [count, setCount] = useState(0)

    return (
        <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
            <div className="min-h-screen">
                {/* Header */}
                <Header />

                {/* Main Content */}
                <Main />

                <BackToTop />

                {/* Footer */}
                <Footer />
            </div>
        </ThemeProvider>
        
    );
}

export default App
