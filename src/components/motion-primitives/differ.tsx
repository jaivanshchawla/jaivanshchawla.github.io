import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from './morphing-dialog';
import { PlusIcon } from 'lucide-react';

export function Tibraze() {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger
        style={{
          borderRadius: '12px',
        }}
        className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-black dark:bg-black'
      >
        <MorphingDialogImage
          src='/assets/magician-min.webp'
          alt='Tibraze picture.'
          className='h-48 w-full object-cover'
        />
        <div className='flex grow flex-row items-end justify-between px-3 py-2'>
          <div>
            <MorphingDialogTitle className='text-zinc-950 dark:text-zinc-50'>
              Research Projects
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
              A Showcase of Past and Current Work
            </MorphingDialogSubtitle>
          </div>
          <button
  type="button"
  className="
    relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center
    rounded-lg border transition-colors active:scale-[0.98] focus-visible:ring-2
    border-[#7A3B44] bg-[#2B1A24] text-[#7A3B44]
    hover:bg-[#5A3A4B] hover:text-[#D8AFA8]
    dark:border-[#7A3B44] dark:bg-[#2B1A24] dark:text-[#7A3B44] dark:hover:bg-[#5A3A4B] dark:hover:text-[#D8AFA8]
  "
  aria-label="Open dialog"
>
  <PlusIcon size={12} />
</button>

        </div>
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent
          style={{
            borderRadius: '24px',
          }}
          className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-neutral-900 sm:w-[500px]'
        >
          <MorphingDialogImage
            src='/assets/magician-min.webp'
            alt='Tibraze picture'
            className='h-full w-full'
          />
          <div className='p-6'>
            <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
              EB27
            </MorphingDialogTitle>
            <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
              Edouard Wilfrid Buquet
            </MorphingDialogSubtitle>
            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, scale: 0.8, y: 100 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.8, y: 100 },
              }}
            >
              <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
                Little is known about the life of Édouard-Wilfrid Buquet. He was
                born in France in 1866, but the time and place of his death is
                unfortunately a mystery.
              </p>
              <p className='text-zinc-500'>
                Research conducted in the 1970s revealed that he’d designed the
                “EB 27” double-arm desk lamp in 1925, handcrafting it from
                nickel-plated brass, aluminium and varnished wood.
              </p>
              <a
                className='mt-2 inline-flex text-zinc-500 underline'
                href='https://www.are.na/block/12759029'
                target='_blank'
                rel='noopener noreferrer'
              >
                Are.na block
              </a>
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose className='text-zinc-50' />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
