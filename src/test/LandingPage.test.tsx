import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import { EASY_DIFFICULTY } from 'src/constant';
import { QuizDifficultyState } from 'src/state';
import { QuizDifficulty } from 'src/components/Organisms';

describe('Landing Page', () => {
  it('render select element about quiz difficulty', async () => {
    const { findByText } = render(
      <RecoilRoot
        initializeState={({ set }) => {
          set(QuizDifficultyState, EASY_DIFFICULTY);
        }}
      >
        <QuizDifficulty />
      </RecoilRoot>,
    );

    const selectOption = await findByText('EASY');

    expect(selectOption).toBeInTheDocument();
  });
});
