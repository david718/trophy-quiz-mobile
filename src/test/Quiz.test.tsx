import { Suspense } from 'react';
import {
  MutableSnapshot,
  RecoilValue,
  useRecoilValue,
  RecoilRoot,
} from 'recoil';
import { render } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';

import {
  InitialPropsState,
  QueryDataState,
  QuizDifficultyState,
  QuizNumbersState,
} from 'src/state';
import { Quiz } from 'components/Organisms';
import { EASY_DIFFICULTY } from 'src/constant';

const renderRecoilValue = <T extends Object>(
  recoilValue: RecoilValue<T>,
  initializeState?: (mutableSnapshot: MutableSnapshot) => void,
) => {
  return renderHook(() => useRecoilValue(recoilValue), {
    wrapper: ({ children }) => {
      return (
        <RecoilRoot initializeState={initializeState}>
          <Suspense fallback="">{children}</Suspense>
        </RecoilRoot>
      );
    },
  });
};

test('Quiz should get 4 examples', async () => {
  // const { result, waitForNextUpdate } = renderRecoilValue(
  //   InitialPropsState,
  //   ({ reset }) => {
  //     reset(InitialPropsState);
  //   },
  // );
  const { result, waitForNextUpdate } = renderRecoilValue(
    InitialPropsState,
    // ({ set, reset }) => {
    //   set(QuizNumbersState, 3);
    //   set(QuizDifficultyState, EASY_DIFFICULTY);
    //   set(QueryDataState, { amount: 3, difficulty: EASY_DIFFICULTY });
    //   reset(InitialPropsState);
    // },
  );

  expect(result.current.results.length).toBe(3);
});
