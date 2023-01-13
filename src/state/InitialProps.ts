import { selector } from 'recoil';

import { addCorrectAnswerRandomly, customAxios, decodeHtml } from 'src/utils';
import {
  QueryDataState,
  QuizDifficultyState,
  QuizNumbersState,
} from 'src/state';
import { DEFAULT_NUMBERS, QUIZ_PAGENAME } from 'src/constant';
import { TQueryData } from './QueryData';

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

const useQueryData = (): [
  TQueryData | undefined,
  (newValue?: TQueryData) => void,
] => {
  const KEY = 'queryData';
  const queryData = localStorage.getItem(KEY) as string;
  const update = (newValue?: TQueryData) => {
    return localStorage.setItem(KEY, JSON.stringify(newValue));
  };
  return [JSON.parse(queryData), update];
};

export default selector<TResponseData>({
  key: 'initilaOrderState',
  get: async ({ get }) => {
    const [storageQueryData] = useQueryData();
    const queryData = get(QueryDataState);
    if (
      (queryData == undefined && storageQueryData === undefined) ||
      window.location.pathname != `/${QUIZ_PAGENAME}`
    )
      return undefined;

    const amount = queryData?.amount || storageQueryData?.amount;
    const difficulty = queryData?.difficulty || storageQueryData?.difficulty;

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
    const [, setStorage] = useQueryData();
    const amount = get(QuizNumbersState);
    const difficulty = get(QuizDifficultyState);
    const queryData = { amount, difficulty };

    setStorage(queryData);
    set(QueryDataState, queryData);
    set(QuizNumbersState, DEFAULT_NUMBERS);
    set(QuizDifficultyState, undefined);
  },
});
