import React from 'react';
import LoaderIndicator from '../components/UI/loader/loaderIndicator';

import './App.scss';
import Layout from '../components/layout/layout';

const App = () => {
  return (
    <div className="App" style={{height: '100%'}}>
      <Layout />
      <LoaderIndicator />
    </div>
  );
}

export default App;