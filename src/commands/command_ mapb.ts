import type { State } from "./state.js";


export async function commandMapb(state: State): Promise<void> {
    const poke_api = state.pokeApi
    const prev_location = state.prevLocationsURL
    const locations = await poke_api.fetchLocations(prev_location)
    locations.locations.map((location) => console.log(location.name));

    state.prevLocationsURL = poke_api.prev_location
    state.nextLocationsURL = poke_api.next_location

}