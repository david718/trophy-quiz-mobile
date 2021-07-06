import { useRecoilState, useRecoilValue } from 'recoil';

import { decodeHtml } from 'src/utils';
import {
  SelectedAnswerState,
  CurrentQuizIndexState,
  InitialPropsState,
} from 'src/state';
import { QuizFixedFooter } from 'components/Organisms';
import { Content } from 'components/Molecules';
import Atoms from 'components/Atoms';

const QuizPage = () => {
  const initialProps = useRecoilValue(InitialPropsState);
  const currentQuizIndex = useRecoilValue(CurrentQuizIndexState);
  const [selectedAnswer, setSelectedAnswer] = useRecoilState(
    SelectedAnswerState,
  );
  const quizData = initialProps.results[currentQuizIndex];

  console.log(currentQuizIndex, quizData);
  const handleChange = (e: any) => {
    setSelectedAnswer(e.target.name);
  };

  return (
    <>
      <Content header={`QUIZ ${currentQuizIndex + 1}`}>
        <Atoms.Div padding="16px 0px">
          <Atoms.Div fontSize="20px">{decodeHtml(quizData.question)}</Atoms.Div>
          <Atoms.Div>
            <ul style={{ padding: 0 }}>
              {[...quizData.incorrect_answers, quizData.correct_answer].map(
                (answer: string) => (
                  <li
                    style={{ listStyle: 'none', display: 'flex', margin: 8 }}
                    key={answer}
                    value={answer}
                  >
                    <Atoms.Checkbox
                      id={answer}
                      name={answer}
                      disabled={selectedAnswer != undefined}
                      onChange={handleChange}
                    />
                    <label
                      style={{
                        color:
                          answer != selectedAnswer
                            ? 'black'
                            : quizData.correct_answer == selectedAnswer
                            ? 'green'
                            : 'red',
                      }}
                    >
                      {answer}
                    </label>
                  </li>
                ),
              )}
            </ul>
          </Atoms.Div>
        </Atoms.Div>
      </Content>
      {selectedAnswer && (
        <Atoms.Div>
          {quizData.correct_answer == selectedAnswer ? 'CORRECT!' : 'WRONG!'}
        </Atoms.Div>
      )}
      <QuizFixedFooter />
    </>
  );
};

export default QuizPage;
