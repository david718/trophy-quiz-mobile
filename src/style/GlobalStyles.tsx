/* eslint-disable */
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle<any>`
  html{
    height: 100%;
    width: 100%;  
  }
  body {
    margin:0;
    height: 100%;
    width: 100%;
    background: var(--grey-100);
    font-size:14px;
    font-family: -apple-system, Roboto, BlinkMacSystemFont, sans-serif, Arial;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #root {
    height: 100%;
    width: 100%;
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
  }
`;

export default GlobalStyles;
