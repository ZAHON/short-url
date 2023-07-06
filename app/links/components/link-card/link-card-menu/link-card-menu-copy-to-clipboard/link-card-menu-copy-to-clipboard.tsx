'use client';
import { IconClipboard } from '@tabler/icons-react';
import { MenuItem } from '@/components';

export function LinkCardMenuCopyToClipboard() {
  return (
    <MenuItem icon={<IconClipboard size="1rem" aria-hidden="true" focusable="false" />}>
      Copy to clipboard
    </MenuItem>
  );
}
