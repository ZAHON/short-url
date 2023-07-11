'use client';
import type { LinkCardMenuDownloadQrCodeProps } from './link-card-menu-download-qr-code.types';
import { IconQrcode } from '@tabler/icons-react';
import { MenuItem } from '@/components';
import {
  useLinksPageStore,
  selectSetQrCodeLinkDialogOpen,
  selectSetQrCodeLinkUrl,
  selectSetQrCodeLinkSlug,
} from '@links/store';

export function LinkCardMenuDownloadQrCode(props: LinkCardMenuDownloadQrCodeProps) {
  const { url, slug } = props;

  const setQrCodeLinkDialogOpen = useLinksPageStore(selectSetQrCodeLinkDialogOpen);
  const setQrCodeLinkUrl = useLinksPageStore(selectSetQrCodeLinkUrl);
  const setQrCodeLinkSlug = useLinksPageStore(selectSetQrCodeLinkSlug);

  function handleOpenQrCodeLinkDialog() {
    setQrCodeLinkDialogOpen(true);
    setQrCodeLinkUrl(url);
    setQrCodeLinkSlug(slug);
  }

  return (
    <MenuItem
      onClick={handleOpenQrCodeLinkDialog}
      icon={<IconQrcode size="1rem" aria-hidden="true" focusable="false" />}
    >
      Download QR code
    </MenuItem>
  );
}
