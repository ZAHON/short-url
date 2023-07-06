'use client';
import { Dialog, DialogPortal, DialogOverlay, DialogContent, DialogBody } from '@/components';
import {
  useLinksPageStore,
  selectArchiveLinkDialogOpen,
  selectSetArchiveLinkDialogOpen,
  selectResetCreateLinkState,
} from '@links/store';
import { ArchiveLinkDialogHeader } from './archive-link-dialog-header';
import { ArchiveLinkDialogConfirmButton } from './archive-link-dialog-confirm-button';

export function ArchiveLinkDialog() {
  const archiveLinkDialogOpen = useLinksPageStore(selectArchiveLinkDialogOpen);

  const setArchiveLinkDialogOpen = useLinksPageStore(selectSetArchiveLinkDialogOpen);
  const resetCreateLinkState = useLinksPageStore(selectResetCreateLinkState);

  function handleOpenChange(open: boolean) {
    setArchiveLinkDialogOpen(open);

    if (!open) {
      resetCreateLinkState();
    }
  }

  return (
    <Dialog open={archiveLinkDialogOpen} onOpenChange={handleOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <ArchiveLinkDialogHeader />
          <DialogBody className="px-8 py-4">
            <ArchiveLinkDialogConfirmButton />
          </DialogBody>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
