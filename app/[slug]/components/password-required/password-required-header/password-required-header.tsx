import { Logo } from '@/components';

export function PasswordRequiredHeader() {
  return (
    <header className="flex flex-col items-center gap-y-3 border-b border-b-accent-2 bg-accent-1 px-8 py-4">
      <Logo />
      <h1 className="text-xl font-medium">Password Required</h1>
      <p className="text-center text-sm text-accent-8">
        This link is password protected. Please enter the password to view it.
      </p>
    </header>
  );
}
