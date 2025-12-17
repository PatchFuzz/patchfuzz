var test = 1; 
function fail(n, expected, result) { print("failure in test " + test + "; expected " + expected + ", got " + result); }
function test0() {
var x;
var y;
var result;
var check;

x = 0.4;
y = 0;
result = (x >>> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0.4 >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (0.4 >>> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0.4;
result = (x >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0.5;
y = 0;
result = (x >>> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0.5 >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (0.5 >>> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0.5;
result = (x >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0.6;
y = 0;
result = (x >>> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0.6 >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (0.6 >>> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0.6;
result = (x >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -0.4;
y = 0;
result = (x >>> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-0.4 >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-0.4 >>> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -0.4;
result = (x >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -0.5;
y = 0;
result = (x >>> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-0.5 >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-0.5 >>> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -0.5;
result = (x >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -0.6;
y = 0;
result = (x >>> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-0.6 >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-0.6 >>> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -0.6;
result = (x >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1.4;
y = 0;
result = (x >>> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1.4 >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1.4 >>> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1.4;
result = (x >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1.5;
y = 0;
result = (x >>> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1.5 >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1.5 >>> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1.5;
result = (x >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1.6;
y = 0;
result = (x >>> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1.6 >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1.6 >>> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1.6;
result = (x >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0.6;
y = 0;
result = (x >>> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0.6 >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (0.6 >>> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0.6;
result = (x >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0.5;
y = 0;
result = (x >>> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0.5 >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (0.5 >>> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0.5;
result = (x >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0.4;
y = 0;
result = (x >>> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0.4 >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (0.4 >>> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0.4;
result = (x >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -0.6;
y = 0;
result = (x >>> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-0.6 >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-0.6 >>> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -0.6;
result = (x >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -0.5;
y = 0;
result = (x >>> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-0.5 >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-0.5 >>> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -0.5;
result = (x >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -0.4;
y = 0;
result = (x >>> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-0.4 >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-0.4 >>> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -0.4;
result = (x >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1.4;
y = 0;
result = (x >>> y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1.4 >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1.4 >>> y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1.4;
result = (x >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1.5;
y = 0;
result = (x >>> y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1.5 >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1.5 >>> y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1.5;
result = (x >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1.6;
y = 0;
result = (x >>> y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1.6 >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1.6 >>> y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1.6;
result = (x >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2.4;
y = 0;
result = (x >>> y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2.4 >>> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2.4 >>> y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2.4;
result = (x >>> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2.5;
y = 0;
result = (x >>> y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2.5 >>> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2.5 >>> y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2.5;
result = (x >>> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2.6;
y = 0;
result = (x >>> y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2.6 >>> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2.6 >>> y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2.6;
result = (x >>> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1.6;
y = 0;
result = (x >>> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1.6 >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1.6 >>> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1.6;
result = (x >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1.5;
y = 0;
result = (x >>> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1.5 >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1.5 >>> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1.5;
result = (x >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1.4;
y = 0;
result = (x >>> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1.4 >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1.4 >>> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1.4;
result = (x >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1.6;
y = 0;
result = (x >>> y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1.6 >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1.6 >>> y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1.6;
result = (x >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test1() {
var x;
var y;
var result;
var check;

x = -1.5;
y = 0;
result = (x >>> y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1.5 >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1.5 >>> y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1.5;
result = (x >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1.4;
y = 0;
result = (x >>> y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1.4 >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1.4 >>> y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1.4;
result = (x >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2.4;
y = 0;
result = (x >>> y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2.4 >>> 0)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2.4 >>> y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2.4;
result = (x >>> 0)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2.5;
y = 0;
result = (x >>> y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2.5 >>> 0)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2.5 >>> y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2.5;
result = (x >>> 0)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2.6;
y = 0;
result = (x >>> y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2.6 >>> 0)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2.6 >>> y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2.6;
result = (x >>> 0)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3.4;
y = 0;
result = (x >>> y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3.4 >>> 0)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (3.4 >>> y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3.4;
result = (x >>> 0)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3.5;
y = 0;
result = (x >>> y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3.5 >>> 0)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (3.5 >>> y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3.5;
result = (x >>> 0)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3.6;
y = 0;
result = (x >>> y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3.6 >>> 0)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (3.6 >>> y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3.6;
result = (x >>> 0)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2.6;
y = 0;
result = (x >>> y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2.6 >>> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2.6 >>> y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2.6;
result = (x >>> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2.5;
y = 0;
result = (x >>> y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2.5 >>> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2.5 >>> y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2.5;
result = (x >>> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2.4;
y = 0;
result = (x >>> y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2.4 >>> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2.4 >>> y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2.4;
result = (x >>> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2.6;
y = 0;
result = (x >>> y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2.6 >>> 0)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2.6 >>> y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2.6;
result = (x >>> 0)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2.5;
y = 0;
result = (x >>> y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2.5 >>> 0)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2.5 >>> y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2.5;
result = (x >>> 0)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2.4;
y = 0;
result = (x >>> y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2.4 >>> 0)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2.4 >>> y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2.4;
result = (x >>> 0)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3.4;
y = 0;
result = (x >>> y);
check = 4294967293;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3.4 >>> 0)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-3.4 >>> y)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3.4;
result = (x >>> 0)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3.5;
y = 0;
result = (x >>> y);
check = 4294967293;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3.5 >>> 0)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-3.5 >>> y)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3.5;
result = (x >>> 0)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3.6;
y = 0;
result = (x >>> y);
check = 4294967293;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3.6 >>> 0)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-3.6 >>> y)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3.6;
result = (x >>> 0)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4.4;
y = 0;
result = (x >>> y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4.4 >>> 0)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4.4 >>> y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4.4;
result = (x >>> 0)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4.5;
y = 0;
result = (x >>> y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4.5 >>> 0)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4.5 >>> y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4.5;
result = (x >>> 0)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4.6;
y = 0;
result = (x >>> y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4.6 >>> 0)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4.6 >>> y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4.6;
result = (x >>> 0)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3.6;
y = 0;
result = (x >>> y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3.6 >>> 0)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (3.6 >>> y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3.6;
result = (x >>> 0)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3.5;
y = 0;
result = (x >>> y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3.5 >>> 0)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (3.5 >>> y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3.5;
result = (x >>> 0)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3.4;
y = 0;
result = (x >>> y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3.4 >>> 0)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (3.4 >>> y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3.4;
result = (x >>> 0)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3.6;
y = 0;
result = (x >>> y);
check = 4294967293;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3.6 >>> 0)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-3.6 >>> y)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3.6;
result = (x >>> 0)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3.5;
y = 0;
result = (x >>> y);
check = 4294967293;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3.5 >>> 0)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-3.5 >>> y)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3.5;
result = (x >>> 0)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test2() {
var x;
var y;
var result;
var check;

x = -3.4;
y = 0;
result = (x >>> y);
check = 4294967293;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3.4 >>> 0)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-3.4 >>> y)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3.4;
result = (x >>> 0)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4.4;
y = 0;
result = (x >>> y);
check = 4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4.4 >>> 0)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4.4 >>> y)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4.4;
result = (x >>> 0)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4.5;
y = 0;
result = (x >>> y);
check = 4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4.5 >>> 0)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4.5 >>> y)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4.5;
result = (x >>> 0)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4.6;
y = 0;
result = (x >>> y);
check = 4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4.6 >>> 0)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4.6 >>> y)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4.6;
result = (x >>> 0)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8.4;
y = 0;
result = (x >>> y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8.4 >>> 0)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (8.4 >>> y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8.4;
result = (x >>> 0)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8.5;
y = 0;
result = (x >>> y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8.5 >>> 0)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (8.5 >>> y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8.5;
result = (x >>> 0)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8.6;
y = 0;
result = (x >>> y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8.6 >>> 0)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (8.6 >>> y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8.6;
result = (x >>> 0)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 7.6;
y = 0;
result = (x >>> y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (7.6 >>> 0)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (7.6 >>> y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 7.6;
result = (x >>> 0)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 7.5;
y = 0;
result = (x >>> y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (7.5 >>> 0)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (7.5 >>> y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 7.5;
result = (x >>> 0)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 7.4;
y = 0;
result = (x >>> y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (7.4 >>> 0)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (7.4 >>> y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 7.4;
result = (x >>> 0)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -7.6;
y = 0;
result = (x >>> y);
check = 4294967289;
if(result != check) { fail(test, check, result); } ++test; 


result = (-7.6 >>> 0)
check = 4294967289
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-7.6 >>> y)
check = 4294967289
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -7.6;
result = (x >>> 0)
check = 4294967289
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -7.5;
y = 0;
result = (x >>> y);
check = 4294967289;
if(result != check) { fail(test, check, result); } ++test; 


result = (-7.5 >>> 0)
check = 4294967289
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-7.5 >>> y)
check = 4294967289
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -7.5;
result = (x >>> 0)
check = 4294967289
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -7.4;
y = 0;
result = (x >>> y);
check = 4294967289;
if(result != check) { fail(test, check, result); } ++test; 


result = (-7.4 >>> 0)
check = 4294967289
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-7.4 >>> y)
check = 4294967289
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -7.4;
result = (x >>> 0)
check = 4294967289
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8.4;
y = 0;
result = (x >>> y);
check = 4294967288;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8.4 >>> 0)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-8.4 >>> y)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8.4;
result = (x >>> 0)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8.5;
y = 0;
result = (x >>> y);
check = 4294967288;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8.5 >>> 0)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-8.5 >>> y)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8.5;
result = (x >>> 0)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8.6;
y = 0;
result = (x >>> y);
check = 4294967288;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8.6 >>> 0)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-8.6 >>> y)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8.6;
result = (x >>> 0)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822.4;
y = 0;
result = (x >>> y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822.4 >>> 0)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741822.4 >>> y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822.4;
result = (x >>> 0)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822.5;
y = 0;
result = (x >>> y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822.5 >>> 0)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741822.5 >>> y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822.5;
result = (x >>> 0)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822.6;
y = 0;
result = (x >>> y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822.6 >>> 0)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741822.6 >>> y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822.6;
result = (x >>> 0)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741821.6;
y = 0;
result = (x >>> y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741821.6 >>> 0)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741821.6 >>> y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741821.6;
result = (x >>> 0)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741821.5;
y = 0;
result = (x >>> y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741821.5 >>> 0)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741821.5 >>> y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741821.5;
result = (x >>> 0)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741821.4;
y = 0;
result = (x >>> y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741821.4 >>> 0)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741821.4 >>> y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741821.4;
result = (x >>> 0)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823.4;
y = 0;
result = (x >>> y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823.4 >>> 0)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741823.4 >>> y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823.4;
result = (x >>> 0)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823.5;
y = 0;
result = (x >>> y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823.5 >>> 0)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741823.5 >>> y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823.5;
result = (x >>> 0)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823.6;
y = 0;
result = (x >>> y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823.6 >>> 0)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741823.6 >>> y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823.6;
result = (x >>> 0)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test3() {
var x;
var y;
var result;
var check;

x = 1073741822.6;
y = 0;
result = (x >>> y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822.6 >>> 0)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741822.6 >>> y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822.6;
result = (x >>> 0)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822.5;
y = 0;
result = (x >>> y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822.5 >>> 0)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741822.5 >>> y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822.5;
result = (x >>> 0)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822.4;
y = 0;
result = (x >>> y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822.4 >>> 0)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741822.4 >>> y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822.4;
result = (x >>> 0)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824.4;
y = 0;
result = (x >>> y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824.4 >>> 0)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741824.4 >>> y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824.4;
result = (x >>> 0)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824.5;
y = 0;
result = (x >>> y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824.5 >>> 0)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741824.5 >>> y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824.5;
result = (x >>> 0)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824.6;
y = 0;
result = (x >>> y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824.6 >>> 0)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741824.6 >>> y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824.6;
result = (x >>> 0)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823.6;
y = 0;
result = (x >>> y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823.6 >>> 0)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741823.6 >>> y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823.6;
result = (x >>> 0)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823.5;
y = 0;
result = (x >>> y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823.5 >>> 0)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741823.5 >>> y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823.5;
result = (x >>> 0)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823.4;
y = 0;
result = (x >>> y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823.4 >>> 0)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741823.4 >>> y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823.4;
result = (x >>> 0)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825.4;
y = 0;
result = (x >>> y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825.4 >>> 0)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741825.4 >>> y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825.4;
result = (x >>> 0)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825.5;
y = 0;
result = (x >>> y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825.5 >>> 0)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741825.5 >>> y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825.5;
result = (x >>> 0)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825.6;
y = 0;
result = (x >>> y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825.6 >>> 0)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741825.6 >>> y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825.6;
result = (x >>> 0)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824.6;
y = 0;
result = (x >>> y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824.6 >>> 0)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741824.6 >>> y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824.6;
result = (x >>> 0)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824.5;
y = 0;
result = (x >>> y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824.5 >>> 0)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741824.5 >>> y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824.5;
result = (x >>> 0)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824.4;
y = 0;
result = (x >>> y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824.4 >>> 0)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741824.4 >>> y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824.4;
result = (x >>> 0)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741822.6;
y = 0;
result = (x >>> y);
check = 3221225474;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741822.6 >>> 0)
check = 3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741822.6 >>> y)
check = 3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741822.6;
result = (x >>> 0)
check = 3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741822.5;
y = 0;
result = (x >>> y);
check = 3221225474;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741822.5 >>> 0)
check = 3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741822.5 >>> y)
check = 3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741822.5;
result = (x >>> 0)
check = 3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741822.4;
y = 0;
result = (x >>> y);
check = 3221225474;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741822.4 >>> 0)
check = 3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741822.4 >>> y)
check = 3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741822.4;
result = (x >>> 0)
check = 3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823.4;
y = 0;
result = (x >>> y);
check = 3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823.4 >>> 0)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741823.4 >>> y)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823.4;
result = (x >>> 0)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823.5;
y = 0;
result = (x >>> y);
check = 3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823.5 >>> 0)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741823.5 >>> y)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823.5;
result = (x >>> 0)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823.6;
y = 0;
result = (x >>> y);
check = 3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823.6 >>> 0)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741823.6 >>> y)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823.6;
result = (x >>> 0)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823.6;
y = 0;
result = (x >>> y);
check = 3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823.6 >>> 0)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741823.6 >>> y)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823.6;
result = (x >>> 0)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823.5;
y = 0;
result = (x >>> y);
check = 3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823.5 >>> 0)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741823.5 >>> y)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823.5;
result = (x >>> 0)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823.4;
y = 0;
result = (x >>> y);
check = 3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823.4 >>> 0)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741823.4 >>> y)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823.4;
result = (x >>> 0)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741824.4;
y = 0;
result = (x >>> y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741824.4 >>> 0)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741824.4 >>> y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741824.4;
result = (x >>> 0)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test4() {
var x;
var y;
var result;
var check;

x = -1073741824.5;
y = 0;
result = (x >>> y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741824.5 >>> 0)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741824.5 >>> y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741824.5;
result = (x >>> 0)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741824.6;
y = 0;
result = (x >>> y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741824.6 >>> 0)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741824.6 >>> y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741824.6;
result = (x >>> 0)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741824.6;
y = 0;
result = (x >>> y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741824.6 >>> 0)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741824.6 >>> y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741824.6;
result = (x >>> 0)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741824.5;
y = 0;
result = (x >>> y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741824.5 >>> 0)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741824.5 >>> y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741824.5;
result = (x >>> 0)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741824.4;
y = 0;
result = (x >>> y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741824.4 >>> 0)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741824.4 >>> y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741824.4;
result = (x >>> 0)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825.4;
y = 0;
result = (x >>> y);
check = 3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825.4 >>> 0)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741825.4 >>> y)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825.4;
result = (x >>> 0)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825.5;
y = 0;
result = (x >>> y);
check = 3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825.5 >>> 0)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741825.5 >>> y)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825.5;
result = (x >>> 0)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825.6;
y = 0;
result = (x >>> y);
check = 3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825.6 >>> 0)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741825.6 >>> y)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825.6;
result = (x >>> 0)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825.6;
y = 0;
result = (x >>> y);
check = 3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825.6 >>> 0)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741825.6 >>> y)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825.6;
result = (x >>> 0)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825.5;
y = 0;
result = (x >>> y);
check = 3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825.5 >>> 0)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741825.5 >>> y)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825.5;
result = (x >>> 0)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825.4;
y = 0;
result = (x >>> y);
check = 3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825.4 >>> 0)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741825.4 >>> y)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825.4;
result = (x >>> 0)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826.4;
y = 0;
result = (x >>> y);
check = 3221225470;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826.4 >>> 0)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741826.4 >>> y)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826.4;
result = (x >>> 0)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826.5;
y = 0;
result = (x >>> y);
check = 3221225470;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826.5 >>> 0)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741826.5 >>> y)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826.5;
result = (x >>> 0)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826.6;
y = 0;
result = (x >>> y);
check = 3221225470;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826.6 >>> 0)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741826.6 >>> y)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826.6;
result = (x >>> 0)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646.4;
y = 0;
result = (x >>> y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646.4 >>> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483646.4 >>> y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646.4;
result = (x >>> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646.5;
y = 0;
result = (x >>> y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646.5 >>> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483646.5 >>> y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646.5;
result = (x >>> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646.6;
y = 0;
result = (x >>> y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646.6 >>> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483646.6 >>> y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646.6;
result = (x >>> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483645.6;
y = 0;
result = (x >>> y);
check = 2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483645.6 >>> 0)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483645.6 >>> y)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483645.6;
result = (x >>> 0)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483645.5;
y = 0;
result = (x >>> y);
check = 2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483645.5 >>> 0)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483645.5 >>> y)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483645.5;
result = (x >>> 0)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483645.4;
y = 0;
result = (x >>> y);
check = 2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483645.4 >>> 0)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483645.4 >>> y)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483645.4;
result = (x >>> 0)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647.4;
y = 0;
result = (x >>> y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647.4 >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483647.4 >>> y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647.4;
result = (x >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647.5;
y = 0;
result = (x >>> y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647.5 >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483647.5 >>> y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647.5;
result = (x >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647.6;
y = 0;
result = (x >>> y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647.6 >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483647.6 >>> y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647.6;
result = (x >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646.6;
y = 0;
result = (x >>> y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646.6 >>> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483646.6 >>> y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646.6;
result = (x >>> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646.5;
y = 0;
result = (x >>> y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646.5 >>> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483646.5 >>> y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646.5;
result = (x >>> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test5() {
var x;
var y;
var result;
var check;

x = 2147483646.4;
y = 0;
result = (x >>> y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646.4 >>> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483646.4 >>> y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646.4;
result = (x >>> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648.4;
y = 0;
result = (x >>> y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648.4 >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483648.4 >>> y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648.4;
result = (x >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648.5;
y = 0;
result = (x >>> y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648.5 >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483648.5 >>> y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648.5;
result = (x >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648.6;
y = 0;
result = (x >>> y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648.6 >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483648.6 >>> y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648.6;
result = (x >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647.6;
y = 0;
result = (x >>> y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647.6 >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483647.6 >>> y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647.6;
result = (x >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647.5;
y = 0;
result = (x >>> y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647.5 >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483647.5 >>> y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647.5;
result = (x >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647.4;
y = 0;
result = (x >>> y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647.4 >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483647.4 >>> y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647.4;
result = (x >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649.4;
y = 0;
result = (x >>> y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649.4 >>> 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483649.4 >>> y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649.4;
result = (x >>> 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649.5;
y = 0;
result = (x >>> y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649.5 >>> 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483649.5 >>> y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649.5;
result = (x >>> 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649.6;
y = 0;
result = (x >>> y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649.6 >>> 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483649.6 >>> y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649.6;
result = (x >>> 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648.6;
y = 0;
result = (x >>> y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648.6 >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483648.6 >>> y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648.6;
result = (x >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648.5;
y = 0;
result = (x >>> y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648.5 >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483648.5 >>> y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648.5;
result = (x >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648.4;
y = 0;
result = (x >>> y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648.4 >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483648.4 >>> y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648.4;
result = (x >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483646.6;
y = 0;
result = (x >>> y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483646.6 >>> 0)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483646.6 >>> y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483646.6;
result = (x >>> 0)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483646.5;
y = 0;
result = (x >>> y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483646.5 >>> 0)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483646.5 >>> y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483646.5;
result = (x >>> 0)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483646.4;
y = 0;
result = (x >>> y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483646.4 >>> 0)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483646.4 >>> y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483646.4;
result = (x >>> 0)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647.4;
y = 0;
result = (x >>> y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647.4 >>> 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483647.4 >>> y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647.4;
result = (x >>> 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647.5;
y = 0;
result = (x >>> y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647.5 >>> 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483647.5 >>> y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647.5;
result = (x >>> 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647.6;
y = 0;
result = (x >>> y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647.6 >>> 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483647.6 >>> y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647.6;
result = (x >>> 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647.6;
y = 0;
result = (x >>> y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647.6 >>> 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483647.6 >>> y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647.6;
result = (x >>> 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647.5;
y = 0;
result = (x >>> y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647.5 >>> 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483647.5 >>> y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647.5;
result = (x >>> 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647.4;
y = 0;
result = (x >>> y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647.4 >>> 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483647.4 >>> y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647.4;
result = (x >>> 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648.4;
y = 0;
result = (x >>> y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648.4 >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483648.4 >>> y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648.4;
result = (x >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648.5;
y = 0;
result = (x >>> y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648.5 >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483648.5 >>> y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648.5;
result = (x >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648.6;
y = 0;
result = (x >>> y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648.6 >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483648.6 >>> y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648.6;
result = (x >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test6() {
var x;
var y;
var result;
var check;

x = -2147483648.6;
y = 0;
result = (x >>> y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648.6 >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483648.6 >>> y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648.6;
result = (x >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648.5;
y = 0;
result = (x >>> y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648.5 >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483648.5 >>> y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648.5;
result = (x >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648.4;
y = 0;
result = (x >>> y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648.4 >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483648.4 >>> y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648.4;
result = (x >>> 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649.4;
y = 0;
result = (x >>> y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649.4 >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483649.4 >>> y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649.4;
result = (x >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649.5;
y = 0;
result = (x >>> y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649.5 >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483649.5 >>> y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649.5;
result = (x >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649.6;
y = 0;
result = (x >>> y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649.6 >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483649.6 >>> y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649.6;
result = (x >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649.6;
y = 0;
result = (x >>> y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649.6 >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483649.6 >>> y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649.6;
result = (x >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649.5;
y = 0;
result = (x >>> y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649.5 >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483649.5 >>> y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649.5;
result = (x >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649.4;
y = 0;
result = (x >>> y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649.4 >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483649.4 >>> y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649.4;
result = (x >>> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650.4;
y = 0;
result = (x >>> y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650.4 >>> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483650.4 >>> y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650.4;
result = (x >>> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650.5;
y = 0;
result = (x >>> y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650.5 >>> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483650.5 >>> y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650.5;
result = (x >>> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650.6;
y = 0;
result = (x >>> y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650.6 >>> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483650.6 >>> y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650.6;
result = (x >>> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295.4;
y = 0;
result = (x >>> y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295.4 >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4294967295.4 >>> y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295.4;
result = (x >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295.5;
y = 0;
result = (x >>> y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295.5 >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4294967295.5 >>> y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295.5;
result = (x >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295.6;
y = 0;
result = (x >>> y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295.6 >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4294967295.6 >>> y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295.6;
result = (x >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967294.6;
y = 0;
result = (x >>> y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967294.6 >>> 0)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4294967294.6 >>> y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967294.6;
result = (x >>> 0)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967294.5;
y = 0;
result = (x >>> y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967294.5 >>> 0)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4294967294.5 >>> y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967294.5;
result = (x >>> 0)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967294.4;
y = 0;
result = (x >>> y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967294.4 >>> 0)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4294967294.4 >>> y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967294.4;
result = (x >>> 0)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296.4;
y = 0;
result = (x >>> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296.4 >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4294967296.4 >>> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296.4;
result = (x >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296.5;
y = 0;
result = (x >>> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296.5 >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4294967296.5 >>> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296.5;
result = (x >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296.6;
y = 0;
result = (x >>> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296.6 >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4294967296.6 >>> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296.6;
result = (x >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295.6;
y = 0;
result = (x >>> y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295.6 >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4294967295.6 >>> y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295.6;
result = (x >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295.5;
y = 0;
result = (x >>> y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295.5 >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4294967295.5 >>> y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295.5;
result = (x >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295.4;
y = 0;
result = (x >>> y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295.4 >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4294967295.4 >>> y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295.4;
result = (x >>> 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967294.6;
y = 0;
result = (x >>> y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967294.6 >>> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4294967294.6 >>> y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967294.6;
result = (x >>> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test7() {
var x;
var y;
var result;
var check;

x = -4294967294.5;
y = 0;
result = (x >>> y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967294.5 >>> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4294967294.5 >>> y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967294.5;
result = (x >>> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967294.4;
y = 0;
result = (x >>> y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967294.4 >>> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4294967294.4 >>> y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967294.4;
result = (x >>> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295.4;
y = 0;
result = (x >>> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295.4 >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4294967295.4 >>> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295.4;
result = (x >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295.5;
y = 0;
result = (x >>> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295.5 >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4294967295.5 >>> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295.5;
result = (x >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295.6;
y = 0;
result = (x >>> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295.6 >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4294967295.6 >>> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295.6;
result = (x >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295.6;
y = 0;
result = (x >>> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295.6 >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4294967295.6 >>> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295.6;
result = (x >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295.5;
y = 0;
result = (x >>> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295.5 >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4294967295.5 >>> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295.5;
result = (x >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295.4;
y = 0;
result = (x >>> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295.4 >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4294967295.4 >>> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295.4;
result = (x >>> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296.4;
y = 0;
result = (x >>> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296.4 >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4294967296.4 >>> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296.4;
result = (x >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296.5;
y = 0;
result = (x >>> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296.5 >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4294967296.5 >>> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296.5;
result = (x >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296.6;
y = 0;
result = (x >>> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296.6 >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4294967296.6 >>> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296.6;
result = (x >>> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 

}
test0();
test1();
test2();
test3();
test4();
test5();
test6();
test7();

print("pass");
