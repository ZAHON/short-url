import type { CreateArchiveLinkSlice } from './archive-link-slice.types';

export const createArchiveLinkSlice: CreateArchiveLinkSlice = (set) => ({
  archiveLinkDialogOpen: false,
  archiveLinkId: undefined,
  archiveLinkUrl: undefined,
  archiveLinkSlug: undefined,
  archiveLinkArchived: undefined,

  setArchiveLinkDialogOpen: (archiveLinkDialogOpen) => set(() => ({ archiveLinkDialogOpen })),
  setArchiveLinkId: (archiveLinkId) => set(() => ({ archiveLinkId })),
  setArchiveLinkUrl: (archiveLinkUrl) => set(() => ({ archiveLinkUrl })),
  setArchiveLinkSlug: (archiveLinkSlug) => set(() => ({ archiveLinkSlug })),
  setArchiveLinkArchived: (archiveLinkArchived) => set(() => ({ archiveLinkArchived })),

  resetArchiveLinkState: () =>
    set(() => ({
      archiveLinkId: undefined,
      archiveLinkUrl: undefined,
      archiveLinkSlug: undefined,
      archiveLinkArchived: undefined,
    })),
});
