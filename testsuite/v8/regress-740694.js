





function __f_0() {
  try {
    return __f_0();
  } catch(e) {
    return import('no-such-file');
  }
}

var done = false;
var error;
var promise = __f_0();
promise.then(assertUnreachable,
             err => { done = true; error = err });
%PerformMicrotaskCheckpoint();
assertTrue(error.message.startsWith('d8: Error reading'));
assertTrue(done);
