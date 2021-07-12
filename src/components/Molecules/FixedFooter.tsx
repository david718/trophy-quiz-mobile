import { useEffect, useState } from 'react';
import styled, { CSSProperties } from 'styled-components';

import { getQueryData, isIosNotch } from 'src/utils';

const SFixedFooterOverlappedDiv = styled.div<CSSProperties & FixedFooterProps>`
  height: ${() => (isIosNotch() ? '96px' : '80px')};
  width: 100%;
`;

const SFixedFooterWrapper = styled.div<CSSProperties & FixedFooterProps>`
  position: fixed;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ padding }) => padding};
  height: ${() => (isIosNotch() ? '96px' : '80px')};
  width: 100%;

  text-align: center;
  background: white;
  box-sizing: border-box;
  z-index: 1;
`;

type FixedFooterProps = {
  children?: React.ReactNode;
};

const FixedFooter = ({ children }: FixedFooterProps) => {
  const { platform } = getQueryData();
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

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

    window.addEventListener('resize', listener);
    return () => {
      window.removeEventListener('resize', listener);
    };
  }, []);

  return (
    <>
      <SFixedFooterOverlappedDiv />
      <SFixedFooterWrapper padding={`var(--padding-${platform})`}>
        {children}
      </SFixedFooterWrapper>
    </>
  );
};

export default FixedFooter;
