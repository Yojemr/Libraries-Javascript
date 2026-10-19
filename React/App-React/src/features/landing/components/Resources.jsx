const resources = [
  { category: 'DOCUMENTACIÓN OFICIAL', title: 'Aprende React', description: 'Guías y ejercicios oficiales para entender los fundamentos.', href: 'https://es.react.dev/learn', logo: 'R' },
  { category: 'HERRAMIENTAS', title: 'Conoce Vite', description: 'Servidor de desarrollo, recarga rápida y compilación para producción.', href: 'https://vite.dev/guide/', logo: 'V' },
  { category: 'DEPURACIÓN', title: 'React Developer Tools', description: 'Inspecciona el árbol de componentes, las props y el estado.', href: 'https://react.dev/learn/react-developer-tools', logo: 'D' },
]

function Resources() {
  return (
    <section className="section resources-section" id="recursos" aria-labelledby="resources-title">
      <div className="page-container">
        <div className="section-intro">
          <span className="section-kicker">03 / CONTINÚA APRENDIENDO</span>
          <h2 id="resources-title">Tu siguiente <span className="gradient-text">paso empieza aquí.</span></h2>
          <p>Recursos oficiales para seguir profundizando en React y las herramientas de esta aplicación.</p>
        </div>
        <div className="resource-grid">
          {resources.map((resource) => (
            <a className="resource-card" key={resource.title} href={resource.href} target="_blank" rel="noopener noreferrer">
              <span className="resource-icon" aria-hidden="true">{resource.logo}</span>
              <span className="resource-category">{resource.category}</span>
              <strong>{resource.title}</strong>
              <span className="resource-description">{resource.description}</span>
              <span className="resource-link">Explorar recurso <span aria-hidden="true">↗</span></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resources
