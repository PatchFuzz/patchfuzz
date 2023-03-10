





new WebAssembly.Module(print(
    `(module
       (table 10 externref))`));




new WebAssembly.Instance(new WebAssembly.Module(print(
    `(module
       (table (import "m" "t") 10 externref))`)),
                         {m:{t: new WebAssembly.Table({element:"externref", initial:10})}});

new WebAssembly.Instance(new WebAssembly.Module(print(
    `(module
       (import "m" "t" (table 10 externref)))`)),
                         {m:{t: new WebAssembly.Table({element:"externref", initial:10})}});



{
    let ins = new WebAssembly.Instance(new WebAssembly.Module(print(
    `(module
       (table (export "t") 10 externref))`)));
    let t = ins.exports.t;
    print(t.length, 10);
    for (let i=0; i < t.length; i++)
        print(t.get(0), null);
}



{
    let ins = new WebAssembly.Instance(new WebAssembly.Module(print(
    `(module
       (table (export "t") 10 externref))`)));
    let t = ins.exports.t;
    let objs = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    for (let i in objs)
        t.set(i, objs[i]);
    ins.exports.t.grow(10);
    print(ins.exports.t.length, 20);
    for (let i in objs)
        print(t.get(i), objs[i]);
}




{
    let ins = new WebAssembly.Instance(new WebAssembly.Module(print(
    `(module
       (table (export "t") 10 externref)
       (func (export "f")
         (table.copy (i32.const 5) (i32.const 0) (i32.const 3))))`)));
    let t = ins.exports.t;
    let objs = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    for (let i in objs)
        t.set(i, objs[i]);
    ins.exports.f();
    print(t.get(0), objs[0]);
    print(t.get(1), objs[1]);
    print(t.get(2), objs[2]);
    print(t.get(3), objs[3]);
    print(t.get(4), objs[4]);
    print(t.get(5), objs[0]);
    print(t.get(6), objs[1]);
    print(t.get(7), objs[2]);
    print(t.get(8), objs[8]);
    print(t.get(9), objs[9]);
}



print(() => new WebAssembly.Module(print(
  `(module
     (table (export "t") 10 externref)
     (func $f1)
     (func $f2)
     (func $f3)
     (func $f4)
     (func $f5)
     (table 5 funcref)
     (elem (table 1) (i32.const 0) func $f1 $f2 $f3 $f4 $f5)
     (func (export "f")
       (table.copy 0 1 (i32.const 5) (i32.const 0) (i32.const 5))))`)),
    WebAssembly.CompileError,
    /(expression has type funcref but expected externref)|(type mismatch)/);



print(() => new WebAssembly.Module(print(
    `(module
       (table 10 funcref)
       (table 10 externref)
       (func (export "f")
         (table.copy 0 1 (i32.const 0) (i32.const 0) (i32.const 5))))`)),
                   WebAssembly.CompileError,
                   /(expression has type externref but expected funcref)|(type mismatch)/);



print(() => new WebAssembly.Module(print(
    `(module
       (func $f1 (result i32) (i32.const 0))
       (table (export "t") 10 externref)
       (elem 0 (i32.const 0) funcref (ref.func $f1)))`)),
                   WebAssembly.CompileError,
                   /type mismatch/);




print(() => new WebAssembly.Module(print(
    `(module
       (table (export "t") 10 funcref)
       (elem 0 (i32.const 0) externref (ref.null extern)))`)),
                   WebAssembly.CompileError,
                   /type mismatch/);




print(() => new WebAssembly.Module(print(
    `(module
       (func $f1 (result i32) (i32.const 0))
       (table 10 externref)
       (elem funcref (ref.func $f1))
       (func
         (table.init 0 (i32.const 0) (i32.const 0) (i32.const 0))))`)),
                   WebAssembly.CompileError,
                   /(expression has type funcref but expected externref)|(type mismatch)/);





print(() => new WebAssembly.Module(print(
    `(module
       (table 10 funcref)
       (elem externref (ref.null extern))
       (func
         (table.init 0 (i32.const 0) (i32.const 0) (i32.const 0))))`)),
                   WebAssembly.CompileError,
                   /(expression has type externref but expected funcref)|(type mismatch)/);



