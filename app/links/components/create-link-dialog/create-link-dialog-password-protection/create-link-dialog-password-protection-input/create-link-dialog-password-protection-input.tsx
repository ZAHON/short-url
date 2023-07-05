'use client';
import type { ChangeEvent } from 'react';
import { useId } from 'react';
import { PasswordInput, ErrorMessage } from '@/components';
import {
  useLinksPageStore,
  selectCreateLinkPassword,
  selectCreateLinkIsValidPasswordLength,
  selectSetCreateLinkPassword,
  selectSetCreateLinkIsValidPasswordLength,
} from '@links/store';

export function CreateLinkDialogPasswordProtectionInput() {
  const inputId = useId();
  const errorMessageId = useId();

  const createLinkPassword = useLinksPageStore(selectCreateLinkPassword);
  const createLinkIsValidPasswordLength = useLinksPageStore(selectCreateLinkIsValidPasswordLength);

  const setCreateLinkPassword = useLinksPageStore(selectSetCreateLinkPassword);
  const setCreateLinkIsValidPasswordLength = useLinksPageStore(
    selectSetCreateLinkIsValidPasswordLength
  );

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setCreateLinkPassword(value);
    setCreateLinkIsValidPasswordLength(value.length <= 128);
  }

  return (
    <div role="group" className="flex flex-col gap-y-1">
      <PasswordInput
        id={inputId}
        placeholder="Enter password"
        invalid={!createLinkIsValidPasswordLength}
        aria-describedby={!createLinkIsValidPasswordLength ? errorMessageId : undefined}
        value={createLinkPassword}
        onChange={handleChange}
      />
      {!createLinkIsValidPasswordLength && (
        <ErrorMessage id={errorMessageId} className="pl-0.5">
          The password can contain up to 128 characters
        </ErrorMessage>
      )}
    </div>
  );
}
