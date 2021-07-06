import { selector } from 'recoil';
import { customAxios, decodeHtml, getQueryData } from 'src/utils';

type TQuiz = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

type TResponseData = {
  response_code: number;
  results: TQuiz[];
};

export default selector<TResponseData>({
  key: 'initilaOrderState',
  get: async () => {
    const parsedQuery = getQueryData();
    const axios = customAxios();

    const response = await axios({
      method: 'GET',
      params: { amount: '10', type: 'multiple' },
    });
    console.log(response);

    const decodedResponseData = {
      ...response.data,
      results: response.data.results.map((quiz: TQuiz) => ({
        ...quiz,
        correct_answer: decodeHtml(quiz.correct_answer),
        incorrent_answers: quiz.incorrect_answers.map((answer) =>
          decodeHtml(answer),
        ),
      })),
    };
    return decodedResponseData;
  },
});
