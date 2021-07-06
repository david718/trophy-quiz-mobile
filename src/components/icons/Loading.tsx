import { useCallback, useEffect } from 'react';

import Atoms from 'components/Atoms';

type LoadingProps = {
  size?: string;
};

const Loading = ({ size }: LoadingProps) => {
  const containerRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      import('lottie-web').then((Lottie) => {
        console.log(Lottie);
        import('src/animation/loading-wh.json').then((loadingAnimationData) => {
          (Lottie as any).loadAnimation({
            container: node,
            animationData: loadingAnimationData,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            name: 'Loading',
          });
          (Lottie as any).setSpeed(2);
        });
      });
    }
  }, []);

  useEffect(() => {
    return () => {
      import('lottie-web').then((Lottie) => {
        (Lottie as any).destroy();
      });
    };
  }, []);

  return (
    <Atoms.Div
      height={size || '20px'}
      width={size || '20px'}
      ref={containerRef}
    />
  );
};

export default Loading;
