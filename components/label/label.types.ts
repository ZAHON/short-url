import type { LabelHTMLAttributes, ReactNode } from 'react';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  /**
   * The id of the element the label is associated with.
   */
  htmlFor: string;

  /**
   * The content of the label.
   */
  children: ReactNode;

  /**
   * The font size of the label.
   * @default "md"
   */
  fontSize?: 'sm' | 'md' | 'lg';
}
