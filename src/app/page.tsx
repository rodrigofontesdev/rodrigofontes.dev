import { Header } from '@/components/Header'
import { TopBar } from '@/components/TopBar'

export default function Home() {
  return (
    <>
      <Header />

      <main className="ml-[12.5rem]">
        <TopBar />
      </main>
    </>
  )
}
