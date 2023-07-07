'use server';
import { GetLinksArgs } from './get-links.types';
import prisma from '@/lib-server/prisma';

export async function getLinks(args: GetLinksArgs) {
  const { userId, search, showArchived } = args;

  const links = await prisma.link.findMany({
    where: {
      userId,
      url: { contains: search, mode: 'insensitive' },
      archived: showArchived ? undefined : false,
    },
    select: {
      archived: true,
      id: true,
      slug: true,
      url: true,
      clicks: true,
      createdAt: true,
    },
  });

  return links;
}
