import { State } from "./state.js"

export async function commandExplor(state: State, name: string): Promise<void> {
    console.log(`Exploring ${name}...`);
    console.log(`Found Pokemon:`);
    const poki_names = await state.pokeApi.fetchLocation(name);
    console.log(poki_names)
}
