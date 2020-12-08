import React, { lazy, Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

const Map = lazy(() => import('./layouts/Map/Map'));

const App = () => (
  <Suspense fallback={<LinearProgress variant="query" />}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Map} />
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default App;
