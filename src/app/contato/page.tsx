import { Hero } from '@/components/Hero'
import { LinkButton } from '@/components/LinkButton'
import { FormSection } from './sections/FormSection'

export default function Contact() {
  return (
    <>
      <Hero.Root>
        <Hero.Heading
          title="Transforme sua ideia em algo extraordinário"
          subTitle="Vamos conversar sobre o seu projeto e como tornar realidade. Minha visão vai
          além do código, é sobre entender as suas necessidades e construir algo que realmente
          faça a diferença."
        />
        <Hero.Actions>
          <LinkButton
            href="#form"
            appearance="solid"
          >
            Entrar em contato
          </LinkButton>
        </Hero.Actions>
      </Hero.Root>

      <FormSection />
    </>
  )
}
