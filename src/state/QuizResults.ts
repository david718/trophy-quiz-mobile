import { atom } from 'recoil';

export type TQuizResult = {
  index: number;
  duration: number;
  correct: boolean;
};

export default atom<TQuizResult[]>({
  key: 'Duration',
  default: [],
});
