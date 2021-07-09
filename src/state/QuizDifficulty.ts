import { atom } from 'recoil';

export default atom<string | undefined>({
  key: 'QuizDifficulty',
  default: undefined,
});
