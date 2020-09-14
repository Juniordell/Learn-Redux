import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'
import Dogs from './pages/Dogs'
import Animes from './pages/Animes'

const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/animes' component={Animes} />
        <Route path='/dogs' component={Dogs} />
      </Switch>
    </Router>
  )
}

export default Routes
