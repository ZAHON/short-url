import type { HTMLAttributes, ReactNode } from 'react';

export interface DialogTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * The content of the dialog title.
   */
  children: ReactNode;
}
