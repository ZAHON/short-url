'use client';
import { useTransition } from 'react';
import { Button } from '@/components';
import { deleteLink } from '@links/server-actions';
import {
  useLinksPageStore,
  selectDeleteLinkId,
  selectSetDeleteLinkDialogOpen,
  selectResetDeleteLinkState,
} from '@links/store';

export function DeleteLinkDialogConfirmButton() {
  const [isPending, startTransition] = useTransition();

  const deleteLinkId = useLinksPageStore(selectDeleteLinkId);

  const setDeleteLinkDialogOpen = useLinksPageStore(selectSetDeleteLinkDialogOpen);
  const resetDeleteLinkState = useLinksPageStore(selectResetDeleteLinkState);

  function handleDeleteLink() {
    if (deleteLinkId !== undefined) {
      startTransition(async () => {
        try {
          await deleteLink(deleteLinkId);
          console.info('Successfully delete link');
        } catch {
          console.error('Failed to delete link');
        } finally {
          resetDeleteLinkState();
          setDeleteLinkDialogOpen(false);
        }
      });
    } else {
      resetDeleteLinkState();
      setDeleteLinkDialogOpen(false);
      console.error('Failed to delete link');
    }
  }

  return (
    <Button onClick={handleDeleteLink} loading={isPending} variant="error" fullWidth>
      Confirm delete
    </Button>
  );
}
