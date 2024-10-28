import Image from 'next/image'
import Link from 'next/link'
import { MainMenu } from '../MainMenu'

import logoLightImage from '@/assets/logo-light.svg'

export function Header() {
  return (
    <header className="flex justify-between items-center max-w-screen-xl mt-5 mx-auto px-8 rounded-2xl shadow-lg bg-slate-900">
      <Link
        href="/"
        className="inline-block"
      >
        <Image
          src={logoLightImage}
          alt="Rodrigo Fontes"
          width={48}
          height={48}
        />
      </Link>

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
            text="Sobre mim"
          />
        </MainMenu.Item>

        <MainMenu.Item>
          <MainMenu.Link
            href="#"
            text="Carreira"
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
            text="Fale comigo"
          />
        </MainMenu.Item>
      </MainMenu.Root>
    </header>
  )
}
