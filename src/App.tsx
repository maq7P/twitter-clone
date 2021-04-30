import React from 'react';
import {Route, Switch } from 'react-router-dom';
import {Home, SignIn} from "./pages";

function App() {
  return (
    <div className="App">
        <Switch>
            <Route path='/signin' component={SignIn}/>
            <Route path='/home' component={Home}/>
        </Switch>
    </div>
  );
}

export default App;
