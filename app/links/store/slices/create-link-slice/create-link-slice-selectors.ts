import type { LinksPageState as State } from '@links/store';

// create link dialog open
export const selectCreateLinkDialogOpen = (state: State) => state.createLinkDialogOpen;
export const selectSetCreateLinkDialogOpen = (state: State) => state.setCreateLinkDialogOpen;

// create link url
export const selectCreateLinkUrl = (state: State) => state.createLinkUrl;
export const selectSetCreateLinkUrl = (state: State) => state.setCreateLinkUrl;

// create link is valid url
export const selectCreateLinkIsValidUrl = (state: State) => state.createLinkIsValidUrl;
export const selectSetCreateLinkIsValidUrl = (state: State) => state.setCreateLinkIsValidUrl;

// create link password
export const selectCreateLinkPassword = (state: State) => state.createLinkPassword;
export const selectSetCreateLinkPassword = (state: State) => state.setCreateLinkPassword;

// create  ink is valid password length
export const selectCreateLinkIsValidPasswordLength = (state: State) =>
  state.createLinkIsValidPasswordLength;
export const selectSetCreateLinkIsValidPasswordLength = (state: State) =>
  state.setCreateLinkIsValidPasswordLength;

// reset create link state
export const selectResetCreateLinkState = (state: State) => state.resetCreateLinkState;
