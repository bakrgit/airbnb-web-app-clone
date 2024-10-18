import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="currentColor"
      d="M10.929 4.929H7.286a.214.214 0 0 1-.215-.215V1.071a1.071 1.071 0 0 0-2.142 0v3.643a.214.214 0 0 1-.215.215H1.071a1.071 1.071 0 0 0 0 2.142h3.643c.119 0 .215.096.215.215v3.643a1.071 1.071 0 0 0 2.142 0V7.286c0-.119.096-.215.215-.215h3.643a1.071 1.071 0 0 0 0-2.142"
    />
  </svg>
);
const Memo = memo(SvgPlus);
export default Memo;
