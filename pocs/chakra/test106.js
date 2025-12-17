function FAILED()
{
    print("FAILED");
    throw(1);
}

function test0(){
  var arrObj0 = {};
  if((2 % 2)) {
  }
  else {
    b =(2 & 2);
  }
  arrObj0.length =b;
  if (arrObj0.length != 2)
    FAILED();
};


test0();
test0();
test0();


runningJITtedCode = true;
test0();
test0();
test0();


shouldBailout = true;
test0();


print("Passed");