import styled, { CSSProperties } from 'styled-components';

export default styled.input<CSSProperties>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  padding: ${({ padding }) => padding || '0px 0px 0px 16px'};
  line-height: ${({ lineHeight }) => lineHeight};
  height: ${({ height }) => height || '48px'};
  width: ${({ width }) => width};
  border: ${({ border }) => border};
  box-sizing: border-box;
  border-radius: ${({ borderRadius }) => borderRadius};
  font-size: ${({ fontSize }) => fontSize};

  :focus {
    outline: none;
  }
  ::placeholder {
    color: var(--grey-300);
  }
`;
