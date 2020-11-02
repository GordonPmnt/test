import React from 'react';
import { Home } from "./routes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Launchpad } from './routes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route 
          exact path="/" 
          component={Home}  
        />
        <Route 
          exact path="/launchpad/:id" 
          component={Launchpad}  
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
