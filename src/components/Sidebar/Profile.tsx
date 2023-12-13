import { LogOutIcon } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex-cols flex items-center gap-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://github.com/LucasfNeves.png"
        className="h-10 w-10 rounded-full"
        alt="Lucas Neves"
      />
      <div className=" flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Lucas Farias
        </span>
        <span className="truncate text-sm text-zinc-500">
          lucasfariassssssss.ln@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOutIcon size={20} className="text-zinc-500" />
      </button>
    </div>
  )
}
