import { Button } from '@/components';
import {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogXButton,
  DialogBody,
  DialogFooter,
  DialogCloseButton,
} from '.';

const meta = {
  title: 'Components/Dialog',
};

export default meta;

export const Default = {
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Token</DialogTitle>
            <DialogXButton />
          </DialogHeader>
          <DialogBody className="flex flex-col gap-y-6">
            <p>
              Enter a unique name for your token to differentiate it from other tokens and then
              select the scope.
            </p>
            <p>Some content contained within the modal.</p>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>
              <Button variant="default">Cancel</Button>
            </DialogCloseButton>
            <DialogCloseButton>
              <Button>Submit</Button>
            </DialogCloseButton>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  ),
};

export const WithSingleButton = {
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Token</DialogTitle>
            <DialogXButton />
          </DialogHeader>
          <DialogBody className="flex flex-col gap-y-6">
            <p>
              Enter a unique name for your token to differentiate it from other tokens and then
              select the scope.
            </p>
            <p>Some content contained within the modal.</p>
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>
              <Button variant="default" fullWidth>
                Cancel
              </Button>
            </DialogCloseButton>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  ),
};

export const WithLargeContent = {
  render: () => (
    <Dialog>
      <DialogTrigger>
        <Button>Open dialog</Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Token</DialogTitle>
            <DialogXButton />
          </DialogHeader>
          <DialogBody className="flex flex-col gap-y-2">
            {Array.from({ length: 50 }).map((_, index) => (
              <p key={index}>Some content contained within the modal.</p>
            ))}
          </DialogBody>
          <DialogFooter>
            <DialogCloseButton>
              <Button variant="default">Cancel</Button>
            </DialogCloseButton>
            <DialogCloseButton>
              <Button>Submit</Button>
            </DialogCloseButton>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  ),
};
