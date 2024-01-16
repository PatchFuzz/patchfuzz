



var obj = new Array(1);
obj[0] = 0;
obj[1] = 0;
function foo(flag_index) {
  obj[flag_index]++;
}


obj[-8] = 3;
foo(1);
foo(2);
