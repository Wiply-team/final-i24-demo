import React from "react";
import Svg from "./../Svg";

// LikeIcon :: Props -> React.Component
export default ({
  width = 25,
  height = 25,
  "aria-label": ariaLabel,
  className = "",
}) => (
  <Svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 21 25"
    aria-label={ariaLabel}
  >
    <g transform="translate(478.000000, 0.000000)">
      <path d="M-457.8,10.4c0.3-0.4,0.5-0.8,0.5-1.4c0-1.1-0.9-2.1-2.1-2.1h-4c0.4-1.2,0.6-2.8,0.6-3.5V2.8c0-1.5-1.2-2.8-2.8-2.8h-0.7c-0.3,0-0.6,0.2-0.7,0.5l-0.4,1.5c-0.5,2.1-2.2,4.4-3.9,4.8c-0.3-0.8-1.1-1.3-1.9-1.3h-4.1c-0.4,0-0.7,0.3-0.7,0.7v12.4c0,0.4,0.3,0.7,0.7,0.7h4.1c0.8,0,1.5-0.5,1.9-1.2l2.4,0.8c0.8,0.3,1.6,0.4,2.4,0.4h5.8c1.1,0,2.1-0.9,2.1-2.1c0-0.3-0.1-0.5-0.1-0.8c0.9-0.2,1.5-1,1.5-2c0-0.5-0.2-1-0.5-1.4c0.3-0.4,0.5-0.8,0.5-1.4C-457.3,11.2-457.5,10.8-457.8,10.4z M-472.5,17.3c0,0.4-0.3,0.7-0.7,0.7h-3.4v-11h3.4c0.4,0,0.7,0.3,0.7,0.7V17.3z M-460.8,11.1h1.4c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7h-1.4c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h1.4c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7h-1.4c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7h-5.8c-0.7,0-1.3-0.1-2-0.3l-2.6-0.9V8.3c1.1-0.2,2.1-0.9,3.1-2c0.9-1.1,1.7-2.5,2-3.9l0.2-1h0.2c0.8,0,1.4,0.6,1.4,1.4v0.7c0,0.9-0.3,2.7-0.7,3.5h-1.4c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h6.9c0.4,0,0.7,0.3,0.7,0.7s-0.3,0.7-0.7,0.7h-1.4c-0.4,0-0.7,0.3-0.7,0.7S-461.1,11.1-460.8,11.1z" />
      <circle cx="-474.6" cy="15.9" r="1" />
    </g>
  </Svg>
);