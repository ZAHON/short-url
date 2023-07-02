import { cva } from 'class-variance-authority';

export const passwordInputStyles = cva(
  [
    'px-3',
    'w-full',
    'text-black',
    'bg-white',
    'border',
    'border-accent-2',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'focus:outline-none',
    'focus:border-accent-5',

    'disabled:pr-3',
    'disabled:text-[#cccccc]',
    'disabled:bg-accent-1',
    'disabled:border-accent-2',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      size: {
        sm: ['h-8', 'pr-8', 'text-xs', 'rounded-md'],
        md: ['h-10', 'pr-10', 'text-sm', 'rounded-md'],
        lg: ['h-12', 'pr-12', 'text-base', 'rounded-lg'],
      },
      invalid: {
        true: ['text-error', 'border-error'],
      },
    },
  }
);
