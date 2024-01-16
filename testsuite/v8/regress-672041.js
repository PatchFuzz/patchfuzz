








const min_ptr_size = 4;
const max_regular_heap_object_size = 507136;
const num_iterations = max_regular_heap_object_size / min_ptr_size;

const RegExpPrototypeExec = RegExp.prototype.exec;

let i = 0;

RegExp.prototype.__defineGetter__("global", () => true);
RegExp.prototype.exec = function(str) {
  return (i++ < num_iterations) ? RegExpPrototypeExec.call(this, str) : null;
};

"a".match();
