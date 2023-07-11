'use server';
import { revalidatePath } from 'next/cache';
import prisma from '@/lib-server/prisma';

export async function deleteLink(id: string) {
  await prisma.link.delete({ where: { id } });

  revalidatePath('/links');
}
