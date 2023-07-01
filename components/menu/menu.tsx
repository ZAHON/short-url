'use client';
import type { MenuProps } from './menu.types';
import { Root } from '@radix-ui/react-dropdown-menu';

export function Menu(props: MenuProps) {
  const { children, ...others } = props;

  return (
    <Root dir="ltr" {...others}>
      {children}
    </Root>
  );
}
