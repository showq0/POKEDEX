import type { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
    const poke_api = state.pokeApi
    const next_location = state.nextLocationsURL
    const locations = await poke_api.fetchLocations(next_location)
    locations.locations.map((location) => console.log(location.name));

    state.prevLocationsURL = poke_api.prev_location
    state.nextLocationsURL = poke_api.next_location


}