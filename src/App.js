import React from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import PostForm from './components/PostForm';
import AllPost from './components/AllPost';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
        <Route exact path ="/" component={Home}/>
        <Route path ="/PostForm" component={PostForm}/>
        <Route path ="/AllPost" component={AllPost}/>
       </Switch>
      </BrowserRouter>        
    </div>
  );
}

export default App;
