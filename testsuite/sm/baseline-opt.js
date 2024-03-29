











function testEqzBrIf(value, type, untaken, taken, expected) {
    var f = wasmEvalText(`(module
			   (func (result i32)
			    (local ${type})
			    (local i32)
			    (local.set 0 (${type}.const ${value}))
			    (local.set 1 (i32.const ${taken}))
			    (block $b
			     (br_if $b (${type}.eqz (local.get 0)))
			     (local.set 1 (i32.const ${untaken})))
			    (local.get 1))
			   (export "f" (func 0)))`).exports["f"];
    assertEq(f(), expected);
}

["i32", "i64"].forEach(t => testEqzBrIf(0, t, 37, 42, 42)); 
["i32", "i64"].forEach(t => testEqzBrIf(1, t, 37, 42, 37)); 

function testCmpBrIf(value, type, untaken, taken, expected) {
    var f = wasmEvalText(`(module
			   (func (result i32)
			    (local ${type})
			    (local i32)
			    (local.set 1 (i32.const ${taken}))
			    (block $b
			     (br_if $b (${type}.eq (local.get 0) (${type}.const ${value})))
			     (local.set 1 (i32.const ${untaken})))
			    (local.get 1))
			   (export "f" (func 0)))`).exports["f"];
    assertEq(f(), expected);
}

["i32", "i64", "f32", "f64"].forEach(t => testCmpBrIf(0, t, 37, 42, 42)); 
["i32", "i64", "f32", "f64"].forEach(t => testCmpBrIf(1, t, 37, 42, 37)); 

function testEqzSelect(value, type, iftrue, iffalse, expected) {
    var f = wasmEvalText(`(module
			   (func (result i32)
			    (local ${type})
			    (local.set 0 (${type}.const ${value}))
			    (select (i32.const ${iftrue})
			            (i32.const ${iffalse})
			            (${type}.eqz (local.get 0))))
			   (export "f" (func 0)))`).exports["f"];
    assertEq(f(), expected);
}

["i32", "i64"].forEach(t => testEqzSelect(0, t, 42, 37, 42)); 
["i32", "i64"].forEach(t => testEqzSelect(1, t, 42, 37, 37)); 

function testCmpSelect(value, type, iftrue, iffalse, expected) {
    var f = wasmEvalText(`(module
			   (func (result i32)
			    (local ${type})
			    (select (i32.const ${iftrue})
			            (i32.const ${iffalse})
			            (${type}.eq (local.get 0) (${type}.const ${value}))))
			   (export "f" (func 0)))`).exports["f"];
    assertEq(f(), expected);
}

["i32", "i64", "f32", "f64"].forEach(t => testCmpSelect(0, t, 42, 37, 42)); 
["i32", "i64", "f32", "f64"].forEach(t => testCmpSelect(1, t, 42, 37, 37)); 

function testEqzIf(value, type, trueBranch, falseBranch, expected) {
    var f = wasmEvalText(`(module
			   (func (result i32)
			    (local ${type})
			    (local i32)
			    (local.set 0 (${type}.const ${value}))
			    (if (${type}.eqz (local.get 0))
				(local.set 1 (i32.const ${trueBranch}))
			        (local.set 1 (i32.const ${falseBranch})))
			    (local.get 1))
			   (export "f" (func 0)))`).exports["f"];
    assertEq(f(), expected);
}

["i32", "i64"].forEach(t => testEqzIf(0, t, 42, 37, 42)); 
["i32", "i64"].forEach(t => testEqzIf(1, t, 42, 37, 37)); 

function testCmpIf(value, type, trueBranch, falseBranch, expected) {
    var f = wasmEvalText(`(module
			   (func (result i32)
			    (local ${type})
			    (local i32)
			    (if (${type}.eq (local.get 0) (${type}.const ${value}))
				(local.set 1 (i32.const ${trueBranch}))
			        (local.set 1 (i32.const ${falseBranch})))
			    (local.get 1))
			   (export "f" (func 0)))`).exports["f"];
    assertEq(f(), expected);
}

["i32", "i64", "f32", "f64"].forEach(t => testCmpIf(0, t, 42, 37, 42)); 
["i32", "i64", "f32", "f64"].forEach(t => testCmpIf(1, t, 42, 37, 37)); 
