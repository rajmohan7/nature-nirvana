import React, { PureComponent } from 'react'
import Modal from 'react-awesome-modal'

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
          <p className="pokemon__name">{pokemon.name}</p>
        </div>

        <Modal
          visible={this.state.showPokemonDetailModal}
          width="1000px"
          height="auto"
          effect="fadeInDown"
          onClickAway={() =>
            this.setState({
              showPokemonDetailModal: !this.state.showPokemonDetailModal
            })
          }
        >
          <div style={{ marginTop: '0px' }}>Hey</div>
        </Modal>
      </div>
    )
  }
}

export default Pokemon
