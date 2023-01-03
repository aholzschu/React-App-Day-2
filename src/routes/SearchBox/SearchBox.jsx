import React, { Component } from "react";
import './SearchBox.css';

export default class SearchBox extends Component {
    constructor(){
      super();
      this.state = {
        'search_string': ''
      }
    }

  onSearchChange = (event) => {
    const search_string = event.target.value

    this.setState(() => {
      return (
        {
          search_string:search_string
        }
      )
    })
  }
  render() {
    const {search_string} = this.state
    const { pokemon } = this.props

    const filtered_pokemon = pokemon.filter((poke) => {
        return(
          poke.name.includes(search_string)
        )
    })

    console.log(filtered_pokemon)

    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder="Search Pokemon"
          onChange={this.onSearchChange}
        />
        {filtered_pokemon.map((poke) => {
          return (
            <h1 key={poke.name}>{poke.name}</h1>
          )
        })}
      </div>
    );
  }
}
