import { Hero } from '@/components/Hero'
import { LinkButton } from '@/components/LinkButton'

export default function Home() {
  return (
    <>
      <Hero.Root>
        <Hero.Heading
          title="Rodrigo Fontes Desenvolvedor Front-End"
          subTitle="Sou um profissional com 9 anos de experiência em desenvolvimento de aplicações
          para web, pude criar e colaborar em mais de 50 projetos ao longo da carreira."
        />
        <Hero.Actions>
          <LinkButton
            href="#"
            appearance="solid"
          >
            Quero conhecer
          </LinkButton>
        </Hero.Actions>
      </Hero.Root>
    </>
  )
}
