import React, { Component } from 'react'
import Modal from 'react-awesome-modal'

class addDeletePokemon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addName: '',
      deleteName: ''
    }
  }

  onNameEntered = value => {
    this.setState({
      deleteName: value
    })
  }
  render() {
    return (
      <Modal
        visible={this.props.showModal}
        width="400"
        height="300"
        effect="fadeInUp"
        onClickAway={this.props.closeModal}
      >
        {this.props.addPokemon ? (
          <div className="centered-content">
            Enter Name to be added: (Case- sensitive)
            <input
              type="text"
              class="margin-top"
              value={this.state.addName}
              onChange={e => {
                this.setState({
                  addName: e.target.value
                })
              }}
            />
            <div>
              <input
                type="button"
                class="button-style pointer margin-top"
                value="Add pokemon"
                onClick={() => {
                  this.props.pokemonAddFn(this.state.addName)
                }}
              />
            </div>
          </div>
        ) : (
          <div className="centered-content">
            Enter Name to be deleted: (Case- sensitive)
            <input
              type="text"
              class="margin-top"
              value={this.state.deleteName}
              onChange={e => {
                this.onNameEntered(e.target.value)
              }}
            />
            <div>
              <input
                type="button"
                class="button-style pointer margin-top"
                value="Delete pokemon"
                onClick={() => {
                  this.props.pokemonDeleteFn(this.state.deleteName)
                }}
              />
            </div>
          </div>
        )}
      </Modal>
    )
  }
}

export default addDeletePokemon
