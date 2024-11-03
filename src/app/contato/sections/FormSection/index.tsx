import { Button } from '@/components/Button'
import { InputGroup } from '@/components/InputGroup'

export function FormSection() {
  return (
    <section
      id="form"
      className="py-32 px-20 border-b border-b-white/10"
    >
      <div className="max-w-screen-md mx-auto">
        <header className="mb-10">
          <h2 className="text-5xl font-bold text-center leading-tight mb-5">Vamos conversar?</h2>
          <p className="text-center font-semibold">
            Complete o formulário de apresentação e aguarde que irei entrar em contato com você
            <br />
            para marcar um bate papo e a agente se conhecer melhor.
          </p>
        </header>

        <form>
          <div className="flex">
            <InputGroup.Root>
              <InputGroup.Label
                text="Seu nome"
                htmlFor="yourName"
              />
              <InputGroup.Input
                type="text"
                id="yourName"
                name="yourName"
                placeholder="Seu nome"
                required
              />
            </InputGroup.Root>

            <InputGroup.Root>
              <InputGroup.Label
                text="Seu melhor e-mail"
                htmlFor="yourEmail"
              />
              <InputGroup.Input
                type="email"
                id="yourEmail"
                name="yourEmail"
                placeholder="Seu melhor e-mail"
                required
                className="border-l-transparent"
              />
            </InputGroup.Root>
          </div>

          <InputGroup.Root>
            <InputGroup.Label
              text="Seu site"
              htmlFor="yourWebsite"
            />
            <InputGroup.Input
              type="url"
              id="yourWebsite"
              name="yourWebsite"
              placeholder="Site"
              className="border-t-transparent"
            />
          </InputGroup.Root>

          <InputGroup.Root>
            <InputGroup.Label
              text="Me conte um pouco sobre você ou quem representa e do projeto."
              htmlFor="yourMessage"
            />
            <InputGroup.TextArea
              name="yourMessage"
              id="yourMessage"
              placeholder="Me conte um pouco sobre você ou quem representa e do projeto."
              rows={7}
              required
              className="border-t-transparent"
            />
          </InputGroup.Root>

          <Button
            type="submit"
            appearance="translucide"
            className="w-full border-t-transparent"
          >
            Enviar mensagem
          </Button>
        </form>
      </div>
    </section>
  )
}
