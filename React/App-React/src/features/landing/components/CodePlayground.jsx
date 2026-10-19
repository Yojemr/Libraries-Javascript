import { useState } from 'react'
import CounterDemo from './CounterDemo.jsx'

const examples = [
  {
    id: 'estado', label: 'useState',
    title: 'El estado guarda valores que cambian',
    explanation: 'useState devuelve el valor actual y una función para actualizarlo. React vuelve a renderizar cuando cambia el estado.',
    lines: [
      "import { useState } from 'react'",
      '',
      'function Contador() {',
      '  const [count, setCount] = useState(0)',
      '',
      '  return (',
      '    <button onClick={() => setCount(c => c + 1)}>',
      '      Clics: {count}',
      '    </button>',
      '  )',
      '}',
    ],
  },
  {
    id: 'props', label: 'Props',
    title: 'Personaliza componentes con props',
    explanation: 'Las props son datos enviados desde el componente padre. Puedes reutilizar el mismo componente con nombres diferentes.',
    lines: [
      'function Saludo({ nombre }) {',
      '  return <h2>Hola, {nombre}</h2>',
      '}',
      '',
      'function App() {',
      '  return (',
      '    <>',
      '      <Saludo nombre="Ana" />',
      '      <Saludo nombre="Juan" />',
      '    </>',
      '  )',
      '}',
    ],
  },
  {
    id: 'eventos', label: 'Eventos',
    title: 'Responde a las acciones del usuario',
    explanation: 'Los controladores de eventos se pasan como referencias a funciones. React las ejecuta al producirse el evento.',
    lines: [
      'function Boton() {',
      '  function saludar() {',
      "    alert('Hola desde React')",
      '  }',
      '',
      '  return (',
      '    <button onClick={saludar}>',
      '      Saludar',
      '    </button>',
      '  )',
      '}',
    ],
  },
]

function CodePlayground() {
  const [active, setActive] = useState('estado')
  const selected = examples.find((item) => item.id === active) ?? examples[0]

  return (
    <section className="section playground-section" id="laboratorio" aria-labelledby="playground-title">
      <div className="page-container">
        <div className="section-intro">
          <span className="section-kicker">02 / LABORATORIO INTERACTIVO</span>
          <h2 id="playground-title">Aprende viendo <span className="gradient-text">el código en acción.</span></h2>
          <p>Experimenta con el contador y cambia entre ejemplos de estado, props y eventos.</p>
        </div>
        <div className="playground-grid">
          <div className="playground-editor">
            <div className="playground-tabs" role="group" aria-label="Elegir ejemplo de código">
              {examples.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active === item.id}
                  className={active === item.id ? 'tab-button is-active' : 'tab-button'}
                  onClick={() => setActive(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="snippet-header"><span>Ejemplo.jsx</span><span>JavaScript + JSX</span></div>
            <pre className="snippet-code"><code>{selected.lines.join('\n')}</code></pre>
            <div className="snippet-description">
              <h3>{selected.title}</h3>
              <p>{selected.explanation}</p>
            </div>
          </div>
          <div className="playground-preview">
            <div className="preview-title"><span>VISTA PREVIA</span><span className="live-pill"><span className="status-dot" /> En vivo</span></div>
            <CounterDemo />
            <p className="playground-note">El contador es un componente independiente: cambiar la pestaña de lectura no reinicia su estado.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CodePlayground
