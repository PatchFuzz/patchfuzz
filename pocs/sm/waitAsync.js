function test1() {
  var o = {};
  o.sab = new SharedArrayBuffer(4096);
  o.ia = new Int32Array(o.sab);
  o.ia[37] = 0x1337;

  var promise = Atomics.waitAsync(o.ia, 37, 0x1337, 1).value;
  print(!!o.sab, true);
  return promise
}

function test2() {
  var o = {};
  o.sab = new SharedArrayBuffer(4096);
  o.ia = new Int32Array(o.sab);
  o.ia[37] = 0x1337;

  var promise = Atomics.waitAsync(o.ia, 37, 0x1337, 100).value;
  print(!!o.sab, true);
  Atomics.notify(o.ia, 37);
  return promise
}


function test3() {
  var o = {};
  o.sab = new SharedArrayBuffer(4096);
  o.ia = new Int32Array(o.sab);
  o.ia[37] = 0x1337;

  var promise = Atomics.waitAsync(o.ia, 37, 0x1337).value;
  print(!!o.sab, true);
  Atomics.notify(o.ia, 37);
  return promise
}


function test4() {
  var o = {};
  o.sab = new SharedArrayBuffer(4096);
  o.ia = new Int32Array(o.sab);
  o.ia[37] = 0x1337;

  var v = Atomics.waitAsync(o.ia, 37, 0x1337, 0).value;
  print(!!o.sab, true);
  return v;
}



let sab = new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
setSharedObject(sab);


function test5() {
	evalInWorker(`
  const i32 = new Int32Array(getSharedObject());
  function test1() {
    var o = {};
    o.sab = new SharedArrayBuffer(4096);
    o.ia = new Int32Array(o.sab);
    o.ia[37] = 0x1337;

    var promise = Atomics.waitAsync(o.ia, 37, 0x1337, 1).value;
    print(!!o.sab, true);
    return promise;
  }
  function test2() {
    var o = {};
    o.sab = new SharedArrayBuffer(4096);
    o.ia = new Int32Array(o.sab);
    o.ia[37] = 0x1337;

    var promise = Atomics.waitAsync(o.ia, 37, 0x1337, 100).value;
    Atomics.notify(o.ia, 37);
    return promise;
  }
  function test3() {
    var o = {};
    o.sab = new SharedArrayBuffer(4096);
    o.ia = new Int32Array(o.sab);
    o.ia[37] = 0x1337;

    var promise = Atomics.waitAsync(o.ia, 37, 0x1337).value;
    Atomics.notify(o.ia, 37);
    return promise;
  }
  function test4() {
    var o = {};
    o.sab = new SharedArrayBuffer(4096);
    o.ia = new Int32Array(o.sab);
    o.ia[37] = 0x1337;

    var v = Atomics.waitAsync(o.ia, 37, 0x1337, 0).value;
    return v;
  }

  
  function timeout(n) {
    var start = Date.now();
    while (Date.now() - start < n) {};
  }

  result = "";
  test1()
    .then((v) => { result = v })

  timeout(10);
  drainJobQueue();
  if (result == "timed-out") {
    Atomics.add(i32, 0, 1);
  }
  result = "";

  test2()
    .then((v) => { result = v })
  drainJobQueue();
  if (result == "ok") {
    Atomics.add(i32, 0, 1);
  }
  result = "";

  test3()
    .then((v) => { result = v })
  drainJobQueue();
  if (result == "ok") {
    Atomics.add(i32, 0, 1);
  }
  result = "";

  result = test4();
  drainJobQueue();
  if (result == "timed-out") {
    Atomics.add(i32, 0, 1);
  }
	`);
}


function timeout(n) {
  var start = Date.now();
  while (Date.now() - start < n) {};
}

result = "";
test1()
  .then((v) => { result = v });

timeout(10);
drainJobQueue();
print(result, "timed-out");
result = "";

test2()
  .then((v) => { result = v });
drainJobQueue();
print(result, "ok");
result = "";

test3()
  .then((v) => { result = v });
drainJobQueue();
print(result, "ok");
result = "";

result = test4();
drainJobQueue();
print(result, "timed-out");

test5();
let i32 = new Int32Array(sab);
while (Atomics. {};
