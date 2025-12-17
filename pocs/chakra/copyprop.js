function TestCacheAtWrite(expvalue)
{
    var temp = expvalue;
    var startvalue = expvalue;
    for(var k=0;k<3;k++)
    {
        if(k>=2)
        {
            
            startvalue = temp;
            print("startvalue: "+startvalue);
        }
        else
        {
        
            expvalue = startvalue;
        }
        startvalue++;
    }
}

TestCacheAtWrite(0); 


function testcycle(){
  var obj0 = {};
  var obj1 = {};
  var ary = new Array(10);
  var ui16 = new Uint16Array(256);
  var c = 1;
  obj1.length >>>=1;
  var __loopvar4 = 0;
  while(((obj1.prop0 &= (c %= 1))) && __loopvar4 < 3) {
    __loopvar4++;
  }
  for(var __loopvar1 = 0; __loopvar1 < 3; __loopvar1++) {
    b =c;
    var __loopvar2 = 0;
    for(var strvar0 in ui16 ) {
      if(__loopvar2++ > 3) break;
      d =b;
      ary[(15)] = (b-- );
      obj0.prop0 =(obj1.length++ );
      c =d;
    }
  }
  print("d = " + (d|0));
};

testcycle();

function testcycle2(){
  var obj0 = {};
  var obj1 = {};
  var func0 = function(p0){
    obj0.prop0;
  }
  obj1.method0 = func0;
  var obj3 = obj0;
  var i = 0;
  while(i < 3) {
    i++;
    obj0 = obj3;
    obj3 = obj1;
  }
  obj0.method0()
};


testcycle2();


testcycle2();

var func3 = function () {
  return func3.caller;
}

function v9() {
  return func3();
}
function v14() {
  func3(1);
  var v15 = v9();
  print(v15);
}
v14();
v14();

