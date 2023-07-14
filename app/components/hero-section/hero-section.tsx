import Image from 'next/image';
import { IconBrandGithub } from '@tabler/icons-react';
import { LinkAsButton } from '@/components';
import { GettingStartedLink } from '..';
import heroImage from '@/public/images/hero-image.png';

export function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-y-8 py-16">
      <h1 className="text-center text-4xl font-bold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
        Short Links With
        <br />
        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
          Superpowers
        </span>
      </h1>
      <p className="text-center text-accent-6 sm:text-xl">
        Short URL is an open-source link management tool for modern
        <br />
        marketing teams to create, share, and track short links.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <GettingStartedLink />
        <LinkAsButton
          href="https://github.com/ZAHON/short-url"
          variant="default"
          icon={<IconBrandGithub size="1.25rem" aria-hidden="true" focusable="false" />}
          rounded
          className="px-4"
        >
          Star on GitHub
        </LinkAsButton>
      </div>
      <Image
        src={heroImage}
        alt="Short URL hero image"
        quality={100}
        className="hidden drop-shadow-lg md:mt-8 md:block"
      />
    </section>
  );
}
