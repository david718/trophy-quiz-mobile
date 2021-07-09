import { useRecoilValue } from 'recoil';

import { QuizResultsState } from 'src/state';
import { TrophyNumbers, ResultsFooter } from 'components/Organisms';
import { Content } from 'components/Molecules';
import Atoms from 'components/Atoms';

const ResultsPage = () => {
  const quizResults = useRecoilValue(QuizResultsState);
  const correctQuizNumbers = quizResults.filter((quiz) => quiz.correct).length;
  console.log(correctQuizNumbers);
  return (
    <>
      <TrophyNumbers />
      <Content>
        <Atoms.Div>
          Duration:{' '}
          {Math.floor(
            quizResults
              .map((quiz) => quiz.duration)
              .reduce((acc, cur) => acc + cur, 0) / 100,
          ) / 10}
        </Atoms.Div>
      </Content>
      <ResultsFooter />
    </>
  );
};

export default ResultsPage;
