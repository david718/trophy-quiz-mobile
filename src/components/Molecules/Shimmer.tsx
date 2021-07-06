import styled, { css, CSSProperties, keyframes } from 'styled-components';

const Wrapper = styled.div<CSSProperties>`
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width || '80px'};
`;

const shimmer = keyframes` 
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const animate = css`
  animation: ${shimmer} 2s infinite linear;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
`;

const Content = styled.div<CSSProperties>`
  height: ${({ height }) => height || '20px'};
  border-radius: ${({ borderRadius }) => borderRadius};
  background: #777;
  ${animate};
`;

type ShimmerProps = {
  margin?: string;
  height?: string;
  width?: string;
  borderRadius?: string;
};

const Shimmer = ({ margin, height, width, borderRadius }: ShimmerProps) => {
  return (
    <Wrapper margin={margin} width={width}>
      <Content height={height} borderRadius={borderRadius} />
    </Wrapper>
  );
};

export default Shimmer;
