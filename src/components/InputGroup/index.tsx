import { InputHTMLAttributes, LabelHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type RootProps = {
  children: ReactNode
}

type LabelProps = {
  text: string
} & Omit<LabelHTMLAttributes<HTMLLabelElement>, 'className'>

type InputProps = InputHTMLAttributes<HTMLInputElement>

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

function Root({ children }: RootProps) {
  return <div className="flex flex-col flex-1">{children}</div>
}

function Label({ text, ...props }: LabelProps) {
  return (
    <label
      className="sr-only"
      {...props}
    >
      {text}
    </label>
  )
}

function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={twMerge(
        'bg-transparent placeholder:text-white p-5 font-semibold',
        'border border-white/10 focus:border-white outline-none transition-colors duration-500',
        className,
      )}
      {...props}
    />
  )
}

function TextArea({ className, ...props }: TextAreaProps) {
  return (
    <textarea
      className={twMerge(
        'bg-transparent placeholder:text-white p-5 font-semibold',
        'border border-white/10 focus:border focus:border-white',
        'outline-none transition-colors duration-500',
        className,
      )}
      {...props}
    />
  )
}

export const InputGroup = {
  Root: Root,
  Label: Label,
  Input: Input,
  TextArea: TextArea,
}
