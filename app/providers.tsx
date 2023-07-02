'use client';
import type { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

export function Providers(props: { children: ReactNode }) {
  const { children } = props;

  return <SessionProvider>{children}</SessionProvider>;
}
