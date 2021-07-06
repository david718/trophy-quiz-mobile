/* eslint-disable */
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle<any>`
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: local('Roboto'),
      url("fonts/roboto-v27-latin-regular.woff2") format('woff2'),
      url("fonts/roboto-v27-latin-regular.woff") format('woff'),
      url("fonts/roboto-v27-latin-regular.ttf") format('truetype');
  unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
}
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-display: block;
  src: local('Roboto'),
      url("fonts/roboto-v27-latin-700.woff2") format('woff2'),
      url("fonts/roboto-v27-latin-700.woff") format('woff'),
      url("fonts/roboto-v27-latin-700.ttf") format('truetype');
  unicode-range: U+0041-005A, U+0061-007A, U+0030-0039;
}
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: local('Noto Sans KR'),
      url("fonts/noto-sans-kr-v13-korean-regular.woff2") format('woff2'),
      url("fonts/noto-sans-kr-v13-korean-regular.woff") format('woff');
  unicode-range: U+AC00-U+D7A3;
}
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-display: block;
  src: local('Noto Sans KR'),
      url("fonts/noto-sans-kr-v13-korean-700.woff2") format('woff2'),
      url("fonts/noto-sans-kr-v13-korean-700.woff") format('woff');
  unicode-range: U+AC00-U+D7A3;
}

  body {
    margin:0;
    height: 100%;
    width: 100vw;
    background:${({ background }) => background || 'var(--grey-100)'};
    font-size:14px;
    font-family: -apple-system, Roboto, BlinkMacSystemFont, 'Noto Sans KR', sans-serif, Arial;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img{
    border : 0;
    box-shadow : none;
  }

  button,
  input,
  img,
  textarea,
  select,
  svg,
  label,
  a {
    font-family: inherit;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  
  :root {
  --primary-700: #101c4c;
  --primary-600: #182a72;
  --primary-500: #203898;
  --primary-400: #2946be;
  --primary-300: #a9b5e5;
  --primary-200: #e1e7ff;
  --primary-100: #f4f5fb;
  --black: #141721;
  --deepgrey: #343742;
  --grey-500: #525561;
  --grey-400: #8d909d;
  --grey-300: #b9bcc1;
  --grey-200: #dcdee1;
  --grey-100: #f5f6f6;
  --white: #ffffff;
  --green-400: #44c46d;
  --yellow: #fede03;
  --orange: #ffa100;
  --coral: #ff5268;
  --red-400: #fc2b38;
  --minus-margin-android: 0px -16px;
  --minus-margin-ios: 0px -24px;
  --minus-margin-undefined: 0px -24px;
  --padding-android: 0px 16px;
  --padding-ios: 0px 24px;
  --padding-undefined: 0px 24px;
  --fill-grey-500-50: rgba(82, 85, 97, 0.5);
  --fill-white-20: rgba(255, 255, 255, 0.2);
  --fill-primary-400-20: rgba(41, 70, 190, 0.2);
  --fill-primary-200-50: rgba(225, 231, 255, 0.5);
  --fill-grey-200-30: rgba(220, 222, 225, 0.3);
  }
`;

export default GlobalStyles;
