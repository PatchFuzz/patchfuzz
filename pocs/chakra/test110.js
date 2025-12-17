function test0(){
  eval("");
  var i32 = new Int32Array(256);
  var __loopvar1 = 0;
  for(var strvar0 in i32 ) {
    if(strvar0.indexOf('method') != -1) continue;
    if(__loopvar1++ > 3) break;
    i32[strvar0] = (-684194670.9 * 1); 
  }
};
test0();
test0();

print("pass");
