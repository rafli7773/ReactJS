import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import globalProvider from './context/globalContext';
import Product from './components/product/Product';
import Blog from './components/blog/Blog';
import Nav from './components/nav/Nav';
import DetailBlog from './components/blog/DetailBlog';
import Home from './components/home/Home';
import Hooks from './components/hooks/Hooks';



export class Main extends Component {
    render() {
        return (
            <Router>
                <Nav />
                <div className="container mt-5 text-center">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/product" component={Product} />
                        <Route path="/hooks" component={Hooks} />
                        <Route path="/blog" exact component={Blog} />
                        <Route path="/blog/:id" component={DetailBlog} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default globalProvider(Main);
