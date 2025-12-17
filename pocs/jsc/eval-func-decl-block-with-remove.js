var assert = function (result, expected, message) {
  if (result !== expected) {
    throw new Error('Error in assert. Expected "' + expected + '" but was "' + result + '":' + message );
  }
};

function foo() {
    function boo() { 
        return typeof a; 
    }
    eval("{ print(boo(), 'undefined'); delete a; print(boo(), 'undefined'); function a() { return 'text-a'; } print(boo(), 'function');} ");
}
foo(); 

for (let i = 0; i < testLoopCount; i++) {
    foo();
}