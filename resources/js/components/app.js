import React, { Component } from 'react';
import Grid from './grid';
import Sidebar from './sidebar';
import Body from './body';
import ReactDOM from 'react-dom';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pageTitle: ''
    };
  }

  setPageTitle = (pageTitle) => {
    this.setState({ pageTitle });
  }

  render() {
    return (
        <Body />
    );
  }
}

class UsersPage extends Component {

  render() {
    return (
      <div>
        <Grid module="users" modtitle="Usuários" />
      </div>
    );
  }
}

class ProvidersPage extends Component {
  render() {
    return (
      <div>
        <Grid module="providers" modtitle="Fornecedores" />
      </div>
    );
  }
}

class ProductsPage extends Component {
  render() {
    return (
      <div>
        <Grid module="products" modtitle="Produtos" />
      </div>
    );
  }
}

export default { App, UsersPage, ProvidersPage, ProductsPage };

ReactDOM.render(<App />, document.getElementById('root'));

