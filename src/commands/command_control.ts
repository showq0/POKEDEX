
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_ mapb.js"
import { commandExplor } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandPokedex } from "./command_pokedex.js"
import { CLICommand } from "./state.js";
import { commandInspect } from "./command_ inspect.js";



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
        },
        explore:
        {
            name: "explore",
            description: "explore locations area",
            callback: commandExplor,
        },
        catch:
        {
            name: "catch",
            description: "catch Pokemon using his name",
            callback: commandCatch,
        },
        inspect:
        {
            name: "inspect",
            description: "Inspect caught Pokemon using its name.",
            callback: commandInspect,
        },
        pokedex:
        {
            name: "pokedex",
            description: " list all the Pokemon the user has caugh",
            callback: commandPokedex,

        }
    };
}