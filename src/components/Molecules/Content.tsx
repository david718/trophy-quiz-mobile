import { ReactNode } from 'react';

import { getQueryData } from 'src/utils';
import Atoms from 'components/Atoms';

export type ContentProps = {
  required?: boolean;
  height?: string;
  marginTop?: string;
  marginBottom?: string;
  header?: ReactNode;
  headerBorderBottom?: string;
  headerRight?: ReactNode;
  body?: ReactNode;
  children?: ReactNode;
};

const Content = ({
  required,
  height,
  marginTop,
  marginBottom,
  header,
  headerBorderBottom,
  headerRight,
  children,
}: ContentProps) => {
  const { platform } = getQueryData();

  return (
    <Atoms.Div
      height={height}
      width="100%"
      background="var(--white)"
      marginTop={marginTop || '4px'}
      marginBottom={marginBottom}
    >
      {header && (
        <Atoms.Div
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding={`var(--padding-${platform})`}
          height="56px"
          boxSizing="border-box"
          borderBottom={headerBorderBottom || '1px solid var(--grey-100)'}
        >
          <Atoms.Title height="56px">{header}</Atoms.Title>
          <Atoms.Div display="flex" alignItems="center">
            {headerRight}
          </Atoms.Div>
        </Atoms.Div>
      )}
      <Atoms.Div padding={`var(--padding-${platform})`}>{children}</Atoms.Div>
    </Atoms.Div>
  );
};

export default Content;
