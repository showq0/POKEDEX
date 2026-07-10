export function cleanInput(input: string) {
    let words = input.split(" ");
    const result = words.map((element) => element.toLowerCase());
    return result;
}

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
            console.log(`Your command was: ${cleaned_output[0]}`);
        }
        r1.prompt();
    });
}
