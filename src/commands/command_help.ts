import { State } from "./state.js"
export function commandHelp(state: State) {
    console.log(
        `Welcome to the Pokedex!
Usage:

help: Displays a help message
exit: Exit the Pokedex")
`
    )
    const all_commands = Object.values(state.commands)
    all_commands.map(element => console.log(`${element.name}: ${element.description}`));
}
