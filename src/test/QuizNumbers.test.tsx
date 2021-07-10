import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter, CounterStepProvider } from './test';

test('should reset counter to updated initial value', () => {
  const { result, rerender } = renderHook(
    ({ initialValue }) => useCounter(initialValue),
    {
      initialProps: { initialValue: 0 },
    },
  );
  rerender({ initialValue: 10 });
  act(() => {
    result.current.reset();
  });
  expect(result.current.count).toBe(10);
});

test('should use custom step when incrementing', () => {
  const wrapper = ({ children }: any) => (
    <CounterStepProvider step={2}>{children}</CounterStepProvider>
  );
  const { result } = renderHook(() => useCounter(), { wrapper });
  act(() => {
    result.current.increment();
  });
  expect(result.current.count).toBe(2);
});
