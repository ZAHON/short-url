'use client';
import type { DialogContentProps } from './dialog-content.types';
import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { dialogContentStyles } from './dialog-content.styles';

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <Content
      ref={ref}
      aria-describedby={undefined}
      className={twMerge(dialogContentStyles(), className)}
      {...others}
    >
      {children}
    </Content>
  );
});

DialogContent.displayName = 'DialogContent';
