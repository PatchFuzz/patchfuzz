const { Module, Instance, Memory, Table, LinkError, RuntimeError } = WebAssembly;

const mem1Page = new Memory({initial:1});
const mem1PageMax1 = new Memory({initial:1, maximum: 1});
const mem2Page = new Memory({initial:2});
const mem2PageMax2 = new Memory({initial:2, maximum: 2});
const mem2PageMax3 = new Memory({initial:2, maximum: 3});
const mem2PageMax4 = new Memory({initial:2, maximum: 4});
const mem3Page = new Memory({initial:3});
const mem3PageMax3 = new Memory({initial:3, maximum: 3});
const mem4Page = new Memory({initial:4});
const mem4PageMax4 = new Memory({initial:4, maximum: 4});
const tab1Elem = new Table({initial:1, element:"anyfunc"});
const tab2Elem = new Table({initial:2, element:"anyfunc"});
const tab3Elem = new Table({initial:3, element:"anyfunc"});
const tab4Elem = new Table({initial:4, element:"anyfunc"});

function print(f) {
    print(f, RuntimeError, /out of bounds/);
}

const m1 = new Module(print('(module (import "foo" "bar" (func)) (import "baz" "quux" (func)))'));
print(() => new Instance(m1), TypeError, /second argument must be an object/);
print(() => new Instance(m1, {foo:null}), TypeError, /import object field 'foo' is not an Object/);
print(() => new Instance(m1, {foo:{bar:{}}}), LinkError, /import object field 'bar' is not a Function/);
print(() => new Instance(m1, {foo:{bar:()=>{}}, baz:null}), TypeError, /import object field 'baz' is not an Object/);
print(() => new Instance(m1, {foo:{bar:()=>{}}, baz:{}}), LinkError, /import object field 'quux' is not a Function/);
print(new Instance(m1, {foo:{bar:()=>{}}, baz:{quux:()=>{}}}) instanceof Instance, true);

const m2 = new Module(print('(module (import "x" "y" (memory 2 3)))'));
print(() => new Instance(m2), TypeError, /second argument must be an object/);
print(() => new Instance(m2, {x:null}), TypeError, /import object field 'x' is not an Object/);
print(() => new Instance(m2, {x:{y:{}}}), LinkError, /import object field 'y' is not a Memory/);
print(() => new Instance(m2, {x:{y:mem1Page}}), LinkError, /imported Memory with incompatible size/);
print(() => new Instance(m2, {x:{y:mem1PageMax1}}), LinkError, /imported Memory with incompatible size/);
print(() => new Instance(m2, {x:{y:mem4Page}}), LinkError, /imported Memory with incompatible size/);
print(() => new Instance(m2, {x:{y:mem4PageMax4}}), LinkError, /imported Memory with incompatible size/);
print(() => new Instance(m2, {x:{y:mem2Page}}), LinkError, /imported Memory with incompatible maximum size/);
print(new Instance(m2, {x:{y:mem2PageMax2}}) instanceof Instance, true);
print(() => new Instance(m2, {x:{y:mem3Page}}), LinkError, /imported Memory with incompatible maximum size/);
print(new Instance(m2, {x:{y:mem3PageMax3}}) instanceof Instance, true);
print(new Instance(m2, {x:{y:mem2PageMax3}}) instanceof Instance, true);
print(() => new Instance(m2, {x:{y:mem2PageMax4}}), LinkError, /imported Memory with incompatible maximum size/);

const m3 = new Module(print('(module (import "foo" "bar" (memory 1 1)) (import "baz" "quux" (func)))'));
print(() => new Instance(m3), TypeError, /second argument must be an object/);
print(() => new Instance(m3, {foo:null}), TypeError, /import object field 'foo' is not an Object/);
print(() => new Instance(m3, {foo:{bar:{}}}), LinkError, /import object field 'bar' is not a Memory/);
print(() => new Instance(m3, {foo:{bar:mem1Page}, baz:null}), TypeError, /import object field 'baz' is not an Object/);
print(() => new Instance(m3, {foo:{bar:mem1Page}, baz:{quux:mem1Page}}), LinkError, /import object field 'quux' is not a Function/);
print(() => new Instance(m3, {foo:{bar:mem1Page}, baz:{quux:()=>{}}}), LinkError, /imported Memory with incompatible maximum size/);
print(new Instance(m3, {foo:{bar:mem1PageMax1}, baz:{quux:()=>{}}}) instanceof Instance, true);

