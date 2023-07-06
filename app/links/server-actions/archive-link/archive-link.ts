'use server';
import type { ArchiveLinkArgs } from './archive-link.types';
import { revalidatePath } from 'next/cache';
import prisma from '@/lib-server/prisma';

export async function archiveLink(args: ArchiveLinkArgs) {
  const { id, archived } = args;

  await prisma.link.update({
    where: { id },
    data: { archived },
  });

  revalidatePath('/links');
}
