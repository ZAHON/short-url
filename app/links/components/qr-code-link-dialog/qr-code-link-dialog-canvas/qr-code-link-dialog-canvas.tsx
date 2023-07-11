'use client';
import { QRCodeSVG } from 'qrcode.react';
import { useLinksPageStore, selectQrCodeLinkSlug } from '@links/store';

export function QrCodeLinkDialogCanvas() {
  const qrCodeLinkSlug = useLinksPageStore(selectQrCodeLinkSlug);

  if (qrCodeLinkSlug === undefined) {
    return null;
  }

  return <QRCodeSVG value={`${location.origin}/${qrCodeLinkSlug}`} id="qr-code" />;
}
