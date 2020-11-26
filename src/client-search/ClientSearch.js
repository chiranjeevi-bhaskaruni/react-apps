import React, { Component } from "react";
import "./ClientSearch.css";
import Clients from "./clients/Clients";
import SearchClient from "./search/SearchClient";

class ClientSearch extends Component {
   constructor(props) {
    super(props);
    this.state = {
      clients: [],
      searchText: "",
    };
    console.log(this.props)
  } 
  componentDidMount() {
    // async function fetchData() {
    // const data = await
    fetch("https://portfolio-4bd1e.firebaseio.com/clients.json")
      .then((response) => response.json())
      .then((data) => this.setState({ clients: data }));
  }

  searchHandler = (e) => {
    this.setState({ searchText: e.target.value });
  };
  render() {
    let filteredClients = this.state.clients.filter((client) =>
      client.name.toLowerCase().includes(this.state.searchText.toLowerCase())
    );
    return (
      <div className="ClientSearch">
        <SearchClient
          placeholder="Search Client"
          searchHandler={this.searchHandler}
        />
        <Clients clients={filteredClients} />
        {/* <Icon icon="plus" iconSize={100} intent={Intent.SUCCESS} /> */}
      </div>
    );
  }
}

export default ClientSearch;
