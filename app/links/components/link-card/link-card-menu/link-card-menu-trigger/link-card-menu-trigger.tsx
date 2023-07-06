'use client';
import type { LinkCardMenuTriggerProps } from './link-card-menu-trigger.types';
import { IconDotsVertical } from '@tabler/icons-react';
import { MenuTrigger, IconButton } from '@/components';

export function LinkCardMenuTrigger(props: LinkCardMenuTriggerProps) {
  const { open } = props;

  const label = `${open ? 'Hide' : 'Show'} edit link menu`;

  return (
    <MenuTrigger className="flex-shrink-0">
      <IconButton aria-label={label} variant="tertiary">
        <IconDotsVertical size="1.25rem" aria-hidden="true" focusable="false" />
      </IconButton>
    </MenuTrigger>
  );
}
