export class PokeAPI {
    // private static readonly baseURL = "https://pokeapi.co/api/v2";
    // private static readonly locationsUrl = "https://pokeapi.co/api/v2/location/";
    private static readonly locationArea = "https://pokeapi.co/api/v2/location-area/";
    public next_location = ""
    public prev_location = ""
    constructor() {
    }
    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        let url = "";
        if (pageURL) {
            url = pageURL;
        }
        else {
            url = PokeAPI.locationArea;
        }
        const response = await fetch(url);
        const data = await response.json()
        const results = data["results"]


        this.next_location = data["next"]
        // console.log(data["next"]);
        // console.log(data["previous"])
        // results.map((location: { name: string; url: string }) => console.log(location.name));

        this.prev_location = data["previous"]
        const locations_area: ShallowLocations = {
            locations: data["results"]
        }
        return locations_area;
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const locations = this.fetchLocations(PokeAPI.locationArea);
        return { "name": "name", "url": "url" };
    }
}

export type ShallowLocations = {
    locations: Location[]
};

export type Location = {
    name: string,
    url: string,
};