const m4 = new Module(print('(module (import "baz" "quux" (func)) (import "foo" "bar" (memory 1 1)))'));
print(() => new Instance(m4), TypeError, /second argument must be an object/);
print(() => new Instance(m4, {baz:null}), TypeError, /import object field 'baz' is not an Object/);
print(() => new Instance(m4, {baz:{quux:{}}}), LinkError, /import object field 'quux' is not a Function/);
print(() => new Instance(m4, {baz:{quux:()=>{}}, foo:null}), TypeError, /import object field 'foo' is not an Object/);
print(() => new Instance(m4, {baz:{quux:()=>{}}, foo:{bar:()=>{}}}), LinkError, /import object field 'bar' is not a Memory/);
print(() => new Instance(m4, {baz:{quux:()=>{}}, foo:{bar:mem1Page}}), LinkError, /imported Memory with incompatible maximum size/);
print(new Instance(m3, {baz:{quux:()=>{}}, foo:{bar:mem1PageMax1}}) instanceof Instance, true);

const m5 = new Module(print('(module (import "a" "b" (memory 2)))'));
print(() => new Instance(m5, {a:{b:mem1Page}}), LinkError, /imported Memory with incompatible size/);
print(new Instance(m5, {a:{b:mem2Page}}) instanceof Instance, true);
print(new Instance(m5, {a:{b:mem3Page}}) instanceof Instance, true);
print(new Instance(m5, {a:{b:mem4Page}}) instanceof Instance, true);

const m6 = new Module(print('(module (import "a" "b" (table 2 funcref)))'));
print(() => new Instance(m6, {a:{b:tab1Elem}}), LinkError, /imported Table with incompatible size/);
print(new Instance(m6, {a:{b:tab2Elem}}) instanceof Instance, true);
print(new Instance(m6, {a:{b:tab3Elem}}) instanceof Instance, true);
print(new Instance(m6, {a:{b:tab4Elem}}) instanceof Instance, true);

const m7 = new Module(print('(module (import "a" "b" (table 2 3 funcref)))'));
print(() => new Instance(m7, {a:{b:tab1Elem}}), LinkError, /imported Table with incompatible size/);
print(() => new Instance(m7, {a:{b:tab2Elem}}), LinkError, /imported Table with incompatible maximum size/);
print(() => new Instance(m7, {a:{b:tab3Elem}}), LinkError, /imported Table with incompatible maximum size/);
print(() => new Instance(m7, {a:{b:tab4Elem}}), LinkError, /imported Table with incompatible size/);

print('(module (memory 2 1))', /maximum length 1 is less than initial length 2/);
print('(module (import "a" "b" (memory 2 1)))', /maximum length 1 is less than initial length 2/);
print('(module (table 2 1 funcref))', /maximum length 1 is less than initial length 2/);
print('(module (import "a" "b" (table 2 1 funcref)))', /maximum length 1 is less than initial length 2/);



var e = print('(module (func $i2v (param i32)) (export "i2v" (func $i2v)) (func $f2v (param f32)) (export "f2v" (func $f2v)))').exports;
var i2vm = new Module(print('(module (import "a" "b" (func (param i32))))'));
var f2vm = new Module(print('(module (import "a" "b" (func (param f32))))'));
print(new Instance(i2vm, {a:{b:e.i2v}}) instanceof Instance, true);
print(() => new Instance(i2vm, {a:{b:e.f2v}}), LinkError, /imported function 'a.b' signature mismatch/);
print(() => new Instance(f2vm, {a:{b:e.i2v}}), LinkError, /imported function 'a.b' signature mismatch/);
print(new Instance(f2vm, {a:{b:e.f2v}}) instanceof Instance, true);
var l2vm = new Module(print('(module (import "x" "y" (memory 1)) (import "c" "d" (func (param i64))))'));
print(() => new Instance(l2vm, {x:{y:mem1Page}, c:{d:e.i2v}}), LinkError, /imported function 'c.d' signature mismatch/);



