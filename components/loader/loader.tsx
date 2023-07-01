import type { LoaderProps } from './loader.types';
import { applayComponentDefaultProps } from '@/utils';
import { getLoaderSize } from './utils';

const defaultProps: Partial<LoaderProps> = {
  size: 'md',
  speed: 1000,
  label: 'Loading, please wait...',
};

export function Loader(props: LoaderProps) {
  const { size, speed, label, wrapperProps, ...others } = applayComponentDefaultProps(
    defaultProps,
    props
  );

  const loaderSize = getLoaderSize(size);
  const loaderSpeed = `${speed}ms`;

  return (
    <div role="status" {...wrapperProps}>
      <svg
        width={loaderSize}
        viewBox="0 0 120 30"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        aria-hidden="true"
        focusable="false"
        {...others}
      >
        <circle cx="15" cy="15" r="15">
          <animate
            attributeName="r"
            from="15"
            to="15"
            begin="0s"
            dur={loaderSpeed}
            values="15;9;15"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            from="1"
            to="1"
            begin="0s"
            dur={loaderSpeed}
            values="1;.5;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="60" cy="15" r="9" fillOpacity="0.3">
          <animate
            attributeName="r"
            from="9"
            to="9"
            begin="0s"
            dur={loaderSpeed}
            values="9;15;9"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            from="0.5"
            to="0.5"
            begin="0s"
            dur={loaderSpeed}
            values=".5;1;.5"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="105" cy="15" r="15">
          <animate
            attributeName="r"
            from="15"
            to="15"
            begin="0s"
            dur={loaderSpeed}
            values="15;9;15"
            calcMode="linear"
            repeatCount="indefinite"
          />
          <animate
            attributeName="fill-opacity"
            from="1"
            to="1"
            begin="0s"
            dur={loaderSpeed}
            values="1;.5;1"
            calcMode="linear"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
}
