import { formatBytes } from '@/utils/format-bytes'
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import { tv, VariantProps } from 'tailwind-variants'

const fileItems = tv({
  slots: {
    container:
      'groudiv flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
  },

  variants: {
    state: {
      progress: {
        container: 'bg-zinc-50',
      },
      error: {
        container: 'bg-error-25 border-error-300',
        icon: 'border-error-50 bg-error-100 text-error-600',
      },
      complete: {
        container: 'bg-violet-50 border-violet-200',
      },
    },
  },

  defaultVariants: {
    state: 'progress',
  },
})

export interface FileItemProps extends VariantProps<typeof fileItems> {
  name: string
  size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon } = fileItems({ state })

  return (
    <div key={name} className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>
      {state === 'error' ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-error-700 text-sm font-medium">
              Upload failed, please try again
            </span>
            <span className="text-error-600 text-sm">{name}</span>
          </div>
          <button
            type="button"
            className="text-error-700 hover:text-error-900 text-sm font-semibold"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-zinc-700">{name}</span>
            <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
          </div>
          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2 w-4/5 rounded-full bg-violet-600"
                style={{ width: state === 'complete' ? '100%' : '80%' }}
              ></div>
            </div>
            <span className="text-sm font-medium text-zinc-700">
              {state === 'complete' ? '100%' : '80%'}
            </span>
          </div>
        </div>
      )}

      {state === 'complete' ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-500 text-white" />
      ) : (
        <button
          type="button"
          className="ml-auto rounded-md p-2 hover:bg-red-50"
        >
          <Trash2 className="h-4 w-4 text-red-500" />
        </button>
      )}
    </div>
  )
}
