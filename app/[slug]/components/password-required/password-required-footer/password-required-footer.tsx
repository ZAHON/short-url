import { PasswordRequiredAuthenticate } from '../password-required-authenticate';

export function PasswordRequiredFooter() {
  return (
    <footer className="border-t border-t-accent-2 bg-accent-1 px-8 py-4">
      <PasswordRequiredAuthenticate />
    </footer>
  );
}
