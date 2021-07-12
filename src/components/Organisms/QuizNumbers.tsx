import { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';

import { QuizNumbersState } from 'src/state';
import { Content } from 'components/Molecules';
import Atoms from 'components/Atoms';

const QuizNumbers = () => {
  const [quizNumbers, setQuizNumbers] = useRecoilState(QuizNumbersState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuizNumbers(Number(e.target.value));
  };

  return (
    <Content header="Number of QUIZs(1 ~ 50)">
      <Atoms.Input
        type="number"
        placeholder="eg. 10"
        min={1}
        max={50}
        margin="16px 0px"
        value={quizNumbers}
        onChange={handleChange}
      />
    </Content>
  );
};

export default QuizNumbers;
