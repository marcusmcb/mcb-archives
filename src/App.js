import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MainPage from './pages/MainPage'
import EditPage from './pages/EditPage'
import MixshowPage from './pages/MixshowPage'

import './App.css';

function App() {
  
  // define page routes
  const routes = (
    <Switch>
      <Route path='/' exact>
        <MainPage/>
      </Route>
      <Route path='/edits'>
        <EditPage/>
      </Route>
      <Route path='/mixshows'>
        <MixshowPage/>
      </Route>
    </Switch>
  ) 
  
  return (
    <Router>
      <div className='App'>{routes}</div>
    </Router>
  );
}

export default App;
