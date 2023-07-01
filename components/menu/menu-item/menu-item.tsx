'use client';
import type { MenuItemProps } from './menu-item.types';
import { forwardRef } from 'react';
import { Item } from '@radix-ui/react-dropdown-menu';
import { twMerge } from 'tailwind-merge';
import { applayComponentDefaultProps } from '@/utils';
import { menuItemStyles } from './menu-item.styles';

const defaultProps: Partial<MenuItemProps> = {
  variant: 'default',
};

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>((props, ref) => {
  const { variant, className, icon, children, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  return (
    <Item ref={ref} className={twMerge(menuItemStyles({ variant }), className)} {...others}>
      {icon}
      {children}
    </Item>
  );
});

MenuItem.displayName = 'MenuItem';
