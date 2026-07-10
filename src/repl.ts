import { getCommands } from "./commands/command_control.js";
import { initState } from "./commands/state.js";
import { State } from "./commands/state.js";
export function cleanInput(input: string) {
    let words = input.split(" ");
    const result = words.map((element) => element.toLowerCase());
    return result;
}



export function startREPL(state: State) {
    const r1 = state.readline
    const all_commands = state.commands
    r1.prompt();
    r1.on("line", (input) => {

        if (input != "") {
            // console.log(`your entered: ${input}`);
            let cleaned_output = cleanInput(input);
            const cmomand_name = cleaned_output[0]
            const command = all_commands[cmomand_name]
            if (command) {
                command.callback(state)
            }
            else {
                console.log(`Unknown command: "${command}". Type "help" for a list of commands.`)
            }
            // console.log(`Your command was: ${cleaned_output[0]}`);
        }
        r1.prompt();
    });
}
