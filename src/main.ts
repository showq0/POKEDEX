import { startREPL } from "./repl.js";
import { initState } from "./commands/state.js";
import { PokeAPI } from "./pokeapi.js";
async function main() {
    const state = await initState();
    // let poke_api: PokeAPI = await new PokeAPI();
    // await poke_api.fetchLocations();
    // console.log("------------")
    // await poke_api.fetchLocations(poke_api.next_location);
    // console.log("------------")
    // await poke_api.fetchLocations(poke_api.next_location);

    // console.log(`nextUrl: ${state.nextLocationsURL}`);
    // console.log(`prevUrl: ${state.prevLocationsURL}`);
    startREPL(state);
}

main();