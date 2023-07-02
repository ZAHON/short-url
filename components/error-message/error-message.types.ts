import type { HTMLAttributes, ReactNode } from 'react';

export interface ErrorMessageProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The content of the error message.
   */
  children: ReactNode;

  /**
   * The font size of the error message.
   * @default "md"
   */
  fontSize?: 'sm' | 'md' | 'lg';

  /**
   * If `true`, the error message will show icon before the message's label.
   * @default true
   */
  withIcon?: boolean;
}
