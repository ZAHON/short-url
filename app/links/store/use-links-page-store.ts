import type { LinksPageState } from './use-links-page-store.types';
import { create } from 'zustand';
import * as slices from './slices';

export const useLinksPageStore = create<LinksPageState>()((...a) => ({
  ...slices.createArchiveLinkSlice(...a),
  ...slices.createCreateLinkSlice(...a),
  ...slices.createDeleteLinkSlice(...a),
  ...slices.createQrCodeLinkSlice(...a),
}));
