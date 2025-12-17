const min_ptr_size = 4;
const max_regular_heap_object_size = 507136;
const num_iterations = max_regular_heap_object_size / min_ptr_size;

let i = 0;

const re = /foo.bar/;
const RegExpPrototypeExec = RegExp.prototype.exec;
re.exec = (str) => {
  return (i++ < num_iterations) ? RegExpPrototypeExec.call(re, str) : null;
};
re.__defineGetter__("global", () => true);  

"foo*bar".match(re);  
