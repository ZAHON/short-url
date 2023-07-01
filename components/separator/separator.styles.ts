import { cva } from 'class-variance-authority';

export const separatorStyles = cva([''], {
  variants: {
    orientation: {
      horizontal: [
        'empty:h-px',
        'empty:bg-accent-2',

        'flex',
        'items-center',
        'gap-x-3',

        'before:content-[""]',
        'before:h-px',
        'before:bg-accent-2',
        'before:flex-1',

        'after:content-[""]',
        'after:h-px',
        'after:bg-accent-2',
        'after:flex-1',
      ],
      vertical: ['empty:h-full', 'empty:w-px', 'empty:bg-accent-2'],
    },
  },
});
