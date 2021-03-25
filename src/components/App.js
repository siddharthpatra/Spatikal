import React from 'react'
import Home from '../components/pages/Home'
import Contact from '../components/pages/Contact'
import Blog from '../components/pages/blog'
import About from '../components/pages/about'
import Login from '../components/pages/login'
import Article from './article/Article'
import Post from './Post/Post'
import Category from '../components/pages/Category'
import Footer from './footer/footer'


import '../resources/css/App.css'

import { Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <>
                <div className="pages">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/blog" component={Blog}/>
                        <Route path="/about" component={About}/>
                        {/* <Route path="/login" component={Login}/> */}
                        <Route path="/article/:id" component={Article}/>
                        <Route path="/post" component={Post}/>
                        <Route path="/category/:category" component={Category}/>
                    </Switch>
                </div>
                <Footer/>
        </>
    )
}

export default App