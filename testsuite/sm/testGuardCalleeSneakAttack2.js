function loop(f, expected) {
   
   
   
   
   for (var i = 0; i < 9; i++)
       assertEq(f(), expected);
}

function C(bad) {
   var x = bad;
   function f() {
       return x;  
                  
                  
   }
   if (bad)
       void (f + "a!");
   return f;
}

var obj = {
};


loop(C.call(obj, false), false);


Function.prototype.toString = function () { loop(this, true); return "hah"; };


C.call(obj, true);
