import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import List from './pages/List/index'
import Categorias from './pages/List/index'

function App() {
  return (
    <BrowserRouter>
    <List />
      <div>
        <Switch>
          <Route path={"product/{id}"} component={Categorias} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
