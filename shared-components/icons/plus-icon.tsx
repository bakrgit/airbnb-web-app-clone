import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgPlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#EA3047"
      d="M12.047 0C5.456 0 0 5.363 0 11.954 0 18.544 5.456 24 12.047 24S24 18.545 24 11.955 18.638 0 12.047 0m6.328 13.36h-4.922v5.015c0 .776-.631 1.407-1.406 1.407s-1.406-.631-1.406-1.407V13.36H5.625a1.41 1.41 0 0 1-1.406-1.406c0-.776.63-1.407 1.406-1.407h5.016V5.625c0-.775.63-1.406 1.406-1.406s1.406.631 1.406 1.406v4.922h4.922c.775 0 1.406.631 1.406 1.407 0 .775-.631 1.406-1.406 1.406"
    />
  </svg>
);
const Memo = memo(SvgPlusIcon);
export default Memo;
