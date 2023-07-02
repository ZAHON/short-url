import { cva } from 'class-variance-authority';

export const labelStyles = cva(['text-black', 'font-medium', 'cursor-default'], {
  variants: {
    fontSize: {
      sm: ['text-xs'],
      md: ['text-sm'],
      lg: ['text-base'],
    },
  },
});
