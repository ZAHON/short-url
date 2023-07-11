import type { LinksPageState as State } from '@links/store';

// qr code link dialog open
export const selectQrCodeLinkDialogOpen = (state: State) => state.qrCodeLinkDialogOpen;
export const selectSetQrCodeLinkDialogOpen = (state: State) => state.setQrCodeLinkDialogOpen;

// qr code link url
export const selectQrCodeLinkUrl = (state: State) => state.qrCodeLinkUrl;
export const selectSetQrCodeLinkUrl = (state: State) => state.setQrCodeLinkUrl;

// qr code link slug
export const selectQrCodeLinkSlug = (state: State) => state.qrCodeLinkSlug;
export const selectSetQrCodeLinkSlug = (state: State) => state.setQrCodeLinkSlug;

// reset qr code link state
export const selectResetQrCodeLinkState = (state: State) => state.resetQrCodeLinkState;
