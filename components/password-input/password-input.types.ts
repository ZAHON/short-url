import type { InputHTMLAttributes } from 'react';
import type { PasswordInputWrapperProps } from './password-input-wrapper';
import type { PasswordInputToggleButtonWrapperProps } from './password-input-toggle-button-wrapper';
import type { PasswordInputToggleButtonProps } from './password-input-toggle-button';

type HTMLAttributesToOmit = 'size';

export interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, HTMLAttributesToOmit> {
  /**
   * The size of the password input.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The visible state of the password input when it is initially rendered. Use when you do not need to control its visible state.
   */
  defaultVisible?: boolean;

  /**
   * The controlled visible state of the password input. Must be used in conjunction with `onVisibleChange` property.
   */
  visible?: boolean;

  /**
   * Event handler called when the visible state of the password input changes.
   */
  onVisibleChange?: (visible: boolean) => void;

  /**
   * For accessibility, it is important to add a fallback text when password is visible. This text will be visible to screen readers.
   * @default "Your password is shown"
   */
  visibleLabel?: string;

  /**
   * For accessibility, it is important to add a fallback text when password is not visible. This text will be visible to screen readers.
   * @default "Your password is hidden"
   */
  noVisibleLabel?: string;

  /**
   * If `true`, the password input will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the password input will be invalid. In this state component will have and `aria-invalid` attribute set to `true`.
   * @default false
   */
  invalid?: boolean;

  /**
   * If `true`, the password input will be required and have `aria-required` attribute set to `true`.
   * @default false
   */
  required?: boolean;

  /**
   * Properties spread to password input wrapper element.
   */
  wrapperProps?: Omit<PasswordInputWrapperProps, 'children'>;

  /**
   * Properties spread to password input toggle button wrapper element.
   */
  toggleButtonWrapperProps?: Omit<PasswordInputToggleButtonWrapperProps, 'children' | 'size'>;

  /**
   * Properties spread to password input toggle button element.
   */
  toggleButtonProps?: Omit<
    PasswordInputToggleButtonProps,
    'visible' | 'onVisibleChange' | 'size' | 'inputId'
  >;
}
