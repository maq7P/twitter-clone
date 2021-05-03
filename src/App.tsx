import React from 'react';
import {Route, Switch } from 'react-router-dom';
import {Home, SignIn, Test} from "./pages";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path='/signin' component={SignIn}/>
            <Route path='/home' component={Home}/>
            <Route path='/test' component={Test}/>
        </Switch>
    </div>
  );
}

export default App;
