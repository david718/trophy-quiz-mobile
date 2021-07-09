import { useHistory } from 'react-router';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { DEFAULT_NUMBERS } from 'src/constant';
import {
  QueryDataState,
  QuizDifficultyState,
  QuizNumbersState,
} from 'src/state';
import { FixedFooter } from 'components/Molecules';
import Atoms from 'components/Atoms';

const LandingFooter = () => {
  const history = useHistory();
  const [quizNumbers, setQuizNumbers] = useRecoilState(QuizNumbersState);
  const [quizDifficulty, setQuizDifficulty] = useRecoilState(
    QuizDifficultyState,
  );
  const setQueryData = useSetRecoilState(QueryDataState);

  const handleClick = () => {
    setQueryData({
      amount: quizNumbers,
      difficulty: quizDifficulty,
    });
    setQuizNumbers(DEFAULT_NUMBERS);
    setQuizDifficulty(undefined);
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
