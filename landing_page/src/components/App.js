import React from 'react'
import Home from '../components/pages/Home'
import Contact from '../components/pages/Contact'
import About from '../components/pages/about'
import Login from '../components/pages/login'

import '../resources/css/App.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const App = () => {
    return (
        <>
            <Router>
                <div className="pages">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/about" component={About}/>
                        <Route path="/login" component={Login}/>
                    </Switch>
                </div>
            </Router>
        </>
    )
}

export default App