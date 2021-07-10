import { Suspense } from 'react';
import {
  MutableSnapshot,
  RecoilValue,
  useRecoilValue,
  RecoilRoot,
} from 'recoil';
import { act, renderHook } from '@testing-library/react-hooks';

import { InitialPropsState } from 'src/state';
import { OrganismShimmer } from 'components/Organisms';

const renderRecoilValue = <T extends Object>(
  recoilValue: RecoilValue<T>,
  initializeState?: (mutableSnapshot: MutableSnapshot) => void,
) => {
  return renderHook(() => useRecoilValue(recoilValue), {
    wrapper: ({ children }) => (
      <RecoilRoot initializeState={initializeState}>
        <Suspense fallback={<OrganismShimmer />}>{children}</Suspense>
      </RecoilRoot>
    ),
  });
};

test('should increment counter', () => {
  renderRecoilValue(InitialPropsState, ({ reset }) => {
    reset(InitialPropsState);
  });

  expect(result?.current?.results[0].examples.length).toBe(4);
});
