import type { StateCreator } from 'zustand';

export interface QrCodeLinkSlice {
  qrCodeLinkDialogOpen: boolean;
  qrCodeLinkUrl?: string;
  qrCodeLinkSlug?: string;

  setQrCodeLinkDialogOpen: (qrCodeLinkDialogOpen: boolean) => void;
  setQrCodeLinkUrl: (qrCodeLinkUrl: string) => void;
  setQrCodeLinkSlug: (qrCodeLinkSlug: string) => void;

  resetQrCodeLinkState: () => void;
}

export type CreateQrCodeLinkSlice = StateCreator<QrCodeLinkSlice, [], [], QrCodeLinkSlice>;
