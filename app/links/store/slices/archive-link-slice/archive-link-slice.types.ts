import type { StateCreator } from 'zustand';

export interface ArchiveLinkSlice {
  archiveLinkDialogOpen: boolean;
  archiveLinkId?: string;
  archiveLinkUrl?: string;
  archiveLinkSlug?: string;
  archiveLinkArchived?: boolean;

  setArchiveLinkDialogOpen: (archiveLinkDialogOpen: boolean) => void;
  setArchiveLinkId: (archiveLinkId: string) => void;
  setArchiveLinkUrl: (archiveLinkUrl: string) => void;
  setArchiveLinkSlug: (archiveLinkSlug: string) => void;
  setArchiveLinkArchived: (archiveLinkArchived: boolean) => void;

  resetArchiveLinkState: () => void;
}

export type CreateArchiveLinkSlice = StateCreator<ArchiveLinkSlice, [], [], ArchiveLinkSlice>;
