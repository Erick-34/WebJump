import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import List from './pages/List/index'
import Categorias from './pages/List/index'

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={List} />
        {/* <div>
          <Switch>
           <Route path="/{id}" exact component={Categorias} />
          </Switch>
        </div> */}
      </BrowserRouter>
    </>
  );
}

export default App;
