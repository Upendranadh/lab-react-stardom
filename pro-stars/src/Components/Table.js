import React, { Component } from "react";
import "../App.css";
import { Button } from "react-bootstrap";
class Table extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { data, click } = this.props;
    return (
      <table width="50%">
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dataObj, index) => {
            return (
              <tr key={dataObj.id}>
                <td className="centre">
                  <img src={`${dataObj.pictureUrl}`}></img>
                </td>
                <td className="centre">{dataObj.name}</td>
                <td className="centre">{dataObj.popularity}</td>
                <td>
                  <Button variant="danger" onClick={click} value={index}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
export default Table;
