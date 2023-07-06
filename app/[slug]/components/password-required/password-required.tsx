import { PasswordRequiredHeader } from './password-required-header';
import { PasswordRequiredBody } from './password-required-body';
import { PasswordRequiredFooter } from './password-required-footer';

export function PasswordRequired() {
  return (
    <main className="relative flex min-h-screen items-center justify-center">
      <section className='className="flex shadow-md" max-h-[90vh] w-[90vw] max-w-md flex-col overflow-hidden rounded-lg border border-accent-2 bg-white'>
        <PasswordRequiredHeader />
        <PasswordRequiredBody />
        <PasswordRequiredFooter />
      </section>
    </main>
  );
}
