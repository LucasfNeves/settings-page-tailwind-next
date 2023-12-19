'use client'

import { InputControl, InputPrefix, InputRoot } from '../Form/Input'
import { NavItem } from './NavItem'
import { Profile } from './Profile'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Logo } from './logo'
import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  HomeIcon,
  LifeBuoy,
  Menu,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:h-full lg:relative lg:right-auto lg:h-full lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-full">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger className="lg:hidden" asChild>
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <InputRoot>
          <InputPrefix>
            <Search size={18} className="text-zinc-500" />
          </InputPrefix>
          <InputControl placeholder="Search" />
        </InputRoot>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={HomeIcon} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>
          <UsedSpaceWidget />
        </div>
        <div className="h-px bg-zinc-200"></div>
        <Profile />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

// space-y-6: Adiciona um espaçamento de 1.5rem entre os elementos filhos.

// data-[state=closed]:hidden: Esconde o conteúdo do elemento quando o atributo data-state for igual a closed.
// o data é um atributo que é gerado automaticamente pelo radix-ui, ele é usado para controlar o estado do componente Collapsible.
