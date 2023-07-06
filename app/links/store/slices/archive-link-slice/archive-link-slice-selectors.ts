import type { LinksPageState as State } from '@links/store';

// archive link dialog open
export const selectArchiveLinkDialogOpen = (state: State) => state.archiveLinkDialogOpen;
export const selectSetArchiveLinkDialogOpen = (state: State) => state.setArchiveLinkDialogOpen;

// archive link id
export const selectArchiveLinkId = (state: State) => state.archiveLinkId;
export const selectSetArchiveLinkId = (state: State) => state.setArchiveLinkId;

// archive link url
export const selectArchiveLinkUrl = (state: State) => state.archiveLinkUrl;
export const selectSetArchiveLinkUrl = (state: State) => state.setArchiveLinkUrl;

// archive link slug
export const selectArchiveLinkSlug = (state: State) => state.archiveLinkSlug;
export const selectSetArchiveLinkSlug = (state: State) => state.setArchiveLinkSlug;

// archive link archived
export const selectArchiveLinkArchived = (state: State) => state.archiveLinkArchived;
export const selectSetArchiveLinkArchived = (state: State) => state.setArchiveLinkArchived;

// reset archive link state
export const selectResetArchiveLinkState = (state: State) => state.resetArchiveLinkState;
