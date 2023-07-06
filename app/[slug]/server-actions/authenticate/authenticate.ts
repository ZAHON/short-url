'use server';
import type { AuthenticateArgs } from './authenticate.types';
import { redirect } from 'next/navigation';
import prisma from '@/lib-server/prisma';

export async function authenticate(args: AuthenticateArgs) {
  const { slug, password } = args;

  const link = await prisma.link.findUnique({
    where: { slug },
    select: { password: true, url: true },
  });

  if (!link) {
    throw Error(`[server-actions authenticate]: Failed to fetch link with slug ${slug}`);
  }

  const { password: linkPassword, url } = link;

  if (linkPassword !== password) {
    return {
      error: 'Invalid password',
    };
  }

  redirect(url);
}
