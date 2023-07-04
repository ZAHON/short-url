'use client';
import { useRouter } from 'next/navigation';
import { IconLink } from '@tabler/icons-react';
import { MenuItem } from '@/components';

export function UserMenuInnerMyLinks() {
  const router = useRouter();

  function handleRedirect() {
    router.push('/links');
  }

  return (
    <MenuItem
      onSelect={handleRedirect}
      icon={<IconLink size="1rem" aria-hidden="true" focusable="false" />}
    >
      My links
    </MenuItem>
  );
}
