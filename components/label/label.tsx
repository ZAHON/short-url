'use client';
import type { LabelProps } from './label.types';
import type { MouseEvent } from 'react';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { labelStyles } from './label.styles';

const defaultProps: Partial<LabelProps> = {
  fontSize: 'md',
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { fontSize, className, children, onMouseDown, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  function handleMouseDown(e: MouseEvent<HTMLLabelElement>) {
    if (onMouseDown) onMouseDown(e);

    // prevent text selection when double clicking label
    if (!e.defaultPrevented && e.detail > 1) e.preventDefault();
  }

  return (
    <label
      ref={ref}
      className={twMerge(labelStyles({ fontSize }), className)}
      onMouseDown={handleMouseDown}
      {...others}
    >
      {children}
    </label>
  );
});

Label.displayName = 'Label';
