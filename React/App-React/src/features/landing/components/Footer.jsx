import reactLogo from '../../../assets/react.svg'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div className="footer-brand">
          <img src={reactLogo} alt="" />
          <span><strong>React Lab</strong><small>Un ejemplo práctico construido con React + Vite.</small></span>
        </div>
        <div className="footer-links">
          <a href="#inicio">Volver arriba ↑</a>
          <a href="https://github.com/Yojemr/Libraries-Javascript" target="_blank" rel="noopener noreferrer">Ver código en GitHub ↗</a>
        </div>
      </div>
      <p className="footer-disclaimer">Proyecto educativo. React y Vite son marcas de sus respectivos titulares.</p>
    </footer>
  )
}

export default Footer
