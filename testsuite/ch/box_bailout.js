




function escape()
{
}
function test0(){
  function bar0 (){
  }
  if (doit)
  {
     escape(bar0);
  }
  (function(){
      
      function v375952()
      {
      }
      function v375957()
      {
        v375952.prototype = {};
      }
    if (doit) {
      v375957();
      v375957();
    }
    
  })();
};

var doit = false;

test0();

doit = true;

test0();

