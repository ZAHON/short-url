import type { LinksPageProps } from './page.types';
import { redirect } from 'next/navigation';
import { getServerSession } from '@/lib-server';
import { getLinks } from './server-actions';
import { Filters, LinkCardsWrapper, LinkCard } from './components';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default async function LinksPage(props: LinksPageProps) {
  const { searchParams } = props;

  const search = searchParams?.search;
  const showArchived = searchParams?.showArchived === 'true';

  const session = await getServerSession();
  const userId = session?.user?.id;

  if (!session || !userId) {
    redirect('/login');
  }

  const links = await getLinks({ userId, search, showArchived });

  return (
    <>
      <Filters />
      <LinkCardsWrapper>
        {links.map((link) => (
          <LinkCard key={link.id} {...link} />
        ))}
      </LinkCardsWrapper>
    </>
  );
}
