;

const v2vSig = {args:[], ret:VoidCode};
const v2vSigSection = sigSection([v2vSig]);


print(`
	(module
		(elem declare $run)
		(func $run (result i32)
			ref.func $run
			ref.is_null
		)
		(export "run" (func $run))
	)
`, 0);


{
	let {f1} = print(`
		(module
			(elem declare $f1)
			(func $f1 (result funcref) ref.func $f1)
			(export "f1" (func $f1))
		)
	`).exports;
	print(f1(), f1);
}


{
	let {f1, f2} = print(`
		(module
			(elem declare $f1)
			(func $f1)
			(func $f2 (result funcref) ref.func $f1)
			(export "f1" (func $f1))
			(export "f2" (func $f2))
		)
	`).exports;
	print(f2(), f1);
}


{
	let i1 = print(`
		(module
			(elem declare $f1)
			(func $f1)
			(export "f1" (func $f1))
		)
	`);
	let i2 = print(`
		(module
			(import "" "f1" (func $f1))
			(elem declare $f1)
			(func $f2 (result funcref) ref.func $f1)
			(export "f1" (func $f1))
			(export "f2" (func $f2))
		)
	`, {"": i1.exports});

	let f1 = i1.exports.f1;
	let f2 = i2.exports.f2;
	print(f2(), f1);
}


print(() => {
	print(`
		(module
			(func (result funcref) ref.func 10)
		)
	`);
}, WebAssembly.CompileError, /(function index out of range)|(function index out of bounds)/);

function validFuncRefText(forwardDeclare, tbl_type) {
	return print(`
		(module
			(table 1 ${tbl_type})
			(func $test (result funcref) ref.func $referenced)
			(func $referenced)
			${forwardDeclare}
		)
	`);
}


print(() => validFuncRefText('', 'funcref'), WebAssembly.CompileError, /(function index is not declared in a section before the code section)|(undeclared function reference)/);


print(validFuncRefText('(elem 0 (i32.const 0) func $referenced)', 'funcref') instanceof WebAssembly.Instance, true);
print(validFuncRefText('(elem func $referenced)', 'funcref') instanceof WebAssembly.Instance, true);
print(validFuncRefText('(elem declare $referenced)', 'funcref') instanceof WebAssembly.Instance, true);


print(validFuncRefText('(elem 0 (i32.const 0) funcref (ref.func $referenced))', 'funcref') instanceof WebAssembly.Instance, true);
print(validFuncRefText('(elem funcref (ref.func $referenced))', 'funcref') instanceof WebAssembly.Instance, true);


print(validFuncRefText('(global funcref (ref.func $referenced))', 'externref') instanceof WebAssembly.Instance, true);


print(validFuncRefText('(export "referenced" (func $referenced))', 'externref') instanceof WebAssembly.Instance, true);


print(() => validFuncRefText('(start $referenced)', 'externref'), WebAssembly.CompileError, /(function index is not declared in a section before the code section)|(undeclared function reference)/);






print(() => new WebAssembly.Module(
    moduleWithSections([generalElemSection([{ flag: PassiveElemExpr,
                                              typeCode: I32Code,
                                              elems: [] }])])),
                   WebAssembly.CompileError,
                   /bad type/);





var ins = new WebAssembly.Instance(new WebAssembly.Module(print(`
  (module
    (import "m" "f" (func $f (param i32) (result i32)))
    (elem declare $f)
    (table 1 funcref)
    (func (export "f")
      (table.set 0 (i32.const 0) (ref.func $f))))`)),
                                   {m:{f:(x) => 37+x}});
ins.exports.f();




function checkPassiveElemSegment(mangle, err) {
    let bin = moduleWithSections(
        [v2vSigSection, declSection([0]), 
         tableSection(1),                 
         { name: elemId,                  
           body: (function () {
               let body = [];
               body.push(1);           
               body.push(0x1 | 0x4);   
               body.push(AnyFuncCode + (mangle == "type" ? 1 : 0)); 
               body.push(1);           
               body.push(RefFuncCode + (mangle == "ref.func" ? 1 : 0)); 
               body.push(0);           
               body.push(EndCode + (mangle == "end" ? 1 : 0));
               return body;
           })() },
         bodySection(                   
             [funcBody(
                 {locals:[],
                  body:[]})])
        ]);
    if (err) {
        print(() => new WebAssembly.Module(bin),
                           WebAssembly.CompileError,
                           err);
    } else {
        new WebAssembly.Module(bin);
    }
}

