import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n'
import { FAMILIES } from '../../data/families'
import WaveHero from '../../components/WaveHero'

export default function Dashboard() {
  const { t } = useI18n()
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>{t('hero.title')}</h1>
          <p>{t('hero.text')}</p>
        </div>
        <WaveHero />
      </section>
      <section aria-labelledby="fam-h" className="section">
        <h2 id="fam-h">{t('families.title')}</h2>
        <ul className="families">
          {FAMILIES.map(f => (
            <li key={f.id}>
              <Link to={`/family/${f.id}`} className={`family family-${f.id}`}>
                <strong>{t(`family.${f.id}`)}</strong>
                <span>{t(`family.${f.id}.desc`)}</span>
                <small>{f.categories.length} {t('family.count')}</small>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
