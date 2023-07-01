'use client';
import type { DialogTitleProps } from './dialog-title.types';
import { forwardRef } from 'react';
import { Title } from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { dialogTitleStyles } from './dialog-title.styles';

export const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>((props, ref) => {
  const { className, children, ...others } = props;

  return (
    <Title ref={ref} className={twMerge(dialogTitleStyles(), className)} {...others}>
      {children}
    </Title>
  );
});

DialogTitle.displayName = 'DialogTitle';
