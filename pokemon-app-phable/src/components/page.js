import React, { Component } from 'react'
import Pokemon from '../components/pokemon'
import AddDeletePokemon from './addDeletePokemon'
import { find, remove } from 'lodash'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayedPokemons: [],
      showModal: false,
      addPokemon: false,
      deletePokemon: false
    }
  }

  componentDidMount() {
    this.props.getPokemons()
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.displayedPokemons.length &&
      nextProps.displayedPokemons !== this.props.displayedPokemons
    ) {
      console.log(nextProps.displayedPokemons, 'nextProps.displayedPokemons')

      this.setState({
        displayedPokemons: nextProps.displayedPokemons
      })
    }
  }

  pokemonAddFn = value => {
    if (value.length) {
      let { displayedPokemons } = this.state

      let newPokemon = {
        name: value,
        id: displayedPokemons.length.toString(),
        url:
          'https://pokeapi.co/api/v2/pokemon/' +
          displayedPokemons.length.toString() +
          '/'
      }

      displayedPokemons.push(newPokemon)
      this.setState({
        displayedPokemons,
        showModal: !this.state.showModal
      })
      localStorage.setItem('pokData', JSON.stringify(displayedPokemons))
    }
  }

  pokemonDeleteFn = value => {
    let foundName = find(this.state.displayedPokemons, { name: value })
    if (foundName) {
      let { displayedPokemons } = this.state

      var removeValue = remove(displayedPokemons, function(pokData) {
        return pokData.id === foundName.id
      })
      this.setState({
        displayedPokemons,
        showModal: !this.state.showModal
      })
      localStorage.setItem('pokData', JSON.stringify(displayedPokemons))
    }
  }

  render() {
    let { isFetched, error } = this.props

    let displayedPokemons = localStorage.getItem('pokData')
      ? JSON.parse(localStorage.getItem('pokData'))
      : this.state.displayedPokemons

    let pokemons = displayedPokemons.map(pokemon => {
      return (
        <li className="pokemons__item" key={pokemon.id}>
          <Pokemon pokemon={pokemon} />
        </li>
      )
    })

    return (
      <div className="page">
        {error && <div className="page__error">{error}</div>}
        {isFetched ? (
          <p>Loading...</p>
        ) : (
          <div className="margin-top">
            <input
              type="button"
              class="button-style pointer"
              value="Add pokemon"
              onClick={() => {
                this.setState({
                  showModal: true,
                  addPokemon: true,
                  deletePokemon: false
                })
              }}
            />
            &nbsp; &nbsp; &nbsp;
            <input
              type="button"
              class="button-style pointer"
              value="Delete pokemon"
              onClick={() => {
                this.setState({
                  showModal: true,
                  addPokemon: false,
                  deletePokemon: true
                })
              }}
            />
            <ul className="pokemons">{pokemons}</ul>
          </div>
        )}

        <AddDeletePokemon
          showModal={this.state.showModal}
          addPokemon={this.state.addPokemon}
          deletePokemon={this.state.deletePokemon}
          pokemonAddFn={this.pokemonAddFn}
          pokemonDeleteFn={this.pokemonDeleteFn}
          closeModal={() => {
            this.setState({
              showModal: !this.state.showModal
            })
          }}
        />
      </div>
    )
  }
}

export default Page
