'use client';
import { IconPlus } from '@tabler/icons-react';
import { Button } from '@/components';
import { useLinksPageStore, selectSetCreateLinkDialogOpen } from '@links/store';

export function CreateLinkButton() {
  const setCreateLinkDialogOpen = useLinksPageStore(selectSetCreateLinkDialogOpen);

  function handleClick() {
    setCreateLinkDialogOpen(true);
  }

  return (
    <Button
      onClick={handleClick}
      icon={<IconPlus size="1.25rem" aria-hidden="true" focusable="false" />}
    >
      Create link
    </Button>
  );
}
