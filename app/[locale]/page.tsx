import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './globals.css'
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Home() {
  // const t = useTranslations('HomePage');
  return (
    <div>
      {/* <h1>{t('title')}</h1> */}
      {/* <Link href="/about">{t('about')}</Link> */}
      {/* <p>test</p> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>

  )
}
