import { fireEvent, waitFor, render, findByText } from '@testing-library/react';
import { RecoilRoot, useResetRecoilState } from 'recoil';

import { EASY_DIFFICULTY } from 'src/constant';
import {
  CurrentQuizIndexState,
  InitialPropsState,
  QuizDifficultyState,
  QuizNumbersState,
  SelectedAnswerState,
} from 'src/state';
import { Quiz } from 'src/components/Organisms';

describe('Quiz Page', () => {
  it('render quiz with 4 examples', async () => {
    const { findByText } = render(
      <RecoilRoot
        initializeState={({ set, reset }) => {
          set(CurrentQuizIndexState, 1);
          set(SelectedAnswerState, undefined);
          reset(InitialPropsState);
        }}
      >
        <Quiz />
      </RecoilRoot>,
    );

    const difficultySpanTag = await findByText('easy');

    expect(difficultySpanTag).toBeInTheDocument();
  });
});
