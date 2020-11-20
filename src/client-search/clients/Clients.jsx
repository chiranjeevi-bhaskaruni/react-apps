import React, { Component } from 'react'
import Client from './client/Client';
import './Clients.css';

export class Clients extends Component {
  render() {
    return (
      <div className="Clients">
        {this.props.clients.map((client, index) => (
          <Client key={index} index={index} client={client} />
        ))}
      </div>
    );
  }
}

export default Clients

/*  let clients = <p>Loading Clients...</p>;
 if (this.state.clients) {
     clients = this.state.clients.map((client, index) => (
       <Client key={index} index={index} client={client} />
     ));
 }
 return <div className="Clients">{clients}</div>; */