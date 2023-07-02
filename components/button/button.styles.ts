import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  [
    'relative',
    'overflow-hidden',
    'inline-flex',
    'justify-center',
    'items-center',
    'px-3',
    'font-medium',
    'border',
    'select-none',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'enabled:active:translate-y-px',

    'focus:outline-none',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-success',

    'disabled:text-[#cccccc]',
    'disabled:bg-accent-1',
    'disabled:border-accent-2',
    'disabled:cursor-not-allowed',
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

          'enabled:hover:text-black',
          'enabled:hover:border-black',

          'enabled:focus-visible:text-black',
          'enabled:focus-visible:border-black',
        ],
        tertiary: [
          'text-accent-8',
          'bg-accent-1',
          'border-accent-1',

          'enabled:hover:text-black',
          'enabled:hover:bg-accent-2/80',
          'enabled:hover:border-accent-2',

          'enabled:active:text-black',
          'enabled:active:bg-accent-2/80',
          'enabled:active:border-accent-2',
        ],
        secondary: [
          'text-white',
          'bg-black',
          'border-black',

          'enabled:hover:bg-black/80',
          'enabled:hover:border-black/80',

          'enabled:active:bg-black/80',
          'enabled:active:border-black/80',
        ],
        success: [
          'text-white',
          'bg-success',
          'border-success',

          'enabled:hover:bg-success/80',
          'enabled:hover:border-success/80',

          'enabled:active:bg-success/80',
          'enabled:active:border-success/80',
        ],
        error: [
          'text-white',
          'bg-error',
          'border-error',

          'enabled:hover:bg-error/80',
          'enabled:hover:border-error/80',

          'enabled:active:bg-error/80',
          'enabled:active:border-error/80',
        ],
        warning: [
          'text-black',
          'bg-warning',
          'border-warning',

          'enabled:hover:bg-warning/80',
          'enabled:hover:border-warning/80',

          'enabled:active:bg-warning/80',
          'enabled:active:border-warning/80',
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
