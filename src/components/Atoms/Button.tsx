import { CSSProperties } from 'react';
import styled from 'styled-components';

const designList = {
  primary200: `
    background: var(--primary-200);
    color: var(--primary-400);
  `,
  primary400: `
    background: var(--primary-400);
    color: var(--white);
  `,
  cancel: `
    background: var(--grey-300);
    color: var(--white);
  `,
  disabled: `
    background: var(--grey-200);
    color: var(--white);
  `,
  border: `
    border: 1px solid var(--primary-400);
    background: var(--white);
    color: var(--primary-400);
  `,
  deepgrey: `
    background: var(--deepgrey);
    color: var(--white);
  `,
};

const sizeList = {
  large: `
    height: 56px;
    width: 160px;
    padding: 16px;
    font-size: 17px;`,
  small: `
    min-width: 50px;
    padding: 6px 12px;
    font-size: 14px;
    border-radius : 4px;`,
};

export type TDesignType =
  | 'primary200'
  | 'primary400'
  | 'border'
  | 'cancel'
  | 'disabled'
  | 'deepgrey';

export default styled.button<
  CSSProperties & {
    designType?: TDesignType;
    size?: 'large' | 'small';
    borderRadiusLeft?: string;
    borderRadiusRight?: string;
  }
>`
  display: ${({ display }) => display || 'inline-flex'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  align-content: ${({ alignContent }) => alignContent || 'center'};
  ${({ flexDirection }) =>
    flexDirection && `flex-direction : ${flexDirection}`};

  margin: ${({ margin }) => margin};
  ${({ marginLeft }) => marginLeft && `margin-left : ${marginLeft}`};
  ${({ marginRight }) => marginRight && `margin-right : ${marginRight}`};
  ${({ marginTop }) => marginTop && `margin-top : ${marginTop}`};
  ${({ marginBottom }) => marginBottom && `margin-bottom : ${marginBottom}`};
  padding: ${({ padding }) => padding};
  background: ${({ background }) => background || 'white'};
  color: ${({ color }) => color};

  border: ${({ border }) => border || 'none'};
  box-sizing: ${({ boxSizing }) => boxSizing};
  border-radius: ${({ borderRadius }) => borderRadius};
  border-bottom-left-radius: ${({ borderRadiusLeft }) => borderRadiusLeft};
  border-bottom-right-radius: ${({ borderRadiusRight }) => borderRadiusRight};

  z-index: ${({ zIndex }) => zIndex};
  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing : ${letterSpacing}`};

  ${({ textAlign }) => textAlign && `text-align : ${textAlign}`};
  ${({ boxShadow }) => boxShadow && `box-shadow : ${boxShadow}`};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-weight: ${({ fontWeight }) => fontWeight || '700'};
  font-family: inherit;
  ${({ size }) => size && sizeList[size]};
  ${({ designType }) => designType && designList[designType]};
  height: ${({ height }) => height};
  line-height: ${({ lineHeight }) => lineHeight};
  width: ${({ width }) => width};

  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  :focus {
    outline: 0;
    -webkit-appearance: none;
  }
`;
