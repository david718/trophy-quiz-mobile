import { atom } from 'recoil';

export type TQueryData = {
  amount: number;
  difficulty?: string;
};

export default atom<TQueryData | undefined>({
  key: 'qeuryData',
  default: undefined,
});
