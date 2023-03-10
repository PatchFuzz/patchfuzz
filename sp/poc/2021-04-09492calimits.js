

const PageSize = PageSizeInBytes;
const MemoryMaxValid = 65536;
const MemoryMaxRuntime = MaxPagesIn32BitMemory;

const TableMaxValid = 0xffff_ffff;
const TableMaxRuntime = 10_000_000;


function testMemoryValidate(initial, maximum, shared) {
  print(`(module
    (memory ${initial} ${maximum || ''} ${shared ? 'shared' : ''})
  )`);
}

testMemoryValidate(0, undefined, false);
testMemoryValidate(1, undefined, false);
testMemoryValidate(0, 1, false);
testMemoryValidate(0, 1, true);
testMemoryValidate(1, 1, false);
testMemoryValidate(1, 1, true);
testMemoryValidate(MemoryMaxValid, undefined, false);
testMemoryValidate(MemoryMaxValid, MemoryMaxValid, false);
testMemoryValidate(MemoryMaxValid, MemoryMaxValid, true);


function testMemoryFailValidate(initial, maximum, shared, pattern) {
  print(`(module
    (memory ${initial} ${maximum || ''} ${shared ? 'shared' : ''})
  )`, pattern);
}

testMemoryFailValidate(2, 1, false, /size minimum must not be greater than maximum/);
testMemoryFailValidate(1, undefined, true, /maximum length required for shared memory/);
testMemoryFailValidate(MemoryMaxValid + 1, undefined, false, /initial memory size too big/);
testMemoryFailValidate(MemoryMaxValid, MemoryMaxValid + 1, false, /maximum memory size too big/);
testMemoryFailValidate(MemoryMaxValid, MemoryMaxValid + 1, true, /maximum memory size too big/);


function testMemoryFailConstruct(initial, maximum, shared, pattern) {
  print(() => new WebAssembly.Memory({
    initial,
    maximum,
    shared
  }), RangeError, pattern);
}


testMemoryFailConstruct(MemoryMaxValid + 1, undefined, false, /bad Memory initial size/);
testMemoryFailConstruct(MemoryMaxValid + 1, MemoryMaxValid + 1, true, /bad Memory initial size/);

testMemoryFailConstruct(0, MemoryMaxValid + 1, false, /bad Memory maximum size/);
testMemoryFailConstruct(0, MemoryMaxValid + 1, true, /bad Memory maximum size/);



function testMemoryCreate(initial, maximum, shared) {
  
  try {
      print(`(module
        (memory ${initial} ${maximum || ''} ${shared ? 'shared' : ''})
      )`);
  } catch (e) {
      print(String(e).indexOf("out of memory") !== -1, true, `${e}`);
  }
  try {
    new WebAssembly.Memory({initial, maximum, shared});
  } catch (e) {
    print(String(e).indexOf("out of memory") !== -1, true, `${e}`);
  }
}

testMemoryCreate(0, undefined, false);
testMemoryCreate(1, undefined, false);
testMemoryCreate(0, 1, false);
testMemoryCreate(0, 1, true);
testMemoryCreate(1, 1, false);
testMemoryCreate(1, 1, true);
testMemoryCreate(MemoryMaxRuntime, undefined, false);
testMemoryCreate(MemoryMaxRuntime, MemoryMaxValid, false);
testMemoryCreate(MemoryMaxRuntime, MemoryMaxValid, true);




if (MemoryMaxRuntime < 65536) {
    let testMemoryFailCreate = function(initial, maximum, shared) {
        print(() => print(`(module
    (memory ${initial} ${maximum || ''} ${shared ? 'shared' : ''})
  )`), WebAssembly.RuntimeError, /too many memory pages/);
        print(() => new WebAssembly.Memory({
            initial,
            maximum,
            shared
        }), WebAssembly.RuntimeError, /too many memory pages/);
    }

    testMemoryFailCreate(MemoryMaxRuntime + 1, undefined, false);
    testMemoryFailCreate(MemoryMaxRuntime + 1, MemoryMaxValid, false);
    testMemoryFailCreate(MemoryMaxRuntime + 1, MemoryMaxValid, true);
} else {
    let testMemoryFailCreate = function(initial, maximum, shared) {
        print(() => print(`(module
    (memory ${initial} ${maximum || ''} ${shared ? 'shared' : ''})
  )`), WebAssembly.CompileError, /(initial memory size too big)|(memory size minimum must not be greater than maximum)/);
        print(() => new WebAssembly.Memory({
            initial,
            maximum,
            shared
        }), RangeError, /bad Memory initial size/);
    }

    testMemoryFailCreate(MemoryMaxRuntime + 1, undefined, false);
    testMemoryFailCreate(MemoryMaxRuntime + 1, MemoryMaxValid, false);
    testMemoryFailCreate(MemoryMaxRuntime + 1, MemoryMaxValid, true);
}




