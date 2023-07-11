import type { StateCreator } from 'zustand';

export interface DeleteLinkSlice {
  deleteLinkDialogOpen: boolean;
  deleteLinkId?: string;
  deleteLinkUrl?: string;
  deleteLinkSlug?: string;

  setDeleteLinkDialogOpen: (deleteLinkDialogOpen: boolean) => void;
  setDeleteLinkId: (deleteLinkId: string) => void;
  setDeleteLinkUrl: (deleteLinkUrl: string) => void;
  setDeleteLinkSlug: (deleteLinkSlug: string) => void;

  resetDeleteLinkState: () => void;
}

export type CreateDeleteLinkSlice = StateCreator<DeleteLinkSlice, [], [], DeleteLinkSlice>;
