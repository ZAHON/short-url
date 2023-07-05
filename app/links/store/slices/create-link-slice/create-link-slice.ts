import type { CreateCreateLinkSlice } from './create-link-slice.types';

export const createCreateLinkSlice: CreateCreateLinkSlice = (set) => ({
  createLinkDialogOpen: false,
  createLinkUrl: '',
  createLinkIsValidUrl: true,
  createLinkPassword: '',
  createLinkIsValidPasswordLength: true,

  setCreateLinkDialogOpen: (createLinkDialogOpen) => set(() => ({ createLinkDialogOpen })),
  setCreateLinkUrl: (createLinkUrl) => set(() => ({ createLinkUrl })),
  setCreateLinkIsValidUrl: (createLinkIsValidUrl) => set(() => ({ createLinkIsValidUrl })),
  setCreateLinkPassword: (createLinkPassword) => set(() => ({ createLinkPassword })),
  setCreateLinkIsValidPasswordLength: (createLinkIsValidPasswordLength) =>
    set(() => ({ createLinkIsValidPasswordLength })),

  resetCreateLinkState: () =>
    set(() => ({
      createLinkUrl: '',
      createLinkIsValidUrl: true,
      createLinkPassword: '',
      createLinkIsValidPasswordLength: true,
    })),
});
