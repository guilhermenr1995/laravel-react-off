import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

  render() {
    return (
      <ul className="nav">
        <li className="nav-item" key="1">
          <Link to="/users">Usuários</Link>
        </li>
        <li className="nav-item" key="2">
          <Link to="/providers">Fornecedores</Link>
        </li>
        <li className="nav-item" key="3">
          <Link to="/products">Produtos</Link>
        </li>
      </ul>
    );
  }
}

export default Sidebar;