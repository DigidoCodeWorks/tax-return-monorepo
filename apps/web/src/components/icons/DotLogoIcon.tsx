import { SVGProps } from 'react';

const DotLogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip0)">
      <mask
        id="mask0"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={40}
        height={40}
      >
        <path d="M0 0H40V40H0V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0)">
        <path d="M0 0H40V40H0V0Z" fill="white" />
        <path
          d="M8.223 16.233V39.046C8.223 39.576 7.957 39.842 7.427 39.842H2.015C1.485 39.842 1.219 39.576 1.219 39.046V16.233C1.219 15.703 1.485 15.437 2.015 15.437H7.427C7.957 15.437 8.223 15.703 8.223 16.233ZM20 30.558C17.35 30.558 15.279 32.63 15.279 35.279C15.279 37.929 17.351 40 20 40C22.65 40 24.721 37.928 24.721 35.279C24.721 32.629 22.651 30.558 20 30.558ZM35.279 30.558C32.629 30.558 30.558 32.63 30.558 35.279C30.558 37.929 32.63 40 35.279 40C37.929 40 40 37.928 40 35.279C40 32.629 37.928 30.558 35.279 30.558ZM20 15.279C17.35 15.279 15.279 17.351 15.279 20C15.279 22.65 17.351 24.721 20 24.721C22.65 24.721 24.721 22.649 24.721 20C24.721 17.35 22.651 15.279 20 15.279ZM35.279 15.279C32.629 15.279 30.558 17.351 30.558 20C30.558 22.65 32.63 24.721 35.279 24.721C37.929 24.721 40 22.649 40 20C40 17.35 37.928 15.279 35.279 15.279ZM20 0C17.35 0 15.279 2.072 15.279 4.721C15.279 7.371 17.351 9.442 20 9.442C22.65 9.442 24.721 7.37 24.721 4.721C24.721 2.071 22.651 0 20 0ZM35.279 9.442C37.929 9.442 40 7.37 40 4.721C40 2.071 37.928 0 35.279 0C32.629 0 30.558 2.072 30.558 4.721C30.558 7.371 32.628 9.442 35.279 9.442ZM4.721 0C2.071 0 0 2.072 0 4.721C0 7.371 2.072 9.442 4.721 9.442C7.371 9.442 9.442 7.37 9.442 4.721C9.442 2.071 7.372 0 4.721 0Z"
          fill="url(#paint0_linear)"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="1.128"
        y1="1.606"
        x2="38.394"
        y2="38.873"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0161FD" />
        <stop offset="0.246" stopColor="#3F46D2" />
        <stop offset="0.508" stopColor="#812EA4" />
        <stop offset="0.773" stopColor="#C21578" />
        <stop offset="1" stopColor="#FD0050" />
      </linearGradient>
      <clipPath id="clip0">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default DotLogoIcon;
