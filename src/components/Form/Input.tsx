/**
 * @patern_de_composição
 *
 * O patern de composição é uma técnica de desenvolvimento de componentes que consiste em dividir o componente em partes menores.
 *
 * O componente Input é um exemplo de patern de composição, pois ele é composto por 3 componentes menores: InputRoot, InputControl e InputPrefix.
 *
 * Isso permite que o componente Input seja mais flexível, pois cada uma das partes menores podem ser usadas separadamente.
 */

import { ComponentProps } from 'react'

type inputPrefixProps = ComponentProps<'div'>

export function InputPrefix(props: inputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

export function InputControl(props: InputControlProps) {
  return (
    <input
      {...props}
      className="mx-1 flex-1 border-none bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none outline-none"
    />
  )
}

export type InputRootProps = ComponentProps<'div'>

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100"
      {...props}
    />
  )
}
