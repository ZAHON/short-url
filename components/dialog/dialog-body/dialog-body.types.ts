import type { HTMLAttributes, ReactNode } from 'react';

export interface DialogBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the dialog body.
   */
  children: ReactNode;
}
