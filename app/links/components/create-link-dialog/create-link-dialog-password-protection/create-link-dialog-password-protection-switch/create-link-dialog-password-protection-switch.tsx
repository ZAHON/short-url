'use client';
import type { CreateLinkDialogPasswordProtectionSwitchProps as Props } from './create-link-dialog-password-protection-switch.types';
import { useId } from 'react';
import { Label, Switch } from '@/components';
import {
  useLinksPageStore,
  selectSetCreateLinkPassword,
  selectSetCreateLinkIsValidPasswordLength,
} from '@links/store';

export function CreateLinkDialogPasswordProtectionSwitch(props: Props) {
  const { checked, onCheckedChange } = props;

  const switchId = useId();

  const setCreateLinkPassword = useLinksPageStore(selectSetCreateLinkPassword);
  const setCreateLinkIsValidPasswordLength = useLinksPageStore(
    selectSetCreateLinkIsValidPasswordLength
  );

  function handleonCheckedChange(checked: boolean) {
    onCheckedChange(checked);

    setCreateLinkPassword('');
    setCreateLinkIsValidPasswordLength(true);
  }

  return (
    <div role="group" className="flex items-center justify-between">
      <Label htmlFor={switchId}>Password Protection</Label>
      <Switch id={switchId} size="sm" checked={checked} onCheckedChange={handleonCheckedChange} />
    </div>
  );
}
