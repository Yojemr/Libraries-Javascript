import { useState } from 'react'

function CounterDemo() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter-demo">
      <div className="demo-topline">
        <span><span className="status-dot" /> Componente activo</span>
        <span className="demo-language">useState()</span>
      </div>
      <div className="counter-display">
        <span className="demo-eyebrow">Contador actual</span>
        <output className="counter-number" aria-live="polite" aria-atomic="true">{count}</output>
        <span className="demo-hint">Cada clic actualiza el estado y vuelve a renderizar este componente.</span>
      </div>
      <div className="counter-actions">
        <button type="button" className="counter-control" onClick={() => setCount((prev) => prev - 1)} aria-label="Restar uno">−</button>
        <button type="button" className="counter-reset" onClick={() => setCount(0)}>Reiniciar</button>
        <button type="button" className="counter-control counter-plus" onClick={() => setCount((prev) => prev + 1)} aria-label="Sumar uno">+</button>
      </div>
    </div>
  )
}

export default CounterDemo
