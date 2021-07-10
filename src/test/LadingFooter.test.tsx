import { Suspense } from 'react';
import {
  MutableSnapshot,
  RecoilValue,
  useRecoilValue,
  RecoilRoot,
} from 'recoil';
import { render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

import {
  InitialPropsState,
  QueryDataState,
  QuizDifficultyState,
  QuizNumbersState,
} from 'src/state';
import { Quiz, LandingFooter, QuizNumbers } from 'components/Organisms';

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

describe('LandingFooter', () => {
  describe('when click start button, render quiz', () => {
    test('displays value', () => {
      render(
        <RecoilRoot
          initializeState={({ set }) => {
            set(QuizNumbersState, 3);
          }}
        >
          <QuizNumbers />
        </RecoilRoot>,
      );

      expect(screen.getByText('3')).toBeInTheDocument();
    });
  });
});
