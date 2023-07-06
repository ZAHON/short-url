'use client';
import { useTransition } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components';
import {
  usePasswordRequiredStore,
  selectPassword,
  selectIsValidPassword,
  selectSetIsValidPassword,
} from '../password-required-store';
import { authenticate } from '../../../server-actions';

export function PasswordRequiredAuthenticate() {
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const password = usePasswordRequiredStore(selectPassword);
  const isValidPassword = usePasswordRequiredStore(selectIsValidPassword);

  const setIsValidPassword = usePasswordRequiredStore(selectSetIsValidPassword);

  function handleAuthenticate() {
    const slug = params?.slug;

    if (slug) {
      startTransition(async () => {
        const response = await authenticate({ slug, password });

        if (typeof response === 'object') {
          setIsValidPassword(false);
        }
      });
    }
  }

  return (
    <Button
      onClick={handleAuthenticate}
      loading={isPending}
      disabled={password.length === 0 || !isValidPassword}
      fullWidth
      className="disabled:bg-white"
    >
      Authenticate
    </Button>
  );
}
