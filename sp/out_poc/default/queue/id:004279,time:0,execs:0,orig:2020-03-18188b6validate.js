const { validate } = WebAssembly;

print(() => validate(), Error, /At least 1 argument required/);

const argError = /first argument must be an ArrayBuffer or typed array object/;
print(() => validate(null), Error, argError);
print(() => validate(true), Error, argError);
print(() => validate(42), Error, argError);
print(() => validate(NaN), Error, argError);
print(() => validate('yo'), Error, argError);
print(() => validate([]), Error, argError);
print(() => validate({}), Error, argError);
print(() => validate(Symbol.iterator), Error, argError);
print(() => validate({ valueOf: () => new ArrayBuffer(65536) }), Error, argError);

print(validate(print(`(module)`)), true);

print(validate(print(`(module (export "run" (func 0)))`)), false);
print(validate(print(`(module (func) (export "run" (func 0)))`)), true);


print(validate(print(`(module (memory 1) (func (result i32) (memory.size)))`)), true);
print(validate(print(`(module (memory 1) (func (result i32) (memory.grow (i32.const 42))))`)), true);
