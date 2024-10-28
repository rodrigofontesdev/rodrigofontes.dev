import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

type MainMenuRootProps = {
  children: ReactNode
}

type MainMenuItemProps = {
  children: ReactNode
  isActive?: boolean
}

type MainMenuLinkProps = {
  text: string
} & LinkProps

function MainMenuRoot({ children }: MainMenuRootProps) {
  return (
    <nav className="self-end">
      <ul className="flex gap-x-8">{children}</ul>
    </nav>
  )
}

function MainMenuItem({ children, isActive }: MainMenuItemProps) {
  const activeItemClass = isActive ? 'border-b-gray-500' : 'border-b-transparent'

  return (
    <li
      className={`min-w-[86px] text-center border-b-2 ${activeItemClass} hover:border-b-white transition-colors duration-500`}
    >
      {children}
    </li>
  )
}

function MainMenuLink({ text, ...props }: MainMenuLinkProps) {
  return (
    <Link
      className="py-8 inline-block"
      {...props}
    >
      {text}
    </Link>
  )
}

export const MainMenu = {
  Root: MainMenuRoot,
  Item: MainMenuItem,
  Link: MainMenuLink,
}
