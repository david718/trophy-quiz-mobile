import { atom } from 'recoil';

export type TDuration = {
  index: number;
  duration: number;
  correct: boolean;
};

export default atom<TDuration[]>({
  key: 'Duration',
  default: [],
});
