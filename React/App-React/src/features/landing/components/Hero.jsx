import reactLogo from '../../../assets/react.svg'
import viteLogo from '../../../assets/vite.svg'

function Hero() {
  return (
    <section className="hero-section" id="inicio" aria-labelledby="hero-title">
      <div className="page-container hero-grid">
        <div className="hero-content">
          <span className="eyebrow"><span className="status-dot" /> Aprende construyendo</span>
          <h1 id="hero-title">Descubre React. <span className="gradient-text">Crea interfaces vivas.</span></h1>
          <p className="hero-description">
            Una guía interactiva para conocer componentes, JSX, props, estados y eventos.
            Explora sus fundamentos y observa cómo React actualiza la interfaz en tiempo real.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#laboratorio">Probar el laboratorio <span aria-hidden="true">↗</span></a>
            <a className="button button-outline" href="#fundamentos">Explorar conceptos <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-points"><span>Componentes reutilizables</span><span>React Hooks</span><span>Vite + HMR</span></div>
        </div>

        <div className="hero-visual" aria-label="Vista previa de un componente JSX">
          <div className="orbit orbit-outer" aria-hidden="true" />
          <div className="orbit orbit-inner" aria-hidden="true" />
          <div className="floating-logo react-float"><img src={reactLogo} alt="React" /></div>
          <div className="floating-logo vite-float"><img src={viteLogo} alt="Vite" /></div>
          <div className="editor-card">
            <div className="editor-toolbar">
              <span className="editor-dots" aria-hidden="true"><i /><i /><i /></span>
              <span>App.jsx</span>
              <span className="editor-jsx">JSX</span>
            </div>
            <pre className="hero-code"><code>{[
              'function App() {',
              '  return (',
              '    <main>',
              '      <h1>Hola, React</h1>',
              '      <p>¡A crear!</p>',
              '    </main>',
              '  )',
              '}',
            ].join('\n')}</code></pre>
            <div className="editor-result">
              <span className="preview-label"><span className="status-dot" /> Vista previa</span>
              <strong>Hola, React</strong>
              <span>¡A crear!</span>
            </div>
          </div>
          <div className="hero-visual-tag">Actualización instantánea con Vite</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
