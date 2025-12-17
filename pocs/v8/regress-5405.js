let log = [];

(async function() {
  with ({get ['.promise']() { log.push('async') }}) {
    return 10;
  }
})();
%PerformMicrotaskCheckpoint();

(function() {
  with ({get ['.new.target']() { log.push('new.target') }}) {
    return new.target;
  }
})();

(function() {
  with ({get ['this']() { log.push('this') }}) {
    return this;
  }
})();

print([], log);
