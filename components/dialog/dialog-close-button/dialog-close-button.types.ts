import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface DialogCloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The button that closes the dialog.
   */
  children: ReactNode;
}
