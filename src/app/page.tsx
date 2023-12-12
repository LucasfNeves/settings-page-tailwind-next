import { InputControl, InputPrefix, InputRoot } from '@/components/Form/Input'
import { SettingsTabs } from '@/components/SettingsTabs'
import { Mail } from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'
import { SelectRadix } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-700">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col ">
        <div className="flex items-center justify-between border-b border-zinc-300 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-small text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
              type="button"
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              form="settings"
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
        <form
          id="settings"
          className=" mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 "
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Lucas" />
              </InputRoot>

              <InputRoot>
                <InputControl defaultValue="Farias" />
              </InputRoot>
            </div>
          </div>
          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>

            <InputRoot>
              <InputPrefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl
                id="email"
                type="email"
                defaultValue="lucasfarias.ln@gmail.com"
              />
            </InputRoot>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className=" text-sm font-medium text-zinc-700"
            >
              Your Photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 ">
                This will be displayed on your profile
              </span>
            </label>
            <FileInput.Root className="flex items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>

            <InputRoot>
              <InputControl id="role" defaultValue="Web Developer" />
            </InputRoot>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <SelectRadix placeholder="Select a country...">
              <SelectItem value="br" text="Brasil" />
              <SelectItem value="fr" text="França" />
              <SelectItem value="it" text="Itália" />
              <SelectItem value="lu" text="Luxemburgo" />
            </SelectRadix>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <SelectRadix placeholder="Select a timezone...">
              <SelectItem value="br" text="Pacific Standard Time (UTC−08:00)" />
            </SelectRadix>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className=" text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 ">
                I am a Product Designer based in Melbourne, Australia. I
                specialise in UX/UI design, brand strategy, and Webflow
                development.
              </span>
            </label>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className=" text-sm font-medium text-zinc-700"
            >
              Portifolio projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500 ">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="mt-2 flex items-center justify-end gap-2 pt-5 ">
            <button
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
              type="button"
            >
              Cancel
            </button>
            <button
              className="rounded-lg bg-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

/**
 * @Tailwind_docs
 *
 * * space-y-1 : o que é?
 * O space-y-1 é uma propriedade do Tailwind que cria um espaçamento entre os elementos.
 *
 * * divider : o que é?
 * O divider é uma propriedadde do Tailwind que cria uma linha divisória entre os elementos.
 *
 *  * sr-only : o que é?
 * O sr-only é uma propriedade do Tailwind que esconde o elemento da tela, mas não do leitor de tela.
 */
