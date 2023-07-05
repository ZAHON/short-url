'use client';
import { useState } from 'react';
import { CreateLinkDialogPasswordProtectionSwitch } from './create-link-dialog-password-protection-switch';
import { CreateLinkDialogPasswordProtectionInput } from './create-link-dialog-password-protection-input';

export function CreateLinkDialogPasswordProtection() {
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  return (
    <div className="flex flex-col gap-y-4">
      <CreateLinkDialogPasswordProtectionSwitch
        checked={showPasswordInput}
        onCheckedChange={setShowPasswordInput}
      />
      {showPasswordInput && <CreateLinkDialogPasswordProtectionInput />}
    </div>
  );
}
