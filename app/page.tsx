import { Header, Main, HeroSection, FeaturesSection, Footer } from './components';

export default function HomePage() {
  return (
    <>
      <Header />
      <Main>
        <HeroSection />
        <FeaturesSection />
      </Main>
      <Footer />
    </>
  );
}
