import { useCallback, useEffect } from 'react';

import Atoms from 'components/Atoms';

export type AnimationProps = {
  size?: string;
};

const Box = ({ size }: AnimationProps) => {
  const containerRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      import('lottie-web').then((Lottie) => {
        (Lottie as any).loadAnimation({
          container: node,
          path: 'https://assets6.lottiefiles.com/packages/lf20_q8buwK.json',
          renderer: 'svg',
          autoplay: true,
          name: 'Box',
        });
      });
    }
  }, []);

  return (
    <Atoms.Div
      height={size || '160px'}
      width={size || '160px'}
      ref={containerRef}
    />
  );
};

export default Box;
