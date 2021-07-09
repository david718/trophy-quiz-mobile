import { useCallback } from 'react';

import Atoms from 'components/Atoms';
import { AnimationProps } from './Box';

const Trophy = ({ size }: AnimationProps) => {
  const containerRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      import('lottie-web').then((Lottie) => {
        (Lottie as any).loadAnimation({
          container: node,
          path: 'https://assets1.lottiefiles.com/packages/lf20_rmlyntkm.json',
          renderer: 'svg',
          autoplay: true,
          name: 'Trophy',
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

export default Trophy;
