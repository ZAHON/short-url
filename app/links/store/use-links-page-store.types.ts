import type { ArchiveLinkSlice, CreateLinkSlice, DeleteLinkSlice, QrCodeLinkSlice } from './slices';

export type LinksPageState = ArchiveLinkSlice & CreateLinkSlice & DeleteLinkSlice & QrCodeLinkSlice;
