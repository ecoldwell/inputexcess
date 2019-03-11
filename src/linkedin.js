import React from 'react';
/* eslint-disable */

const LinkedinLogo = ({ size, className, color }) => (
  <div className={className}>
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 24 24"
      enableBackground="new 0 0 24 24;"
      xmlSpace="preserve"
      width={size}
      height={size}
      fill="white"
    >
      <path
        d="M20.45,20.45h-3.55v-5.57c0-1.33-0.03-3.04-1.85-3.04c-1.85,0-2.14,1.44-2.14,2.94v5.67H9.35V9h3.41v1.56h0.05
	c0.48-0.9,1.64-1.85,3.37-1.85c3.6,0,4.27,2.37,4.27,5.45L20.45,20.45L20.45,20.45z M5.34,7.43c-1.14,0-2.06-0.93-2.06-2.07
	c0-1.14,0.92-2.06,2.06-2.06c1.14,0,2.06,0.92,2.06,2.06C7.4,6.51,6.48,7.43,5.34,7.43z M7.12,20.45H3.56V9h3.56V20.45z M22.23,0
	H1.77C0.79,0,0,0.77,0,1.73v20.54C0,23.23,0.79,24,1.77,24h20.45C23.2,24,24,23.23,24,22.27V1.73C24,0.77,23.2,0,22.23,0L22.23,0z"
      />
    </svg>
  </div>
);

LinkedinLogo.defaultProps = {
  size: 20,
  className: '',
  color: '#111',
};

export default LinkedinLogo;
