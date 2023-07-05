'use client';
import { Dialog, DialogPortal, DialogOverlay } from '@/components';
import {
  useLinksPageStore,
  selectCreateLinkDialogOpen,
  selectSetCreateLinkDialogOpen,
  selectResetCreateLinkState,
} from '@links/store';
import { CreateLinkDialogContent } from './create-link-dialog-content';
import { CreateLinkDialogHeader } from './create-link-dialog-header';
import { CreatelinkDialogBody } from './create-link-dialog-body';
import { CreateLinkDialogFooter } from './create-link-dialog-footer';

export function CreateLinkDialog() {
  const createLinkDialogOpen = useLinksPageStore(selectCreateLinkDialogOpen);

  const setCreateLinkDialogOpen = useLinksPageStore(selectSetCreateLinkDialogOpen);
  const resetCreateLinkState = useLinksPageStore(selectResetCreateLinkState);

  function handleOpenChange(open: boolean) {
    setCreateLinkDialogOpen(open);
    resetCreateLinkState();
  }

  return (
    <Dialog open={createLinkDialogOpen} onOpenChange={handleOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <CreateLinkDialogContent>
          <CreateLinkDialogHeader />
          <CreatelinkDialogBody />
          <CreateLinkDialogFooter />
        </CreateLinkDialogContent>
      </DialogPortal>
    </Dialog>
  );
}
