import React from 'react'
import './Client.css';
const Client = ({ client, index }) => {
  return (
    <div className="Client">
      {/* <img src={`https://robohash.org/${index}?set=set1`} alt="test" /> */}
      <img src={`https://robohash.org/${index}?set=set1`} alt="test" />
      <h3>{client.name}</h3>
      <p>{client.employer}</p>
    </div>
  );
};

export default Client
