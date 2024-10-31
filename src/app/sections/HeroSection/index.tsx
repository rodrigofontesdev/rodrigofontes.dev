import { LinkButton } from '@/components/LinkButton'

export function HeroSection() {
  return (
    <section className="relative py-40 px-20 border-b border-b-white/10 border-l border-l-transparent bg-[url('/square.svg')]">
      <div className="absolute inset-0 bg-radial-gradient" />

      <div className="max-w-screen-md mx-auto">
        <header className="mb-10">
          <h1 className="text-6xl text-center font-bold mb-2">Rodrigo Fontes</h1>
          <h2 className="text-6xl text-center font-bold mb-10">Desenvolvedor Front-End</h2>
          <p className="text-center font-semibold leading-normal">
            Sou um profissional com 9 anos de experiência em desenvolvimento web,
            <br />
            pude criar e colaborar em mais de 50 projetos.
          </p>
        </header>

        <div className="flex justify-center">
          <LinkButton
            href="#"
            appearance="solid"
          >
            Quero conhecer
          </LinkButton>
        </div>
      </div>
    </section>
  )
}
