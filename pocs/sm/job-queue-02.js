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
  print(log, '');
  f(label, k);
  
  print(log, label + '1');

  if (!skippable) {
    resolve('p');
    print(log, label + '1');
    
  }

  
  
}







Promise.resolve(42).then(v => print(v, 42));
drainJobQueue();

log = '';
test(true, 'b', continuation1);

function continuation1() {
  print(log, 'b1b2b3');

  log = '';
  test(false, 'c', continuation2);
}

function continuation2() {
  print(log, 'c1c2ptc3');
  throw "async tests completed successfully"; 
}
