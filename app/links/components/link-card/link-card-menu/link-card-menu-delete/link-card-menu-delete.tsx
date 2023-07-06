'use client';
import { IconTrash } from '@tabler/icons-react';
import { MenuItem } from '@/components';

export function LinkCardMenuDelete() {
  return (
    <MenuItem variant="error" icon={<IconTrash size="1rem" aria-hidden="true" focusable="false" />}>
      Delete
    </MenuItem>
  );
}
