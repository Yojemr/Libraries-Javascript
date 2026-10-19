function FeatureCard({ number, title, description, code }) {
  return (
    <article className="feature-card">
      <span className="feature-number">{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <code className="feature-code">{code}</code>
    </article>
  )
}

export default FeatureCard
