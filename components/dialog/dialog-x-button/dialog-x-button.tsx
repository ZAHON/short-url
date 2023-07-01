'use client';
import type { DialogXButtonProps } from './dialog-x-button.types';
import { forwardRef } from 'react';
import { Close } from '@radix-ui/react-dialog';
import { IconX } from '@tabler/icons-react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { dialogXButtonStyles } from './dialog-x-button.styles';

const defaultProps: Partial<DialogXButtonProps> = {
  'aria-label': 'Close dialog',
};

export const DialogXButton = forwardRef<HTMLButtonElement, DialogXButtonProps>((props, ref) => {
  const { className, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Close ref={ref} className={twMerge(dialogXButtonStyles(), className)} {...others}>
      <IconX size="1.25rem" aria-hidden="true" focusable="false" />
    </Close>
  );
});

DialogXButton.displayName = 'DialogXButton';
