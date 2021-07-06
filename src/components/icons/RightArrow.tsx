import { CSSProperties } from 'react';

type RightArrowInCircleProps = {
  size?: string | number;
  color?: string;
  style?: CSSProperties;
  shape?: 'circle';
};

const RightArrowInCircle = ({
  size,
  color,
  style,
  shape,
}: RightArrowInCircleProps) => {
  const cStyle = { marginRight: -5.25 };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 18}
      height={size || 18}
      viewBox={`0 0 ${size || 18} ${size || 18}`}
      style={style || cStyle}
    >
      {shape && (
        <circle
          cx={Math.floor(Number(size) / 2)}
          cy={Math.floor(Number(size) / 2)}
          r={Math.floor((Number(size) - 1) / 2)}
          fill="var(--white)"
          stroke="var(--grey-200)"
        />
      )}
      {shape ? (
        <path
          fill={color || `var(--black)`}
          d="M14 23c-.256 0-.512-.098-.707-.293-.391-.39-.391-1.023 0-1.414L18.586 16l-5.293-5.293c-.391-.39-.391-1.023 0-1.414.391-.39 1.023-.39 1.414 0l6 6c.391.391.391 1.023 0 1.414l-6 6c-.195.195-.451.293-.707.293"
        />
      ) : (
        <path
          fill={color || `var(--black)`}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.99975 15.7498C5.80775 15.7498 5.61575 15.6768 5.46975 15.5297C5.17675 15.2367 5.17675 14.7628 5.46975 14.4698L10.9387 8.99975L5.46975 3.52975C5.17675 3.23675 5.17675 2.76275 5.46975 2.46975C5.76275 2.17675 6.23675 2.17675 6.52975 2.46975L12.5297 8.46975C12.8228 8.76275 12.8228 9.23675 12.5297 9.52975L6.52975 15.5297C6.38375 15.6768 6.19175 15.7498 5.99975 15.7498Z"
        />
      )}
    </svg>
  );
};

export default RightArrowInCircle;
