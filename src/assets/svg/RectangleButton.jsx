import React from "react";

const RectangleButton = () => {
  return (
    <div className="content-button">
      <svg width="171" height="68" viewBox="0 0 171 68" fill="none">
        <g filter="url(#filter0_d_0_3446)">
          <path
            d="M161.171 18.3142C160.331 13.8386 156.572 10.4961 152.029 10.1836L14.6863 0.735158C8.90697 0.337571 4 4.91855 4 10.7116V50C4 55.5228 8.47716 60 14 60H156.947C163.21 60 167.931 54.3092 166.775 48.1542L161.171 18.3142Z"
            fill="white"
            fillOpacity="0.04"
            shapeRendering="crispEdges"
          />
          <path
            d="M160.68 18.4065C159.881 14.1547 156.311 10.9793 151.995 10.6824L14.652 1.23398C9.16162 0.856271 4.5 5.2082 4.5 10.7116V50C4.5 55.2467 8.7533 59.5 14 59.5H156.947C162.897 59.5 167.382 54.0937 166.284 48.2465L160.68 18.4065Z"
            stroke="white"
            shapeRendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_0_3446"
            x="0"
            y="0.710938"
            width="170.95"
            height="67.2891"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_0_3446"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_0_3446"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <p>Explore More</p>
    </div>
  );
};

export default RectangleButton;
