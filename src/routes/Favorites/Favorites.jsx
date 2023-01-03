import React, { Component } from 'react'
import './Favorites.css';
import NavBar from '../NavBar/NavBar';

export default class Favorites extends Component {

  render() {
    return (
      <div className="Favorites">
        <div>
          <NavBar/>
        </div>
      <div>
        <h1> Welcome to the favorites page</h1>
      </div>
      </div>
    );
  }
}
