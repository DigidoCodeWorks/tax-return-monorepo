import { SVGProps } from 'react';

const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.14645 5.39645C3.34171 5.20118 3.65829 5.20118 3.85355 5.39645L8 9.54289L12.1464 5.39645C12.3417 5.20118 12.6583 5.20118 12.8536 5.39645C13.0488 5.59171 13.0488 5.90829 12.8536 6.10355L8.35355 10.6036C8.15829 10.7988 7.84171 10.7988 7.64645 10.6036L3.14645 6.10355C2.95118 5.90829 2.95118 5.59171 3.14645 5.39645Z"
        fill="#0061FF"
      />
    </svg>
  );
};

export default ArrowDownIcon;
