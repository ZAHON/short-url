'use client';
import type { MenuContentProps } from './menu-content.types';
import { forwardRef } from 'react';
import { Content } from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { menuContentStyles } from './menu-content.styles';

const defaultProps: Partial<MenuContentProps> = {
  loop: true,
  sideOffset: 8,
};

export const MenuContent = forwardRef<HTMLDivElement, MenuContentProps>((props, ref) => {
  const { className, children, ...others } = applayComponentDefaultProps(defaultProps, props);

  return (
    <Content ref={ref} className={twMerge(menuContentStyles(), className)} {...others}>
      {children}
    </Content>
  );
});

MenuContent.displayName = 'MenuContent';
