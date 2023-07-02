import type { ButtonHTMLAttributes } from 'react';
import type { SwitchThumbProps } from './switch-thumb';

type HTMLAttributesToOmit = 'children';

export interface SwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, HTMLAttributesToOmit> {
  /**
   * The size of the switch.
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * The state of the switch when it is initially rendered. Use when you do not need to control its state.
   */
  defaultChecked?: boolean;

  /**
   * The controlled state of the switch. Must be used in conjunction with `onCheckedChange` property.
   */
  checked?: boolean;

  /**
   * Event handler called when the state of the switch changes.
   */
  onCheckedChange?: (checked: boolean) => void;

  /**
   * When `true`, prevents the user from interacting with the switch.
   * @default false
   */
  disabled?: boolean;

  /**
   * When `true`, indicates that the user must check the switch before the owning form can be submitted.
   * @default false
   */
  required?: boolean;

  /**
   * The name of the switch. Submitted with its owning form as part of a name/value pair.
   */
  name?: string;

  /**
   * The value given as data when submitted with a `name` property.
   * @default "on"
   */
  value?: string;

  /**
   * Properties spread to `SwitchThumb` component.
   */
  thumbProps?: Omit<SwitchThumbProps, 'size'>;
}