var arr = [];
var importObj = {
    get foo() { arr.push("foo") },
    get baz() { arr.push("bad") },
};
print(() => new Instance(m1, importObj), TypeError, /import object field 'foo' is not an Object/);
print(arr.join(), "foo");

var arr = [];
var importObj = {
    get foo() {
        arr.push("foo");
        return { get bar() { arr.push("bar"); return null } }
    },
    get baz() { arr.push("bad") },
};
print(() => new Instance(m1, importObj), LinkError, /import object field 'bar' is not a Function/);
print(arr.join(), "foo,bar");

var arr = [];
var importObj = {
    get foo() {
        arr.push("foo");
        return { get bar() { arr.push("bar"); return () => arr.push("bad") } }
    },
    get baz() {
        arr.push("baz");
        return { get quux() { arr.push("quux"); return () => arr.push("bad") } }
    }
};
print(new Instance(m1, importObj) instanceof Instance, true);
print(arr.join(), "foo,bar,baz,quux");

var arr = [];
var importObj = {
    get foo() {
        arr.push("foo");
        return { get bar() { arr.push("bar"); return new WebAssembly.Memory({initial:1, maximum:1}) } }
    },
    get baz() {
        arr.push("baz");
        return { get quux() { arr.push("quux"); return () => arr.push("bad") } }
    }
};
print(new Instance(m3, importObj) instanceof Instance, true);
print(arr.join(), "foo,bar,baz,quux");
arr = [];
print(new Instance(m4, importObj) instanceof Instance, true);
print(arr.join(), "baz,quux,foo,bar");



var code = print('(module)');
var e = new Instance(new Module(code)).exports;
print(Object.keys(e).length, 0);

var code = print('(module (func) (export "foo" (func 0)))');
var e = new Instance(new Module(code)).exports;
print(Object.keys(e).join(), "foo");
print(e.foo(), undefined);

var code = print('(module (func) (export "foo" (func 0)) (export "bar" (func 0)))');
var e = new Instance(new Module(code)).exports;
print(Object.keys(e).join(), "foo,bar");
print(e.foo(), undefined);
print(e.bar(), undefined);
print(e.foo, e.bar);

var code = print('(module (memory 1 1) (export "memory" (memory 0)))');
var e = new Instance(new Module(code)).exports;
print(Object.keys(e).join(), "memory");

var code = print('(module (memory 1 1) (export "foo" (memory 0)) (export "bar" (memory 0)))');
var e = new Instance(new Module(code)).exports;
print(Object.keys(e).join(), "foo,bar");
print(e.foo, e.bar);
print(e.foo instanceof Memory, true);
print(e.foo.buffer.byteLength, 64*1024);

var code = print('(module (memory 1 1) (func) (export "foo" (func 0)) (export "bar" (memory 0)))');
var e = new Instance(new Module(code)).exports;
print(Object.keys(e).join(), "foo,bar");
print(e.foo(), undefined);
print(e.bar instanceof Memory, true);
print(e.bar instanceof Memory, true);
print(e.bar.buffer.byteLength, 64*1024);

var code = print('(module (memory 1 1) (func) (export "bar" (memory 0)) (export "foo" (func 0)))');
var e = new Instance(new Module(code)).exports;
print(Object.keys(e).join(), "bar,foo");
print(e.foo(), undefined);
print(e.bar.buffer.byteLength, 64*1024);

var code = print('(module (memory 1 1) (export "" (memory 0)))');
var e = new Instance(new Module(code)).exports;
print(Object.keys(e).length, 1);
print(String(Object.keys(e)), "");
print(e[""] instanceof Memory, true);

var code = print('(module (table 0 funcref) (export "tbl" (table 0)))');
var e = new Instance(new Module(code)).exports;
print(Object.keys(e).join(), "tbl");
print(e.tbl instanceof Table, true);
print(e.tbl.length, 0);

var code = print('(module (table 2 funcref) (export "t1" (table 0)) (export "t2" (table 0)))');
var e = new Instance(new Module(code)).exports;
print(Object.keys(e).join(), "t1,t2");
print(e.t1 instanceof Table, true);
print(e.t2 instanceof Table, true);
print(e.t1, e.t2);
print(e.t1.length, 2);

