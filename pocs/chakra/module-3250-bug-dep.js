import * as ns from './module-3250-bug-dep.js';

export let c_localUninit1;
export { c_localUninit1 as f_indirectUninit } from './module-3250-bug-dep2.js';

var stringKeys = Object.getOwnPropertyNames(ns);
print('["c_localUninit1","f_indirectUninit"]', JSON.stringify(stringKeys));
