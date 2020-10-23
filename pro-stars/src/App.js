import React, { Component } from "react";
import Table from "./Components/Table";
import "./App.css";
import data from "./prostars.json";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  //Constructor
  constructor() {
    super();
    this.data = data;
    this.state = {
      data: this.data,
      filteredArr: [data[0], data[1], data[2], data[3], data[4]],
    };
  }

  //Function to generate random members on the UI
  randomTableGenerator = () => {
    this.randomNumber = [];
    for (let i = 0; i <= 4; i++) {
      this.randomNumber.push(data[Math.floor(Math.random() * 50)]);
    }
    this.setState({
      filteredArr: this.randomNumber,
    });
  };

  //function to sort the UI by name

  sortByName = () => {
    function compare(a, b) {
      // Use toUpperCase() to ignore character casing
      let bandA = a.name.toUpperCase();
      let bandB = b.name.toUpperCase();

      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    }

    let sortedObjs = this.state.filteredArr.sort(compare);

    this.setState({
      filteredArr: sortedObjs,
    });
  };

  //Ui to delete the element in the UI

  delete = (event) => {
    let arr = this.state.filteredArr.filter((obj, index) => {
      if (index != event.target.value) {
        console.log(index, event.target.value);
        return true;
      } else return false;
    });
    console.log(arr);
    this.setState({
      filteredArr: arr,
    });
  };
  render() {
    let dataToRender = this.state.filteredArr;
    return (
      <div className="App">
        <h1>Pro Stars</h1>
        <>
          <Button
            className="margin"
            variant="primary"
            onClick={this.randomTableGenerator}
          >
            Get Random stars
          </Button>
          <Button variant="secondary" onClick={this.sortByName}>
            Sort by Name
          </Button>
          <Button variant="info">Sort By Popularity</Button>
        </>
        <Table data={dataToRender} click={this.delete}></Table>
      </div>
    );
  }
}

export default App;
