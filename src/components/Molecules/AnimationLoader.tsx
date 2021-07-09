import { useEffect, useRef } from 'react';

import Atoms from 'components/Atoms';

export type AnimationLoaderProps = {
  name: string;
  path: string;
  size?: string;
};

const AnimationLoader = ({ name, path, size }: AnimationLoaderProps) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import('lottie-web').then((Lottie) => {
      (Lottie as any).loadAnimation({
        container: container.current,
        path,
        name,
        renderer: 'svg',
        autoplay: true,
      });
    });

    return () => {
      import('lottie-web').then((Lottie) => {
        (Lottie as any).destroy();
      });
    };
  }, [path]);

  return (
    <Atoms.Div
      height={size || '200px'}
      width={size || '200px'}
      ref={container}
    />
  );
};

export default AnimationLoader;
