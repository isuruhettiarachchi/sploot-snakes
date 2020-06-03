import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Spin, Layout, Button } from 'antd';
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
          <Layout.Content>
            <div className="layout-content">
              <Switch>
             
                <Route>
                  
                </Route>
              </Switch>
            </div>
          </Layout.Content>
          <Layout.Footer className="layout-footer">
          
          </Layout.Footer>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
