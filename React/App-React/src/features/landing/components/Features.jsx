import reactLogo from '../../../assets/react.svg'
import viteLogo from '../../../assets/vite.svg'
import FeatureCard from './FeatureCard.jsx'

function Features() {
  return (
    <section id="next-steps" aria-label="Recursos y comunidad">
      <FeatureCard
        id="docs"
        icon="documentation-icon"
        title="Documentation"
        description="Your questions, answered"
      >
        <ul>
          <li>
            <a href="https://vite.dev/" target="_blank" rel="noreferrer">
              <img className="logo" src={viteLogo} alt="" />
              Explore Vite
            </a>
          </li>
          <li>
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              <img className="button-icon" src={reactLogo} alt="" />
              Learn more
            </a>
          </li>
        </ul>
      </FeatureCard>
      <FeatureCard
        id="social"
        icon="social-icon"
        title="Connect with us"
        description="Join the Vite community"
      >
        <ul>
          <li>
            <a
              href="https://github.com/vitejs/vite"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="button-icon" aria-hidden="true">
                <use href="/icons.svg#github-icon" />
              </svg>
              GitHub
            </a>
          </li>
          <li>
            <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
              <svg className="button-icon" aria-hidden="true">
                <use href="/icons.svg#discord-icon" />
              </svg>
              Discord
            </a>
          </li>
          <li>
            <a href="https://x.com/vite_js" target="_blank" rel="noreferrer">
              <svg className="button-icon" aria-hidden="true">
                <use href="/icons.svg#x-icon" />
              </svg>
              X.com
            </a>
          </li>
          <li>
            <a
              href="https://bsky.app/profile/vite.dev"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="button-icon" aria-hidden="true">
                <use href="/icons.svg#bluesky-icon" />
              </svg>
              Bluesky
            </a>
          </li>
        </ul>
      </FeatureCard>
    </section>
  )
}

export default Features
