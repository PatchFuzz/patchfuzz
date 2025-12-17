function test(api) {
  function f() {
    try {
      
      f();
    } catch(e) {
      
      api();
    }
  }
  f();
}

test((      function (){}).constructor); 
test((      function*(){}).constructor); 
test((async function (){}).constructor); 
