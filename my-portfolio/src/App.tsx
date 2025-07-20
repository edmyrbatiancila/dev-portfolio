// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BackToTop from './components/BsckToTop';

function App() {
    // const [count, setCount] = useState(0)

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <Main />

            <BackToTop />

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App
