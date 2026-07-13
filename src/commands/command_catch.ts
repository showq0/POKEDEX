import { State } from "./state.js"

export async function commandCatch(state: State, pokemon_name: string): Promise<void> {
    console.log(`Throwing a Pokeball at ${pokemon_name}...`)
    const state_pokemon = state.pokedex[pokemon_name];
    let base_experience = 0;
    if (state_pokemon) {
        base_experience = state_pokemon.base_experience
        // console.log("saved")
    }
    else {
        const pokemon = await state.pokeApi.getPokemon(pokemon_name);
        state.pokedex[pokemon_name] = pokemon
        base_experience = pokemon.base_experience
    }
    const chance = 1 - base_experience / 635;

    if (Math.random() < chance) {
        console.log(`${pokemon_name} caught!`)
    } else {
        console.log(`${pokemon_name} escaped!`)
    }
}
