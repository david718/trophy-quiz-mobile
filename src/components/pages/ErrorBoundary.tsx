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
      const { error } = this.state;

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
              페이지를 찾을 수 없습니다.
            </Atoms.Div>
            <Atoms.Div
              marginTop="12px"
              textAlign="center"
              color="var(--grey-400)"
            >
              {error?.data?.message ? (
                <>
                  <Atoms.Div>{error?.data?.message?.title}</Atoms.Div>
                  <Atoms.Div>{error?.data?.message?.description}</Atoms.Div>
                </>
              ) : (
                <Atoms.Div>
                  주소가 잘못 입력되었거나,
                  <br />
                  변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
                  <br />
                  궁금하신 점이 있으시면 언제든 <br />
                  고객센터를 통해 문의해 주시기 바랍니다.
                </Atoms.Div>
              )}
            </Atoms.Div>
          </Atoms.Div>
        </Atoms.Div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
