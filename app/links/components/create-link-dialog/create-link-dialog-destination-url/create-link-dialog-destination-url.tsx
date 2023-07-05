'use client';
import type { ChangeEvent } from 'react';
import { useId } from 'react';
import { isValidUrl } from '@/utils';
import { Label, TextInput, ErrorMessage } from '@/components';
import {
  useLinksPageStore,
  selectCreateLinkUrl,
  selectCreateLinkIsValidUrl,
  selectSetCreateLinkUrl,
  selectSetCreateLinkIsValidUrl,
} from '@links/store';

export function CreateLinkDialogDestinationUrl() {
  const inputId = useId();
  const errorMessageId = useId();

  const createLinkUrl = useLinksPageStore(selectCreateLinkUrl);
  const createLinkIsValidUrl = useLinksPageStore(selectCreateLinkIsValidUrl);

  const setCreateLinkUrl = useLinksPageStore(selectSetCreateLinkUrl);
  const setCreateLinkIsValidUrl = useLinksPageStore(selectSetCreateLinkIsValidUrl);

  function hanldeChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setCreateLinkUrl(value);
    setCreateLinkIsValidUrl(isValidUrl(value));
  }

  return (
    <div role="group" className="flex flex-col gap-y-1">
      <Label htmlFor={inputId} className="pl-0.5">
        Destination URL
      </Label>
      <TextInput
        id={inputId}
        invalid={!createLinkIsValidUrl}
        aria-describedby={!createLinkIsValidUrl ? errorMessageId : undefined}
        value={createLinkUrl}
        onChange={hanldeChange}
      />
      {!createLinkIsValidUrl && (
        <ErrorMessage id={errorMessageId} className="pl-0.5">
          Invalid URL
        </ErrorMessage>
      )}
    </div>
  );
}
