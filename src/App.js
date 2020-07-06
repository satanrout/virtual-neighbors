import React, { Component } from "react";
import Header from "./Components/header/Header-component";
import Cardlist from "./Components/cardlist/Cardlist-component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      neighbors: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => {
        this.setState({ neighbors: user });
      });
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { neighbors, searchfield } = this.state;
    const filtered = neighbors.filter((neighbor) => {
      return neighbor.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div>
        <Header searchChange={this.onSearchChange} />
        <Cardlist neighbors={filtered} />
      </div>
    );
  }
}

export default App;
