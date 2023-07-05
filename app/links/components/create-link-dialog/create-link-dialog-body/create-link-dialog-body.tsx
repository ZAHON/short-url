'use client';
import { DialogBody, Separator } from '@/components';
import { CreateLinkDialogDestinationUrl } from '../create-link-dialog-destination-url';
import { CreateLinkDialogPasswordProtection } from '../create-link-dialog-password-protection';

export function CreatelinkDialogBody() {
  return (
    <DialogBody className="flex flex-col gap-y-6">
      <CreateLinkDialogDestinationUrl />
      <Separator label="Optional" />
      <CreateLinkDialogPasswordProtection />
    </DialogBody>
  );
}
