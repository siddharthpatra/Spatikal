import React from "react";
import Navbar from "./header/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/blog";
import About from "./pages/about";
import Login from "./authentication/login";
import Article from "./article/Article";
import Post from "./Post/Post";
import Category from "./article/Category";
import Footer from "./footer/footer";
import { Switch, Route } from "react-router-dom";
import Signup from "./authentication/Signup";
import { AuthProvider } from "./authentication/context/AuthContext";
import PrivateRoute from "./authentication/PrivateRoute";
import EditPost from "./article/EditPost";

import "../resources/css/App.css";
import contact from "./pages/contact";

import { Helmet } from "react-helmet";

import ReactGA from 'react-ga';
ReactGA.initialize('G-H78V6B9YBE'); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {
  return (
    <>
      <Helmet>
        <title>S P A T I K A L</title>
        <meta name="description" content="Online Informative Platform" />
      </Helmet>
      <AuthProvider>
        <Navbar />
      </AuthProvider>
      <div className="pages">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={contact} />
          <Route path="/article/:id" component={Article} />
          <Route path="/category/:category" component={Category} />
          <AuthProvider>
            <PrivateRoute exact path="/editPost/:id" component={EditPost} />
            <PrivateRoute exact path="/post" component={Post} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </AuthProvider>
        </Switch>
      </div>
      <Footer />
    </>
  );
};

export default App;
