'use client';
import { signIn } from 'next-auth/react';
import { IconBrandGoogle } from '@tabler/icons-react';
import { Button } from '@/components';

export function ContinueWithGoogleButton() {
  function handleSignIn() {
    signIn('google', { callbackUrl: '/links' });
  }

  return (
    <Button
      onClick={handleSignIn}
      icon={<IconBrandGoogle size="1.25rem" aria-hidden="true" focusable="false" />}
      fullWidth
      className="border-[#4285F4] bg-[#4285F4] enabled:hover:border-[#4285F4]/90 enabled:hover:bg-[#4285F4]/90 enabled:active:border-[#4285F4]/90 enabled:active:bg-[#4285F4]/90"
    >
      Continue with Google
    </Button>
  );
}
