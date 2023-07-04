import { redirect } from 'next/navigation';
import { getServerSession } from '@/lib-server';
import { Header, ContinueWith } from './components';

export default async function LoginPage() {
  const session = await getServerSession();

  if (session) {
    redirect('/links');
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center">
      <section className="flex max-h-[90vh] w-[90vw] max-w-md flex-col overflow-hidden rounded-lg border border-accent-2 bg-white shadow-md">
        <Header />
        <ContinueWith />
      </section>
    </main>
  );
}
