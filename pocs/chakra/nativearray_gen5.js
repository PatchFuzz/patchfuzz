var shouldBailout = true;
function test0(){
  var obj1 = {};
  var arrObj0 = {};
  var func0 = function(argArr0,argArr1,argFunc2){
    ary.pop();
    for(var __loopvar4 = 0; __loopvar4 < 3 && obj1.prop2 < (ary[(((argArr1[((shouldBailout ? (argArr1[1] = "x") : undefined ), 1)] >= 0 ? argArr1[((shouldBailout ? (argArr1[1] = "x") : undefined ), 1)] : 0)) & 0XF)]); __loopvar4++, 1) {
    }
  }
  var func1 = function(argFunc3,argMath4,argObj5){
    func0(1, ary, 1);
  }
  var func2 = function(){
    var __loopvar4 = 0;
    do {
      __loopvar4++;
    } while((func1.call(arrObj0 , 1, func0(1, 1, 1), 1)) && __loopvar4 < 3)
  }
  var ary = new Array(10);
  if(func2.call(arrObj0 )) {
1  }
};


test0();
test0();
test0();
test0();
test0();
test0();


runningJITtedCode = true;
test0();
test0();
test0();
test0();
test0();
test0();


shouldBailout = true;
test0();

print('pass');
