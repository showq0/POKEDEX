import { Cache } from "./pokecache.js";

export class PokeAPI {
    // private static readonly baseURL = "https://pokeapi.co/api/v2";
    // private static readonly locationsUrl = "https://pokeapi.co/api/v2/location/";
    private static readonly locationArea = "https://pokeapi.co/api/v2/location-area/";

    public next_location = ""
    public prev_location = ""
    public pokicache;
    constructor(interval: number) {
        this.pokicache = new Cache(interval);
    }
    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        let url = "";
        if (pageURL) {
            url = pageURL;
        }
        else {
            url = PokeAPI.locationArea;
        }
        const cashed_response = this.pokicache.get(url);
        let results;
        if (cashed_response) {
            const data = await cashed_response.val;
            results = data["results"]
        }
        else {
            const response = await fetch(url);
            const data = await response.json()
            this.pokicache.add(url, data)

            results = data["results"]
            this.next_location = data["next"]

            // console.log(data["next"]);
            // console.log(data["previous"])
            // results.map((location: { name: string; url: string }) => console.log(location.name));

            this.prev_location = data["previous"]
        }

        const locations_area: ShallowLocations = {
            locations: results
        }
        return locations_area;
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const response = await fetch(`${PokeAPI.locationArea}/${locationName}`);
        const data = await response.json();
        const names = data.pokemon_encounters.map(
            (item: { pokemon: { name: string; url: string } }) => item.pokemon.name
        );


        return names;
    }
}

export type ShallowLocations = {
    locations: Location[]
};

export type Location = {
    name: string,
    url: string,
};