'use client';
import { IconCopy } from '@tabler/icons-react';
import { MenuItem } from '@/components';

export function LinkCardMenuDuplicate() {
  return (
    <MenuItem icon={<IconCopy size="1rem" aria-hidden="true" focusable="false" />}>
      Duplicate
    </MenuItem>
  );
}
