'use client';
import { useTransition } from 'react';
import { IconDownload } from '@tabler/icons-react';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import { Button } from '@/components';
import {
  useLinksPageStore,
  selectQrCodeLinkSlug,
  selectSetQrCodeLinkDialogOpen,
  selectResetQrCodeLinkState,
} from '@links/store';

export function QrCodeLinkDialogExportButton() {
  const [isPending, startTransition] = useTransition();

  const qrCodeLinkSlug = useLinksPageStore(selectQrCodeLinkSlug);

  const setQrCodeLinkDialogOpen = useLinksPageStore(selectSetQrCodeLinkDialogOpen);
  const resetQrCodeLinkState = useLinksPageStore(selectResetQrCodeLinkState);

  function handleExportQrCode() {
    const qrCodeElement = document.getElementById('qr-code');

    if (qrCodeLinkSlug && qrCodeElement) {
      startTransition(async () => {
        try {
          const dataUrl = await toPng(qrCodeElement, {
            cacheBust: true,
            pixelRatio: 4,
            type: 'image/png',
          });

          const fileName = `${qrCodeLinkSlug}-qr-code.png`;

          download(dataUrl, fileName, 'image/png');

          console.info('Successfully export link qr code');
        } catch {
          console.error('Failed to export link qr code');
        } finally {
          resetQrCodeLinkState();
          setQrCodeLinkDialogOpen(false);
        }
      });
    } else {
      resetQrCodeLinkState();
      setQrCodeLinkDialogOpen(false);
      console.error('Failed to export link qr code');
    }
  }

  return (
    <Button
      onClick={handleExportQrCode}
      loading={isPending}
      icon={<IconDownload size="1rem" aria-hidden="true" focusable="false" />}
      fullWidth
      className="disabled:bg-white"
    >
      Export
    </Button>
  );
}
