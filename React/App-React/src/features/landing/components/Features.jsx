import FeatureCard from './FeatureCard.jsx'

const fundamentals = [
  { number: '01', title: 'Componentes', description: 'Divide la interfaz en piezas independientes, combinables y reutilizables.', code: '<MiComponente />' },
  { number: '02', title: 'JSX', description: 'Describe la interfaz con una sintaxis parecida a HTML dentro de JavaScript.', code: 'const saludo = <h1>Hola</h1>' },
  { number: '03', title: 'Props', description: 'Pasa información desde un componente padre hasta sus componentes hijos.', code: '<Saludo nombre="Ana" />' },
  { number: '04', title: 'Estado', description: 'Guarda valores que cambian y deja que React actualice el contenido visible.', code: 'const [n, setN] = useState(0)' },
  { number: '05', title: 'Eventos', description: 'Reacciona a clics y otras acciones utilizando funciones de JavaScript.', code: 'onClick={incrementar}' },
  { number: '06', title: 'Vite + HMR', description: 'Trabaja con un servidor rápido y observa cambios en el navegador.', code: 'npm run dev' },
]

function Features() {
  return (
    <section className="section fundamentals-section" id="fundamentos" aria-labelledby="fundamentals-title">
      <div className="page-container">
        <div className="section-intro">
          <span className="section-kicker">01 / CONCEPTOS ESENCIALES</span>
          <h2 id="fundamentals-title">Las piezas que hacen <span className="gradient-text">funcionar React.</span></h2>
          <p>Conoce la base de cualquier interfaz en React. Luego podrás experimentar con algunos conceptos en el laboratorio.</p>
        </div>
        <div className="feature-grid">
          {fundamentals.map((item) => <FeatureCard key={item.number} {...item} />)}
        </div>
      </div>
    </section>
  )
}

export default Features