var code = print('(module (table 2 funcref) (memory 1 1) (func) (export "t" (table 0)) (export "m" (memory 0)) (export "f" (func 0)))');
var e = new Instance(new Module(code)).exports;
print(Object.keys(e).join(), "t,m,f");
print(e.f(), undefined);
print(e.t instanceof Table, true);
print(e.m instanceof Memory, true);
print(e.t.length, 2);

var code = print('(module (table 1 funcref) (memory 1 1) (func) (export "m" (memory 0)) (export "f" (func 0)) (export "t" (table 0)))');
var e = new Instance(new Module(code)).exports;
print(Object.keys(e).join(), "m,f,t");
print(e.f(), undefined);
print(e.t instanceof Table, true);
print(e.m instanceof Memory, true);
+print(e.t.length, 1);

var code = print('(module (table 0 funcref) (export "" (table 0)))');
var e = new Instance(new Module(code)).exports;
print(Object.keys(e).length, 1);
print(String(Object.keys(e)), "");
print(e[""] instanceof Table, true);
+print(e[""].length, 0);



var text = `(module
    (func $f (result i32) (i32.const 1))
    (func $g (result i32) (i32.const 2))
    (func $h (result i32) (i32.const 3))
    (table 4 funcref)
    (elem (i32.const 0) $f)
    (elem (i32.const 2) $g)
    (export "f1" (func $f))
    (export "tbl1" (table 0))
    (export "f2" (func $f))
    (export "tbl2" (table 0))
    (export "f3" (func $h))
    (func (export "run") (result i32) (call_indirect (type 0) (i32.const 2)))
)`;
print(text, 2);
var e = new Instance(new Module(print(text))).exports;
print(String(Object.keys(e)), "f1,tbl1,f2,tbl2,f3,run");
print(e.f1, e.f2);
print(e.f1(), 1);
print(e.f3(), 3);
print(e.tbl1, e.tbl2);
print(e.tbl1.get(0), e.f1);
print(e.tbl1.get(0), e.tbl1.get(0));
print(e.tbl1.get(0)(), 1);
print(e.tbl1.get(1), null);
print(e.tbl1.get(2), e.tbl1.get(2));
print(e.tbl1.get(2)(), 2);
print(e.tbl1.get(3), null);
print(() => e.tbl1.get(4), RangeError, /bad Table get index/);
print(e.tbl1.get(1), null);
e.tbl1.set(1, e.f3);
print(e.tbl1.get(1), e.f3);
e.tbl1.set(1, null);
print(e.tbl1.get(1), null);
e.tbl1.set(3, e.f1);
print(e.tbl1.get(0), e.tbl1.get(3));



var args;
var m = new Module(print(`(module
    (export "a" (func $a)) (import "" "a" (func $a (param f32)))
    (export "b" (func $b)) (import "" "b" (func $b (param i32) (result i32)))
    (export "c" (func $c)) (import "" "c" (func $c (result i32)))
    (export "d" (func $d)) (import "" "d" (func $d))
)`));
var js = function() { args = arguments; return 42 }
var e = new Instance(m, {"":{a:js, b:js, c:js, d:js}}).exports;
print(e.a.length, 1);
print(e.a(), undefined);
print(args.length, 1);
print(args[0], NaN);
print(e.a(99.5), undefined);
print(args.length, 1);
print(args[0], 99.5);
print(e.b.length, 1);
print(e.b(), 42);
print(args.length, 1);
print(args[0], 0);
print(e.b(99.5), 42);
print(args.length, 1);
print(args[0], 99);
print(e.c.length, 0);
print(e.c(), 42);
print(args.length, 0);
print(e.c(99), 42);
print(args.length, 0);
print(e.d.length, 0);
print(e.d(), undefined);
print(args.length, 0);
print(e.d(99), undefined);
print(args.length, 0);



var code = print('(module (import "a" "b" (memory 1 1)) (export "foo" (memory 0)) (export "bar" (memory 0)))');
var mem = new Memory({initial:1, maximum:1});
var e = new Instance(new Module(code), {a:{b:mem}}).exports;
print(mem, e.foo);
print(mem, e.bar);

