import Image from 'next/image'
import Link from 'next/link'
import { MainMenu } from '../MainMenu'

import logoLightImage from '@/assets/logo-light.svg'

export function Header() {
  return (
    <header className="fixed top-0 bottom-0 flex flex-col border-r border-r-white/10">
      <div className="h-20 flex border-b border-b-white/10">
        <Link
          href="/"
          className="py-5 px-20 hover:bg-[#0F0F0F] transition-all duration-500"
        >
          <Image
            src={logoLightImage}
            alt="Rodrigo Fontes"
            width={40}
            height={40}
          />
        </Link>
      </div>

      <MainMenu.Root>
        <MainMenu.Item isActive>
          <Link href="#">Home</Link>
        </MainMenu.Item>

        <MainMenu.Item>
          <Link href="#">Sobre</Link>
        </MainMenu.Item>

        <MainMenu.Item>
          <Link href="#">Experiência</Link>
        </MainMenu.Item>

        <MainMenu.Item>
          <Link href="#">Projetos</Link>
        </MainMenu.Item>

        <MainMenu.Item>
          <Link href="#">Contato</Link>
        </MainMenu.Item>
      </MainMenu.Root>
    </header>
  )
}
