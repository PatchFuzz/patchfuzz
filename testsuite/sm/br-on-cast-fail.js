

function typingModule(types, castToTypeIndex, brParams, blockResults) {
  return `(module
    ${types}
    (func
      (param ${brParams.join(' ')})
      (result ${blockResults.join(' ')})

      (; push params onto the stack in the same order as they appear, leaving
         the last param at the top of the stack. ;)
      ${brParams.map((_, i) => `local.get ${i}`).join('\n')}
      br_on_cast_fail 0 ${castToTypeIndex}
      unreachable
    )
  )`;
}

function validTyping(types, castToTypeIndex, brParams, blockResults) {
  wasmValidateText(typingModule(types, castToTypeIndex, brParams, blockResults));
}

function invalidTyping(types, castToTypeIndex, brParams, blockResults, error) {
  wasmFailValidateText(typingModule(types, castToTypeIndex, brParams, blockResults), error);
}


validTyping('(type $a (struct)) (type $b (struct))', '$b', ['(ref $a)'],
            ['(ref $b)']);

validTyping('(type $a (struct)) (type $b (struct))', '$b', ['(ref null $a)'],
            ['(ref null $b)']);

validTyping('(type $a (struct))', '$a', ['i32', 'eqref'], ['i32', 'eqref']);

validTyping('(type $a (struct))', '$a', ['i32', 'f32', 'eqref'],
            ['i32', 'f32', 'eqref']);


invalidTyping('(type $a (struct))', '$a', ['eqref'], ['(ref $a)'],
              /type mismatch/);

invalidTyping('(type $a (struct))', '$a', ['eqref'], ['(ref null $a)'],
              /type mismatch/);

invalidTyping('(type $a (struct)) (type $b (struct))', '$b', ['(ref null $a)'],
              ['(ref $b)'],/type mismatch/);

invalidTyping('(type $a (struct))', '$a', ['eqref'], [], /type mismatch/);

invalidTyping('(type $a (struct)) (type $b (struct (field i32)))', '$a',
              ['eqref'], ['(ref $b)'], /type mismatch/);

invalidTyping('(type $a (struct))', '$a', ['f32', 'eqref'],
              ['i32', 'f32', 'eqref'], /popping value/);

invalidTyping('(type $a (struct))', '$a', ['i32', 'f32', 'eqref'],
              ['f32', 'i32', '(ref $a)'], /type mismatch/);


{
  let { makeA, makeB, isA, isB } = wasmEvalText(`(module
    (type $a (struct))
    (type $b (struct (field i32)))

    (func (export "makeA") (result eqref)
      struct.new_default $a
    )

    (func (export "makeB") (result eqref)
      struct.new_default $b
    )

    (func (export "isA") (param eqref) (result i32)
      (block (result eqref)
        local.get 0
        br_on_cast_fail 0 $a

        i32.const 1
        br 1
      )
      drop
      i32.const 0
    )

    (func (export "isB") (param eqref) (result i32)
      (block (result eqref)
        local.get 0
        br_on_cast_fail 0 $b

        i32.const 1
        br 1
      )
      drop
      i32.const 0
    )
  )`).exports;

  let a = makeA();
  let b = makeB();

  assertEq(isA(a), 1);
  assertEq(isA(b), 0);
  assertEq(isB(a), 0);
  assertEq(isB(b), 1);
}


{
  function assertEqResults(a, b) {
    if (!(a instanceof Array)) {
      a = [a];
    }
    if (!(b instanceof Array)) {
      b = [b];
    }
    if (a.length !== b.length) {
      assertEq(a.length, b.length);
    }
    for (let i = 0; i < a.length; i++) {
      let x = a[i];
      let y = b[i];
      
      
      assertEq(x == y, true);
    }
  }

  function testExtra(values) {
    let { makeT, makeF, select } = wasmEvalText(`(module
      (type $t (struct))
      (type $f (struct (field i32)))

      (func (export "makeT") (result eqref)
        struct.new_default $t
      )
      (func (export "makeF") (result eqref)
        struct.new_default $f
      )

      (func (export "select")
            (param eqref) (result ${values.map((type) => type).join(" ")})
        (block (result eqref)
          local.get 0
          br_on_cast_fail 0 $t

          ${values.map((type, i) => `${type}.const ${values.length + i}`)
                  .join("\n")}
          br 1
        )
        drop
        ${values.map((type, i) => `${type}.const ${i}`).join("\n")}
      )
    )`).exports;

    let t = makeT();
    let f = makeF();

    let trueValues = values.map((type, i) => i);
    let falseValues = values.map((type, i) => values.length + i);

    assertEqResults(select(t), falseValues);
    assertEqResults(select(f), trueValues);
  }

  
  for (let valtype of ['i32', 'i64', 'f32', 'f64']) {
    testExtra([valtype]);
    testExtra([valtype, valtype]);
    testExtra([valtype, valtype, valtype]);
    testExtra([valtype, valtype, valtype, valtype, valtype, valtype, valtype, valtype]);
  }

  
  testExtra(['i32', 'f32', 'i64', 'f64']);
  testExtra(['i32', 'f32', 'i64', 'f64', 'i32', 'f32', 'i64', 'f64']);
}





{
    let tOnCastFail =
    `(module
       (type $a (struct))
       (func (export "onCastFail") (param f32 i32 eqref) (result f32 i32 eqref)
         local.get 0
         local.get 1
         local.get 2
         br_on_cast_fail 0 $a
         unreachable
       )
     )`;
    let { onCastFail } = wasmEvalText(tOnCastFail).exports;
}
