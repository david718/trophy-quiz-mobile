import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { TResponseData } from 'src/state/InitialProps';
import {
  InitialPropsState,
  CurrentQuizIndexState,
  SelectedAnswerState,
  QuizResultsState,
} from 'src/state';
import { Content } from 'components/Molecules';
import Atoms from 'components/Atoms';

const Quiz = () => {
  const initialProps = useRecoilValue(InitialPropsState);
  const currentQuizIndex = useRecoilValue(CurrentQuizIndexState);
  const currentQuiz = (initialProps as TResponseData).results[currentQuizIndex];
  const [selectedAnswer, setSelectedAnswer] = useRecoilState(
    SelectedAnswerState,
  );
  const setQuizResults = useSetRecoilState(QuizResultsState);
  const [startTime, setStartTime] = useState<number>(Date.now());

  const handleChange = (e: any) => {
    if (e.target.name == currentQuiz) {
      const correctAnswersJSON = localStorage.getItem('cuiz_correct_answer');
      const correctAnswers =
        correctAnswersJSON && JSON.parse(correctAnswersJSON);
    }

    setSelectedAnswer(e.target.name);
    setQuizResults((prev) => [
      ...prev,
      {
        index: currentQuizIndex,
        duration: Date.now() - startTime,
        correct: e.target.name == currentQuiz.correct_answer,
      },
    ]);
  };

  useEffect(() => {
    setStartTime(Date.now());
  }, [currentQuizIndex]);

  return (
    <Content
      height="348px"
      marginTop="0px"
      header={`QUIZ ${currentQuizIndex + 1} / ${
        (initialProps as TResponseData).results.length
      }`}
      headerRight={currentQuiz.difficulty}
    >
      <Atoms.Div
        display="flex"
        alignItems="center"
        height="300px"
        overflow="auto"
      >
        <Atoms.Div>
          <Atoms.Div fontSize="24px">{currentQuiz.question}</Atoms.Div>
          <ul style={{ margin: '16px 0px 0px 0px', padding: 0 }}>
            {currentQuiz.examples.map((answer: string) => (
              <li
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: 8,
                  fontSize: 20,
                }}
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
                        : currentQuiz.correct_answer == selectedAnswer
                        ? 'var(--green-400)'
                        : 'var(--red-400)',
                  }}
                >
                  {answer}
                </label>
              </li>
            ))}
          </ul>
        </Atoms.Div>
      </Atoms.Div>
    </Content>
  );
};

export default Quiz;
