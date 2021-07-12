import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { waitFor, render, getAllByRole } from '@testing-library/react';

import { EASY_DIFFICULTY } from 'src/constant';
import {
  CurrentQuizIndexState,
  InitialPropsState,
  QuizDifficultyState,
  QuizNumbersState,
  SelectedAnswerState,
} from 'src/state';
import { QuizResult } from 'src/components/Organisms';
import Test from 'src/components/Organisms/Test';

describe('Quiz Page', () => {
  it('render quiz with 4 examples', async () => {
    // const { getAllByRole, findAllByRole } = render(
    //   <RecoilRoot
    //     initializeState={({ set, reset }) => {
    //       set(QuizNumbersState, 3);
    //       set(QuizDifficultyState, undefined);
    //       reset(InitialPropsState);
    //       set(CurrentQuizIndexState, 1);
    //       set(SelectedAnswerState, undefined);
    //     }}
    //   >
    //     <Suspense fallback="">
    //       <Test />
    //     </Suspense>
    //   </RecoilRoot>,
    // );
    // await waitFor(() => {
    //   const example = getAllByRole('checkbox');
    // });
  });
});
