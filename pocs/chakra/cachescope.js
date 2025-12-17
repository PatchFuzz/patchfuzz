function test0(){
  var obj0 = {};
  var obj1 = {};
  var obj2 = {};
  var func2 = function(argFunc1,argFunc2){
    
    function _array2iterate(_array2tmp) {
      for(var _array2i in _array2tmp) {
        if(_array2i.indexOf("method") == 0)
          continue;

        
        for (var _i in arguments[1]) {

        };


        if(_array2tmp[_array2i] instanceof Array) {
          _array2iterate(_array2tmp[_array2i]);

        }
        else {

          obj2.prop5 += _array2tmp[_array2i];
        }
      }
    }
    _array2iterate([ [1], [1], [1, 1, [1, 1, 1, [obj1.prop6, 1, [obj0.prop1]]]]]);

1  }
  obj1.method0 = func2;
  obj1.method0(1, 1);
};


test0();
test0();
