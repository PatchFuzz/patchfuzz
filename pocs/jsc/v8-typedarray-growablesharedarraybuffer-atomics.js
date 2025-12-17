"use strict";

print("./resources/v8-mjsunit.js", "caller relative");
print("./resources/v8-typedarray-helpers.js", "caller relative");

(function AtomicsWait() {
  const gsab = CreateGrowableSharedArrayBuffer(16, 32);
  const i32a = new Int32Array(gsab);

  const workerScript = `
      $262.agent.receiveBroadcast(function(buffer) {
        const i32a = new Int32Array(buffer, 0);
        try {
          const result = Atomics.wait(i32a, 0, 0, 5000);
          if (result !== 'ok')
            throw new Error(result);
          $262.agent.report("PASS");
        } catch (e) {
          $262.agent.report("FAIL");
        } finally {
          $262.agent.leaving();
        }
      });
    `;

  $.agent.start(workerScript);
  $262.agent.broadcast(gsab);

  
  while (waiterListSize(i32a, 0) != 1) {}

  Atomics.notify(i32a, 0, 1);
  while (true) {
      let report = $262.agent.getReport();
      if (report === null) {
          $262.agent.sleep(1);
          continue;
      }
      print(report, "PASS");
      break;
  }
})();

(function AtomicsWaitAfterGrowing() {
  
  const gsab = CreateGrowableSharedArrayBuffer(4 * 4, 8 * 4);
  const i32a = new Int32Array(gsab);
  gsab.grow(6 * 4);
  const index = 5;

  const workerScript = `
      $262.agent.receiveBroadcast(function(buffer) {
        const i32a = new Int32Array(buffer, 0);
        try {
          const result = Atomics.wait(i32a, 5, 0, 5000);
          if (result !== 'ok')
            throw new Error(result);
          $262.agent.report("PASS");
        } catch (e) {
          $262.agent.report("FAIL");
        } finally {
          $262.agent.leaving();
        }
      });
    `;

  $.agent.start(workerScript);
  $262.agent.broadcast(gsab);

  
  while (waiterListSize(i32a, index) != 1) {}

  Atomics.notify(i32a, index, 1);
  while (true) {
      let report = $262.agent.getReport();
      if (report === null) {
          $262.agent.sleep(1);
          continue;
      }
      print(report, "PASS");
      break;
  }
})();

(function AtomicsWaitAsync() {
  for (let ctor of [Int32Array, BigInt64Array, MyBigInt64Array]) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab, 0);

    const initialValue = false;  
    const result = Atomics.waitAsync(lengthTracking, 0, initialValue);

    let wokeUp = false;
    result.value.then(
     (value) => { print("ok", value); wokeUp = true; },
     () => { print(); });

    print(true, result.async);

    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);

    const notifyReturnValue = Atomics.notify(lengthTracking, 0, 1);
    print(1, notifyReturnValue);

    function continuation() {
      print(wokeUp);
    }

    setTimeout(continuation, 0);
  }
})();

(function AtomicsWaitAsyncAfterGrowing() {
  for (let ctor of [Int32Array, BigInt64Array, MyBigInt64Array]) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab, 0);
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
    const index = 5;

    const initialValue = false;  
    const result = Atomics.waitAsync(lengthTracking, index, initialValue);

    let wokeUp = false;
    result.value.then(
     (value) => { print("ok", value); wokeUp = true; },
     () => { print(); });

    print(true, result.async);

    const notifyReturnValue = Atomics.notify(lengthTracking, index, 1);
    print(1, notifyReturnValue);

    function continuation() {
      print(wokeUp);
    }

    setTimeout(continuation, 0);
  }
})();

(function AtomicsWaitFailWithWrongArrayTypes() {
  const gsab = CreateGrowableSharedArrayBuffer(400, 800);

  const i8a = new Int8Array(gsab);
  const i16a = new Int16Array(gsab);
  const ui8a = new Uint8Array(gsab);
  const ui8ca = new Uint8ClampedArray(gsab);
  const ui16a = new Uint16Array(gsab);
  const ui32a = new Uint32Array(gsab);
  const f32a = new Float32Array(gsab);
  const f64a = new Float64Array(gsab);
  const myui8 = new MyUint8Array(gsab);
  const bui64 = new BigUint64Array(gsab);

  [i8a, i16a, ui8a, ui8ca, ui16a, ui32a, f32a, f64a, myui8, bui64].forEach(
      function(ta) {
        
        const exampleValue = false;
        print(() => { Atomics.wait(ta, 0, exampleValue); },
                     TypeError);
        print(() => { Atomics.notify(ta, 0, 1); },
                     TypeError);
        print(() => { Atomics.waitAsync(ta, 0, exampleValue); },
                     TypeError);
      });
})();

(function TestAtomics() {
  for (let ctor of intCtors) {
    const gsab = CreateGrowableSharedArrayBuffer(4 * ctor.BYTES_PER_ELEMENT,
                                                 8 * ctor.BYTES_PER_ELEMENT);
    const lengthTracking = new ctor(gsab, 0);
    TestAtomicsOperations(lengthTracking, 0);

    AssertAtomicsOperationsThrow(lengthTracking, 4, RangeError);
    gsab.grow(6 * ctor.BYTES_PER_ELEMENT);
    TestAtomicsOperations(lengthTracking, 4);
  }
})();

(function AtomicsFailWithNonIntegerArray() {
  const gsab = CreateGrowableSharedArrayBuffer(400, 800);

  const ui8ca = new Uint8ClampedArray(gsab);
  const f32a = new Float32Array(gsab);
  const f64a = new Float64Array(gsab);
  const mf32a = new MyFloat32Array(gsab);

  [ui8ca, f32a, f64a, mf32a].forEach((ta) => {
      AssertAtomicsOperationsThrow(ta, 0, TypeError); });
})();
