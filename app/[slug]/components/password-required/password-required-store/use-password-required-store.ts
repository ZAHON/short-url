import { create } from 'zustand';
import type { PasswordRequiredState } from './use-password-required-store.types';

export const usePasswordRequiredStore = create<PasswordRequiredState>()((set) => ({
  password: '',
  isValidPassword: true,

  setPassword: (password) => set(() => ({ password })),
  setIsValidPassword: (isValidPassword) => set(() => ({ isValidPassword })),
}));
