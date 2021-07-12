import { useRecoilValue } from 'recoil';

import { QuizResultsState } from 'src/state';
import { Content } from 'components/Molecules';

const Duration = () => {
  const quizResults = useRecoilValue(QuizResultsState);

  return (
    <Content
      header={`Duration : ${
        Math.floor(
          quizResults
            .map((quiz) => quiz.duration)
            .reduce((acc, cur) => acc + cur, 0) / 100,
        ) / 10
      }s`}
    />
  );
};

export default Duration;
