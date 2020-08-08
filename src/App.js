import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Spin, Layout } from 'antd';
import Header from './navigation/header/header';

import HomeContent from './layouts/content/home';
import RegisterContent from './layouts/content/register';


function App() {
  return (
    <Suspense fallback={
      <header className="App-header">
        Loading <Spin/>
      </header>}
      >
      <Router>
        <Layout className="layout">
          <Header/>      
          <Layout.Content>
            <div className="layout-content" id="content">
              <Switch>
                <Route path="/" exact>
                  <HomeContent/>
                </Route>
                <Route path="/register" exact component={RegisterContent}/>
              </Switch>
            </div>
          </Layout.Content>
          <Layout.Footer className="layout-footer">
            Sploot
          </Layout.Footer>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
