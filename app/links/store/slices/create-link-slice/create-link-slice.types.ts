import type { StateCreator } from 'zustand';

export interface CreateLinkSlice {
  createLinkDialogOpen: boolean;
  createLinkUrl: string;
  createLinkIsValidUrl: boolean;
  createLinkPassword: string;
  createLinkIsValidPasswordLength: boolean;

  setCreateLinkDialogOpen: (createLinkDialogOpen: boolean) => void;
  setCreateLinkUrl: (createLinkUrl: string) => void;
  setCreateLinkIsValidUrl: (createLinkIsValidUrl: boolean) => void;
  setCreateLinkPassword: (createLinkPassword: string) => void;
  setCreateLinkIsValidPasswordLength: (createLinkIsValidPasswordLength: boolean) => void;

  resetCreateLinkState: () => void;
}

export type CreateCreateLinkSlice = StateCreator<CreateLinkSlice, [], [], CreateLinkSlice>;
