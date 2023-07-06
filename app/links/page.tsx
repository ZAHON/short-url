import { redirect } from 'next/navigation';
import { getServerSession } from '@/lib-server';
import { getLinks } from './server-actions';
import { LinkCardsWrapper, LinkCard } from './components';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default async function LinksPage() {
  const session = await getServerSession();
  const userId = session?.user?.id;

  if (!session || !userId) {
    redirect('/login');
  }

  const links = await getLinks({ userId });

  return (
    <LinkCardsWrapper>
      {links.map((link) => (
        <LinkCard key={link.id} {...link} />
      ))}
    </LinkCardsWrapper>
  );
}
