'use server';
import type { CreateLinkArgs } from './create-link.types';
import { revalidatePath } from 'next/cache';
import { isValidUrl } from '@/utils';
import { getRandomLinkSlug, getMetaTags } from '@/lib-server';
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

  const metaTags = await getMetaTags(url);

  if (!metaTags) {
    throw Error(`[server-actions createLink]: Failed to fetch meta tags from ${url}`);
  }

  const randomLinkSlug = await getRandomLinkSlug();

  await prisma.link.create({
    data: {
      userId,
      url,
      slug: randomLinkSlug,
      password: password.length ? password : undefined,
      ...metaTags,
    },
  });

  revalidatePath('/links');
}
