'use client';
import type { DialogOverlayProps } from './dialog-overlay.types';
import { forwardRef } from 'react';
import { Overlay } from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { dialogOverlayStyles } from './dialog-overlay.styles';

export const DialogOverlay = forwardRef<HTMLDivElement, DialogOverlayProps>((props, ref) => {
  const { className, ...others } = props;

  return <Overlay ref={ref} className={twMerge(dialogOverlayStyles(), className)} {...others} />;
});

DialogOverlay.displayName = 'DialogOverlay';
