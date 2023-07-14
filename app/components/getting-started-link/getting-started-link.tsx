import { getServerSession } from '@/lib-server';
import { LinkAsButton } from '@/components';

export async function GettingStartedLink() {
  const session = await getServerSession();

  const href = session ? '/links' : '/login';

  return (
    <LinkAsButton href={href} rounded className="px-4">
      Getting started
    </LinkAsButton>
  );
}
