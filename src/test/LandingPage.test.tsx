import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import {
  DIFFICULTY_SELECT_TEST_ID,
  EASY_DIFFICULTY,
  MEDIUM_DIFFICULTY,
} from 'src/constant';
import { QuizDifficultyState } from 'src/state';
import { QuizDifficulty, QuizNumbers } from 'src/components/Organisms';

beforeEach(() => {
  render(
    <RecoilRoot
      initializeState={({ set }) => {
        set(QuizDifficultyState, EASY_DIFFICULTY);
      }}
    >
      <QuizNumbers />
      <QuizDifficulty />
    </RecoilRoot>,
  );
});

describe('Landing Page', () => {
  it('renders input element about quiz numbers', () => {
    const inputElement = screen.getByDisplayValue(2);

    expect(inputElement).toBeInTheDocument();

    const testValue = 3;
    fireEvent.change(inputElement, {
      target: { value: testValue },
    });

    const newInputElement = screen.getByDisplayValue(testValue);

    expect(newInputElement).toBeInTheDocument();
  });

  it('renders select element about quiz difficulty', () => {
    const selectOptionEasy = screen.getByDisplayValue(EASY_DIFFICULTY, {
      exact: false,
    });

    expect(selectOptionEasy).toBeInTheDocument();

    const testDifficulty = MEDIUM_DIFFICULTY;
    fireEvent.change(screen.getByTestId(DIFFICULTY_SELECT_TEST_ID), {
      target: { value: testDifficulty },
    });

    const selectOption = screen.getByDisplayValue(testDifficulty, {
      exact: false,
    });

    expect(selectOption).toBeInTheDocument();
  });
});
