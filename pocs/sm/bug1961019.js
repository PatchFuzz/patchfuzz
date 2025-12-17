let s = undefined;
var f = bindToAsyncStack(
    function () {
       
        function b () {
          Error.captureStackTrace( 
            {},
            Math.sin
          );
        };
        s = saveStack(); 
        b();
    },
    { stack: saveStack() }, 
  );

  function g() { 
    
    f();
  }
g();
