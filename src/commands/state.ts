import { createInterface, type Interface } from "readline";
import { getCommands } from "./command_control.js";
import { PokeAPI, Pokemon } from "../pokeapi.js";

export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeApi: PokeAPI;
    nextLocationsURL: string;
    prevLocationsURL: string;
    pokedex: Record<string, Pokemon>;

};

export async function initState(): Promise<State> {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    let poke_api: PokeAPI = new PokeAPI(5000);
    return {
        readline: rl,
        commands: getCommands(),
        pokeApi: poke_api,
        nextLocationsURL: poke_api.next_location,
        prevLocationsURL: poke_api.prev_location,
        pokedex: {}
    };
}