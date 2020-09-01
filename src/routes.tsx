import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import About from './pages/About'
import Payment from './pages/Payment'

const Routes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/payment' component={Payment} />
      </Switch>
    </Router>
  )
}

export default Routes
