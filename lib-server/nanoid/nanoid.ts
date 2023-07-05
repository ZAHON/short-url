import 'server-only';
import { customAlphabet } from 'nanoid';

export function nanoid() {
  const id = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', 5)();

  return id;
}
