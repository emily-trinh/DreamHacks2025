import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import AboutButton from './assets/about_us.png';
import HomeButton from './assets/home_button.png';
import Screen from './assets/tv_screen.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <div>
        <img src={Screen} alt='Screen' className="screen"></img>
      </div>
      {/* TV Overlay Buttons */}
      <div className="overlay-buttons">
        <Link to="/">
          <img src={HomeButton} alt="Home" className="nav-button home-btn" />
        </Link>
        <Link to="/about">
          <img src={AboutButton} alt="About Us" className="nav-button about-btn" />
        </Link>
      </div>

      <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
    </div>
  )
}

export default App
