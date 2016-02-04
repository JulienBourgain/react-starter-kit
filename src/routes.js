/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from 'react-routing/src/Router';
// import http from './core/HttpClient';
import App from './components/App';
import LivePage from './components/LivePage';
import PlanningPage from './components/PlanningPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';

const global = {
  selectedTab: 0,
};

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next();
    return component && <App context={state.context} selectedTab={global.selectedTab}>{component}</App>;
  });

  on('/live', async (state) => {
    global.selectedTab = 0;
    return <LivePage context={state.context}/>;
  });

  on('/planning', async (state) => {
    global.selectedTab = 1;
    return <PlanningPage context={state.context}/>;
  });

  // on('*', async (state) => {
  //  const content = await http.get(`/api/content?path=${state.path}`);
  //  return content && <ContentPage {...content} />;
  // });

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );
});

export default router;
