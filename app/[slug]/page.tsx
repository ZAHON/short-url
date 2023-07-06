import type { LinkSlagPageProps } from './page.types';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getMetaData } from './utils';
import { getLink, incrementLinkClicks } from './server-actions';
import { PasswordRequired } from './components';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

export default async function LinkSlagPage({ params }: LinkSlagPageProps) {
  const { slug } = params;

  if (!slug) {
    redirect('/');
  }

  const link = await getLink(slug);

  if (!link) {
    redirect('/');
  }

  const { url, password } = link;

  if (!password) {
    await incrementLinkClicks(slug);
    redirect(url);
  }

  if (password) {
    return <PasswordRequired />;
  }

  return <></>;
}

export async function generateMetadata({ params }: LinkSlagPageProps): Promise<Metadata> {
  const { slug } = params;

  if (!slug) {
    return {};
  }

  const link = await getLink(slug);

  if (!link) {
    return {};
  }

  const metaData = getMetaData({ ...link });

  return metaData;
}
