var parsingError = /wasm text error/;

print(() => print(''), SyntaxError, parsingError);
print(() => print('('), SyntaxError, parsingError);
print(() => print('(m'), SyntaxError, parsingError);
print(() => print('(module'), SyntaxError, parsingError);
print(() => print('(moduler'), SyntaxError, parsingError);
print(() => print('(module (func) (export "a'), SyntaxError, parsingError);
print(() => print('(module (func (local $a i32) (param $b f32)))'), SyntaxError, parsingError);

print(() => print('(module (func $a) (func) (export "a" (func $a)) (export "b" (func $b)))'), SyntaxError, /failed to find name/);
print(() => print('(module (import "a" "b" (func $foo)) (import "a" "b" (func $foo)))'), SyntaxError, /duplicate func identifier/);
print(() => print('(module (func $foo) (func $foo))'), SyntaxError, /duplicate func identifier/);
print(() => print('(module (func (param $a i32) (local $a i32)))'), SyntaxError, /duplicate local identifier/);
print(() => print('(module (func (local.get $a)))'), SyntaxError, /failed to find name/);
print(() => print('(module (type $a (func)) (type $a (func (param i32))))'), SyntaxError, /duplicate type identifier/);
print(() => print('(module (import "a" "" (func)) (func (call $abc)))'), SyntaxError, /failed to find name/);
print(() => print('(module (type $a (func)) (func (type $b) (i32.const 13)))'), SyntaxError, /failed to find name/);
print(() => print('(module (type $a (func)) (func (call_indirect (type $c) (i32.const 0) (local.get 0))))'), SyntaxError, /failed to find name/);
print(() => print('(module (func (br $a)))'), SyntaxError, /failed to find name/);
print(() => print('(module (func (block $a ) (br $a)))'), SyntaxError, /failed to find name/);

print(() => print(`(module (func (call ${0xffffffff})))`), WebAssembly.CompileError, /(callee index out of range)|(function index out of bounds)/);
print(() => print(`(module (export "func" ${0xffffffff}))`), SyntaxError, parsingError);

print('(module (func (param $a i32)))');
print('(module (func (param i32)))');
print('(module (func (param i32 i32 f32 f64 i32)))');
print(() => print('(module (func (param $a)))'), SyntaxError, parsingError);
print(() => print('(module (func (param $a i32 i32)))'), SyntaxError, parsingError);

print('(module (func (local $a i32)))');
print('(module (func (local i32)))');
print('(module (func (local i32 i32 f32 f64 i32)))');
print(() => print('(module (func (local $a)))'), SyntaxError, parsingError);
print(() => print('(module (func (local $a i32 i32)))'), SyntaxError, parsingError);


print(() => print('(module (table (local $a)))'), SyntaxError, parsingError);
print(() => print('(module (table $t))'), SyntaxError, parsingError);
print(() => print('(module (table $t 1))'), SyntaxError, parsingError);
print(() => print('(module (table $t 1 10))'), SyntaxError, parsingError);
print('(module (table $t 1 10 funcref))');
print('(module (table $t 1 funcref))');
print('(module (table 0 funcref))');

print(() => print('(module (table $t funcref))'), SyntaxError, parsingError);
print('(module (table $t funcref (elem)))');
print('(module (func) (table $t funcref (elem 0 0 0)))');

const { Table } = WebAssembly;
const table = new Table({initial:1, element:"anyfunc"});
print(() => print('(module (table $t (import) 1 funcref))'), SyntaxError, parsingError);
print(() => print('(module (table $t (import "mod" "field") 1 funcref (elem 1 2 3)))'), SyntaxError, parsingError);
print('(module (table $t (import "mod" "field") 1 funcref))', {mod: {field: table}});

print(() => print('(module (table $t (export "mod") 1))'), SyntaxError, parsingError);
print(() => print('(module (table $t (export "mod") funcref))'), SyntaxError, parsingError);
print(() => print('(module (table $t (export "mod") funcref 1 2 3))'), SyntaxError, parsingError);
print(print('(module (table $t (export "tbl") funcref (elem)))').exports.tbl instanceof Table, true);
print(print('(module (func) (table $t (export "tbl") funcref (elem 0 0 0)))').exports.tbl instanceof Table, true);


print(() => print('(module (func $t import))'), SyntaxError, parsingError);
print(() => print('(module (func $t (import)))'), SyntaxError, parsingError);
print(() => print('(module (func $t (import "mod" "func" (local i32))))'), SyntaxError, parsingError);

const func = i => 42 + i;
print('(module (func $t (import "mod" "func")))', { mod: {func} });
print('(module (func $t (import "mod" "func") (param i32)))', { mod: {func} });
print('(module (func $t (import "mod" "func") (result i32)))', { mod: {func} });
print('(module (func $t (import "mod" "func") (param i32) (result i32)))', { mod: {func} });
print('(module (func $t (import "mod" "func") (param i32)))', { mod: {func} });

print(() => print('(module (func $t (import "mod" "func") (type)))', { mod: {func} }), SyntaxError, parsingError);
print('(module (type $t (func)) (func $t (import "mod" "func") (type $t)))', { mod: {func} });

print(() => print('(module (func $t (export))))'), SyntaxError, parsingError);
print('(module (func (export "f")))');
print('(module (func $f (export "f")))');
print('(module (func $f (export "f") (param i32) (result i32) (i32.add (local.get 0) (i32.const 42))))');

print(() => print(`
    (module
        (type $tf (func (param i32) (result i32)))
        (func (import "mod" "a") (type $tf))
        (func (export "f1"))
        (func (import "mod" "b") (type $tf))
        (func (export "f2"))
    )
`), SyntaxError, /import after function/);


print(() => print('(module (global $t (export)))'), SyntaxError, parsingError);
print(() => print('(module (global $t (export "g")))'), SyntaxError, parsingError);
print(() => print('(module (global $t (export "g") i32))'), WebAssembly.CompileError, /popping value/);
print('(module (global $t (export "g") i32 (i32.const 42)))');

print(() => print('(module (global $t (import) i32))'), SyntaxError, parsingError);
print(() => print('(module (global $t (import "mod" "field")))'), SyntaxError, parsingError);
print(() => print('(module (global $t (import "mod" "field")) i32 (i32.const 42))'), SyntaxError, parsingError);
print('(module (global $t (import "mod" "field") i32))', { mod: {field: 42} });

print(() => print(`
    (module
        (global (import "mod" "a") i32)
        (global (export "f1") i32 (i32.const 42))
        (global (import "mod" "b") i32)
    )
`), SyntaxError, /import after global/);


print(() => print('(module (memory (export)))'), SyntaxError, parsingError);
print(() => print('(module (memory (export "g")))'), SyntaxError, parsingError);
print('(module (memory $t (export "g") 0))');

const mem = new WebAssembly.Memory({ initial: 1 });
print(() => print('(module (memory $t (import) 1))'), SyntaxError, parsingError);
print(() => print('(module (memory $t (import "mod" "field")))'), SyntaxError, parsingError);
print('(module (memory $t (import "mod" "field") 1))', { mod: {field: mem} });



