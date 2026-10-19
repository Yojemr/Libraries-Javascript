import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Footer from './components/Footer.jsx'
import './landing.css'

function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="ticks" aria-hidden="true" />
        <Features />
      </main>
      <div className="ticks" aria-hidden="true" />
      <Footer />
    </>
  )
}

export default Landing
