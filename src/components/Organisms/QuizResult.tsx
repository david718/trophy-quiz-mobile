import { useRecoilValue } from 'recoil';

import { isIosNotch } from 'src/utils';
import { TResponseData } from 'src/state/InitialProps';
import {
  CurrentQuizIndexState,
  InitialPropsState,
  SelectedAnswerState,
} from 'src/state';
import { AnimationLoader, Content } from 'components/Molecules';
import Atoms from 'components/Atoms';

const QuizResult = () => {
  const initialProps = useRecoilValue(InitialPropsState);
  const currentQuizIndex = useRecoilValue(CurrentQuizIndexState);
  const selectedAnswer = useRecoilValue(SelectedAnswerState);

  const currentQuiz = (initialProps as TResponseData).results[currentQuizIndex];

  return (
    <Content
      height={`calc(100% - ${isIosNotch() ? '96px' : '80px'} - 348px - 4px)`}
    >
      <Atoms.Div
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100%"
      >
        {selectedAnswer == undefined ? (
          <AnimationLoader
            name="box"
            path="https://assets6.lottiefiles.com/packages/lf20_q8buwK.json"
          />
        ) : currentQuiz.correct_answer == selectedAnswer ? (
          <AnimationLoader
            name="trophy"
            path="https://assets1.lottiefiles.com/packages/lf20_rmlyntkm.json"
          />
        ) : (
          <AnimationLoader
            name="empty"
            path="https://assets6.lottiefiles.com/packages/lf20_aEFaHc.json"
          />
        )}
      </Atoms.Div>
    </Content>
  );
};

export default QuizResult;
