import React from "react";

const NotFound = ({ ...props }: React.SVGAttributes<SVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 507 511.92"
    width={25}
    {...props}
  >
    <path d="M223.36 0c61.68 0 117.53 25 157.95 65.43 40.42 40.42 65.42 96.26 65.42 157.94 0 45.12-13.39 87.13-36.4 122.25L507 450.99l-66.66 60.93-93.23-102.58c-35.42 23.62-77.98 37.39-123.75 37.39-61.67 0-117.52-25-157.94-65.42C25 340.88 0 285.04 0 223.36c0-61.67 25-117.52 65.42-157.94S161.69 0 223.36 0zm59.55 136.89 25.81 25.99-59.78 60.5 59.83 60.56-25.9 25.79-59.48-60.19-59.57 60.3-25.8-25.99 59.77-60.51-59.83-60.56 25.9-25.79 59.48 60.19 59.57-60.29zm80.78-53.84c-35.91-35.91-85.53-58.13-140.33-58.13-54.8 0-104.41 22.22-140.32 58.13-35.91 35.91-58.12 85.51-58.12 140.31s22.21 104.42 58.12 140.32c35.91 35.92 85.52 58.12 140.32 58.12s104.42-22.2 140.33-58.12c35.91-35.9 58.11-85.51 58.11-140.32 0-54.8-22.2-104.4-58.11-140.31z" />
  </svg>
);

export { NotFound };
