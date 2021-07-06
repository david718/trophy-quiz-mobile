import { atom } from 'recoil';

export default atom<number>({
  key: 'CurrentQuizIndex',
  default: 0,
});
