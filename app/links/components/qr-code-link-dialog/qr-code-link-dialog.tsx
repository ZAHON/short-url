'use client';
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogBody,
  DialogFooter,
} from '@/components';
import {
  useLinksPageStore,
  selectQrCodeLinkDialogOpen,
  selectSetQrCodeLinkDialogOpen,
  selectResetQrCodeLinkState,
} from '@links/store';
import { QrCodeLinkDialogHeader } from './qr-code-link-dialog-header';
import { QrCodeLinkDialogCanvas } from './qr-code-link-dialog-canvas';
import { QrCodeLinkDialogExportButton } from './qr-code-link-dialog-export-button';

export function QrCodeLinkDialog() {
  const qrCodeLinkDialogOpen = useLinksPageStore(selectQrCodeLinkDialogOpen);

  const setQrCodeLinkDialogOpen = useLinksPageStore(selectSetQrCodeLinkDialogOpen);
  const resetQrCodeLinkState = useLinksPageStore(selectResetQrCodeLinkState);

  function handleOpenChange(open: boolean) {
    setQrCodeLinkDialogOpen(open);

    if (!open) {
      resetQrCodeLinkState();
    }
  }

  return (
    <Dialog open={qrCodeLinkDialogOpen} onOpenChange={handleOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <QrCodeLinkDialogHeader />
          <DialogBody className="flex items-center justify-center">
            <QrCodeLinkDialogCanvas />
          </DialogBody>
          <DialogFooter className="gap-x-4">
            <QrCodeLinkDialogExportButton />
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
