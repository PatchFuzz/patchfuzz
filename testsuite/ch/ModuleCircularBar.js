




import { circular_foo } from "ModuleCircularFoo.js"
export function circular_bar() {
    increment();
    return circular_foo();
}
export function increment() { 
    counter++;
}
export var counter = 0;

export function reset() {
    counter = 0;
}
