import type { DefaultSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';

interface User extends DefaultSession['user'] {
  id: string;
}

declare module 'next-auth' {
  interface Session {
    user?: User;
  }
}

declare module 'next-auth/jwt/types' {
  interface JWT {
    uid: string;
  }
}

declare global {
  /* eslint-disable no-var */
  var prisma: PrismaClient;
}