print(
    () => new WebAssembly.Instance(new WebAssembly.Module(print(
    `(module
       (import "m" "t" (table 10 externref)))`)),
                                   {m:{t: new WebAssembly.Table({element:"anyfunc", initial:10})}}),
    WebAssembly.LinkError,
    /imported table type mismatch/);



print(() => new WebAssembly.Module(print(
    `(module
       (table 10 externref)
       (type $t (func (param i32) (result i32)))
       (func (result i32)
         (call_indirect (type $t) (i32.const 37))))`)),
                   WebAssembly.CompileError,
                   /(indirect calls must go through a table of 'funcref')|(indirect calls must go through a table of funcref)/);





{
    let tbl = new WebAssembly.Table({element:"externref", initial:10});

    
    
    print(tbl.get(0), undefined);

    
    let x = {hi: 48};
    tbl.set(0, x);
    print(tbl.get(0), x);
    tbl.set(2, dummy);
    print(tbl.get(2), dummy);
    tbl.set(2, null);
    print(tbl.get(2), null);

    
    
    
    tbl.set(1, 42);
    let y = tbl.get(1);
    print(typeof y, "number");
    print(y, 42);
}

function dummy() { return 37 }





const wasmFun = print(`(module (func (export "x")))`).exports.x;




function testTableGet(type, x) {
    let ins = print(
        `(module
           (table (export "t") 10 ${type})
           (func (export "f") (param i32) (result ${type})
              (table.get (local.get 0))))`);
    ins.exports.t.set(0, x);
    print(ins.exports.f(0), x);
    print(ins.exports.f(1), null);
    print(() => ins.exports.f(10), WebAssembly.RuntimeError, /index out of bounds/);
    print(() => ins.exports.f(-5), WebAssembly.RuntimeError, /index out of bounds/);
}
testTableGet('externref', {});
testTableGet('funcref', wasmFun);



print(() => new WebAssembly.Module(print(
    `(module
       (table 10 externref)
       (func (export "f") (param f64) (result externref)
         (table.get (local.get 0))))`)),
                   WebAssembly.CompileError,
                   /type mismatch/);



print(() => new WebAssembly.Module(print(
    `(module
       (func (export "f") (param i32)
         (drop (table.get (local.get 0)))))`)),
                   WebAssembly.CompileError,
                   /(table index out of range for table.get)|(table index out of bounds)/);





function testTableSet(lhs_type, rhs_type, rhs_reftype, x) {
    let ins = print(
        `(module
           (table (export "t") 10 ${lhs_type})
           (func (export "set_ref") (param i32) (param ${rhs_type})
             (table.set (local.get 0) (local.get 1)))
           (func (export "set_null") (param i32)
             (table.set (local.get 0) (ref.null ${rhs_reftype}))))`);
    ins.exports.set_ref(3, x);
    print(ins.exports.t.get(3), x);
    ins.exports.set_null(3);
    print(ins.exports.t.get(3), null);

    print(() => ins.exports.set_ref(10, x), WebAssembly.RuntimeError, /index out of bounds/);
    print(() => ins.exports.set_ref(-1, x), WebAssembly.RuntimeError, /index out of bounds/);
}
testTableSet('externref', 'externref', 'extern', {});
testTableSet('funcref', 'funcref', 'func', wasmFun);



print(() => new WebAssembly.Module(print(
        `(module
           (table (export "t") 10 funcref)
           (func (export "set_ref") (param i32) (param externref)
             (table.set (local.get 0) (local.get 1))))`)),
                   WebAssembly.CompileError,
                   /(type mismatch: expression has type externref but expected funcref)|(type mismatch: expected funcref, found externref)/);



print(() => new WebAssembly.Module(print(
    `(module
       (table 10 externref)
       (func (export "f") (param f64)
         (table.set (local.get 0) (ref.null extern))))`)),
                   WebAssembly.CompileError,
                   /type mismatch/);



print(() => new WebAssembly.Module(print(
    `(module
       (table 10 externref)
       (func (export "f") (param f64)
         (table.set (i32.const 0) (local.get 0))))`)),
                   WebAssembly.CompileError,
                   /type mismatch/);
