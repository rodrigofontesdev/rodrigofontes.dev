import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

const isOpenToWork = process.env.NEXT_PUBLIC_OPEN_TO_WORK === 'on'
const linkedInProfile = process.env.NEXT_PUBLIC_LINKEDIN_PROFILE
const gitHubProfile = process.env.NEXT_PUBLIC_GITHUB_PROFILE

export function TopBar() {
  return (
    <div className="h-20 flex border-b border-white/10">
      <div className="flex items-center flex-1 gap-x-3 py-5 px-7">
        {isOpenToWork ? (
          <>
            <span className="w-2 h-2 flex relative">
              <span
                className="animate-ping absolute -top-px -left-px inline-flex w-[0.625rem]
              h-[0.625rem] rounded-full bg-green-400 opacity-75"
              />
              <span className="w-2 h-2 inline-flex relative rounded-full bg-green-500" />
            </span>
            <p className="font-semibold text-sm">Disponível para novos projetos</p>
          </>
        ) : (
          <>
            <span className="w-2 h-2 flex relative">
              <span
                className="animate-ping absolute -top-px -left-px inline-flex w-[0.625rem]
              h-[0.625rem] rounded-full bg-red-400 opacity-75"
              />
              <span className="w-2 h-2 inline-flex relative rounded-full bg-red-500" />
            </span>
            <p className="font-semibold text-sm">Indisponível para novos projetos</p>
          </>
        )}
      </div>

      {gitHubProfile && (
        <div className="flex items-center border-l border-white/10">
          <Link
            href={gitHubProfile ?? '#'}
            target="_blank"
            className="inline-flex items-center h-full py-5 px-7 hover:bg-[#0F0F0F]
            transition-all duration-500"
          >
            <Github />
          </Link>
        </div>
      )}

      {linkedInProfile && (
        <div className="flex items-center border-l border-white/10">
          <Link
            href={linkedInProfile ?? '#'}
            target="_blank"
            className="inline-flex items-center h-full py-5 px-7 hover:bg-[#0F0F0F]
            transition-all duration-500"
          >
            <Linkedin />
          </Link>
        </div>
      )}
    </div>
  )
}
