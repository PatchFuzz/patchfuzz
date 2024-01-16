




import { circular_bar, increment, counter } from "ModuleCircularBar.js"
export function circular_foo() {
    if (counter == 0) {
        return circular_bar();
    } else {
        increment();
        return counter;
    }
}
export { circular_bar as rexportbar, reset } from "ModuleCircularBar.js"
