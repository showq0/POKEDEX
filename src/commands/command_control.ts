
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_ mapb.js"
import { CLICommand } from "./state.js";



export function getCommands(): Record<string, CLICommand> {
    return {
        exit: {
            name: "exit",
            description: "Exit the Pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "help instrucation",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "get 20 next location",
            callback: commandMap,
        },
        mapb: {
            name: "mapb",
            description: "get 20 prev locations ",
            callback: commandMapb,
        }
    };
}