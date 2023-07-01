import type { HTMLAttributes, ReactNode } from 'react';

export interface MenuGroupProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the menu group - `MenuItem` components.
   */
  children: ReactNode;
}
