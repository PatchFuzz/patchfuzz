

























var log = '';
async function f(label, k) {
  log += label + '1';
  await 1;
  log += label + '2';
  await 1;
  log += label + '3';

  return k();
}




function test(skippable, label, k) {
  var resolve;
  (new Promise(r => { resolve = r; }))
    .then(v => { log += v + 't'; });
  assertEq(log, '');
  f(label, k);
  
  assertEq(log, label + '1');

  if (!skippable) {
    resolve('p');
    assertEq(log, label + '1');
    
  }

  
  
}







Promise.resolve(42).then(v => assertEq(v, 42));
drainJobQueue();

log = '';
test(true, 'b', continuation1);

function continuation1() {
  assertEq(log, 'b1b2b3');

  log = '';
  test(false, 'c', continuation2);
}

function continuation2() {
  assertEq(log, 'c1c2ptc3');
  throw "async tests completed successfully"; 
}
