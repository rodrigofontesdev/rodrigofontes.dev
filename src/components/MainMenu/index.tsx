import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

type MenuRootProps = {
  children: ReactNode
}

type MenuItemProps = {
  children: ReactNode
  isActive?: boolean
}

type MenuLinkProps = {
  text: string
} & LinkProps

function MenuRoot({ children }: MenuRootProps) {
  return (
    <div className="h-full relative">
      <nav className="w-full absolute bottom-0">
        <ul>{children}</ul>
      </nav>
    </div>
  )
}

function MenuItem({ children, isActive }: MenuItemProps) {
  return (
    <li
      data-active={isActive}
      className="border-t border-t-white/10 last:border-b last:border-b-transparent hover:bg-[#0F0F0F] data-[active=true]:bg-[#0F0F0F] transition-all duration-500
      *:data-[active=true]:before:content-[''] *:data-[active=true]:before:w-2 *:data-[active=true]:before:h-2 *:data-[active=true]:before:bg-transparent *:data-[active=true]:before:absolute *:data-[active=true]:before:-top-px *:data-[active=true]:before:-right-px *:data-[active=true]:before:border-t *:data-[active=true]:before:border-r *:data-[active=true]:before:border-white *:data-[active=true]:before:transition-colors *:data-[active=true]:before:duration-500 *:data-[active=true]:after:content-[''] *:data-[active=true]:after:w-2 *:data-[active=true]:after:h-2 *:data-[active=true]:after:bg-transparent *:data-[active=true]:after:absolute *:data-[active=true]:after:-bottom-px *:data-[active=true]:after:-right-px *:data-[active=true]:after:border-b *:data-[active=true]:after:border-r *:data-[active=true]:after:border-white *:data-[active=true]:after:transition-colors *:data-[active=true]:after:duration-500"
    >
      {children}
    </li>
  )
}

function MenuLink({ text, ...props }: MenuLinkProps) {
  return (
    <Link
      className="block relative py-6 text-sm text-center font-semibold uppercase before:content-[''] before:w-2 before:h-2 before:bg-transparent before:absolute before:-top-px before:-right-px before:border-t before:border-r before:border-transparent before:transition-colors before:duration-500 hover:before:border-white after:content-[''] after:w-2 after:h-2 after:bg-transparent after:absolute after:-bottom-px after:-right-px after:border-b after:border-r after:border-transparent after:transition-colors after:duration-500 hover:after:border-white"
      {...props}
    >
      {text}
    </Link>
  )
}

export const MainMenu = {
  Root: MenuRoot,
  Item: MenuItem,
  Link: MenuLink,
}