var code = print('(module (import "a" "b" (table 1 1 funcref)) (export "foo" (table 0)) (export "bar" (table 0)))');
var tbl = new Table({initial:1, maximum:1, element:"anyfunc"});
var e = new Instance(new Module(code), {a:{b:tbl}}).exports;
print(tbl, e.foo);
print(tbl, e.bar);

var code = print('(module (import "a" "b" (table 2 2 funcref)) (func $foo) (elem (i32.const 0) $foo) (export "foo" (func $foo)))');
var tbl = new Table({initial:2, maximum:2, element:"anyfunc"});
var e1 = new Instance(new Module(code), {a:{b:tbl}}).exports;
print(e1.foo, tbl.get(0));
tbl.set(1, e1.foo);
print(e1.foo, tbl.get(1));
var e2 = new Instance(new Module(code), {a:{b:tbl}}).exports;
print(e2.foo, tbl.get(0));
print(e1.foo, tbl.get(1));
print(tbl.get(0) === e1.foo, false);
print(e1.foo === e2.foo, false);

var m = new Module(print(`(module
    (import "" "foo" (func $foo (result i32)))
    (import "" "bar" (func $bar (result i32)))
    (table 3 funcref)
    (func $baz (result i32) (i32.const 13))
    (elem (i32.const 0) $foo $bar $baz)
    (export "foo" (func $foo))
    (export "bar" (func $bar))
    (export "baz" (func $baz))
    (export "tbl" (table 0))
)`));
var jsFun = () => 83;
var wasmFun = new Instance(new Module(print('(module (func (result i32) (i32.const 42)) (export "foo" (func 0)))'))).exports.foo;
var e1 = new Instance(m, {"":{foo:jsFun, bar:wasmFun}}).exports;
print(jsFun === e1.foo, false);
print(wasmFun, e1.bar);
print(e1.foo, e1.tbl.get(0));
print(e1.bar, e1.tbl.get(1));
print(e1.baz, e1.tbl.get(2));
print(e1.tbl.get(0)(), 83);
print(e1.tbl.get(1)(), 42);
print(e1.tbl.get(2)(), 13);
var e2 = new Instance(m, {"":{foo:jsFun, bar:jsFun}}).exports;
print(jsFun === e2.foo, false);
print(jsFun === e2.bar, false);
print(e2.foo === e1.foo, false);
print(e2.bar === e1.bar, false);
print(e2.baz === e1.baz, false);
print(e2.tbl === e1.tbl, false);
print(e2.foo, e2.tbl.get(0));
print(e2.bar, e2.tbl.get(1));
print(e2.baz, e2.tbl.get(2));
var e3 = new Instance(m, {"":{foo:wasmFun, bar:wasmFun}}).exports;
print(wasmFun, e3.foo);
print(wasmFun, e3.bar);
print(e3.baz === e3.foo, false);
print(e3.baz === e1.baz, false);
print(e3.tbl === e1.tbl, false);
print(e3.foo, e3.tbl.get(0));
print(e3.bar, e3.tbl.get(1));
print(e3.baz, e3.tbl.get(2));
var e4 = new Instance(m, {"":{foo:e1.foo, bar:e1.foo}}).exports;
print(e4.foo, e1.foo);
print(e4.bar, e1.foo);
print(e4.baz === e4.foo, false);
print(e4.baz === e1.baz, false);
print(e4.tbl === e1.tbl, false);
print(e4.foo, e4.tbl.get(0));
print(e4.foo, e4.tbl.get(1));
print(e4.baz, e4.tbl.get(2));



var code1 = print('(module (func $exp (param i64) (result i64) (i64.add (local.get 0) (i64.const 10))) (export "exp" (func $exp)))');
var e1 = new Instance(new Module(code1)).exports;
var code2 = print('(module (import "a" "b" (func $i (param i64) (result i64))) (func $f (result i32) (i32.wrap/i64 (call $i (i64.const 42)))) (export "f" (func $f)))');
var e2 = new Instance(new Module(code2), {a:{b:e1.exp}}).exports;
print(e2.f(), 52);



