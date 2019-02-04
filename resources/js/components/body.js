import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './app';
import Sidebar from './sidebar';

class Body extends Component {

  render() {
    return (
      <Router>
        <div>
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Route path="/users" component={App.UsersPage} />
            <Route path="/providers" component={App.ProvidersPage} />
            <Route path="/products" component={App.ProductsPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Body;