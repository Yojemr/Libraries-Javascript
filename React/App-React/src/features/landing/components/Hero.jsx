import { useState } from 'react'
import heroImg from '../../../assets/hero.png'
import reactLogo from '../../../assets/react.svg'
import viteLogo from '../../../assets/vite.svg'

function Hero() {
  const [count, setCount] = useState(0)

  return (
    <section id="center" aria-labelledby="hero-title">
      <div className="hero" aria-hidden="true">
        <img src={heroImg} className="base" width="170" height="179" alt="" />
        <img src={reactLogo} className="framework" alt="" />
        <img src={viteLogo} className="vite" alt="" />
      </div>
      <div>
        <h1 id="hero-title">Get started</h1>
        <p>
          Edit <code>Hero.jsx</code> and save to test <code>HMR</code>
        </p>
      </div>
      <button
        type="button"
        className="counter"
        onClick={() => setCount((value) => value + 1)}
      >
        Count is {count}
      </button>
    </section>
  )
}

export default Hero
