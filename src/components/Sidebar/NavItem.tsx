import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      className=" group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
      href=""
    >
      <Icon size={18} className="text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDown
        size={20}
        className="ml-auto text-zinc-400  group-hover:text-violet-300"
      />
    </a>
  )
}
