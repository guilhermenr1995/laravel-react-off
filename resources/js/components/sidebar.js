import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

  render() {
    return (
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Laravel & React</div>
        </a>
        <li className="nav-item" key="1">
          <Link to="/users" className="nav-link">Usuários</Link>
        </li>
        <li className="nav-item" key="2">
          <Link to="/providers" className="nav-link">Fornecedores</Link>
        </li>
        <li className="nav-item" key="3">
          <Link to="/products" className="nav-link">Produtos</Link>
        </li>
      </ul>
    );
  }
}


export default Sidebar;