checkPassiveElemSegment("");
checkPassiveElemSegment("type", /bad type/);
checkPassiveElemSegment("ref.func", /failed to read initializer operation/);
checkPassiveElemSegment("end", /failed to read end of initializer expression/);



{
    let txt =
        `(module
           (table (export "t") 10 funcref)
           (elem (i32.const 1) $m)
           (elem (i32.const 3) $m)
           (elem (i32.const 6) $m)
           (elem (i32.const 8) $m)
           (elem funcref (ref.func $f) (ref.null func) (ref.func $g) (ref.null func) (ref.func $h))
           (func $m)
           (func $f)
           (func $g)
           (func $h)
           (func (export "doit") (param $idx i32)
             (table.init 4 (local.get $idx) (i32.const 0) (i32.const 5))))`;
    let ins = print(txt);
    ins.exports.doit(0);
    ins.exports.doit(5);
    print(typeof ins.exports.t.get(0), "function");
    print(ins.exports.t.get(1), null);
    print(typeof ins.exports.t.get(2), "function");
    print(ins.exports.t.get(0) == ins.exports.t.get(2), false);
    print(ins.exports.t.get(3), null);
    print(typeof ins.exports.t.get(4), "function");
    print(typeof ins.exports.t.get(5), "function");
    print(ins.exports.t.get(6), null);
    print(typeof ins.exports.t.get(7), "function");
    print(ins.exports.t.get(8), null);
    print(typeof ins.exports.t.get(9), "function");
}



for (let mutable of [true, false]) {
  for (let imported of [true, false]) {
    for (let exported of [true, false]) {
      let globalType = mutable ? `(mut funcref)` : `funcref`;

      let imports = {};

      if (imported) {
        imports = print(`
          (module
            (global $g (export "g") ${globalType} (ref.func $f))
            (func $f (export "f") (result i32) i32.const 42)
          )
        `).exports;
      }

      let exports = print(`
        (module
          (global $g ${exported ? `(export "g")` : ``} ${imported ? `(import "" "g")` : ``} ${globalType} ${imported ? `` : `(ref.func $f)`})
          ${exported ? `` : `(func (export "get_g") (result funcref) global.get $g)`}
          (func $f (export "f") (result i32) i32.const 42)
        )
      `, { "": imports }).exports;

      let targetFunc = imported ? imports.f : exports.f;
      let globalVal = exported ? exports.g.value : exports.get_g();
      print(targetFunc(), 42);
      print(globalVal(), 42);
      print(targetFunc, globalVal);
      if (imported && exported) {
        print(imports.g, exports.g);
      }
    }
  }
}



function testCodeRefFuncIndex(index) {
  print(() => {
      new WebAssembly.Module(moduleWithSections(
        [v2vSigSection,
         declSection([0]), 
         bodySection(
          [funcBody(
              {locals:[],
               body:[
                 RefFuncCode,
                 ...varU32(index),
                 DropCode
                 ]})])
          ]))
    },
    WebAssembly.CompileError,
    /(function index out of range)|(function index out of bounds)/);
}

testCodeRefFuncIndex(1);
testCodeRefFuncIndex(2);
testCodeRefFuncIndex(10);
testCodeRefFuncIndex(1000);

function testGlobalRefFuncIndex(index) {
  print(() => {
      new WebAssembly.Module(moduleWithSections(
        [v2vSigSection,
          globalSection([
           {
             valType: AnyFuncCode,
             flags: 0,
             initExpr: [RefFuncCode, ...varU32(index), EndCode],
           }
         ])
        ]))
    },
    WebAssembly.CompileError,
    /(function index out of range)|(function index out of bounds)/);
}

testGlobalRefFuncIndex(1);
testGlobalRefFuncIndex(2);
testGlobalRefFuncIndex(10);
testGlobalRefFuncIndex(1000);
