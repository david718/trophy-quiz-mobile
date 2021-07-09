import { useCallback } from 'react';

import Atoms from 'components/Atoms';
import { AnimationProps } from './Box';

const Empty = ({ size }: AnimationProps) => {
  const containerRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      import('lottie-web').then((Lottie) => {
        (Lottie as any).loadAnimation({
          container: node,
          path: 'https://assets6.lottiefiles.com/packages/lf20_aEFaHc.json',
          renderer: 'svg',
          autoplay: true,
          name: 'Empty',
        });
      });
    }
  }, []);

  return (
    <Atoms.Div
      height={size || '220px'}
      width={size || '220px'}
      ref={containerRef}
    />
  );
};

export default Empty;
