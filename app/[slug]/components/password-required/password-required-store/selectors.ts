import type { PasswordRequiredState as State } from './use-password-required-store.types';

// password
export const selectPassword = (state: State) => state.password;
export const selectSetPassword = (state: State) => state.setPassword;

// is valid Password
export const selectIsValidPassword = (state: State) => state.isValidPassword;
export const selectSetIsValidPassword = (state: State) => state.setIsValidPassword;
