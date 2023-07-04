'use client';
import type { UserMenuInnerProps } from './user-menu-inner.types';
import { useState } from 'react';
import { Menu, MenuGroup } from '@/components';
import { UserMenuInnerTrigger } from './user-menu-inner-trigger';
import { UserMenuInnerContent } from './user-menu-inner-content';
import { UserMenuInnerInfo } from './user-menu-inner-info';
import { UserMenuInnerMyLinks } from './user-menu-inner-my-links';
import { UserMenuInnerLogout } from './user-menu-inner-logout';

export function UserMenuInner(props: UserMenuInnerProps) {
  const { image, name, email } = props;

  const [open, setOpen] = useState(false);

  return (
    <Menu open={open} onOpenChange={setOpen}>
      <UserMenuInnerTrigger open={open} image={image} />
      <UserMenuInnerContent>
        <UserMenuInnerInfo name={name} email={email} />
        <MenuGroup>
          <UserMenuInnerMyLinks />
          <UserMenuInnerLogout />
        </MenuGroup>
      </UserMenuInnerContent>
    </Menu>
  );
}
