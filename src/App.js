import React, { Suspense } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom'
import { Spin, Layout } from 'antd';
import Header from './navigation/header/header';
import MapComponent from './components/map/mapComponent';


function App() {
  return (
    <Suspense fallback={
      <header className="App-header">
        Loading <Spin/>
      </header>}
      >
      <Router>
      <MapComponent/>
        <Layout className="layout">
          <Header/>
          <Layout.Content>
            <div className="layout-content" id="content">
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
