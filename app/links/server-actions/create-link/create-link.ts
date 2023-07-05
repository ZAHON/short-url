'use server';
import type { CreateLinkArgs } from './create-link.types';
import { revalidatePath } from 'next/cache';
import { isValidUrl } from '@/utils';
import { nanoid, getMetaTags } from '@/lib-server';
import prisma from '@/lib-server/prisma';

export async function createLink(args: CreateLinkArgs) {
  const { url, password, userId } = args;

  const isInValidUrl = !isValidUrl(url);
  const isInValidPasswordLength = password.length > 128;

  if (isInValidUrl || isInValidPasswordLength) {
    return {
      isInValidUrl,
      isInValidPasswordLength,
    };
  }

  async function getRandomKey() {
    const randomKey = nanoid();
    const linkWithRadomKey = await prisma.link.findUnique({ where: { key: randomKey } });

    if (linkWithRadomKey) {
      return getRandomKey();
    }

    return randomKey;
  }

  const metaTags = await getMetaTags(url);

  if (!metaTags) {
    throw Error(`[server-actions createLink]: Failed to fetch meta tags from ${url}`);
  }

  const key = await getRandomKey();

  await prisma.link.create({
    data: {
      userId,
      key,
      url,
      password: password.length ? password : undefined,
      ...metaTags,
    },
  });

  revalidatePath('/links');
}
