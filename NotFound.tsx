import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n'

export default function NotFound() {
  const { t } = useI18n()
  return <section className="section"><h1>{t('notfound.title')}</h1>
    <Link className="btn" to="/">{t('notfound.back')}</Link></section>
}
