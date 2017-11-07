import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

// Containers / Components
import Header from './components/header'
import Login from './containers/login'
import Group from './containers/group'
import Search from './containers/search'
import Welcome from './containers/welcome'
import StartPersonality from './containers/startPersonality'
import TestPersonality from './containers/testPersonality'
import StartTechnical from './containers/startTechnical'
import TestTechnical from './containers/testTechnical'
import TestTutorial from './containers/testTutorial'
import TestResult from './containers/testResult'
import Interest from './containers/interest'
import Message from './containers/message'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" component={Login}/>
          <Route path="/group" component={Group}/>
          <Route path="/search" component={Search}/>
          <Route path="/welcome" component={Welcome}/>
          <Route path="/start-personality" component={StartPersonality}/>
          <Route path="/test-personality" component={TestPersonality}/>
          <Route path="/start-technical" component={StartTechnical}/>
          <Route path="/test-technical" component={TestTechnical}/>
          <Route path="/test-technical" component={TestTechnical}/>
          <Route path="/test-tutorial" component={TestTutorial}/>
          <Route path="/test-result" component={TestResult}/>
          <Route path="/interest" component={Interest}/>
          <Route path="/message" component={Message}/>
        </div>
      </Router>
    );
  }
}

export default App
