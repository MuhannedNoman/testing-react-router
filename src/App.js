import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './components/admin/Dashboard';
import Home from './components/Home';
import NavBar from './components/Navbar';
import NotFound from './components/NotFound';
import Posts from './components/Posts';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Products} />
          <Route path="/posts/:year/:month" component={Posts} />
          <Route path="/admin" component={Dashboard} />
          <Redirect from="/messages" to="/" />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
