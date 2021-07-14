/* eslint-disable */
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {
  RecoilValue,
  MutableSnapshot,
  RecoilRoot,
  useRecoilValue,
} from 'recoil';
import { renderHook } from '@testing-library/react-hooks';

import { EASY_DIFFICULTY } from 'src/constant';
import {
  InitialPropsState,
  QuizDifficultyState,
  QuizNumbersState,
} from 'src/state';

export const renderRecoilValue = <T extends Object>(
  recoilValue: RecoilValue<T>,
  initializeState?: (mutableSnapshot: MutableSnapshot) => void,
  route?: string | null,
) => {
  window.history.pushState({}, 'Test page', route);
  return renderHook(() => useRecoilValue(recoilValue), {
    wrapper: ({ children }) => (
      <BrowserRouter>
        <RecoilRoot initializeState={initializeState}>
          <Suspense fallback="">{children}</Suspense>
        </RecoilRoot>
      </BrowserRouter>
    ),
  });
};

test('when START button in Landing Page was clicked, InitialProps selector get initial props', async () => {
  const testAmount = 3;
  const testDifficulty = EASY_DIFFICULTY;

  const { result, waitForNextUpdate } = renderRecoilValue(
    InitialPropsState,
    ({ set, reset }) => {
      set(QuizNumbersState, testAmount);
      set(QuizDifficultyState, testDifficulty);
      reset(InitialPropsState);
    },
    '/quiz',
  );

  await waitForNextUpdate({ timeout: 4000 });

  expect(result.current.results.length).toBe(testAmount);
  expect(
    result.current.results.every((quiz) => quiz.difficulty == testDifficulty),
  ).toBe(true);
});
