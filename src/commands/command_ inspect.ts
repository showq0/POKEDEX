import { State } from "./state.js"

export async function commandInspect(state: State, pokemon_name: string): Promise<void> {
    console.log(`Inspect ${pokemon_name}...`)
    const state_pokemon = state.pokedex[pokemon_name];
    if (state_pokemon) {
        console.log(state_pokemon);
    }
    else {
        console.log(`he user has not caught ${pokemon_name}...`)

    }
}
