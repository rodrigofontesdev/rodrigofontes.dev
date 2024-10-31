import { ReactNode } from 'react'

type MenuRootProps = {
  children: ReactNode
}

type MenuItemProps = {
  children: ReactNode
  isActive?: boolean
}

function MenuRoot({ children }: MenuRootProps) {
  return (
    <div className="h-full">
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
      className="relative group border-t border-t-white/10 last:border-b last:border-b-transparent hover:bg-[#0F0F0F] data-[active=true]:bg-[#0F0F0F] transition-all duration-500"
    >
      <span className="w-2 h-2 absolute -top-px -right-px border-t border-r border-transparent group-hover:border-white group-data-[active=true]:border-white transition-colors duration-500" />
      <span className="text-sm font-semibold uppercase *:block *:py-6 *:px-10">{children}</span>
      <span className="w-2 h-2 absolute -bottom-px -right-px border-b border-r border-transparent group-hover:border-white group-data-[active=true]:border-white transition-colors duration-500" />
    </li>
  )
}

export const MainMenu = {
  Root: MenuRoot,
  Item: MenuItem,
}
