import type { ButtonHTMLAttributes } from 'react';

type HTMLAttributesToOmit = 'children';

export interface DialogXButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, HTMLAttributesToOmit> {
  /**
   * A label that describes the dialog close.
   * @default "Close dialog"
   */
  'aria-label'?: string;
}
