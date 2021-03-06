import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

const Event = lazy(() => import('./layouts/Event/Event'));

const App = () => (
  <Suspense fallback={<LinearProgress variant="query" />}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Event} />
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default App;
