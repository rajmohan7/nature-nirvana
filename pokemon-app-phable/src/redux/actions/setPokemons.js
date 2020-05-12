import { SET_POKEMONS } from '../constants/page';
export function setPokemons(data) {
  const pokemons = data.results.map(pokemon => {
    let { url } = pokemon;
    pokemon.id = url.substring(34, url.length - 1);
    pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    return pokemon;
  });
  return {
    type: SET_POKEMONS,
    payload: pokemons
  };
}
