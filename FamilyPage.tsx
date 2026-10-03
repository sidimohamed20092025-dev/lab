import { Link, useParams } from 'react-router-dom'
import { useI18n } from '../../i18n'
import { getFamily } from '../../data/families'

export default function FamilyPage() {
  const { id } = useParams()
  const { t } = useI18n()
  const fam = getFamily(id)
  if (!fam) return (
    <section className="section"><h1>{t('family.notfound')}</h1>
      <Link className="btn" to="/">{t('notfound.back')}</Link></section>
  )
  return (
    <section className="section">
      <Link className="back" to="/"><span className="arrow" aria-hidden="true">←</span>{t('nav.back')}</Link>
      <h1>{t(`family.${fam.id}`)}</h1>
      <p className="muted">{t(`family.${fam.id}.desc`)}</p>
      <h2>{t('family.categories')}</h2>
      <ul className="cats">
        {fam.categories.map(c => <li key={c} className="chip">{t(`cat.${c}`)}</li>)}
      </ul>
      <p className="muted">{t('family.empty')}</p>
    </section>
  )
}
