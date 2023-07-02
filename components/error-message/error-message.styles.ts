import { cva } from 'class-variance-authority';

export const errorMessageStyles = cva(['flex', 'items-center', 'gap-x-2', 'text-error'], {
  variants: {
    fontSize: {
      sm: ['text-xs'],
      md: ['text-sm'],
      lg: ['text-base'],
    },
  },
});
