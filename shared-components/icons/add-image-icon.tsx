import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgAddImageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 34 34"
    {...props}
  >
    <g filter="url(#add-image-icon_svg__a)">
      <circle cx={17} cy={15} r={13} fill="#fff" />
    </g>
    <path
      fill="#EA3047"
      fillRule="evenodd"
      d="M21.103 23h-7.109l5.713-6.427c.363-.408.981-.46 1.407-.12l3.861 3.09A3.897 3.897 0 0 1 21.102 23M9 19.103V17.05l3.182-2.386c.393-.295.941-.269 1.305.062l3.437 3.124-4.546 5.115A3.897 3.897 0 0 1 9 19.103m15.59-8.836q.175-.025.342-.093.068.356.068.723v7.09l-3.117-2.494a2.255 2.255 0 0 0-3.096.263l-1.045 1.175-3.427-3.115a2.256 2.256 0 0 0-2.871-.135L9 15.513v-4.616A3.897 3.897 0 0 1 12.897 7h8.206q.299 0 .59.045l-.785.786a1.436 1.436 0 0 0 .81 2.436v1.04a1.436 1.436 0 0 0 2.872 0zm-8.41.22a1.231 1.231 0 1 0-2.463.001 1.231 1.231 0 0 0 2.463 0m5.308-2.076L22.71 7.19a.614.614 0 0 1 .889.002l1.22 1.22a.614.614 0 1 1-.87.87l-.18-.18v2.207a.616.616 0 0 1-1.23 0V9.1l-.181.18a.615.615 0 1 1-.87-.869"
      clipRule="evenodd"
    />
    <defs>
      <filter
        id="add-image-icon_svg__a"
        width={34}
        height={34}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_20_5806" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_20_5806"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
const Memo = memo(SvgAddImageIcon);
export default Memo;