print('(module (export "a" (func 0)))', /exported function index out of bounds/);
print('(module (export "a" (global 0)))', /exported global index out of bounds/);
print('(module (export "a" (memory 0)))', /exported memory index out of bounds/);
print('(module (export "a" (table 0)))', /exported table index out of bounds/);



print('(module (import "a" "b" (memory 1 1)) (memory 1 1))', /already have default memory/);
print('(module (import "a" "b" (memory 1 1)) (import "x" "y" (memory 2 2)))', /already have default memory/);



var m = new Module(print(`
    (module
        (import "a" "b" (memory 1 1))
        (data (i32.const 0) "\\0a\\0b")
        (data (i32.const 100) "\\0c\\0d")
        (func $get (param $p i32) (result i32)
            (i32.load8_u (local.get $p)))
        (export "get" (func $get)))
`));
var mem = new Memory({initial:1, maximum:1});
var {get} = new Instance(m, {a:{b:mem}}).exports;
print(get(0), 0xa);
print(get(1), 0xb);
print(get(2), 0x0);
print(get(100), 0xc);
print(get(101), 0xd);
print(get(102), 0x0);
var i8 = new Uint8Array(mem.buffer);
print(i8[0], 0xa);
print(i8[1], 0xb);
print(i8[2], 0x0);
print(i8[100], 0xc);
print(i8[101], 0xd);
print(i8[102], 0x0);



var m = new Module(print(`
    (module
        (import "glob" "a" (global i32))
        (memory 1)
        (data (global.get 0) "\\0a\\0b"))
`));
print(new Instance(m, {glob:{a:0}}) instanceof Instance, true);
print(new Instance(m, {glob:{a:(64*1024 - 2)}}) instanceof Instance, true);
print(() => new Instance(m, {glob:{a:(64*1024 - 1)}}));
print(() => new Instance(m, {glob:{a:64*1024}}));

var m = new Module(print(`
    (module
        (memory 1)
        (data (i32.const 0x10001) "\\0a\\0b"))
`));
print(() => new Instance(m));

var m = new Module(print(`
    (module
        (memory 0)
        (data (i32.const 0x10001) ""))
`));
print(() => new Instance(m));





var m = new Module(print(`
    (module
        (import "a" "mem" (memory 1))
        (import "a" "tbl" (table 1 funcref))
        (import "a" "memOff" (global $memOff i32))
        (import "a" "tblOff" (global $tblOff i32))
        (func $f)
        (func $g)
        (data (i32.const 0) "\\01")
        (elem (i32.const 0) $f)
        (data (global.get $memOff) "\\02")
        (elem (global.get $tblOff) $g)
        (export "f" (func $f))
        (export "g" (func $g)))
`));












var npages = 2;
var mem = new Memory({initial:npages});
var mem8 = new Uint8Array(mem.buffer);
var tbl = new Table({initial:2, element:"anyfunc"});

print(() => new Instance(m, {a:{mem, tbl, memOff:1, tblOff:2}}));


print(typeof tbl.get(0), "function");
print(tbl.get(1), null);

print(mem8[0], 0);
print(mem8[1], 0);

tbl.set(0, null);
tbl.set(1, null);

print(() => new Instance(m, {a:{mem, tbl, memOff:npages*64*1024, tblOff:1}}));


print(typeof tbl.get(0), "function");
print(typeof tbl.get(1), "function");
print(mem8[0], 1);

tbl.set(0, null);
tbl.set(1, null);
mem8[0] = 0;



var i = new Instance(m, {a:{mem, tbl, memOff:npages*64*1024-1, tblOff:1}});
print(mem8[0], 1);
print(mem8[npages*64*1024-1], 2);
print(tbl.get(0), i.exports.f);
print(tbl.get(1), i.exports.g);




var m = new Module(print(
    `(module
       (import "" "mem" (memory 1))
       (import "" "tbl" (table 3 funcref))
       (elem (i32.const 1) $f $g $h) ;; fails after $f and $g
       (elem (i32.const 0) $f)       ;; is not applied
       (data (i32.const 0) "\\01")   ;; is not applied
       (func $f)
       (func $g)
       (func $h))`));
