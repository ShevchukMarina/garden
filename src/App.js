import {Switch, Route} from 'react-router-dom'
import React from 'react'
import './App.css';

import FeedPage from './components/FeedPage/FeedPage'
import SpringTreatment from './components/SpringTreatment/SpringTreatment'

function App() {

  return (
    <div>
      <Switch>
        <Route exact path='/spring-treatment' component={SpringTreatment}/>
        <Route exact path='/*' component={FeedPage}/>
      </Switch>
    </div>
  )
}

export default App;
