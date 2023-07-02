import { cva } from 'class-variance-authority';

export const switchStyles = cva(
  [
    'relative',
    'rounded-full',
    'border',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'data-[state=unchecked]:bg-accent-2',
    'data-[state=unchecked]:border-accent-2',

    'data-[state=checked]:bg-success',
    'data-[state=checked]:border-success',

    'data-[disabled]:cursor-not-allowed',

    'data-[disabled]:data-[state=unchecked]:bg-accent-1',
    'data-[disabled]:data-[state=unchecked]:border-accent-2',

    'data-[disabled]:data-[state=checked]:bg-accent-4',
    'data-[disabled]:data-[state=checked]:border-accent-4',

    'focus:outline-none',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-success',
  ],
  {
    variants: {
      size: {
        sm: ['h-5', 'w-10'],
        md: ['h-6', 'w-12'],
        lg: ['h-7', 'w-14'],
      },
    },
  }
);
