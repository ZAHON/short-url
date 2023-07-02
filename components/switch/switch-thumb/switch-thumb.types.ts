import type { HTMLAttributes } from 'react';
import type { SwitchProps } from '../switch.types';

type HTMLAttributesToOmit = 'children';

export interface SwitchThumbProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, HTMLAttributesToOmit> {
  /**
   * The size of the switch thumb.
   */
  size?: SwitchProps['size'];
}
