import {
  GET_POKEMONS_REQUEST,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAIL,
  SET_POKEMONS
} from '../constants/page'

function setPokemons(data) {
  const pokemons = data.results.map(pokemon => {
    let { url } = pokemon
    pokemon.id = url.substring(34, url.length - 1)
    pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    pokemon.url= url
    return pokemon
  })

  return {
    type: SET_POKEMONS,
    payload: pokemons
  }
}

export function getPokemons() {
  return dispatch => {
    dispatch({
      type: GET_POKEMONS_REQUEST
    })

    return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }

        throw new Error(`${response.status}: ${response.statusText}`)
      })
      .then(data => {
        dispatch({
          type: GET_POKEMONS_SUCCESS
        })
        dispatch(setPokemons(data))
      })
      .catch(error => {
        dispatch({
          type: GET_POKEMONS_FAIL,
          payload: error.message
        })
      })
  }
}