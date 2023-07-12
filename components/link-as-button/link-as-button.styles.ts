import { cva } from 'class-variance-authority';

export const linkAsButtonStyles = cva(
  [
    'relative',
    'overflow-hidden',
    'inline-flex',
    'justify-center',
    'items-center',
    'gap-x-2',
    'px-3',
    'font-medium',
    'border',
    'select-none',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'active:translate-y-px',

    'focus:outline-none',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-success',
  ],
  {
    variants: {
      size: {
        sm: ['h-8', 'text-xs', 'rounded-md'],
        md: ['h-10', 'text-sm', 'rounded-md'],
        lg: ['h-12', 'text-base', 'rounded-lg'],
      },
      variant: {
        default: [
          'text-accent-8',
          'bg-white',
          'border-accent-2',

          'hover:text-black',
          'hover:border-black',

          'focus-visible:text-black',
          'focus-visible:border-black',
        ],
        tertiary: [
          'text-accent-8',
          'bg-accent-1',
          'border-accent-1',

          'hover:text-black',
          'hover:bg-accent-2/80',
          'hover:border-accent-2',

          'active:text-black',
          'active:bg-accent-2/80',
          'active:border-accent-2',
        ],
        secondary: [
          'text-white',
          'bg-black',
          'border-black',

          'hover:bg-black/80',
          'hover:border-black/80',

          'active:bg-black/80',
          'active:border-black/80',
        ],
      },
      fullWidth: {
        true: ['w-full'],
      },
      rounded: {
        true: ['rounded-full'],
      },
    },
  }
);
