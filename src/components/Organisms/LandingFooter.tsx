import { useHistory } from 'react-router';
import { useResetRecoilState } from 'recoil';

import { InitialPropsState } from 'src/state';
import { FixedFooter } from 'components/Molecules';
import { QUIZ_PAGENAME } from 'src/constant';
import Atoms from 'components/Atoms';

const LandingFooter = () => {
  const history = useHistory();
  const resetInitialProps = useResetRecoilState(InitialPropsState);

  const handleClick = () => {
    resetInitialProps();
    history.push(`/${QUIZ_PAGENAME}`);
  };

  return (
    <FixedFooter>
      <Atoms.Button
        designType="primary400"
        height="56px"
        width="100%"
        borderRadius="8px"
        fontSize="20px"
        onClick={handleClick}
      >
        START
      </Atoms.Button>
    </FixedFooter>
  );
};

export default LandingFooter;
