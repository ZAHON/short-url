'use client';
import { useTransition } from 'react';
import { useSession } from 'next-auth/react';
import { Button } from '@/components';
import {
  useLinksPageStore,
  selectCreateLinkUrl,
  selectCreateLinkIsValidUrl,
  selectCreateLinkPassword,
  selectCreateLinkIsValidPasswordLength,
  selectSetCreateLinkIsValidUrl,
  selectSetCreateLinkIsValidPasswordLength,
  selectSetCreateLinkDialogOpen,
  selectResetCreateLinkState,
} from '@links/store';
import { createLink } from '@links/server-actions';

export function CreateLinkDialogConfirmButton() {
  const { data: session } = useSession();
  const [isPending, startTransition] = useTransition();

  const createLinkUrl = useLinksPageStore(selectCreateLinkUrl);
  const createLinkIsValidUrl = useLinksPageStore(selectCreateLinkIsValidUrl);
  const createLinkIsValidPassword = useLinksPageStore(selectCreateLinkPassword);
  const createLinkIsValidPasswordLength = useLinksPageStore(selectCreateLinkIsValidPasswordLength);

  const setCreateLinkIsValidUrl = useLinksPageStore(selectSetCreateLinkIsValidUrl);
  const setCreateLinkIsValidPasswordLength = useLinksPageStore(
    selectSetCreateLinkIsValidPasswordLength
  );
  const setCreateLinkDialogOpen = useLinksPageStore(selectSetCreateLinkDialogOpen);
  const resetCreateLinkState = useLinksPageStore(selectResetCreateLinkState);

  const userId = session?.user?.id;

  function handleCreateLink() {
    const url = createLinkUrl.trim();

    if (!url) {
      setCreateLinkIsValidUrl(false);
      return;
    }

    if (userId) {
      startTransition(async () => {
        try {
          const password = createLinkIsValidPassword;

          const response = await createLink({ url, password, userId });

          if (typeof response === 'object') {
            const { isInValidUrl, isInValidPasswordLength } = response;

            setCreateLinkIsValidUrl(!isInValidUrl);
            setCreateLinkIsValidPasswordLength(!isInValidPasswordLength);

            return;
          }

          setCreateLinkDialogOpen(false);
          resetCreateLinkState();
        } catch {
          setCreateLinkDialogOpen(false);
          resetCreateLinkState();
        }
      });
    } else {
      setCreateLinkDialogOpen(false);
      resetCreateLinkState();
    }
  }

  return (
    <Button
      onClick={handleCreateLink}
      loading={isPending}
      disabled={!createLinkIsValidUrl || !createLinkIsValidPasswordLength}
      fullWidth
      className="disabled:bg-white"
    >
      Create link
    </Button>
  );
}
