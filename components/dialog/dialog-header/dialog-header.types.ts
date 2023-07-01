import type { HTMLAttributes, ReactNode } from 'react';

export interface DialogHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the dialog header - `DialogTitle` component and/or `DialogClose` component.
   */
  children: ReactNode;
}
