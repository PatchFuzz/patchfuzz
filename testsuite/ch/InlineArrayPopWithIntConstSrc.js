




function test0(){

  var func0 = function(argArr2){
    if((check ? (argArr2.pop()) : WScript.Echo("false"))) {
    }
  }

  var check = true;
  func0([1]); 
  check = false;
  func0(1); 
};


test0();

test0();

