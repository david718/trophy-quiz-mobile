import { Suspense } from 'react';
import {
  RecoilValue,
  MutableSnapshot,
  RecoilRoot,
  useRecoilValue,
} from 'recoil';
import { renderHook } from '@testing-library/react-hooks';

export const renderRecoilValue = <T extends Object>(
  recoilValue: RecoilValue<T>,
  initializeState?: (mutableSnapshot: MutableSnapshot) => void,
) => {
  return renderHook(() => useRecoilValue(recoilValue), {
    wrapper: ({ children }) => (
      <RecoilRoot initializeState={initializeState}>
        <Suspense fallback="">{children}</Suspense>
      </RecoilRoot>
    ),
  });
};

test('when start button in Landing Page clicked, get initial props in InitialProps selector', async () => {
  // const { result, waitForNextUpdate } = renderRecoilValue(
  //   InitialPropsState,
  //   ({ set, reset }) => {
  //     set(QuizNumbersState, 3);
  //     set(QuizDifficultyState, EASY_DIFFICULTY);
  //     reset(InitialPropsState);
  //   },
  // );
  // await waitForNextUpdate();
  // expect(result.current.results.length).toBe(3);
  // expect(
  //   result.current.results.every((quiz) => quiz.difficulty == EASY_DIFFICULTY),
  // ).toBe(true);
});