var mem = new Memory({initial:1});
var tbl = new Table({initial:3, element:"anyfunc"});
print(() => new Instance(m, {"":{mem, tbl}}));
print(tbl.get(0), null);
print(tbl.get(1), null);
print(tbl.get(2), null);
var v = new Uint8Array(mem.buffer);
print(v[0], 0);




var m = new Module(print(
    `(module
       (import "" "mem" (memory 1))
       (data (i32.const 65534) "\\01\\02\\03") ;; fails after 1 and 2
       (data (i32.const 0) "\\04")             ;; is not applied
     )`));
var mem = new Memory({initial:1});
print(() => new Instance(m, {"":{mem}}));
var v = new Uint8Array(mem.buffer);
print(v[65534], 0);
print(v[65535], 0);
print(v[0], 0);



var m = new Module(print(`
    (module
        (import "a" "b" (table 10 funcref))
        (elem (i32.const 0) $one $two)
        (elem (i32.const 3) $three $four)
        (func $one (result i32) (i32.const 1))
        (func $two (result i32) (i32.const 2))
        (func $three (result i32) (i32.const 3))
        (func $four (result i32) (i32.const 4)))
`));
var tbl = new Table({initial:10, element:"anyfunc"});
new Instance(m, {a:{b:tbl}});
print(tbl.get(0)(), 1);
print(tbl.get(1)(), 2);
print(tbl.get(2), null);
print(tbl.get(3)(), 3);
print(tbl.get(4)(), 4);
for (var i = 5; i < 10; i++)
    print(tbl.get(i), null);

var m = new Module(print(`
    (module
        (func $their1 (import "" "func") (result i32))
        (func $their2 (import "" "func"))
        (table (import "" "table") 4 funcref)
        (func $my (result i32) i32.const 13)
        (elem (i32.const 1) $my)
        (elem (i32.const 2) $their1)
        (elem (i32.const 3) $their2)
    )
`));
var tbl = new Table({initial:4, element:"anyfunc"});
var f = () => 42;
new Instance(m, { "": { table: tbl, func: f} });
print(tbl.get(0), null);
print(tbl.get(1)(), 13);
print(tbl.get(2)(), 42);
print(tbl.get(3)(), undefined);



var i1 = new Instance(new Module(print(`(module (func) (func (param i32) (result i32) (i32.add (local.get 0) (i32.const 1))) (func) (export "f" (func 1)))`)));
var i2 = new Instance(new Module(print(`(module (import "a" "b" (func $imp (param i32) (result i32))) (func $g (result i32) (call $imp (i32.const 13))) (export "g" (func $g)))`)), {a:{b:i1.exports.f}});
print(i2.exports.g(), 14);

var i1 = new Instance(new Module(print(`(module
    (memory 1 1)
    (data (i32.const 0) "\\42")
    (func $f (result i32) (i32.load (i32.const 0)))
    (export "f" (func $f))
)`)));
var i2 = new Instance(new Module(print(`(module
    (import "a" "b" (func $imp (result i32)))
    (memory 1 1)
    (data (i32.const 0) "\\13")
    (table 2 2 funcref)
    (elem (i32.const 0) $imp $def)
    (func $def (result i32) (i32.load (i32.const 0)))
    (type $v2i (func (result i32)))
    (func $call (param i32) (result i32) (call_indirect (type $v2i) (local.get 0)))
    (export "call" (func $call))
)`)), {a:{b:i1.exports.f}});
print(i2.exports.call(0), 0x42);
print(i2.exports.call(1), 0x13);

var m = new Module(print(`(module
    (import "a" "val" (global $val i32))
    (import "a" "next" (func $next (result i32)))
    (memory 1)
    (func $start (i32.store (i32.const 0) (global.get $val)))
    (start $start)
    (func $call (result i32)
        (i32.add
            (global.get $val)
            (i32.add
                (i32.load (i32.const 0))
                (call $next))))
    (export "call" (func $call))
)`));
var e = {call:() => 1000};
for (var i = 0; i < 10; i++)
    e = new Instance(m, {a:{val:i, next:e.call}}).exports;
print(e.call(), 1090);

