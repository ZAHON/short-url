import { cva } from 'class-variance-authority';

export const dialogXButtonStyles = cva([
  'h-8',
  'w-8',
  'flex',
  'justify-center',
  'items-center',
  'select-none',
  'rounded-full',

  'motion-safe:transition',
  'motion-safe:duration-150',

  'enabled:hover:bg-accent-2',

  'enabled:active:scale-95',

  'focus:outline-none',
  'focus-visible:outline',
  'focus-visible:outline-2',
  'focus-visible:outline-offset-2',
  'focus-visible:outline-success',
]);
