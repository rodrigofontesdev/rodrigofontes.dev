import { Github, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import logoLightImage from '@/assets/logo-light.svg'

export function Header() {
  const isOpenToWork = process.env.NEXT_PUBLIC_OPEN_TO_WORK === 'on'

  return (
    <header className="w-full flex items-stretch border-b border-b-white/10">
      <div className="flex items-center">
        <Link
          href="/"
          className="inline-block py-5 px-20 hover:bg-[#0F0F0F] transition-all duration-500"
        >
          <Image
            src={logoLightImage}
            alt="Rodrigo Fontes"
            width={40}
            height={40}
          />
        </Link>
      </div>

      <div className="flex items-center flex-1 gap-x-3 py-5 px-7 border-l border-white/10">
        {isOpenToWork ? (
          <>
            <span className="w-2 h-2 flex relative">
              <span className="animate-ping absolute -top-px -left-px inline-flex w-[0.625rem] h-[0.625rem] rounded-full bg-green-400 opacity-75"></span>
              <span className="w-2 h-2 inline-flex relative rounded-full bg-green-500"></span>
            </span>
            <p className="font-semibold text-sm">Disponível para novos projetos</p>
          </>
        ) : (
          <>
            <span className="w-2 h-2 flex relative">
              <span className="animate-ping absolute -top-px -left-px inline-flex w-[0.625rem] h-[0.625rem] rounded-full bg-red-400 opacity-75"></span>
              <span className="w-2 h-2 inline-flex relative rounded-full bg-red-500"></span>
            </span>
            <p className="font-semibold text-sm">Indisponível para novos projetos</p>
          </>
        )}
      </div>

      <div className="flex items-center border-l border-white/10">
        <Link
          href="https://github.com/rodrigofontesdev"
          target="_blank"
          className="inline-flex items-center h-full py-5 px-7 hover:bg-[#0F0F0F] transition-all duration-500"
        >
          <Github />
        </Link>
      </div>

      <div className="flex items-center border-l border-white/10">
        <Link
          href="https://www.linkedin.com/in/rodrigofontesdev"
          target="_blank"
          className="inline-flex items-center h-full py-5 px-7 hover:bg-[#0F0F0F] transition-all duration-500"
        >
          <Linkedin />
        </Link>
      </div>
    </header>
  )
}
