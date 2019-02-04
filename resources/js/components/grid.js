import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const API_PREFIX = 'api/';

class Grid extends Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.moduleName = this.props.module;
    this.state[this.moduleName] = {
      objKeys: [],
      data: []
    };
  }

  componentDidMount() {

    let data = {};


    axios.get(API_PREFIX + this.moduleName).then(res => {

      let objKeys = [];

      res.data = res.data.data;

      if (res.data.length > 0) {

        // Reordenando chaves para manter sempre o ID como primeira coluna, e created_at/updated_at no final do grid
        objKeys = Object.keys(res.data[0]);

        // Remove da lista
        objKeys.splice(objKeys.indexOf("id"), 1);
        objKeys.splice(objKeys.indexOf("created_at"), 1);
        objKeys.splice(objKeys.indexOf("updated_at"), 1);

        // Insere no início e no fim da lista
        objKeys.unshift("id");
        objKeys.push("created_at");
        objKeys.push("updated_at");
      }

      data[this.moduleName] = {
        objKeys: objKeys,
        data: res.data
      };

      this.setState(data);
    });
  }

  render() {
    return (
      <div>

        <h1>{this.props.modtitle}</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              {this.state[this.moduleName].objKeys.map((item, i) => {
                return (<th key={i}>{item}</th>)
              })}
            </tr>
          </thead>
          <tbody>
            {this.state[this.moduleName].data.map((item, i) => {
              return (
                <tr key={i}>
                  {this.state[this.moduleName].objKeys.map((propName, j) => {
                    return (<td key={j}>{item[propName]}</td>)
                  })}
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Grid;