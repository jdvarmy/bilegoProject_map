import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

const Tickets = lazy(() => import('./layouts/Tickets/Tickets'));

const App = () => (
  <Suspense fallback={<LinearProgress variant="query" />}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Tickets} />
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default App;
