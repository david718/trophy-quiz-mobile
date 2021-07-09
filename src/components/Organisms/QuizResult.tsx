import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { isIosNotch } from 'src/utils';
import { TResponseData } from 'src/state/InitialProps';
import {
  CurrentQuizIndexState,
  InitialPropsState,
  SelectedAnswerState,
} from 'src/state';
import { Content } from 'components/Molecules';
import Atoms from 'components/Atoms';
import { Box, Empty, Trophy } from 'components/icons';

const QuizResult = () => {
  const initialProps = useRecoilValue(InitialPropsState);
  const currentQuizIndex = useRecoilValue(CurrentQuizIndexState);
  const selectedAnswer = useRecoilValue(SelectedAnswerState);

  const currentQuiz = (initialProps as TResponseData).results[currentQuizIndex];

  useEffect(() => {
    return () => {
      import('lottie-web').then((Lottie) => {
        (Lottie as any).destroy();
      });
    };
  }, []);

  return (
    <Content>
      <Atoms.Div
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={`calc(100vh - ${isIosNotch() ? '96px' : '80px'} - 348px - 4px)`}
      >
        {selectedAnswer == undefined ? (
          <Box />
        ) : currentQuiz.correct_answer == selectedAnswer ? (
          <Trophy size="200px" />
        ) : (
          <Empty />
        )}
      </Atoms.Div>
    </Content>
  );
};

export default QuizResult;
