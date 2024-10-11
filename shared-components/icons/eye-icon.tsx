import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgEyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 16 15"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M.032 7.358A8.79 8.79 0 0 1 8 2.302c3.529 0 6.57 2.07 7.968 5.056a.34.34 0 0 1 0 .289A8.79 8.79 0 0 1 8 12.702 8.79 8.79 0 0 1 .032 7.647a.34.34 0 0 1 0-.289m4.362.145A3.596 3.596 0 0 0 8 11.09c1.991 0 3.606-1.606 3.606-3.587A3.597 3.597 0 0 0 8 3.916c-1.991 0-3.606 1.605-3.606 3.587m5.915-.002A2.303 2.303 0 0 1 8 9.797a2.303 2.303 0 0 1-2.309-2.296A2.303 2.303 0 0 1 8 5.204a2.303 2.303 0 0 1 2.309 2.297"
      clipRule="evenodd"
    />
    <path stroke="currentColor" strokeLinecap="round" d="M14.667 1 1.333 14" />
  </svg>
);
const Memo = memo(SvgEyeIcon);
export default Memo;
