import { atom } from 'recoil';

export default atom<string | undefined>({
  key: 'Answer',
  default: undefined,
});
