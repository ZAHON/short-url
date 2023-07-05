'use client';
import { IconPlus } from '@tabler/icons-react';
import { Button } from '@/components';

export function CreateLinkButton() {
  return (
    <Button icon={<IconPlus size="1.25rem" aria-hidden="true" focusable="false" />}>
      Create link
    </Button>
  );
}
