import { getServerSession } from '@/lib-server';
import { UserMenuInner } from './user-menu-inner';

export async function UserMenu() {
  const session = await getServerSession();

  const user = {
    image: session?.user?.image,
    name: session?.user?.name,
    email: session?.user?.email,
  };

  if (!session) {
    return null;
  }

  return <UserMenuInner {...user} />;
}
