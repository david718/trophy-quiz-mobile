import { useEffect, useState } from 'react';
import styled, { CSSProperties } from 'styled-components';

import { getQueryData, isIosNotch } from 'src/utils';

const SFixedFooterOverlappedDiv = styled.div<CSSProperties & FixedFooterProps>`
  height: ${({ isUsing }) => {
    let result = 81;
    if (isIosNotch()) result += 16;
    if (isUsing) result += 40;

    return `${result}px`;
  }};
  width: 100%;
`;

const SFixedFooterWrapper = styled.div<CSSProperties & FixedFooterProps>`
  position: fixed;
  bottom: 0;
  padding: ${({ padding }) => padding};
  height: ${({ isUsing }) => {
    let result = 81;
    if (isIosNotch()) result += 16;
    if (isUsing) result += 40;

    return `${result}px`;
  }};
  width: 100%;

  text-align: center;
  background: white;
  box-sizing: border-box;
  z-index: 1;
`;

type FixedFooterProps = {
  isUsing?: boolean;
  children?: React.ReactNode;
};

const FixedFooter = ({ isUsing, children }: FixedFooterProps) => {
  const { platform } = getQueryData();
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  const handleResizeVisible = () => {
    setVisible((prev) => !prev);
  };

  useEffect(() => {
    const listener = () => {
      const MIN_KEYBOARD_HEIGHT = 300; // N.B.! this might not always be correct

      const isMobile = window.innerWidth < 768;
      const isKeyboardOpen =
        isMobile &&
        window.screen.height - MIN_KEYBOARD_HEIGHT >
          window.visualViewport.height;
      setVisible(!isKeyboardOpen);
    };

    window.visualViewport.addEventListener('resize', listener);
    // window.addEventListener('resize', handleResizeVisible);
    return () => {
      window.visualViewport.removeEventListener('resize', listener);
      // window.removeEventListener('resize', handleResizeVisible);
    };
  }, []);

  return (
    <>
      <SFixedFooterOverlappedDiv isUsing={isUsing}></SFixedFooterOverlappedDiv>
      <SFixedFooterWrapper
        isUsing={isUsing}
        padding={`var(--padding-${platform})`}
      >
        {children}
      </SFixedFooterWrapper>
    </>
  );
};

export default FixedFooter;
