'use client';
import type { UserMenuInnerContentProps } from './user-menu-inner-content.types';
import { MenuContent } from '@/components';

export function UserMenuInnerContent(props: UserMenuInnerContentProps) {
  const { children } = props;

  return (
    <MenuContent align="end" sideOffset={15} className="max-w-xs">
      {children}
    </MenuContent>
  );
}
