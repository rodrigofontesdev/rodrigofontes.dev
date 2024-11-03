import { AnchorHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type LinkButtonProps = {
  appearance?: 'transparent' | 'translucide' | 'solid'
  children: ReactNode
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'role'>

export function LinkButton({ appearance = 'transparent', children, ...props }: LinkButtonProps) {
  return (
    <a
      className={twMerge(
        'group relative text-sm hover:text-black font-semibold uppercase hover:bg-white',
        'border border-white/10 py-5 px-10 transition-colors duration-500',
        appearance === 'solid'
          ? 'bg-white text-black'
          : appearance === 'translucide'
            ? 'bg-white/5'
            : 'bg-transparent',
      )}
      role="button"
      {...props}
    >
      <span
        className="w-2 h-2 absolute -top-px -left-px border-t-2 border-l-2 border-white
      group-hover:border-black group-hover:transform group-hover:translate-y-1
      group-hover:translate-x-1 transition-all duration-500"
      />
      <span
        className="w-2 h-2 absolute -bottom-px -left-px border-b-2 border-l-2 border-white
       group-hover:border-black group-hover:transform group-hover:-translate-y-1
       group-hover:translate-x-1 transition-all duration-500"
      />
      {children}
      <span
        className="w-2 h-2 absolute -top-px -right-px border-t-2 border-r-2 border-white
      group-hover:border-black group-hover:transform group-hover:translate-y-1
      group-hover:-translate-x-1 transition-all duration-500"
      />
      <span
        className="w-2 h-2 absolute -bottom-px -right-px border-b-2 border-r-2 border-white
       group-hover:border-black group-hover:transform group-hover:-translate-y-1
       group-hover:-translate-x-1 transition-all duration-500"
      />
    </a>
  )
}
