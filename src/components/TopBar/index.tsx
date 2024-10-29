import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function TopBar() {
  const isOpenToWork = process.env.NEXT_PUBLIC_OPEN_TO_WORK === 'on'

  return (
    <div className="h-20 flex border-b border-white/10">
      <div className="flex items-center flex-1 gap-x-3 py-5 px-7">
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
    </div>
  )
}
