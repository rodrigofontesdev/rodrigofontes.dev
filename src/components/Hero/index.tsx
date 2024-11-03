import { ReactNode } from 'react'

type RootProps = {
  children: ReactNode
}

type HeadingProps = {
  title: string
  subTitle: string
}

type ActionsProps = {
  children: ReactNode
}

function Root({ children }: RootProps) {
  return (
    <section
      className="relative py-32 px-20 bg-[url('/square.svg')] border-b border-b-white/10
    border-l border-l-transparent"
    >
      <div className="absolute inset-0 bg-radial-gradient" />

      <div className="max-w-screen-md mx-auto relative">{children}</div>
    </section>
  )
}

function Heading({ title, subTitle }: HeadingProps) {
  return (
    <header className="mb-10">
      <h1 className="text-6xl text-center font-bold leading-tight mb-10">{title}</h1>
      <p className="text-center font-semibold leading-normal px-10">{subTitle}</p>
    </header>
  )
}

function Actions({ children }: ActionsProps) {
  return <div className="flex justify-center">{children}</div>
}

export const Hero = {
  Root: Root,
  Heading: Heading,
  Actions: Actions,
}
