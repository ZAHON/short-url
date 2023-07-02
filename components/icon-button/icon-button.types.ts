import type { ButtonHTMLAttributes, ReactNode } from 'react';

type HTMLAttributesToOmit = 'type';

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, HTMLAttributesToOmit> {
  /**
   * The icon to be used in the icon button.
   */
  children: ReactNode;

  /**
   * A label that describes the icon button.
   */
  'aria-label': string;

  /**
   * The size of the icon button.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The variant of the icon button.
   * @default "secondary"
   */
  variant?: 'default' | 'tertiary' | 'secondary';

  /**
   * If `true`, the icon button will have full rounded corners.
   * @default false
   */
  rounded?: boolean;

  /**
   * If `true`, the icon button will be disabled.
   * @default false
   */
  disabled?: boolean;
}
