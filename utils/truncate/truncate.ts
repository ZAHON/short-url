import type { TruncateArgs } from './truncate.types';

export function truncate(args: TruncateArgs) {
  const { str, length } = args;

  if (str.length <= length) {
    return str;
  }

  return `${str.slice(0, length - 3)}...`;
}
