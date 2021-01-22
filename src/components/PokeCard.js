import React, { Component } from "react";
import { mockPokemonData } from "../mock/pokeData";

class PokeCard extends Component {
  render() {
    return (
      <div>
        <h1>{mockPokemonData.name}</h1>
        <img src={mockPokemonData.sprites.front_default} alt="Default sprite" />
        <img src={mockPokemonData.sprites.front_shiny} alt="Shiny sprite" />
        <br />
        <a href={mockPokemonData.video}>See a video!</a>
      </div>
    );
  }
}

export default PokeCard;
