function FeatureCard({ id, icon, title, description, children }) {
  return (
    <div id={id} className="landing-feature-card">
      <svg className="icon" aria-hidden="true">
        <use href={`/icons.svg#${icon}`} />
      </svg>
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </div>
  )
}

export default FeatureCard
