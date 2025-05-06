import { SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M8.36335 1V1C4.29655 1 0.999756 4.29679 0.999756 8.36359C0.999756 12.4304 4.29655 15.7272 8.36335 15.7272C12.4301 15.7272 15.7269 12.4304 15.7269 8.36359V8.36406C15.7269 4.29737 12.4305 1.00052 8.36382 1L8.36335 1Z"
        stroke="#0061FF"
        strokeWidth="1.5"
      />
      <path
        d="M13.8571 13.8573L18.9997 19"
        stroke="#0061FF"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default SearchIcon;
