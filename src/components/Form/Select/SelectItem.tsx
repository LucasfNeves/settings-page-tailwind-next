'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export type SelectProps = Select.SelectItemProps & {
  text: string
}

export function SelectItem({ text, ...props }: SelectProps) {
  return (
    <Select.Item
      className="py2.5 flex items-center justify-between gap-2 px-3 outline-none data-[highlighted]:bg-zinc-50"
      {...props}
    >
      <Select.ItemText className="text-black">{text}</Select.ItemText>
      <Select.ItemIndicator>
        <Check className="h-5 w-5 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