(function testImportJitExit() {
    let options = getJitCompilerOptions();
    if (!options['baseline.enable'])
        return;

    let baselineTrigger = options['baseline.warmup.trigger'];

    let valueToConvert = 0;
    function ffi(n) { if (n == 1337) { return valueToConvert }; return 42; }

    function sum(a, b, c) {
        if (a === 1337)
            return valueToConvert;
        return (a|0) + (b|0) + (c|0) | 0;
    }

    
    for (let i = baselineTrigger + 1; i --> 0;) {
        ffi(i);
        sum((i%2)?i:undefined,
            (i%3)?i:undefined,
            (i%4)?i:undefined);
    }

    let imports = {
        a: {
            ffi,
            sum
        }
    };

    i = print(`(module
        (import "a" "ffi" (func $ffi (param i32) (result i32)))

        (import "a" "sum" (func $missingOneArg (param i32) (param i32) (result i32)))
        (import "a" "sum" (func $missingTwoArgs (param i32) (result i32)))
        (import "a" "sum" (func $missingThreeArgs (result i32)))

        (func (export "foo") (param i32) (result i32)
         local.get 0
         call $ffi
        )

        (func (export "missThree") (result i32)
         call $missingThreeArgs
        )

        (func (export "missTwo") (param i32) (result i32)
         local.get 0
         call $missingTwoArgs
        )

        (func (export "missOne") (param i32) (param i32) (result i32)
         local.get 0
         local.get 1
         call $missingOneArg
        )
    )`, imports).exports;

    
    print(i.foo(0), 42);

    print(i.missThree(), 0);
    print(i.missTwo(42), 42);
    print(i.missOne(13, 37), 50);

    
    print(i.foo(0), 42);
    print(i.foo(1337), 0);

    
    print(i.missThree(), 0);
    print(i.missTwo(-1), -1);
    print(i.missOne(23, 10), 33);

    
    valueToConvert = 2**31;
    print(i.foo(1337), -(2**31));

    
    valueToConvert = { valueOf() { throw new Error('make ffi great again'); } }
    print(() => i.foo(1337), Error, "make ffi great again");

    valueToConvert = { toString() { throw new Error('a FFI to believe in'); } }
    print(() => i.foo(1337), Error, "a FFI to believe in");

    
    print(() => i.missTwo(1337), Error, "a FFI to believe in");
})();

(function testCrossRealmImport() {
    var g = newGlobal({sameCompartmentAs: this});
    g.evaluate("function f1() { assertCorrectRealm(); return 123; }");
    g.mem = new Memory({initial:8});

    
    
    var i1 = new Instance(new Module(print(`
        (module
            (import "a" "f1" (func $imp1 (result i32)))
            (import "a" "f2" (func $imp2 (result i32)))
            (import "a" "m" (memory 1))
            (func $test (result i32)
                (i32.add
                    (i32.add
                        (i32.add (memory.size) (call $imp1))
                        (memory.size))
                    (call $imp2)))
            (export "impstub" (func $imp1))
            (export "test" (func $test)))
    `)), {a:{m:g.mem, f1:g.f1, f2:g.Math.abs}});

    for (var i = 0; i < 20; i++) {
        print(i1.exports.impstub(), 123);
        print(i1.exports.test(), 139);
    }

    
    var src = `
        (module
            (import "a" "othertest" (func $imp (result i32)))
            (import "a" "m" (memory 1))
            (func (result i32) (i32.add (call $imp) (memory.size)))
            (export "test" (func 1)))
    `;
    g.i1 = i1;
    g.evaluate("i2 = new WebAssembly.Instance(new WebAssembly.Module(print(`" + src + "`)), {a:{m:mem,othertest:i1.exports.test}})");
    for (var i = 0; i < 20; i++)
        print(g.i2.exports.test(), 147);
})();




var ins = new WebAssembly.Instance(new WebAssembly.Module(print(`
(module
  (func (export "myfunc") (result i32)
    (i32.const 1337))
  (func $hi (result i32)
    (i32.const 3))
  (func $abracadabra (export "bletch") (result i32)
    (i32.const -1)))`)))
print(String(ins.exports.myfunc), "function 0() {\n    [native code]\n}")
print(ins.exports.myfunc.name, "0");
print(String(ins.exports.bletch), "function 2() {\n    [native code]\n}")
print(ins.exports.bletch.name, "2")
