import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { QUIZ_PAGENAME, RESULT_PAGENAME } from 'src/constant';
import {
  ErrorBoundary,
  LandingPage,
  QuizPage,
  ResultsPage,
  ShimmerPage,
} from 'src/components/pages';

const Router = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<ShimmerPage />}>
          <Switch>
            <Route exact path={`/${QUIZ_PAGENAME}`}>
              <Helmet title="Quiz page" />
              <QuizPage />
            </Route>
            <Route exact path={`/${RESULT_PAGENAME}`}>
              <Helmet title="Result page" />
              <ResultsPage />
            </Route>
            <Route exact path="/">
              <Helmet title="Landing page" />
              <LandingPage />
            </Route>
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Router;
