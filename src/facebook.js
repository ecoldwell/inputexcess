import React from 'react';
/* eslint-disable */

const FacebookLogo = ({ size, className, color }) => (
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
        d="M22.68,0H1.32C0.59,0,0,0.59,0,1.32v21.35C0,23.41,0.59,24,1.32,24h11.49v-9.29H9.69v-3.62h3.13V8.41
	c0-3.1,1.89-4.78,4.66-4.78c1.33,0,2.46,0.1,2.8,0.14v3.24h-1.92c-1.5,0-1.79,0.72-1.79,1.77v2.31h3.58l-0.47,3.63h-3.12V24h6.11
	c0.73,0,1.33-0.59,1.33-1.32V1.32C24,0.59,23.41,0,22.68,0"
      />
    </svg>
  </div>
);

FacebookLogo.defaultProps = {
  size: 20,
  className: '',
  color: '#111',
};

export default FacebookLogo;
