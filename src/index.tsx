import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

import Router from 'src/Router';
import GlobalStyles from 'src/style/GlobalStyles';
import reportWebVitals from 'src/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Router />
      <GlobalStyles />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
