import { Pokemon } from "../pokeapi.js";
import { State } from "./state.js"
export async function commandCatch(state: State, pokemon_name: string): Promise<void> {
    console.log(`Throwing a Pokeball at ${pokemon_name}...`)
    let pokemon: Pokemon;
    const state_pokemon = state.pokedex[pokemon_name];
    if (state_pokemon) {
        pokemon = state_pokemon
        console.log(`${pokemon_name} caught!`)
        return
    }
    pokemon = await state.pokeApi.getPokemon(pokemon_name);
    const chance = 1 - pokemon.base_experience / 635;
    if (Math.random() < chance) {
        console.log(`${pokemon_name} caught!`)
        state.pokedex[pokemon_name] = pokemon
    } else {
        console.log(`${pokemon_name} escaped!`)
    }
}
