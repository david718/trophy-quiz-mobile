import { Component, ErrorInfo, ReactNode } from 'react';

import { getQueryData } from 'src/utils';
import Atoms from 'src/components/Atoms';
import { Exclamation } from 'src/components/icons';

type Props = {
  children: ReactNode;
};

type State = {
  error?: any;
};

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    error: false,
  };

  static getDerivedStateFromError(e: Error): State {
    // Update state so the next render will show the fallback UI.
    console.log(e);
    return { error: e };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    if (this.state.error) {
      const { platform } = getQueryData();
      return (
        <Atoms.Div
          display="flex"
          alignItems="center"
          justifyContent="center"
          padding={`var(--padding-${platform})`}
          height="100vh"
          background="var(--white)"
        >
          <Atoms.Div
            display="flex"
            flexDirection="column"
            alignItems="center"
            width="100%"
          >
            <Exclamation size="big" />
            <Atoms.Div marginTop="16px" fontWeight="bold" fontSize="20px">
              404 NOT FOUND
            </Atoms.Div>
            <Atoms.Div
              marginTop="12px"
              textAlign="center"
              color="var(--grey-400)"
            >
              <Atoms.Div>
                The page you requested could not be found
                <br />
                because the address was entered incorrectly, changed or deleted.
              </Atoms.Div>
            </Atoms.Div>
          </Atoms.Div>
        </Atoms.Div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
