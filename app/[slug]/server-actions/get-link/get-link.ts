'use server';
import prisma from '@/lib-server/prisma';

export async function getLink(slug: string) {
  const link = await prisma.link.findUnique({
    where: { slug },
    select: {
      url: true,
      password: true,
      title: true,
      description: true,
      image: true,
    },
  });

  return link;
}
