import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="m14.2 12 9.344-9.345a1.553 1.553 0 0 0 0-2.2 1.553 1.553 0 0 0-2.198 0L12 9.803 2.655.456a1.553 1.553 0 0 0-2.199 0 1.553 1.553 0 0 0 0 2.199L9.801 12 .456 21.346A1.553 1.553 0 0 0 1.556 24a1.55 1.55 0 0 0 1.099-.456L12 14.2l9.346 9.345a1.55 1.55 0 0 0 2.198 0 1.553 1.553 0 0 0 0-2.198z"
    />
  </svg>
);
const Memo = memo(SvgCloseIcon);
export default Memo;
