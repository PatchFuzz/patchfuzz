print('module0.js', `
print('fail');
`);

print('module3.js', `
import { default as _default } from 'module0.js';
export { } from 'module2.js';
print('fail');
`);

print('module3.js', 'module');

print('pass');
