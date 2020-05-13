import React, { Component } from 'react'
import Modal from 'react-awesome-modal'
import { isEmpty } from 'lodash'

class pokemonDetail extends Component {
  render() {
    return (
      <Modal
        visible={this.props.showPokemonDetailModal}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={this.props.closeModal}
      >
        <div>
          <h1>Pokemon detail</h1>
          {!isEmpty(this.props.selectedPokemonData) ? (
            <table class="table borderless">
              <tr>
                <td>HP -</td>
                <td>{this.props.selectedPokemonData.order}</td>
              </tr>
              <tr>
                <td>Attack -</td>
                <td>
                  {this.props.selectedPokemonData.abilities[0].ability.name}
                </td>
              </tr>
              <tr>
                <td>Defence -</td>
                <td>{this.props.selectedPokemonData.forms[0].name}</td>
              </tr>
              <tr>
                <td>Type -</td>
                <td>{this.props.selectedPokemonData.types[0].type.name}</td>
              </tr>
            </table>
          ) : null}
          <a href="javascript:void(0);" onClick={this.props.closeModal}>
            Close
          </a>
        </div>
      </Modal>
    )
  }
}

export default pokemonDetail
