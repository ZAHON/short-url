export interface PasswordRequiredState {
  password: string;
  isValidPassword: boolean;

  setPassword: (password: string) => void;
  setIsValidPassword: (isValidPassword: boolean) => void;
}
