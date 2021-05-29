import React from "react";

import { IconProps } from "../icons";

export default function Icon({ style, fill }: IconProps) {
  return (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g transform="rotate(180 471.5 283)">
        <path
          d="M.225 7.149a.769.769 0 0 0 1.088 1.087l3.462-3.461a.769.769 0 0 0 0-1.088L1.313.226A.769.769 0 1 0 .225 1.313l2.918 2.918z"
          fill={fill}
          transform="rotate(-90 741.9 -185.369)"
        />
        <path d="M0 0h24v24H0z" fill="none" transform="translate(919 542)" />
      </g>
    </svg>
  );
}
