import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgMinusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="1em"
    fill="currentColor"
    viewBox="0 0 448 512"
    width="1em"
    {...props}
  >
    <path d="M432 256c0 17.7-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32h352c17.7 0 32 14.3 32 32" />
  </svg>
);
const Memo = memo(SvgMinusIcon);
export default Memo;
