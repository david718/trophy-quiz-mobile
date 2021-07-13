import { selector } from 'recoil';

import { addCorrectAnswerRandomly, customAxios, decodeHtml } from 'src/utils';
import {
  QueryDataState,
  QuizDifficultyState,
  QuizNumbersState,
} from 'src/state';
import { DEFAULT_NUMBERS, QUIZ_PAGENAME } from 'src/constant';

export type TQuiz = {
  category: string;
  difficulty: string;
  type: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  examples: string[];
};

export type TResponseData = {
  response_code: number;
  results: TQuiz[];
};

export default selector<TResponseData>({
  key: 'initilaOrderState',
  get: async ({ get }) => {
    const queryData = get(QueryDataState);
    if (
      queryData == undefined ||
      window.location.pathname != `/${QUIZ_PAGENAME}`
    )
      return undefined;

    const { amount, difficulty } = queryData;

    const axios = customAxios();
    const response = await axios({
      method: 'GET',
      params: {
        amount,
        difficulty,
        type: 'multiple',
      },
    });
    const decodedResponseData = {
      ...response.data,
      results: response.data.results.map((quiz: TQuiz) => {
        const decoded_correct_answer = decodeHtml(quiz.correct_answer);
        const decoded_incorrect_answers = quiz.incorrect_answers.map((answer) =>
          decodeHtml(answer),
        );
        return {
          ...quiz,
          question: decodeHtml(quiz.question),
          correct_answer: decoded_correct_answer,
          incorrect_answers: decoded_incorrect_answers,
          examples: addCorrectAnswerRandomly(
            decoded_incorrect_answers,
            decoded_correct_answer,
          ),
        };
      }),
    };
    return decodedResponseData;
  },
  set: ({ get, set }) => {
    const amount = get(QuizNumbersState);
    const difficulty = get(QuizDifficultyState);

    set(QueryDataState, { amount, difficulty });
    set(QuizNumbersState, DEFAULT_NUMBERS);
    set(QuizDifficultyState, undefined);
  },
});
