import type { CreateDeleteLinkSlice } from './delete-link-slice.types';

export const createDeleteLinkSlice: CreateDeleteLinkSlice = (set) => ({
  deleteLinkDialogOpen: false,
  deleteLinkId: undefined,
  deleteLinkUrl: undefined,
  deleteLinkSlug: undefined,

  setDeleteLinkDialogOpen: (deleteLinkDialogOpen) => set(() => ({ deleteLinkDialogOpen })),
  setDeleteLinkId: (deleteLinkId) => set(() => ({ deleteLinkId })),
  setDeleteLinkUrl: (deleteLinkUrl) => set(() => ({ deleteLinkUrl })),
  setDeleteLinkSlug: (deleteLinkSlug) => set(() => ({ deleteLinkSlug })),

  resetDeleteLinkState: () =>
    set(() => ({
      deleteLinkId: undefined,
      deleteLinkUrl: undefined,
      deleteLinkSlug: undefined,
    })),
});
