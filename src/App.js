import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Spin, Layout } from 'antd';
import Header from './navigation/header/header';

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
          <Layout.Content className="layout-content">
            <Switch>
              <Route>
                
              </Route>
            </Switch>
          </Layout.Content>
          <Layout.Footer>
            This is the Footer
          </Layout.Footer>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
