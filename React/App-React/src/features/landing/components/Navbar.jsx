import reactLogo from '../../../assets/react.svg'

function Navbar() {
  return (
    <header className="site-header">
      <div className="page-container header-inner">
        <a className="brand" href="#inicio" aria-label="React Lab, volver al inicio">
          <span className="brand-mark"><img src={reactLogo} alt="" /></span>
          React<span className="brand-highlight">Lab</span>
          <span className="brand-pill">Vite</span>
        </a>
        <nav className="site-nav" aria-label="Navegación principal">
          <a href="#fundamentos">Fundamentos</a>
          <a href="#laboratorio">Laboratorio</a>
          <a href="#recursos">Recursos</a>
        </nav>
        <a
          className="header-github"
          href="https://github.com/Yojemr/Libraries-Javascript"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span aria-hidden="true">↗</span> GitHub
        </a>
      </div>
    </header>
  )
}

export default Navbar
