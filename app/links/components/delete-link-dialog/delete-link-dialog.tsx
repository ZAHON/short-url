'use client';
import { Dialog, DialogPortal, DialogOverlay, DialogContent, DialogBody } from '@/components';
import {
  useLinksPageStore,
  selectDeleteLinkDialogOpen,
  selectSetDeleteLinkDialogOpen,
  selectResetDeleteLinkState,
} from '@links/store';
import { DeleteLinkDialogHeader } from './delete-link-dialog-header';
import { DeleteLinkDialogConfirmButton } from './delete-link-dialog-confirm-button';

export function DeleteLinkDialog() {
  const deleteLinkDialogOpen = useLinksPageStore(selectDeleteLinkDialogOpen);

  const setDeleteLinkDialogOpen = useLinksPageStore(selectSetDeleteLinkDialogOpen);
  const resetDeleteLinkState = useLinksPageStore(selectResetDeleteLinkState);

  function handleOpenChange(open: boolean) {
    setDeleteLinkDialogOpen(open);

    if (!open) {
      resetDeleteLinkState();
    }
  }

  return (
    <Dialog open={deleteLinkDialogOpen} onOpenChange={handleOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DeleteLinkDialogHeader />
          <DialogBody className="px-8 py-4">
            <DeleteLinkDialogConfirmButton />
          </DialogBody>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
