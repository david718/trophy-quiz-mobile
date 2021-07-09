import { useRecoilValue } from 'recoil';

import { QuizResultsState } from 'src/state';
import { TrophyNumbers, ScoreChart, ResultsFooter } from 'components/Organisms';
import { Content } from 'components/Molecules';

const ResultsPage = () => {
  const quizResults = useRecoilValue(QuizResultsState);

  return (
    <>
      <TrophyNumbers />
      <Content
        header={`Duration : ${
          Math.floor(
            quizResults
              .map((quiz) => quiz.duration)
              .reduce((acc, cur) => acc + cur, 0) / 100,
          ) / 10
        }s`}
      />
      <ScoreChart />
      <ResultsFooter />
    </>
  );
};

export default ResultsPage;
