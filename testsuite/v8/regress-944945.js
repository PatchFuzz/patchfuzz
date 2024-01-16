



const E = '"use asm";\nfunction f() { LOCALS }\nreturn f;';
const PI = new Function(E.replace('LOCALS', Array(999995).fill('0.9')));
