import './globals.css'
import { routing } from '@/i18n/routing'
import Tabs from './components/Tabs'
import { Hero } from './components/Hero'
import { TabProvider } from './components/TabContext';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function Home() {
  return (
    <TabProvider>
      <div className='md:flex'>
        <div className='w-full md:w-1/4 md:fixed'>
          <Hero />
        </div>
        <div className='w-full md:w-3/4 md:ml-auto'>
          <Tabs />
        </div>
      </div>
    </TabProvider>
  )
}
