'use client';
import type { SwitchProps } from './switch.types';
import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-switch';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { SwitchThumb } from './switch-thumb';
import { switchStyles } from './switch.styles';

const defaultProps: Partial<SwitchProps> = {
  size: 'md',
};

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>((props, ref) => {
  const { size, className, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Root ref={ref} className={twMerge(switchStyles({ size }), className)} {...others}>
      <SwitchThumb size={size} />
    </Root>
  );
});

Switch.displayName = 'Switch';
