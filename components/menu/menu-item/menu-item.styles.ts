import { cva } from 'class-variance-authority';

export const menuItemStyles = cva(
  [
    'h-10',
    'px-4',
    'flex',
    'items-center',
    'gap-x-2',
    'bg-transparent',
    'cursor-pointer',
    'select-none',
    'text-sm',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'focus-visible:outline-none',

    'data-[disabled]:opacity-40',
    'data-[disabled]:bg-accent-1',
    'data-[disabled]:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        default: ['text-black', 'data-[highlighted]:bg-accent-2', 'focus-visible:bg-accent-2'],
        error: [
          'text-error',
          'data-[highlighted]:bg-error-lighter/80',
          'focus-visible:bg-error-lighter/80',
        ],
      },
    },
  }
);
