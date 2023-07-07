import type { MainProps } from './main.types';

export function Main(props: MainProps) {
  const { children } = props;

  return (
    <div className="bg-accent-1">
      <main className="flex min-h-[calc(100vh-9.625rem)] flex-col gap-y-8 p-4 lg:mx-auto lg:max-w-7xl lg:flex-row lg:gap-x-8">
        {children}
      </main>
    </div>
  );
}
