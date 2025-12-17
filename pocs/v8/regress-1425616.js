eval(`
let foo = 5;
let change_and_read_foo = () => {
  foo = 42;
  (function read_foo(){return foo;})();
};
change_and_read_foo();
`);
