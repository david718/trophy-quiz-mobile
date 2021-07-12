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

  return (
    <Content>
      <Atoms.Div
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={`calc(100vh - ${isIosNotch() ? '96px' : '80px'} - 348px - 4px)`}
      >
        {initialProps.results[0].question}
      </Atoms.Div>
    </Content>
  );
};

//box : 'https://assets6.lottiefiles.com/packages/lf20_q8buwK.json'

export default QuizResult;