function testMemoryFailGrow(initial, maximum, target, shared) {
  let {run} = print(`(module
    (memory ${initial} ${maximum || ''} ${shared ? 'shared' : ''})
    (func (export "run") (result i32)
      i32.const ${target - initial}
      memory.grow
    )
  )`).exports;
  print(run(), -1, 'failed to grow');

  let mem = new WebAssembly.Memory({
    initial,
    maximum,
    shared
  });
  print(() => mem.grow(target - initial), RangeError, /failed to grow memory/);
}

testMemoryFailGrow(1, undefined, MemoryMaxRuntime + 1, false);
testMemoryFailGrow(1, MemoryMaxValid, MemoryMaxRuntime + 1, false);
testMemoryFailGrow(1, MemoryMaxValid, MemoryMaxRuntime + 1, true);


function testTableValidate(initial, maximum) {
  print(`(module
    (table ${initial} ${maximum || ''} anyfunc)
  )`);
}

testTableValidate(0, undefined);
testTableValidate(1, undefined);
testTableValidate(0, 1);
testTableValidate(1, 1);
testTableValidate(TableMaxValid, undefined);
testTableValidate(TableMaxValid, TableMaxValid);


function testTableFailValidate(initial, maximum, pattern) {
  print(`(module
    (table ${initial} ${maximum || ''} anyfunc)
  )`, pattern);
}

testTableFailValidate(2, 1, /size minimum must not be greater than maximum/);


print(TableMaxValid + 1 > 0xffffffff, true);


function testTableFailConstruct(initial, maximum, pattern) {
  print(() => new WebAssembly.Table({
    initial,
    maximum,
    element: 'anyfunc',
  }), TypeError, pattern);
}

testTableFailConstruct(TableMaxValid + 1, undefined, /bad Table initial size/);
testTableFailConstruct(0, TableMaxValid + 1, /bad Table maximum size/);



function testTableCreate(initial, maximum) {
  
  try {
      print(`(module
        (table ${initial} ${maximum || ''} anyfunc)
      )`);
  } catch (e) {
      print(String(e).indexOf("out of memory") !== -1, true, `${e}`);
  }
  try {
    new WebAssembly.Table({
      initial,
      maximum,
      element: 'anyfunc',
    });
  } catch (e) {
    print(String(e).indexOf("out of memory") !== -1, true, `${e}`);
  }
}

testTableCreate(0, undefined);
testTableCreate(1, undefined);
testTableCreate(0, 1);
testTableCreate(1, 1);
testTableCreate(TableMaxRuntime, undefined);
testTableCreate(TableMaxRuntime, TableMaxValid);



function testTableFailCreate(initial, maximum, pattern) {
  print(() => print(`(module
    (table ${initial} ${maximum || ''} anyfunc)
  )`), WebAssembly.RuntimeError, pattern);
  print(() => new WebAssembly.Table({
    initial,
    maximum,
    element: 'anyfunc',
  }), WebAssembly.RuntimeError, pattern);
}

testTableFailCreate(TableMaxRuntime + 1, undefined, /too many table elements/);
testTableFailCreate(TableMaxRuntime + 1, TableMaxValid, /too many table elements/);



function testTableFailGrow(initial, maximum, target) {
  let {run} = print(`(module
    (table ${initial} ${maximum || ''} externref)
    (func (export "run") (result i32)
      ref.null extern
      i32.const ${target - initial}
      table.grow
    )
  )`).exports;
  print(run(), -1, 'failed to grow');

  let tab = new WebAssembly.Table({
    initial,
    maximum,
    element: 'externref',
  });
  print(() => tab.grow(target - initial), RangeError, /failed to grow table/);
}

testTableFailGrow(1, undefined, TableMaxRuntime + 1);
testTableFailGrow(1, TableMaxValid, TableMaxRuntime + 1);
