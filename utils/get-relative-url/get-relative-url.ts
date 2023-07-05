import type { GetRelativeUrlArgs } from './get-relative-url.types';
import { isValidUrl } from '@/utils';

export function getRelativeUrl(args: GetRelativeUrlArgs) {
  const { url, imageUrl } = args;

  if (!imageUrl) {
    return null;
  }

  if (isValidUrl(imageUrl)) {
    return imageUrl;
  }

  const { protocol, host } = new URL(url);
  const baseURL = `${protocol}//${host}`;

  return new URL(imageUrl, baseURL).toString();
}
