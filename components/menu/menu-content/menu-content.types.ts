import type { HTMLAttributes, ReactNode } from 'react';
import type { DropdownMenuContentProps as RadixDropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';

export interface MenuContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the menu.
   */
  children: ReactNode;

  /**
   * When `true`, keyboard navigation will loop from last item to first, and vice versa.
   * @default true
   */
  loop?: boolean;

  /**
   * Event handler called when focus moves to the trigger after closing. It can be prevented by calling `event.preventDefault`.
   */
  onCloseAutoFocus?: (event: Event) => void;

  /**
   * Event handler called when the escape key is down. It can be prevented by calling `event.preventDefault`.
   */
  onEscapeKeyDown?: (event: KeyboardEvent) => void;

  /**
   * Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onPointerDownOutside?: RadixDropdownMenuContentProps['onPointerDownOutside'];

  /**
   * Event handler called when focus moves outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onFocusOutside?: RadixDropdownMenuContentProps['onFocusOutside'];

  /**
   * Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onInteractOutside?: RadixDropdownMenuContentProps['onInteractOutside'];

  /**
   * The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.
   * @default "bottom"
   */
  side?: 'top' | 'right' | 'bottom' | 'left';

  /**
   * The distance in pixels from the trigger.
   * @default 8
   */
  sideOffset?: number;

  /**
   * The preferred alignment against the trigger. May change when collisions occur.
   * @default "center"
   */
  align?: 'start' | 'center' | 'end';

  /**
   * An offset in pixels from the `"start"` or `"end"` alignment options.
   * @default 0
   */
  alignOffset?: number;

  /**
   * When `true`, overrides the `side` and `align` preferences to prevent collisions with boundary edges.
   * @default true
   */
  avoidCollisions?: boolean;

  /**
   * The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.
   * @default []
   */
  collisionBoundary?: Element | null | Array<Element | null>;

  /**
   * The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: `{ top: 20, left: 20 }`.
   * @default 0
   */
  collisionPadding?: number | Partial<Record<'top' | 'right' | 'bottom' | 'left', number>>;

  /**
   * The sticky behavior on the align axis. `"partial"` will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst `"always"` will keep the content in the boundary regardless.
   * @default "partial"
   */
  sticky?: 'partial' | 'always';

  /**
   * Whether to hide the content when the trigger becomes fully occluded.
   * @default false
   */
  hideWhenDetached?: boolean;
}
