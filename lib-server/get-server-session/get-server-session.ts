import 'server-only';
import { getServerSession as getNextAuthServerSession } from 'next-auth/next';
import { authOptions } from '@/lib-server';

export async function getServerSession() {
  const session = await getNextAuthServerSession(authOptions);

  return session;
}
