import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import CodePlayground from './components/CodePlayground.jsx'
import Resources from './components/Resources.jsx'
import Footer from './components/Footer.jsx'
import './landing.css'

function Landing() {
  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
      <Navbar />
      <main id="contenido">
        <Hero />
        <Features />
        <CodePlayground />
        <Resources />
      </main>
      <Footer />
    </>
  )
}

export default Landing
