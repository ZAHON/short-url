'use client';
import type { CreateLinkDialogContentProps } from './create-link-dialog-content.types';
import { DialogContent } from '@/components';

export function CreateLinkDialogContent(props: CreateLinkDialogContentProps) {
  const { children } = props;

  return (
    <DialogContent
      onEscapeKeyDown={(e) => e.preventDefault()}
      onPointerDownOutside={(e) => e.preventDefault()}
    >
      {children}
    </DialogContent>
  );
}
