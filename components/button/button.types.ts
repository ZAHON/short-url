import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonLoaderProps } from './button-loader';
import type { ButtonInnerProps } from './button-inner';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The label of the button.
   */
  children: ReactNode;

  /**
   * The type of the button.
   * @default "button"
   */
  type?: 'button' | 'reset' | 'submit';

  /**
   * The size of the button.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The variant of the button.
   * @default "secondary"
   */
  variant?: 'default' | 'secondary' | 'success' | 'error' | 'warning';

  /**
   * If `true`, the button will have 100% width of his parent.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * If `true`, the button will have full rounded corners.
   * @default false
   */
  rounded?: boolean;

  /**
   * If `true`, the button will be disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * If added, the button will show icon before the button's label.
   */
  icon?: ReactNode;

  /**
   * If `true`, the button will show a loader.
   * @default false
   */
  loading?: boolean;

  /**
   * Properties spread to `Loader` component.
   */
  loaderProps?: Omit<ButtonLoaderProps, 'wrapperStyle'>;

  /**
   * Properties spread to `ButtonInner` component.
   */
  innerProps?: Omit<ButtonInnerProps, 'children' | 'loading'>;
}
