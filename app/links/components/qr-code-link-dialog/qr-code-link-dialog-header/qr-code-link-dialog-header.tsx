'use client';
import Image from 'next/image';
import { DialogHeader, DialogTitle } from '@/components';
import { useLinksPageStore, selectQrCodeLinkUrl } from '@links/store';

export function QrCodeLinkDialogHeader() {
  const qrCodeLinkUrl = useLinksPageStore(selectQrCodeLinkUrl);

  if (qrCodeLinkUrl === undefined) {
    return null;
  }

  const { hostname } = new URL(qrCodeLinkUrl);

  return (
    <DialogHeader className="flex flex-col gap-y-3">
      <Image
        src={`https://www.google.com/s2/favicons?sz=64&domain_url=${qrCodeLinkUrl}`}
        alt={hostname}
        height={36}
        width={36}
        quality={100}
        className="h-9 w-9 select-none overflow-hidden rounded-full"
      />
      <DialogTitle className="text-xl">Download QR Code</DialogTitle>
    </DialogHeader>
  );
}
