var litObj0;
var litObj1;
function test0(){
  var obj1 = {};
  
  obj1.prop0 = (function(x) {
    var fPolyProp = function (o) {
      if (o!==undefined) {
        print(o.prop0 + ' ' + o.prop1 + ' ' + o.prop2);
      }
    }
    fPolyProp(litObj0);
    fPolyProp(litObj1);

    return 1 + x;
  })(1.1,1,1.1);

};


test0();


runningJITtedCode = true;
test0();

