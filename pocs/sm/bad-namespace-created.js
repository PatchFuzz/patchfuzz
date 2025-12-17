"use strict";

;

let a = registerModule('A', parseModule('import "B"; export {x} from "C"'));
registerModule('B', parseModule('import * as a from "A"'));
registerModule('C', parseModule('export * from "D"; export * from "E"'));
registerModule('D', parseModule('export let x'));
registerModule('E', parseModule('export let x'));

print(() => moduleLink(a), SyntaxError);
