import Image from 'next/image'
import Link from 'next/link'
import { MainMenu } from '../MainMenu'

import logoLightImage from '@/assets/logo-light.svg'

export function Header() {
  return (
    <header className="fixed top-0 bottom-0 flex flex-col border-r border-r-white/10">
      <div className="flex border-b border-b-white/10">
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
          <MainMenu.Link
            href="#"
            text="Home"
          />
        </MainMenu.Item>

        <MainMenu.Item>
          <MainMenu.Link
            href="#"
            text="Sobre"
          />
        </MainMenu.Item>

        <MainMenu.Item>
          <MainMenu.Link
            href="#"
            text="Experiência"
          />
        </MainMenu.Item>

        <MainMenu.Item>
          <MainMenu.Link
            href="#"
            text="Projetos"
          />
        </MainMenu.Item>

        <MainMenu.Item>
          <MainMenu.Link
            href="#"
            text="Contato"
          />
        </MainMenu.Item>
      </MainMenu.Root>
    </header>
  )
}
