import { cva } from 'class-variance-authority';

export const switchThumbStyles = cva(
  [
    'block',
    'rounded-full',
    'drop-shadow-sm',
    'bg-white',

    'motion-safe:transition',
    'motion-safe:duration-150',

    'data-[state=unchecked]:translate-x-[0.0625rem]',

    'data-[disabled]:data-[state=unchecked]:bg-accent-2',

    'data-[disabled]:data-[state=checked]:bg-accent-2',
  ],
  {
    variants: {
      size: {
        sm: ['h-4', 'w-4', 'data-[state=checked]:translate-x-[1.3125rem]'],
        md: ['h-5', 'w-5', 'data-[state=checked]:translate-x-[1.5625rem]'],
        lg: ['h-6', 'w-6', 'data-[state=checked]:translate-x-[1.8125rem]'],
      },
    },
  }
);
