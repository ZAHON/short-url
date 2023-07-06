'use server';
import { revalidatePath } from 'next/cache';
import prisma from '@/lib-server/prisma';

export async function incrementLinkClicks(slug: string) {
  try {
    await prisma.link.update({
      where: { slug },
      data: { clicks: { increment: 1 } },
    });

    revalidatePath('/links');
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        `[server-action incrementLinkClicks]: Failed to increment link clicks for link slug ${slug}`
      );
    }
  }
}
