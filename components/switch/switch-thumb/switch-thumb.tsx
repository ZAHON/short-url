'use client';
import type { SwitchThumbProps } from './switch-thumb.types';
import { Thumb } from '@radix-ui/react-switch';
import { twMerge } from 'tailwind-merge';
import { switchThumbStyles } from './switch-thumb.styles';

export function SwitchThumb(props: SwitchThumbProps) {
  const { size, className, ...others } = props;

  return <Thumb className={twMerge(switchThumbStyles({ size }), className)} {...others} />;
}
