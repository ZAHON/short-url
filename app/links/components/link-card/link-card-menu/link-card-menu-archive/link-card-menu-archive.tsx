'use client';
import { IconArchive } from '@tabler/icons-react';
import { MenuItem } from '@/components';

export function LinkCardMenuArchive() {
  return (
    <MenuItem icon={<IconArchive size="1rem" aria-hidden="true" focusable="false" />}>
      Archive
    </MenuItem>
  );
}
