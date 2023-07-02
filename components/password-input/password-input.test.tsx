import type { PasswordInputProps } from '.';
import type { Mock } from 'vitest';
import { createRef, useState } from 'react';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PasswordInput } from '.';

const placeholder = 'password';
const visibleLabel = 'Your password is shown';
const noVisibleLabel = 'Your password is hidden';

function PasswordInputTest(props: PasswordInputProps) {
  return (
    <PasswordInput
      placeholder={placeholder}
      visibleLabel={visibleLabel}
      noVisibleLabel={noVisibleLabel}
      {...props}
    />
  );
}

describe('PasswordInput', () => {
  describe('Uncontrolled', () => {
    it('should have type="password" when defaultVisible property not provided', () => {
      render(<PasswordInputTest defaultVisible={false} />);
      expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute('type', 'password');
    });

    it('should have type="text" when defaultVisible property provided', () => {
      render(<PasswordInputTest defaultVisible={true} />);
      expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute('type', 'text');
    });

    it('should have fallback text when password is not visible', () => {
      render(<PasswordInputTest defaultVisible={false} />);
      expect(screen.queryByText(visibleLabel)).not.toBeInTheDocument();
      expect(screen.getByText(noVisibleLabel)).toBeInTheDocument();
    });

    it('should have fallback text when password is visible', () => {
      render(<PasswordInputTest defaultVisible={true} />);
      expect(screen.getByText(visibleLabel)).toBeInTheDocument();
      expect(screen.queryByText(noVisibleLabel)).not.toBeInTheDocument();
    });

    it('should show and hide password when user click toggle button', async () => {
      const user = userEvent.setup();

      render(<PasswordInputTest defaultVisible={false} />);

      expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute('type', 'password');

      await user.click(screen.getByRole('button'));
      expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute('type', 'text');

      await user.click(screen.getByRole('button'));
      expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute('type', 'password');
    });
  });

  describe('Controlled', () => {
    it('should have type="password" when visible property not provided', () => {
      render(<PasswordInputTest visible={false} />);
      expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute('type', 'password');
    });

    it('should have type="text" when visible property provided', () => {
      render(<PasswordInputTest visible={true} />);
      expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute('type', 'text');
    });

    it('should have fallback text when password is not visible', () => {
      render(<PasswordInputTest visible={false} />);
      expect(screen.queryByText(visibleLabel)).not.toBeInTheDocument();
      expect(screen.getByText(noVisibleLabel)).toBeInTheDocument();
    });

    it('should have fallback text when password is visible', () => {
      render(<PasswordInputTest visible={true} />);
      expect(screen.getByText(visibleLabel)).toBeInTheDocument();
      expect(screen.queryByText(noVisibleLabel)).not.toBeInTheDocument();
    });

    it('should show and hide password when user click toggle button', async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function ControlledPasswordInput({ onChange }: { onChange: Mock<any, any> }) {
        const [visible, setVisible] = useState(false);

        return (
          <PasswordInputTest
            visible={visible}
            onVisibleChange={() => {
              onChange?.();
              setVisible(!visible);
            }}
          />
        );
      }

      const onChange = vi.fn();

      const user = userEvent.setup();

      render(<ControlledPasswordInput onChange={onChange} />);

      expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute('type', 'password');

      await user.click(screen.getByRole('button'));
      expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute('type', 'text');
      expect(onChange).toHaveBeenCalled();

      await user.click(screen.getByRole('button'));
      expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute('type', 'password');
      expect(onChange).toHaveBeenCalled();
    });
  });

  it('should support ref', () => {
    const ref = createRef<HTMLInputElement>();

    render(<PasswordInput ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('should have toggle button when disabled property not provided', () => {
    render(<PasswordInputTest disabled={false} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should have not toggle button when disabled property provided', () => {
    render(<PasswordInputTest disabled={true} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should be not disabled when disabled property not provided', () => {
    render(<PasswordInputTest disabled={false} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeEnabled();
  });

  it('should be disabled when disabled property provided', () => {
    render(<PasswordInputTest disabled={true} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeDisabled();
  });

  it('should be not required when required property not provided', () => {
    render(<PasswordInputTest required={false} />);
    expect(screen.getByPlaceholderText(placeholder)).not.toBeRequired();
  });

  it('should be required when required property provided', () => {
    render(<PasswordInputTest required={true} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeRequired();
  });

  it('should be not invalid when invalid property not provided', () => {
    render(<PasswordInputTest invalid={false} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeValid();
  });

  it('should be invalid when invalid property provided', () => {
    render(<PasswordInputTest invalid={true} />);
    expect(screen.getByPlaceholderText(placeholder)).toBeInvalid();
  });

  it('should have class name handed over by className property', () => {
    const className = 'test';

    render(<PasswordInputTest className={className} />);
    expect(screen.getByPlaceholderText(placeholder)).toHaveClass(className);
  });
});
