import type { InputHTMLAttributes } from 'react';

type HTMLAttributesToOmit = 'size';

export interface TextInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, HTMLAttributesToOmit> {
  /**
   * The size of the text input.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * If `true`, the text input will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If `true`, the text input will be invalid. In this state component will have and `aria-invalid` attribute set to `true`.
   * @default false
   */
  invalid?: boolean;

  /**
   * If `true`, the text input will be required and have `aria-required` attribute set to `true`.
   * @default false
   */
  required?: boolean;
}
