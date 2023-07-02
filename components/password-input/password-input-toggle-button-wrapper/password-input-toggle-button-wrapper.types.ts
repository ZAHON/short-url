import type { HTMLAttributes, ReactNode } from 'react';
import type { PasswordInputProps } from '../password-input.types';

export interface PasswordInputToggleButtonWrapperProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the password input toggle button wrapper - `PasswordInputToggleButton` component.
   */
  children: ReactNode;

  /**
   * The size of the password input toggle button wrapper.
   */
  size?: PasswordInputProps['size'];
}
