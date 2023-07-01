import { cva } from 'class-variance-authority';

export const dialogContentStyles = cva([
  'overflow-hidden',
  'z-50',
  'fixed',
  'top-1/2',
  'left-1/2',
  '-translate-x-1/2',
  '-translate-y-1/2',
  'max-h-[90vh]',
  'w-[90vw]',
  'max-w-[34rem]',
  'flex',
  'flex-col',
  'bg-white',
  'rounded-lg',
  'shadow-md',
  'border',
  'border-accent-2',

  'motion-safe:data-[state=open]:will-change-[opacity_transform]',
  'motion-safe:data-[state=open]:animate-show-dialog-content',
]);
