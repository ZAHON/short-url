import { ContinueWithGithubButton, ContinueWithGoogleButton } from '..';

export function ContinueWith() {
  return (
    <div className="flex flex-col gap-y-4 p-8">
      <ContinueWithGithubButton />
      <ContinueWithGoogleButton />
    </div>
  );
}
