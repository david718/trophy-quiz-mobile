import { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { QUIZ_PATHNAME, RESULT_PATHNAME, ROOT_PATHNAME } from 'src/constant';
import { ErrorBoundary, QuizPage, ShimmerPage } from 'src/components/pages';

const Router = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<ShimmerPage />}>
          <Switch>
            <Route exact path={ROOT_PATHNAME}>
              <Helmet title="Landing page" />
            </Route>
            <Route exact path={QUIZ_PATHNAME}>
              <Helmet title="Quiz page" />
              <QuizPage />
            </Route>
            <Route exact path={RESULT_PATHNAME}>
              <Helmet title="Results page" />
            </Route>
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Router;
