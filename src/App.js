import React from 'react';
import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <HashRouter>
       <Switch>
        <Route exact path ="/" component={Home}/>
       </Switch>
      </HashRouter>        
    </div>
  );
}

export default App;
