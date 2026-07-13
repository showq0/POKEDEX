import { State } from "./state.js"

export async function commandPokedex(state: State): Promise<void> {
    console.log(`Your Pokedex: `)
    const caughtPokemons = state.pokedex;
    Object.values(caughtPokemons).map((pokemon) => console.log(pokemon.name));
}