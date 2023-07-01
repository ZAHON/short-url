import { cva } from 'class-variance-authority';

export const menuContentStyles = cva([
  'z-50',
  'py-1.5',
  'bg-white',
  'rounded-lg',
  'drop-shadow-md',
  'border',
  'border-accent-2',

  'will-change-[transform,opacity]',
  'data-[side=top]:motion-safe:animate-slide-down-and-fade',
  'data-[side=right]:motion-safe:animate-slide-left-and-fade',
  'data-[side=bottom]:motion-safe:animate-slide-up-and-fade',
  'data-[side=left]:motion-safe:animate-slide-right-and-fade',
]);
