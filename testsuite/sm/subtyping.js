

function simpleTypeSection(types) {
  return types.map((x, i) => `(type \$${i} ${x})`).join('\n');
}

function assertSubtype(superType, subType, types) {
  types = types || [];
  wasmEvalText(`(module
    ${types}
    (func
      unreachable
      (block (param ${subType})
        (block (param ${superType})
          drop
        )
      )
    )
  )`);
}

function assertNotSubtype(superType, subType, types) {
  assertErrorMessage(() => {
    assertSubtype(superType, subType, types);
  }, WebAssembly.CompileError, /type mismatch/);
}


assertSubtype('i32', 'i32');
assertSubtype('i64', 'i64');
assertSubtype('f32', 'f32');
assertSubtype('f64', 'f64');
assertSubtype('eqref', 'eqref');
assertSubtype('funcref', 'funcref');



assertNotSubtype('funcref', 'anyref');
assertNotSubtype('anyref', 'funcref');
assertNotSubtype('funcref', 'externref');
assertNotSubtype('externref', 'funcref');
assertNotSubtype('externref', 'anyref');
assertNotSubtype('anyref', 'externref');


assertSubtype('anyref', 'eqref');


assertSubtype('anyref', 'structref');
assertSubtype('eqref', 'structref');


assertSubtype('anyref', 'arrayref');
assertSubtype('eqref', 'arrayref');


assertSubtype(
 'anyref',
 '(ref 0)',
 simpleTypeSection(['(struct)']));
assertSubtype(
 'eqref',
 '(ref 0)',
 simpleTypeSection(['(struct)']));
assertSubtype(
 'structref',
 '(ref 0)',
 simpleTypeSection(['(struct)']));


assertSubtype(
 '(ref 0)',
 '(ref 1)',
 simpleTypeSection(['(struct)', '(struct)']));
assertSubtype(
 '(ref 1)',
 '(ref 0)',
 simpleTypeSection(['(struct)', '(struct)']));


assertSubtype(
 '(ref 1)',
 '(ref 0)',
 simpleTypeSection(['(struct (ref 0))', '(struct (ref 1))']));


assertSubtype(
 '(ref 2)',
 '(ref 0)',
 `(rec
    (type (struct (ref 1)))
    (type (struct (ref 0)))
  )
  (rec
    (type (struct (ref 3)))
    (type (struct (ref 2)))
  )`);


assertSubtype(
  '(ref 0)',
  '(ref 1)',
  `(type (struct))
   (sub 0 (type (struct (field i32))))`);
assertSubtype(
  '(ref 0)',
  '(ref 1)',
  `(type (struct))
   (sub 0 (type (struct (field i32) (field i32))))`);


assertNotSubtype(
  '(ref 0)',
  '(ref 1)',
  simpleTypeSection([
    '(struct (field i32))',
    '(struct)']));


assertSubtype(
  '(ref 0)',
  '(ref 1)',
  simpleTypeSection([
    '(struct (field (mut i32)))',
    '(struct (field (mut i32)))']));
assertSubtype(
  '(ref 0)',
  '(ref 1)',
  simpleTypeSection([
    '(struct (field i32))',
    '(struct (field i32))']));
assertNotSubtype(
  '(ref 0)',
  '(ref 1)',
  simpleTypeSection([
    '(struct (field (mut i32)))',
    '(struct (field i32))']));
assertNotSubtype(
  '(ref 0)',
  '(ref 1)',
  simpleTypeSection([
    '(struct (field i32))',
    '(struct (field (mut i32)))']));


assertSubtype(
  '(ref 2)',
  '(ref 3)',
  simpleTypeSection([
    '(struct)',
    '(struct)',
    '(struct (field (mut (ref 0))))',
    '(struct (field (mut (ref 1))))']));
assertNotSubtype(
  '(ref 2)',
  '(ref 3)',
  simpleTypeSection([
    '(struct)',
    '(struct (field i32))',
    '(struct (field (mut (ref 0))))',
    '(struct (field (mut (ref 1))))']));


assertSubtype(
  '(ref 2)',
  '(ref 3)',
  `(type (struct))
   (sub 0 (type (struct (field i32))))
   (type (struct (field (ref 0))))
   (sub 2 (type (struct (field (ref 1)))))`);


assertSubtype(
 'anyref',
 '(ref 0)',
 simpleTypeSection(['(array i32)']));
assertSubtype(
 'eqref',
 '(ref 0)',
 simpleTypeSection(['(array i32)']));
assertSubtype(
 'arrayref',
 '(ref 0)',
 simpleTypeSection(['(array i32)']));


assertSubtype(
 '(ref 0)',
 '(ref 1)',
 simpleTypeSection(['(array i32)', '(array i32)']));
assertSubtype(
 '(ref 1)',
 '(ref 0)',
 simpleTypeSection(['(array i32)', '(array i32)']));


assertSubtype(
 '(ref 1)',
 '(ref 0)',
 simpleTypeSection(['(array (ref 0))', '(array (ref 1))']));


assertSubtype(
 '(ref 2)',
 '(ref 0)',
 `(rec
   (type (array (ref 1)))
   (type (array (ref 0)))
  )
  (rec
   (type (array (ref 3)))
   (type (array (ref 2)))
  )`);


assertSubtype(
  '(ref 0)',
  '(ref 1)',
  simpleTypeSection([
    '(array (mut i32))',
    '(array (mut i32))']));
assertSubtype(
  '(ref 0)',
  '(ref 1)',
  simpleTypeSection([
    '(array i32)',
    '(array i32)']));
assertNotSubtype(
  '(ref 0)',
  '(ref 1)',
  simpleTypeSection([
    '(array (mut i32))',
    '(array i32)']));
assertNotSubtype(
  '(ref 0)',
  '(ref 1)',
  simpleTypeSection([
    '(array i32)',
    '(array (mut i32))']));


assertSubtype(
  '(ref 2)',
  '(ref 3)',
  simpleTypeSection([
   '(struct)',
   '(struct)',
   '(array (mut (ref 0)))',
   '(array (mut (ref 1)))']));
assertNotSubtype(
  '(ref 2)',
  '(ref 3)',
  simpleTypeSection([
   '(struct)',
   '(struct (field i32))',
   '(array (mut (ref 0)))',
   '(array (mut (ref 1)))']));


assertSubtype(
  '(ref 2)',
  '(ref 3)',
  `(type (struct))
   (sub 0 (type (struct (field i32))))
   (type (array (ref 0)))
   (sub 2 (type (array (ref 1))))`);
