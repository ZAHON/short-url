'use client';
import { signIn } from 'next-auth/react';
import { IconBrandGithub } from '@tabler/icons-react';
import { Button } from '@/components';

export function ContinueWithGithubButton() {
  function handleSignIn() {
    signIn('github', { callbackUrl: '/links' });
  }

  return (
    <Button
      onClick={handleSignIn}
      icon={<IconBrandGithub size="1.25rem" aria-hidden="true" focusable="false" />}
      fullWidth
      className="border-[#24292F] bg-[#24292F] enabled:hover:border-[#24292F]/90 enabled:hover:bg-[#24292F]/90 enabled:active:border-[#24292F]/90 enabled:active:bg-[#24292F]/90"
    >
      Continue with Github
    </Button>
  );
}
