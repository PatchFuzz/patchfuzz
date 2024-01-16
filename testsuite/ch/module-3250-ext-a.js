





import * as ns from './module-3250-ext-a.js';

export let a;
export * from './module-3250-ext-b.js';

var stringKeys = Object.getOwnPropertyNames(ns);
assert.areEqual('["a","b"]', JSON.stringify(stringKeys));