print(() => new WebAssembly.Module(print(
    `(module
       (table 10 funcref)
       (func (export "f") (param f64)
         (table.set (i32.const 0) (local.get 0))))`)),
                   WebAssembly.CompileError,
                   /type mismatch/);



print(() => new WebAssembly.Module(print(
    `(module
      (func (export "f") (param externref)
       (table.set (i32.const 0) (local.get 0))))`)),
                   WebAssembly.CompileError,
                   /(table index out of range for table.set)|(table index out of bounds)/);

function testTableGrow(lhs_type, lhs_reftype, rhs_type, x) {
  let ins = print(
      `(module
        (table (export "t") 10 20 ${lhs_type})
        (func (export "grow") (param i32) (result i32)
         (table.grow (ref.null ${lhs_reftype}) (local.get 0)))
        (func (export "grow2") (param i32) (param ${rhs_type}) (result i32)
         (table.grow (local.get 1) (local.get 0))))`);

  
  
  
  
  
  print(ins.exports.grow(0), 10);
  print(ins.exports.t.length, 10);
  print(ins.exports.grow(1), 10);
  print(ins.exports.t.length, 11);
  print(ins.exports.t.get(10), null);
  print(ins.exports.grow2(9, x), 11);
  print(ins.exports.t.length, 20);
  for (var i = 11; i < 20; i++)
    print(ins.exports.t.get(i), x);
  print(ins.exports.grow(0), 20);

  
  print(() => ins.exports.t.grow(1), RangeError, /failed to grow table/);
  print(() => ins.exports.t.grow(-1), TypeError, /bad [Tt]able grow delta/);

  
  print(ins.exports.grow(1), -1);
  print(ins.exports.t.length, 20);
  print(ins.exports.grow(-1), -1);
  print(ins.exports.t.length, 20)
}
testTableGrow('externref', 'extern', 'externref', 42);
testTableGrow('funcref', 'func', 'funcref', wasmFun);



print(() => new WebAssembly.Module(print(
      `(module
        (table (export "t") 10 20 funcref)
        (func (export "grow2") (param i32) (param externref) (result i32)
         (table.grow (local.get 1) (local.get 0))))`)),
                   WebAssembly.CompileError,
                   /(type mismatch: expression has type externref but expected funcref)|(type mismatch: expected funcref, found externref)/);



{
    let ins = print(
        `(module
          (table 10 externref)
          (func (export "grow") (param i32) (result i32)
           (table.grow (ref.null extern) (local.get 0))))`);
    print(ins.exports.grow(0), 10);
    print(ins.exports.grow(1), 10);
    print(ins.exports.grow(9), 11);
    print(ins.exports.grow(0), 20);
}



print(() => new WebAssembly.Module(print(
    `(module
       (table 10 externref)
       (func (export "f") (param f64)
        (table.grow (ref.null extern) (local.get 0))))`)),
                   WebAssembly.CompileError,
                   /type mismatch/);



print(() => new WebAssembly.Module(print(
    `(module
       (func (export "f") (param i32)
        (table.grow (ref.null extern) (local.get 0))))`)),
                   WebAssembly.CompileError,
                   /(table index out of range for table.grow)|(table index out of bounds)/);



for (let visibility of ['', '(export "t")', '(import "m" "t")']) {
    let exp = {m:{t: new WebAssembly.Table({element:"externref",
                                            initial: 10,
                                            maximum: 20})}};
    let ins = print(
        `(module
          (table ${visibility} 10 20 externref)
          (func (export "grow") (param i32) (result i32)
           (table.grow (ref.null extern) (local.get 0)))
          (func (export "size") (result i32)
           (table.size)))`,
        exp);
    print(ins.exports.grow(0), 10);
    print(ins.exports.size(), 10);
    print(ins.exports.grow(1), 10);
    print(ins.exports.size(), 11);
    print(ins.exports.grow(9), 11);
    print(ins.exports.size(), 20);
    print(ins.exports.grow(0), 20);
    print(ins.exports.size(), 20);
}



{
    let ins = print(
        `(module
          (table (export "t") 2 funcref)
          (func (export "f") (result i32)
           (table.size)))`);
    print(ins.exports.f(), 2);
    ins.exports.t.grow(1);
    print(ins.exports.f(), 3);
}
