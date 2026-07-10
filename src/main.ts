import { startREPL } from "./repl.js";
import { initState } from "./commands/state.js";
function main() {
    const state = initState();
    startREPL(state);
}

main();