import { State } from "./state.js"

export async function commandHelp(state: State): Promise<void> {
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
