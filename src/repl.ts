import { getCommands } from "./commands/command_control.js";
import { CLICommand } from "./commands/command.js";
export function cleanInput(input: string) {
    let words = input.split(" ");
    const result = words.map((element) => element.toLowerCase());
    return result;
}

const all_commands = getCommands()


import { stdin, stdout } from "node:process";
import { createInterface } from "node:readline";

export const r1 = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > ",
});
export function startREPL() {
    r1.prompt();
    r1.on("line", (input) => {

        if (input != "") {
            // console.log(`your entered: ${input}`);
            let cleaned_output = cleanInput(input);
            const command = all_commands[cleaned_output[0]]
            if (command) {
                command.callback()
            }
            else {
                console.log("Unknown command")
            }
            // console.log(`Your command was: ${cleaned_output[0]}`);
        }
        r1.prompt();
    });
}
