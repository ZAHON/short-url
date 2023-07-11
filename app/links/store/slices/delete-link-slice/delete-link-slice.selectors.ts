import type { LinksPageState as State } from '@links/store';

// delete link dialog open
export const selectDeleteLinkDialogOpen = (state: State) => state.deleteLinkDialogOpen;
export const selectSetDeleteLinkDialogOpen = (state: State) => state.setDeleteLinkDialogOpen;

// delete link id
export const selectDeleteLinkId = (state: State) => state.deleteLinkId;
export const selectSetDeleteLinkId = (state: State) => state.setDeleteLinkId;

// delete link url
export const selectDeleteLinkUrl = (state: State) => state.deleteLinkUrl;
export const selectSetDeleteLinkUrl = (state: State) => state.setDeleteLinkUrl;

// delete link slug
export const selectDeleteLinkSlug = (state: State) => state.deleteLinkSlug;
export const selectSetDeleteLinkSlug = (state: State) => state.setDeleteLinkSlug;

// reset delete link state
export const selectResetDeleteLinkState = (state: State) => state.resetDeleteLinkState;
