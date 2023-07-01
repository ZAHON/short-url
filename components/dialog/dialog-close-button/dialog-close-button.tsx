'use client';
import type { DialogCloseButtonProps } from './dialog-close-button.types';
import { forwardRef } from 'react';
import { Close } from '@radix-ui/react-dialog';

export const DialogCloseButton = forwardRef<HTMLButtonElement, DialogCloseButtonProps>(
  (props, ref) => {
    const { children, ...others } = props;

    return (
      <Close ref={ref} asChild {...others}>
        {children}
      </Close>
    );
  }
);

DialogCloseButton.displayName = 'DialogCloseButton';
