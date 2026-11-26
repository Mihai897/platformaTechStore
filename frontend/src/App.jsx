import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Nav from './components/Navbar/Nav'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default App
