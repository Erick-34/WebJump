import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import List from './pages/List/index'

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={List} />
      </BrowserRouter>
    </>
  );
}

export default App;
