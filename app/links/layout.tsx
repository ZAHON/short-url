import type { ReactNode } from 'react';
import { Header, SubHeader, Main, CreateLinkDialog } from './components';

export default function LinksPageLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <>
      <Header />
      <SubHeader />
      <Main>{children}</Main>

      <CreateLinkDialog />
    </>
  );
}
