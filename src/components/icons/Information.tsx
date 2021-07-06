import { CSSProperties } from 'react';

export type IconProps = {
  size?: string | number;
  color?: string;
  background?: string;
  style?: CSSProperties;
  onClick?: (e: React.MouseEvent<SVGRectElement | SVGSVGElement>) => void;
};
const Information = ({ size, style, onClick }: IconProps) => {
  return (
    <svg
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      style={style}
      onClick={onClick}
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect id="24px-area" x="0" y="0" width="24" height="24"></rect>
        <g id="info" transform="translate(2.000000, 2.000000)">
          <path
            d="M20,10 C20,15.523 15.522,20 10,20 C4.478,20 0,15.523 0,10 C0,4.477 4.478,0 10,0 C15.522,0 20,4.477 20,10"
            id="Fill-24"
            fill="#A7AAAF"
          ></path>
          <path
            d="M11,5 C11,5.55266667 10.552,6 10,6 C9.448,6 9,5.55266667 9,5 C9,4.44733333 9.448,4 10,4 C10.552,4 11,4.44733333 11,5"
            id="Fill-26"
            fill="#FFFFFF"
          ></path>
          <rect
            id="Rectangle"
            fill="#FFFFFF"
            x="9"
            y="8"
            width="2"
            height="8"
          ></rect>
        </g>
      </g>
    </svg>
  );
};

export default Information;
