/**
 * @patern_de_composição
 *
 * O patern de composição é uma técnica de desenvolvimento de componentes que consiste em dividir o componente em partes menores.
 *
 * O componente Input é um exemplo de patern de composição, pois ele é composto por 3 componentes menores: InputRoot, InputControl e InputPrefix.
 *
 * Isso permite que o componente Input seja mais flexível, pois cada uma das partes menores podem ser usadas separadamente.
 *
 * extendemos o ComponentProps para que o componente possa receber qualquer propriedade que um elemento HTML pode receber, pois estamos dividindo o componente em partes menores.
 * devemos passar as props para o elemento HTML que está sendo renderizado, no caso a div pois o Root vai ficar por volta de todos os outros componentes.
 *
 * @hook_useId
 *
 * O hook useId é um hook do React que gera um id único para o elemento. A diferença dele para o hook UUID é que ele persiste o id gerado, ou seja, o id gerado pelo useId não muda quando o componente é re-renderizado.
 */

'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

export type RootProps = ComponentProps<'div'>

type FileInputContext = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContext)

export function Root(props: RootProps) {
  const [files, setFiles] = useState<File[]>([])
  const id = useId()

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
