import 'server-only';
import * as cheerio from 'cheerio';
import { isValidUrl, truncate, getRelativeUrl } from '@/utils';
import { getHtml } from '@/lib-server';

export async function getMetaTags(url: string) {
  try {
    if (!isValidUrl(url)) {
      throw Error('Invalid URL');
    }

    const html = await getHtml(url);

    const { hostname, pathname } = new URL(url);

    if (!html) {
      return {
        title: `${hostname}${pathname}`,
        description: 'No description',
        image: null,
      };
    }

    const $ = cheerio.load(html);

    // title
    const titleOg = $('head > meta[property="og:title"]').attr('content');
    const titleTwitter = $('head > meta[property="twitter:title"]').attr('content');
    const titleTag = $('head > title').text();

    // description
    const descriptionTag = $('head > meta[name="description"]').attr('content');
    const descriptionOg = $('head > meta[property="og:description"]').attr('content');
    const descriptionTwitter = $('head > meta[property="twitter:description"]').attr('content');

    // image
    const imageOg = $('head > meta[property="og:image"]').attr('content');
    const imageTwitter = $('head > meta[property="twitter:image"]').attr('content');

    const title = titleOg || titleTwitter || titleTag;
    const description = descriptionTag || descriptionOg || descriptionTwitter;
    const image = imageOg || imageTwitter;

    return {
      title: title || `${hostname}${pathname}`,
      description: truncate({ str: description || 'No description', length: 280 }),
      image: getRelativeUrl({ url: url, imageUrl: image }),
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error(`[lib-server getMetaTags]: ${error.message}`);
    }

    return null;
  }
}
