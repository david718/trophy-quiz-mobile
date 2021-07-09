import { useHistory } from 'react-router';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { FixedFooter } from 'components/Molecules';
import Atoms from 'components/Atoms';
import {
  QueryDataState,
  QuizDifficultyState,
  QuizNumbersState,
} from 'src/state';

const LandingFooter = () => {
  const history = useHistory();
  const quizNumbers = useRecoilValue(QuizNumbersState);
  const quizDifficulty = useRecoilValue(QuizDifficultyState);
  const setQueryData = useSetRecoilState(QueryDataState);

  const handleClick = () => {
    setQueryData({
      amount: quizNumbers,
      difficulty: quizDifficulty,
    });
    history.push('/quiz');
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
