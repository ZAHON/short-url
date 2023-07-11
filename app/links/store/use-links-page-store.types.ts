import type { ArchiveLinkSlice, CreateLinkSlice, DeleteLinkSlice } from './slices';

export type LinksPageState = ArchiveLinkSlice & CreateLinkSlice & DeleteLinkSlice;
