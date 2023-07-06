import type { GetMetaDataArgs } from './get-meta-data.types';

export function getMetaData(args: GetMetaDataArgs) {
  const { url, password, title, description, image } = args;

  function getTitle() {
    if (password) {
      return 'Password Required';
    }

    if (!title) {
      const { hostname, pathname } = new URL(url);

      return `${hostname}${pathname}`;
    }

    return title;
  }

  function getDescription() {
    if (password) {
      return 'This link is password protected. Please enter the password to view it.';
    }

    if (!description) {
      return 'No description';
    }

    return description;
  }

  function getImage() {
    if (password) {
      return '/images/password-protected.png';
    }

    if (!image) {
      return undefined;
    }

    return image;
  }

  return {
    title: getTitle(),
    description: getDescription(),
    openGraph: {
      title: getTitle(),
      description: getDescription(),
      images: getImage(),
    },
  };
}
