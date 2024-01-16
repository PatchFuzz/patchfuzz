

function callNoArgs() {
  for (let i = 0; i < 100; ++i) {
    let obj = Object();

    
    assertEq(Reflect.getPrototypeOf(obj), Object.prototype);
    assertEq(Reflect.ownKeys(obj).length, 0);
  }
}
for (let i = 0; i < 2; ++i) callNoArgs();

function constructNoArgs() {
  for (let i = 0; i < 100; ++i) {
    let obj = new Object();

    
    assertEq(Reflect.getPrototypeOf(obj), Object.prototype);
    assertEq(Reflect.ownKeys(obj).length, 0);
  }
}
for (let i = 0; i < 2; ++i) constructNoArgs();

function funCallNoArgs() {
  
  const thisValue = null;

  for (let i = 0; i < 100; ++i) {
    let obj = Object.call(thisValue);

    
    assertEq(Reflect.getPrototypeOf(obj), Object.prototype);
    assertEq(Reflect.ownKeys(obj).length, 0);
  }
}
for (let i = 0; i < 2; ++i) funCallNoArgs();

function callObjectArg() {
  let xs = [{}, {}];
  for (let i = 0; i < 100; ++i) {
    let x = xs[i & 1];
    let obj = Object(x);

    
    assertEq(obj, x);
  }
}
for (let i = 0; i < 2; ++i) callObjectArg();

function constructObjectArg() {
  let xs = [{}, {}];
  for (let i = 0; i < 100; ++i) {
    let x = xs[i & 1];
    let obj = new Object(x);

    
    assertEq(obj, x);
  }
}
for (let i = 0; i < 2; ++i) constructObjectArg();

function funCallObjectArg() {
  
  const thisValue = null;

  let xs = [{}, {}];
  for (let i = 0; i < 100; ++i) {
    let x = xs[i & 1];
    let obj = Object.call(thisValue, x);

    
    assertEq(obj, x);
  }
}
for (let i = 0; i < 2; ++i) funCallObjectArg();
