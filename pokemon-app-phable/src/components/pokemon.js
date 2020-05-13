import React, { PureComponent } from 'react'
import PokemonDetail from './pokemonDetail'

class Pokemon extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selectedPokemonData: [],
      showPokemonDetailModal: false
    }
  }

  getPokemonDetails = url => {
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(data => {
        this.setState({
          showPokemonDetailModal: true,
          selectedPokemonData: data
        })
      })
  }
  render() {
    const { pokemon } = this.props
    return (
      <div>
        <div className="pokemon">
          <button
            type="button"
            className="pokemon__sprite"
            style={{
              backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemon.id
              }.png`})`,
              cursor: 'pointer'
            }}
            onClick={() => {
              this.getPokemonDetails(pokemon.url)
            }}
          />
          <p className="pokemon__name">{pokemon.name}</p>{' '}
          <span> (Id- {pokemon.id})</span>
        </div>

        <PokemonDetail
          selectedPokemonData={this.state.selectedPokemonData}
          showPokemonDetailModal={this.state.showPokemonDetailModal}
          closeModal={() => {
            this.setState({
              showPokemonDetailModal: !this.state.showPokemonDetailModal
            })
          }}
        />
      </div>
    )
  }
}

export default Pokemon
