import type { ReactNode } from 'react';
import type { LinkProps } from 'next/link';

export interface LinkAsButtonProps extends LinkProps {
  /**
   * The label of the link as button.
   */
  children: ReactNode;

  /**
   * The size of the link as button.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The variant of the button as button.
   * @default "secondary"
   */
  variant?: 'default' | 'tertiary' | 'secondary';

  /**
   * If `true`, the link as button will have 100% width of his parent.
   * @default false
   */
  fullWidth?: boolean;

  /**
   * If `true`, the button as link will have full rounded corners.
   * @default false
   */
  rounded?: boolean;

  /**
   * If added, the link as button will show icon before the link's label.
   */
  icon?: ReactNode;

  /**
   * Overwrite link as button default styles.
   */
  className?: string;
}
