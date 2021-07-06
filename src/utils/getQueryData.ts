import { MULTIPLE_TYPE } from 'src/constant';

export type TType = typeof MULTIPLE_TYPE;

export type TQeuryData = {
  platform?: string;
  amount?: string;
  type?: 'multiple';
};

const getQueryData: () => TQeuryData = () => {
  const search = window?.location?.search;
  const queryParmas: any = {};

  const queryData = search.slice(1).split('&');
  queryData.forEach((data) => {
    const [key, value] = data.split('=');
    queryParmas[key] = value;
  });

  return queryParmas;
};

export default getQueryData;
