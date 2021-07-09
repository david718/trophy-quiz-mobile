import { atom } from 'recoil';

import { DEFAULT_NUMBERS } from 'src/constant';

export default atom<number>({
  key: 'QuizNumbers',
  default: DEFAULT_NUMBERS,
});
