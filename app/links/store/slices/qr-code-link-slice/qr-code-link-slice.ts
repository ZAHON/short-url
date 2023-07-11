import type { CreateQrCodeLinkSlice } from './qr-code-link-slice.types';

export const createQrCodeLinkSlice: CreateQrCodeLinkSlice = (set) => ({
  qrCodeLinkDialogOpen: false,
  qrCodeLinkUrl: undefined,
  qrCodeLinkSlug: undefined,

  setQrCodeLinkDialogOpen: (qrCodeLinkDialogOpen) => set(() => ({ qrCodeLinkDialogOpen })),
  setQrCodeLinkUrl: (qrCodeLinkUrl) => set(() => ({ qrCodeLinkUrl })),
  setQrCodeLinkSlug: (qrCodeLinkSlug) => set(() => ({ qrCodeLinkSlug })),

  resetQrCodeLinkState: () =>
    set(() => ({
      qrCodeLinkUrl: undefined,
      qrCodeLinkSlug: undefined,
    })),
});
