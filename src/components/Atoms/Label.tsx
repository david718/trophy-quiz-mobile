import styled, { CSSProperties } from 'styled-components';

import { CORRECT_COLOR, INCORRECT_COLOR } from 'src/constant';

export default styled.label<
  { isSelected?: boolean; isCorrect?: boolean } & CSSProperties
>`
  color: ${({ isSelected, isCorrect }) => {
    if (!isSelected) return 'var(--black)';

    return isCorrect ? CORRECT_COLOR : INCORRECT_COLOR;
  }};
`;
