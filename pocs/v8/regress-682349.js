let success = false;
function f() {
  success = (f.caller === null);
}
Promise.resolve().then(f);
%PerformMicrotaskCheckpoint();
print(success);
