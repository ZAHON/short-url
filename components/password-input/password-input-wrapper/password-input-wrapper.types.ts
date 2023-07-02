import type { HTMLAttributes, ReactNode } from 'react';

export interface PasswordInputWrapperProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the password input wrapper - `PasswordInput` and `PasswordInputToggleButtonWrapper` components.
   */
  children: ReactNode;
}
