import type { HTMLAttributes, ReactNode } from 'react';

type HTMLAttributesToOmit = 'onSelect';

export interface MenuItemProps extends Omit<HTMLAttributes<HTMLDivElement>, HTMLAttributesToOmit> {
  /**
   * The label of the menu item.
   */
  children: ReactNode;

  /**
   * If added, the menu item will show icon before the items's label.
   */
  icon?: ReactNode;

  /**
   * The varaint of the menu item.
   * @default "default"
   */
  variant?: 'default' | 'error';

  /**
   * When `true`, prevents the user from interacting with the item.
   * @default false
   */
  disabled?: boolean;

  /**
   * Event handler called when the user selects an item (via mouse or keyboard). Calling `event.preventDefault` in this handler will prevent the dropdown menu from closing when selecting that item.
   */
  onSelect?: (event: Event) => void;

  /**
   * Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the item. Use this when the content is complex, or you have non-textual content inside.
   */
  textValue?: string;
}
