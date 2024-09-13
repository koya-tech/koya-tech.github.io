import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './globals.css'
import { routing } from '@/i18n/routing'
import Tabs from './components/Tabs'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Tabs />
      {/* <About /> */}
      {/* <Skills /> */}
      {/* <Projects /> */}
      <Contact />
    </div>

  )
}
