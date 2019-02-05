import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './app';
import Sidebar from './sidebar';

class Body extends Component {

  render() {
    return (
      <Router>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                &nbsp;
              </nav>
              <div className="container-fluid">
                <Route path="/users" component={App.UsersPage} />
                <Route path="/providers" component={App.ProvidersPage} />
                <Route path="/products" component={App.ProductsPage} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Body;