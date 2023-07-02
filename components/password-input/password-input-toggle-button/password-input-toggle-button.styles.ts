import { cva } from 'class-variance-authority';

export const passwordInputToggleButtonStyles = cva(
  [
    'h-3/4',
    'w-3/4',
    'flex',
    'justify-center',
    'items-center',
    'select-none',
    'text-accent-5',
    'bg-transparent',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'enabled:hover:text-black',
    'enabled:hover:bg-accent-2',

    'enabled:active:translate-y-px',

    'focus:outline-none',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-0',
    'focus-visible:outline-success',
  ],
  {
    variants: {
      size: {
        sm: ['rounded-md'],
        md: ['rounded-md'],
        lg: ['rounded-lg'],
      },
    },
  }
);
