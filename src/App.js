import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import './css/style.scss';

// import './charts/ChartjsConfig';

// Import pages
import Home from './pages/Home';
import PageNotFound from './pages/utility/PageNotFound';

function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto';
    window.scroll({ top: 0 });
    document.querySelector('html').style.scrollBehavior = '';
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/v1/" component={Home} />

        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
