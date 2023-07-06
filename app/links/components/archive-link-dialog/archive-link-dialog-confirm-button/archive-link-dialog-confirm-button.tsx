'use client';
import { useTransition } from 'react';
import { Button } from '@/components';
import {
  useLinksPageStore,
  selectArchiveLinkId,
  selectArchiveLinkArchived,
  selectSetArchiveLinkDialogOpen,
  selectResetCreateLinkState,
} from '@links/store';
import { archiveLink } from '@links/server-actions';

export function ArchiveLinkDialogConfirmButton() {
  const [isPending, startTransition] = useTransition();

  const archiveLinkId = useLinksPageStore(selectArchiveLinkId);
  const archiveLinkArchived = useLinksPageStore(selectArchiveLinkArchived);

  const setArchiveLinkDialogOpen = useLinksPageStore(selectSetArchiveLinkDialogOpen);
  const resetCreateLinkState = useLinksPageStore(selectResetCreateLinkState);

  function handleArchiveLink() {
    if (archiveLinkId !== undefined && archiveLinkArchived !== undefined) {
      startTransition(async () => {
        try {
          await archiveLink({
            id: archiveLinkId,
            archived: !archiveLinkArchived,
          });

          console.info(`Successfully ${archiveLinkArchived ? 'unarchived' : 'archived'} link`);
        } catch {
          console.error(`Failed to ${archiveLinkArchived ? 'unarchived' : 'archived'} link`);
        } finally {
          resetCreateLinkState();
          setArchiveLinkDialogOpen(false);
        }
      });
    } else {
      resetCreateLinkState();
      setArchiveLinkDialogOpen(false);
      console.error('Failed to interact with link');
    }
  }

  return (
    <Button onClick={handleArchiveLink} loading={isPending} fullWidth>
      Confirm
    </Button>
  );
}
