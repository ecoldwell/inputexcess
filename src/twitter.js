import React from 'react';
/* eslint-disable */

const TwitterLogo = ({ size, className, color }) => (
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
        d="M23.95,4.57c-0.89,0.39-1.83,0.65-2.83,0.78c1.01-0.61,1.79-1.57,2.16-2.72c-0.95,0.56-2.01,0.96-3.13,1.18
	c-0.9-0.96-2.17-1.56-3.59-1.56c-2.72,0-4.92,2.2-4.92,4.92c0,0.39,0.05,0.76,0.13,1.12C7.69,8.09,4.07,6.13,1.64,3.16
	C1.21,3.88,0.97,4.72,0.97,5.64c0,1.71,0.87,3.21,2.19,4.1C2.36,9.71,1.6,9.48,0.93,9.12v0.06c0,2.39,1.69,4.37,3.95,4.83
	c-0.41,0.11-0.85,0.17-1.3,0.17c-0.31,0-0.62-0.03-0.92-0.09c0.63,1.95,2.44,3.38,4.6,3.42c-1.68,1.32-3.81,2.1-6.1,2.1
	c-0.39,0-0.78-0.02-1.17-0.07c2.19,1.39,4.77,2.21,7.56,2.21c9.05,0,14-7.5,14-13.99c0-0.21,0-0.42-0.01-0.63
	c0.96-0.69,1.8-1.56,2.46-2.55L23.95,4.57z"
      />
    </svg>
  </div>
);

TwitterLogo.defaultProps = {
  size: 20,
  className: '',
  color: '#111',
};

export default TwitterLogo;