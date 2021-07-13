import { ReactElement, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import {
  waitFor,
  render,
  screen,
  fireEvent,
  cleanup,
} from '@testing-library/react';

import { InitialPropsState, SelectedAnswerState } from 'src/state';
import { Quiz, QuizFooter } from 'src/components/Organisms';

export const renderWithRouter = (ui: ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

beforeEach(() => {
  renderWithRouter(
    <RecoilRoot
      initializeState={({ reset }: MutableSnapshot) => {
        reset(InitialPropsState);
      }}
    >
      <Suspense fallback="">
        <Quiz />
        <QuizFooter />
      </Suspense>
    </RecoilRoot>,
    { route: '/quiz' },
  );
});
afterEach(cleanup);

describe('Quiz Page', () => {
  it('renders quiz with 4 examples', async () => {
    await waitFor(() => {
      const examples = screen.getAllByRole('checkbox');
      expect(examples.length).toEqual(4);
    });
  });

  it('has a disabled next button', async () => {
    await waitFor(() => {
      const nextButton = screen.getByText('NEXT', { exact: false });
      expect(nextButton).toBeDisabled();
    });
  });

  it("'s checkbox of example was clicked, the button will be enabled", async () => {
    await waitFor(() => {
      const examples = screen.getAllByRole('checkbox');
      fireEvent.click(examples[0]);
    });

    await waitFor(() => {
      const nextButton = screen.getByText('NEXT', { exact: false });
      expect(nextButton).toBeEnabled();
    });
  });

  // it("'s checkbox of example was clicked, the button will be enabled", async () => {
  //   await waitFor(() => {
  //     const examples = screen.getAllByRole('checkbox');
  //     fireEvent.click(examples[0]);
  //   });

  //   await waitFor(() => {
  //     const selectedLabel = screen.getByTestId(EXAMPLE_LABEL_TEST_ID + 0);
  //     const style = window.getComputedStyle(selectedLabel);
  //     console.log(style.color);
  //     expect(style.color).toEqual('black');
  //   });
  // });
});
