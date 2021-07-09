import { useHistory } from 'react-router';
import { useSetRecoilState } from 'recoil';

import {
  CurrentQuizIndexState,
  QuizResultsState,
  SelectedAnswerState,
} from 'src/state';
import { FixedFooter } from 'components/Molecules';
import Atoms from 'components/Atoms';

const ResultsFooter = () => {
  const history = useHistory();
  const setCurrentQuizIndex = useSetRecoilState(CurrentQuizIndexState);
  const setSelectedAnswer = useSetRecoilState(SelectedAnswerState);
  const setQuizResults = useSetRecoilState(QuizResultsState);

  const resetQuizIndexAndAnswer = () => {
    setCurrentQuizIndex(0);
    setSelectedAnswer(undefined);
    setQuizResults([]);
  };

  const handleClick = () => {
    resetQuizIndexAndAnswer();
    history.push('/');
  };

  const handleClickToRetry = () => {
    resetQuizIndexAndAnswer();
    history.push('/quiz');
  };

  return (
    <FixedFooter>
      <Atoms.Button
        designType="primary400"
        height="56px"
        width="calc(60% - 4px)"
        borderRadius="8px"
        fontSize="20px"
        onClick={handleClick}
      >
        START PAGE
      </Atoms.Button>
      <Atoms.Button
        designType="border"
        marginLeft="8px"
        height="56px"
        width="calc(40% - 4px)"
        borderRadius="8px"
        fontSize="20px"
        onClick={handleClickToRetry}
      >
        RETRY
      </Atoms.Button>
    </FixedFooter>
  );
};

export default ResultsFooter;
