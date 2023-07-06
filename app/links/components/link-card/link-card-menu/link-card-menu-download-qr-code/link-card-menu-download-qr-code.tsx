'use client';
import { IconQrcode } from '@tabler/icons-react';
import { MenuItem } from '@/components';

export function LinkCardMenuDownloadQrCode() {
  return (
    <MenuItem icon={<IconQrcode size="1rem" aria-hidden="true" focusable="false" />}>
      Download QR code
    </MenuItem>
  );
}
