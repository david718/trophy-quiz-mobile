export type TQeuryData = {
  platform?: string;
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
