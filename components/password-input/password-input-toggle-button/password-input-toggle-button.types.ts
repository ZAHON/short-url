import type { ButtonHTMLAttributes } from 'react';
import type { PasswordInputProps } from '../password-input.types';

type HTMLAttributesToOmit = 'children';

export interface PasswordInputToggleButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, HTMLAttributesToOmit> {
  /**
   * The visible state of the password input.
   */
  visible: boolean;

  /**
   * Event handler called when the visible state of the password input changes.
   */
  onVisibleChange: () => void;

  /**
   * The size of the password input toggle button.
   */
  size?: PasswordInputProps['size'];

  /**
   * The id of the password input.
   */
  inputId: string;
}
