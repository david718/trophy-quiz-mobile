import { useEffect, useRef, useState } from 'react';
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
import { EXAMPLE_LABEL_TEST_ID } from 'src/constant';

const Quiz = () => {
  const initialProps = useRecoilValue(InitialPropsState);
  const currentQuizIndex = useRecoilValue(CurrentQuizIndexState);
  const currentQuiz = (initialProps as TResponseData).results[currentQuizIndex];
  const [selectedAnswer, setSelectedAnswer] = useRecoilState(
    SelectedAnswerState,
  );
  const setQuizResults = useSetRecoilState(QuizResultsState);
  const startTime = useRef(Date.now());

  const handleChange = (e: any) => {
    //여기 오답노트 만들자리
    // if (e.target.name != currentQuiz) {
    // const correctAnswersJSON = localStorage.getItem('cuiz_correct_answer');
    // const correctAnswers =
    //   correctAnswersJSON && JSON.parse(correctAnswersJSON);
    //}

    setSelectedAnswer(e.target.name);
    setQuizResults((prev) => {
      return [
        ...prev,
        {
          index: currentQuizIndex,
          duration: Date.now() - startTime.current,
          correct: e.target.name == currentQuiz.correct_answer,
        },
      ];
    });
  };

  useEffect(() => {
    startTime.current = Date.now();
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
          <Atoms.Ul>
            {currentQuiz.examples.map((answer: string, i: number) => (
              <Atoms.Li key={answer} value={answer}>
                <Atoms.Checkbox
                  id={answer}
                  name={answer}
                  disabled={selectedAnswer != undefined}
                  onChange={handleChange}
                />
                <Atoms.Label
                  data-testid={EXAMPLE_LABEL_TEST_ID + i}
                  isSelected={selectedAnswer == answer}
                  isCorrect={selectedAnswer == currentQuiz.correct_answer}
                >
                  {answer}
                </Atoms.Label>
              </Atoms.Li>
            ))}
          </Atoms.Ul>
        </Atoms.Div>
      </Atoms.Div>
    </Content>
  );
};

export default Quiz;
