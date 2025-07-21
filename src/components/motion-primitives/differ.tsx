import React, { useRef, useEffect } from 'react';
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
  useMorphingDialog
} from './morphing-dialog';
import { PlusIcon } from 'lucide-react';
import { ScrollArea } from '../../website/ScrollArea';

export function Tibraze() {
  // 1. Get dialog open state from context
  const { isOpen } = useMorphingDialog ? useMorphingDialog() : { isOpen: false };
  // 2. Ref to the scrollable area
  const scrollRef = useRef<HTMLDivElement|null>(null);

  // 3. Ensure scroll position is at the top *whenever dialog opens*
  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTo(0, 0);
    }
  }, [isOpen]);

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
          src='/assets/respro.webp'
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
            tabIndex={-1} // Prevent this button from being the initial focus
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
          <ScrollArea className='h-[90vh]' type='scroll' viewportRef={scrollRef}>
            {/* Top image (will always show at the top on open) */}
            <MorphingDialogImage
              src='/assets/respro.webp'
              alt='Tibraze picture'
              style={{
                width: 'min(360px, 100%)',
                height: 'auto',
                maxHeight: '360px',
                objectFit: 'contain',
                borderRadius: '16px',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: '24px',
                marginBottom: '24px'
              }}
              className='shadow'
            />
            <div className='p-6 pt-0'>
              <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                The Research Collection
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                Exploring, Experimenting, Evolving
              </MorphingDialogSubtitle>
              <MorphingDialogDescription
                disableLayoutAnimation
                variants={{
                  initial: { opacity: 0, scale: 0.8, y: 100 },
                  animate: { opacity: 1, scale: 1, y: 0 },
                  exit: { opacity: 0, scale: 0.8, y: 100 },
                }}
              >
                {/* ...long content unchanged... */}
              </MorphingDialogDescription>
            </div>
          </ScrollArea>
          <MorphingDialogClose className='text-zinc-50' />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
