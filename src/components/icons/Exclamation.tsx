import { CSSProperties } from 'react';

export type IconProps = {
  size?: string | number;
  color?: string;
  background?: string;
  style?: CSSProperties;
  onClick?: (e: React.MouseEvent<SVGRectElement | SVGSVGElement>) => void;
};

const Exclamation = ({ size, style, background }: IconProps) => {
  const cStyle = { marginRight: 4 };

  if (size == 'big') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="104"
        height="104"
        viewBox="0 0 104 104"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(-136 -246) translate(24 246) translate(112)">
            <path d="M0 0H104V104H0z" />
            <rect width="96" height="96" x="4" y="4" fill="#F5F6F6" rx="48" />
            <g fill="#101C4C" transform="translate(47 28)">
              <path d="M5 0c2.611 0 4.729 2.117 4.729 4.729 0 .087-.003.175-.008.263L8.156 33.018C8.062 34.691 6.678 36 5.003 36c-1.676 0-3.06-1.309-3.154-2.982L.28 4.992C.135 2.385 2.13.153 4.737.007 4.824.002 4.912 0 5 0z" />
              <circle cx="5" cy="44" r="4" />
            </g>
          </g>
        </g>
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        style={style || cStyle}
        width={size}
        viewBox="0 0 18 18"
      >
        <g fill="none">
          <path
            fill={background || '#525561'}
            d="M9 1c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 11c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zm0-8.6c-.053 0-.106.003-.158.009-.786.087-1.353.795-1.265 1.581l.535 4.815c.05.453.433.795.888.795s.838-.342.888-.795l.535-4.815c.006-.052.01-.105.01-.158C10.432 4.042 9.79 3.4 9 3.4z"
          />
        </g>
      </svg>
    );
  }
};

export default Exclamation;
