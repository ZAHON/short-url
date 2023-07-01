import type { HTMLAttributes, ReactNode } from 'react';
import type { DialogContentProps as RadixDialogContentProps } from '@radix-ui/react-dialog';

export interface DialogContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the dialog - `DialogHeader`, `DialogBody` and `DialogFooter` components.
   */
  children: ReactNode;

  /**
   * Event handler called when focus moves into the component after opening. It can be prevented by calling `event.preventDefault`.
   */
  onOpenAutoFocus?: (event: Event) => void;

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
  onPointerDownOutside?: RadixDialogContentProps['onPointerDownOutside'];

  /**
   * Event handler called when an interaction (pointer or focus event) happens outside the bounds of the component. It can be prevented by calling `event.preventDefault`.
   */
  onInteractOutside?: RadixDialogContentProps['onInteractOutside'];
}
