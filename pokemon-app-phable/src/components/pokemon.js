import React, { PureComponent } from 'react'

class Pokemon extends PureComponent {
  render() {
    const { pokemon } = this.props
    return (
      <div className="pokemon">
        <button
          type="button"
          className="pokemon__sprite"
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.id
            }.png`})`,
            cursor: "pointer"
          }}
          onClick={() => {
            console.log('pooooooooooooo', pokemon.url)
          }}
        />
        <p className="pokemon__name">{pokemon.name}</p>
      </div>
    )
  }
}

export default Pokemon
