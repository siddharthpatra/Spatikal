import React from 'react'
import Navbar from '../components/header/Navbar'
import Home from '../components/pages/Home'
import Contact from '../components/pages/Contact'
import Blog from '../components/pages/blog'
import About from '../components/pages/about'
import Login from './authentication/login'
import Article from './article/Article'
import Post from './Post/Post'
import Category from '../components/pages/Category'
import Footer from './footer/footer'
import { Switch, Route } from "react-router-dom";
import Signup from './authentication/Signup'
import { AuthProvider } from '../components/authentication/context/AuthContext'
import PrivateRoute from "../components/authentication/PrivateRoute"
import EditPost from './article/EditPost'

import '../resources/css/App.css'

const App = () => {
    return (
        <>
                <AuthProvider>
                    <Navbar/>
                </AuthProvider>
                <div className="pages">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/blog" component={Blog}/>
                        <Route path="/about" component={About}/>
                        <Route path="/article/:id" component={Article}/>
                        <Route path="/post" component={Post}/>
                        <Route path="/category/:category" component={Category}/>
                        <AuthProvider>
                            <PrivateRoute exact path="/editPost/:id" component={EditPost}/>
                            <Route path="/login" component={Login}/>
                            <Route path="/signup" component={Signup}/>
                        </AuthProvider>
                    </Switch>
                </div>
                <Footer/>
        </>
    )
}

export default App