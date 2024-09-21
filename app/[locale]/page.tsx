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
      <div className='flex'>
        <div className='w-1/4 fixed'>
          <Hero />
        </div>
        <div className='w-3/4 ml-auto'>
          <Tabs />
        </div>
      </div>
    </TabProvider>
  )
}
