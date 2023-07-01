'use client';
import type { DialogBodyProps } from './dialog-body.types';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { dialogBodyStyles } from './dialog-body.styles';

export const DialogBody = forwardRef<HTMLDivElement, DialogBodyProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <div ref={ref} className={twMerge(dialogBodyStyles(), className)} {...others}>
      {children}
    </div>
  );
});

DialogBody.displayName = 'DialogBody';
