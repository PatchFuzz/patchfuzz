












WScript.RegisterModuleSource('module0.js', `
console.log('fail');
`);

WScript.RegisterModuleSource('module3.js', `
import { default as _default } from 'module0.js';
export { } from 'module2.js';
console.log('fail');
`);

WScript.LoadScriptFile('module3.js', 'module');

console.log('pass');
