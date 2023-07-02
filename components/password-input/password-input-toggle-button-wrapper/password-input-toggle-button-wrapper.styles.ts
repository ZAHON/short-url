import { cva } from 'class-variance-authority';

export const passwordInputToggleButtonWrapperStyles = cva(
  ['absolute', 'top-0', 'right-0', 'flex', 'justify-center', 'items-center'],
  {
    variants: {
      size: {
        sm: ['h-8', 'w-8'],
        md: ['h-10', 'w-10'],
        lg: ['h-12', 'w-12'],
      },
    },
  }
);
