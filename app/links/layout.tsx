import type { ReactNode } from 'react';
import { Header, SubHeader } from './components';

export default function LinksPageLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <>
      <Header />
      <SubHeader />
      <main>{children}</main>
    </>
  );
}
