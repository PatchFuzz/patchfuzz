






























function f() {
  
  
  return eval("while(0) function x() { break; }; 42");
};

assertThrows("f()");
