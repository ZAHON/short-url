'use client';
import type { UserMenuInnerInfoProps } from './user-menu-inner-info.types';
import { MenuSeparator } from '@/components';

export function UserMenuInnerInfo(props: UserMenuInnerInfoProps) {
  const { name, email } = props;

  if (!name && !email) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col gap-y-1 px-3 py-2">
        {name && <p className="truncate text-sm font-medium">{name}</p>}
        {email && <p className="truncate text-xs font-medium text-accent-5">{email}</p>}
      </div>
      <MenuSeparator />
    </>
  );
}
