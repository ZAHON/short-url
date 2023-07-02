import { cva } from 'class-variance-authority';

export const skeletonStyles = cva(
  [
    'relative',
    'bg-transparent',

    'before:animate-skeleton-fade',

    'motion-safe:[--skeleton-animation-duration:8000ms]',
    'motion-reduce:[--skeleton-animation-duration:16000ms]',
  ],
  {
    variants: {
      visible: {
        true: [
          '[&>*]:invisible',

          'select-none',
          'pointer-events-none',
          'overflow-hidden',

          'before:content-[""]',
          'before:absolute',
          'before:inset-0',
          'before:[background-image:linear-gradient(270deg,#fafafa,#eaeaea,#eaeaea,#fafafa)]',
          'before:bg-[length:400%_100%]',
        ],
      },
      fitContent: {
        true: ['w-fit'],
      },
    },
  }
);
