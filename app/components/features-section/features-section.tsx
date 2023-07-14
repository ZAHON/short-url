import { IconLink, IconGraph, IconQrcode, IconLock } from '@tabler/icons-react';

export function FeaturesSection() {
  return (
    <section className="flex flex-col items-center gap-y-8 pb-16">
      <h2>
        <span className="text-3xl font-bold">What is </span>
        <span className="text-2xl font-medium">Short URL?</span>
      </h2>
      <ul role="list" className="grid gap-4 px-8 md:grid-cols-2 md:px-0 xl:grid-cols-4">
        <li className="flex flex-col items-center gap-y-4 rounded-lg border border-accent-2 bg-white p-8 drop-shadow-md">
          <div className="rounded-full bg-accent-1 p-4 drop-shadow">
            <IconLink size="2.5rem" aria-hidden="true" focusable="false" />
          </div>
          <h3 className="text-xl font-medium">URL Shortener</h3>
          <p className="text-center text-sm leading-relaxed text-accent-7">
            Short URL is a <span className="font-bold">URL Shortener</span> and{' '}
            <span className="font-bold">Link Management Platform.</span> It offers a lot of features
            that will help you handle all your links in an intuitive way and reveal the potential of
            your links.
          </p>
        </li>
        <li className="flex flex-col items-center gap-y-4 rounded-lg border border-accent-2 bg-white p-8 drop-shadow-md">
          <div className="rounded-full bg-accent-1 p-4 drop-shadow">
            <IconGraph size="2.5rem" aria-hidden="true" focusable="false" />
          </div>
          <h3 className="text-xl font-medium">Link analytics</h3>
          <p className="text-center text-sm leading-relaxed text-accent-7">
            Short URL is an advanced <span className="font-bold">Link Analytics</span> platform that
            tracks clicks on short links and provides extensive statistics to help you measure the
            effectiveness of your <span className="font-bold">short links.</span>
          </p>
        </li>
        <li className="flex flex-col items-center gap-y-4 rounded-lg border border-accent-2 bg-white p-8 drop-shadow-md">
          <div className="rounded-full bg-accent-1 p-4 drop-shadow">
            <IconQrcode size="2.5rem" aria-hidden="true" focusable="false" />
          </div>
          <h3 className="text-xl font-medium">QR Codes</h3>
          <p className="text-center text-sm leading-relaxed text-accent-7">
            With Short URL, you can easily generate <span className="font-bold">QR codes</span>. Use
            QR codes to grow your business and measure their impact on your marketing efforts.
          </p>
        </li>
        <li className="flex flex-col items-center gap-y-4 rounded-lg border border-accent-2 bg-white p-8 drop-shadow-md">
          <div className="rounded-full bg-accent-1 p-4 drop-shadow">
            <IconLock size="2.5rem" aria-hidden="true" focusable="false" />
          </div>
          <h3 className="text-xl font-medium">Password protection</h3>
          <p className="text-center text-sm leading-relaxed text-accent-7">
            With Short URL, you can easily <span className="font-bold">password protect</span> your
            shortened links. Use this feature to protect links against unauthorized access.
          </p>
        </li>
      </ul>
    </section>
  );
}
