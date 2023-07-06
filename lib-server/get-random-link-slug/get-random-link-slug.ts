import 'server-only';
import { nanoid } from '@/lib-server';
import prisma from '@/lib-server/prisma';

export async function getRandomLinkSlug() {
  const randomLinkSlug = nanoid();
  const linkWithRadomKey = await prisma.link.findUnique({ where: { slug: randomLinkSlug } });

  if (linkWithRadomKey) {
    return getRandomLinkSlug();
  }

  return randomLinkSlug;
}
