import { Header } from '@/components/Header'
import { TopBar } from '@/components/TopBar'
import { HeroSection } from './sections/HeroSection'

export default function Home() {
  return (
    <>
      <Header />

      <main className="ml-[12.5rem]">
        <TopBar />

        <HeroSection />
      </main>
    </>
  )
}
