import styled from 'styled-components';

const Span = styled.span<React.CSSProperties>`
  ${({ display }) => display && `display : ${display}`};
  ${({ width }) => width && `width : ${width}`};
  ${({ height }) => height && `height : ${height}`};
  ${({ margin }) => margin && `margin : ${margin}`};
  ${({ marginLeft }) => marginLeft && `margin-left : ${marginLeft}`};
  ${({ marginRight }) => marginRight && `margin-right : ${marginRight}`};
  ${({ marginTop }) => marginTop && `margin-top : ${marginTop}`};
  ${({ marginBottom }) => marginBottom && `margin-bottom : ${marginBottom}`};
  ${({ padding }) => padding && `padding : ${padding}`};
  ${({ background }) => background && `background : ${background}`};
  ${({ color }) => color && `color : ${color}`};
  ${({ position }) => position && `position : ${position}`};
  ${({ top }) => top && `top : ${top}`};
  ${({ border }) => border && `border : ${border}`};
  ${({ top }) => top && `top : ${top}`};
  ${({ left }) => left && `left : ${left}`};
  ${({ bottom }) => bottom && `bottom : ${bottom}`};
  ${({ right }) => right && `right : ${right}`};
  ${({ animation }) => animation && `animation : ${animation}`};
  ${({ minHeight }) => minHeight && `min-height : ${minHeight}`};
  ${({ alignContent }) => alignContent && `align-content : ${alignContent}`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content : ${justifyContent}`};
  ${({ flexDirection }) =>
    flexDirection && `flex-direction : ${flexDirection}`};
  ${({ flexWrap }) => flexWrap && `flex-wrap : ${flexWrap}`};
  ${({ flexShrink }) => flexShrink && `flex-shrink : ${flexShrink}`};
  ${({ alignItems }) => alignItems && `align-items : ${alignItems}`};
  ${({ fontSize }) => fontSize && `font-size : ${fontSize}`};
  ${({ fontWeight }) => fontWeight && `font-weight : ${fontWeight}`};
  ${({ borderRadius }) => borderRadius && `border-radius : ${borderRadius}`};
  ${({ zIndex }) => zIndex && `z-index : ${zIndex}`};
  ${({ letterSpacing }) =>
    letterSpacing && `letter-spacing : ${letterSpacing}`};
  ${({ lineHeight }) => lineHeight && `line-height : ${lineHeight}`};
  ${({ boxShadow }) => boxShadow && `box-shadow : ${boxShadow}`};
  ${({ textAlign }) => textAlign && `text-align : ${textAlign}`};
`;

export default Span;
