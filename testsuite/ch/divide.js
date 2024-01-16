




var test = 1; 
function fail(n, expected, result) { WScript.Echo("failure in test " + test + "; expected " + expected + ", got " + result); }
function test0() {
var x;
var y;
var result;
var check;

x = 0;
y = 1;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -1;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -2;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 3;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -3;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 4;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -4;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 8;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -8;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1073741822;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / 1073741822)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / 1073741822)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1073741823;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / 1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / 1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1073741824;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1073741825;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / 1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / 1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -1073741823;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / -1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / -1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = (-0x3fffffff-1);
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -1073741825;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / -1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / -1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -1073741826;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / -1073741826)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / -1073741826)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2147483646;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / 2147483646)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / 2147483646)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2147483647;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / 2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / 2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2147483648;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / 2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / 2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2147483649;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / 2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / 2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -2147483647;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / -2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / -2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -2147483648;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / -2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / -2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -2147483649;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / -2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / -2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test1() {
var x;
var y;
var result;
var check;

x = 0;
y = -2147483650;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / -2147483650)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / -2147483650)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 4294967295;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / 4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / 4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 4294967296;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / 4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / 4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -4294967295;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / -4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / -4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -4294967296;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / -4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / -4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 1;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 / 1)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x / 1)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -1;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 / -1)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x / -1)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 1;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 / 1)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x / 1)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -1;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 / -1)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-1 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x / -1)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 1;
result = (x / y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 / 1)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2 / y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x / 1)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -1;
result = (x / y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 / -1)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2 / y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x / -1)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 2;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 / 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x / 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -2;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 / -2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (2 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x / -2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 1;
result = (x / y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 / 1)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2 / y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x / 1)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -1;
result = (x / y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 / -1)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2 / y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x / -1)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 2;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 / 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x / 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -2;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 / -2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-2 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x / -2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 1;
result = (x / y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 / 1)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (3 / y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x / 1)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -1;
result = (x / y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 / -1)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (3 / y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x / -1)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 3;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 / 3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (3 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x / 3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -3;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 / -3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (3 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x / -3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 1;
result = (x / y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 / 1)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-3 / y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x / 1)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -1;
result = (x / y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 / -1)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-3 / y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x / -1)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 3;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 / 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-3 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x / 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -3;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 / -3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-3 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x / -3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test2() {
var x;
var y;
var result;
var check;

x = 4;
y = 1;
result = (x / y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 / 1)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (4 / y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x / 1)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -1;
result = (x / y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 / -1)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (4 / y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x / -1)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 2;
result = (x / y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 / 2)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (4 / y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x / 2)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -2;
result = (x / y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 / -2)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (4 / y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x / -2)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 4;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 / 4)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (4 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x / 4)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -4;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 / -4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (4 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x / -4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 1;
result = (x / y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 / 1)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-4 / y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x / 1)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -1;
result = (x / y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 / -1)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-4 / y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x / -1)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 2;
result = (x / y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 / 2)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-4 / y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x / 2)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -2;
result = (x / y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 / -2)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-4 / y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x / -2)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 4;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 / 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-4 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x / 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -4;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 / -4)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-4 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x / -4)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 1;
result = (x / y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 / 1)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (8 / y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x / 1)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -1;
result = (x / y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 / -1)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (8 / y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x / -1)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 2;
result = (x / y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 / 2)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (8 / y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x / 2)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -2;
result = (x / y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 / -2)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (8 / y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x / -2)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 4;
result = (x / y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 / 4)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (8 / y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x / 4)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -4;
result = (x / y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 / -4)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (8 / y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x / -4)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 8;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 / 8)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (8 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x / 8)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -8;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 / -8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (8 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x / -8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 1;
result = (x / y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 / 1)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-8 / y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x / 1)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -1;
result = (x / y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 / -1)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-8 / y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x / -1)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 2;
result = (x / y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 / 2)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-8 / y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x / 2)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -2;
result = (x / y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 / -2)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-8 / y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x / -2)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 4;
result = (x / y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 / 4)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-8 / y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x / 4)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test3() {
var x;
var y;
var result;
var check;

x = -8;
y = -4;
result = (x / y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 / -4)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-8 / y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x / -4)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 8;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 / 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-8 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x / 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -8;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 / -8)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-8 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x / -8)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 1;
result = (x / y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 / 1)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741822 / y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x / 1)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -1;
result = (x / y);
check = -1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 / -1)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1073741822 / y)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x / -1)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 2;
result = (x / y);
check = 536870911;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 / 2)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1073741822 / y)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x / 2)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -2;
result = (x / y);
check = -536870911;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 / -2)
check = -536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (1073741822 / y)
check = -536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x / -2)
check = -536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 1073741822;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 / 1073741822)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (1073741822 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x / 1073741822)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 1;
result = (x / y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 / 1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741823 / y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x / 1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -1;
result = (x / y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 / -1)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1073741823 / y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x / -1)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 3;
result = (x / y);
check = 357913941;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 / 3)
check = 357913941
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1073741823 / y)
check = 357913941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x / 3)
check = 357913941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -3;
result = (x / y);
check = -357913941;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 / -3)
check = -357913941
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (1073741823 / y)
check = -357913941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x / -3)
check = -357913941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 1073741823;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 / 1073741823)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (1073741823 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x / 1073741823)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -1073741823;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 / -1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (1073741823 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x / -1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 1;
result = (x / y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 / 1)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741824 / y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x / 1)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -1;
result = (x / y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 / -1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1073741824 / y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x / -1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 2;
result = (x / y);
check = 536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 / 2)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1073741824 / y)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x / 2)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -2;
result = (x / y);
check = -536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 / -2)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (1073741824 / y)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x / -2)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 4;
result = (x / y);
check = 268435456;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 / 4)
check = 268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1073741824 / y)
check = 268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x / 4)
check = 268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -4;
result = (x / y);
check = -268435456;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 / -4)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (1073741824 / y)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x / -4)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 8;
result = (x / y);
check = 134217728;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 / 8)
check = 134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1073741824 / y)
check = 134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x / 8)
check = 134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -8;
result = (x / y);
check = -134217728;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 / -8)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (1073741824 / y)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x / -8)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 1073741824;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 / 1073741824)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (1073741824 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x / 1073741824)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = (-0x3fffffff-1);
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 / (-0x3fffffff-1))
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (1073741824 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x / (-0x3fffffff-1))
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 1;
result = (x / y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 / 1)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741825 / y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x / 1)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test4() {
var x;
var y;
var result;
var check;

x = 1073741825;
y = -1;
result = (x / y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 / -1)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1073741825 / y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x / -1)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 1073741825;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 / 1073741825)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (1073741825 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x / 1073741825)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -1073741825;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 / -1073741825)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (1073741825 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x / -1073741825)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 1;
result = (x / y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 / 1)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1073741823 / y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x / 1)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -1;
result = (x / y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 / -1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-1073741823 / y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x / -1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 3;
result = (x / y);
check = -357913941;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 / 3)
check = -357913941
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-1073741823 / y)
check = -357913941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x / 3)
check = -357913941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -3;
result = (x / y);
check = 357913941;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 / -3)
check = 357913941
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-1073741823 / y)
check = 357913941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x / -3)
check = 357913941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 1073741823;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 / 1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-1073741823 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x / 1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -1073741823;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 / -1073741823)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-1073741823 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x / -1073741823)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 1;
result = (x / y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) / 1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = ((-0x3fffffff-1) / y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x / 1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -1;
result = (x / y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) / -1)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = ((-0x3fffffff-1) / y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x / -1)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 2;
result = (x / y);
check = -536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) / 2)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = ((-0x3fffffff-1) / y)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x / 2)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -2;
result = (x / y);
check = 536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) / -2)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = ((-0x3fffffff-1) / y)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x / -2)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 4;
result = (x / y);
check = -268435456;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) / 4)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = ((-0x3fffffff-1) / y)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x / 4)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -4;
result = (x / y);
check = 268435456;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) / -4)
check = 268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = ((-0x3fffffff-1) / y)
check = 268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x / -4)
check = 268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 8;
result = (x / y);
check = -134217728;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) / 8)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = ((-0x3fffffff-1) / y)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x / 8)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -8;
result = (x / y);
check = 134217728;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) / -8)
check = 134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = ((-0x3fffffff-1) / y)
check = 134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x / -8)
check = 134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 1073741824;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) / 1073741824)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = ((-0x3fffffff-1) / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x / 1073741824)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = (-0x3fffffff-1);
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) / (-0x3fffffff-1))
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = ((-0x3fffffff-1) / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x / (-0x3fffffff-1))
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 1;
result = (x / y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 / 1)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1073741825 / y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x / 1)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -1;
result = (x / y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 / -1)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-1073741825 / y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x / -1)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 1073741825;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 / 1073741825)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-1073741825 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x / 1073741825)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -1073741825;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 / -1073741825)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-1073741825 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x / -1073741825)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 1;
result = (x / y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 / 1)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1073741826 / y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x / 1)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -1;
result = (x / y);
check = 1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 / -1)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-1073741826 / y)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x / -1)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test5() {
var x;
var y;
var result;
var check;

x = -1073741826;
y = 2;
result = (x / y);
check = -536870913;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 / 2)
check = -536870913
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-1073741826 / y)
check = -536870913
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x / 2)
check = -536870913
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -2;
result = (x / y);
check = 536870913;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 / -2)
check = 536870913
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-1073741826 / y)
check = 536870913
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x / -2)
check = 536870913
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 3;
result = (x / y);
check = -357913942;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 / 3)
check = -357913942
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-1073741826 / y)
check = -357913942
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x / 3)
check = -357913942
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -3;
result = (x / y);
check = 357913942;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 / -3)
check = 357913942
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-1073741826 / y)
check = 357913942
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x / -3)
check = 357913942
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -1073741826;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 / -1073741826)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-1073741826 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x / -1073741826)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 1;
result = (x / y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 / 1)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483646 / y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x / 1)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -1;
result = (x / y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 / -1)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2147483646 / y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x / -1)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 2;
result = (x / y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 / 2)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2147483646 / y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x / 2)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -2;
result = (x / y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 / -2)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (2147483646 / y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x / -2)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 3;
result = (x / y);
check = 715827882;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 / 3)
check = 715827882
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2147483646 / y)
check = 715827882
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x / 3)
check = 715827882
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -3;
result = (x / y);
check = -715827882;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 / -3)
check = -715827882
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (2147483646 / y)
check = -715827882
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x / -3)
check = -715827882
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 1073741823;
result = (x / y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 / 1073741823)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (2147483646 / y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x / 1073741823)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -1073741823;
result = (x / y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 / -1073741823)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (2147483646 / y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x / -1073741823)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 2147483646;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 / 2147483646)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (2147483646 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x / 2147483646)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 1;
result = (x / y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 / 1)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483647 / y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x / 1)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -1;
result = (x / y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 / -1)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2147483647 / y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x / -1)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 2147483647;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 / 2147483647)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (2147483647 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x / 2147483647)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -2147483647;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 / -2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (2147483647 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x / -2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 1;
result = (x / y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 / 1)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483648 / y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x / 1)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -1;
result = (x / y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 / -1)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2147483648 / y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x / -1)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 2;
result = (x / y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 / 2)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2147483648 / y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x / 2)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -2;
result = (x / y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 / -2)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (2147483648 / y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x / -2)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 4;
result = (x / y);
check = 536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 / 4)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2147483648 / y)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x / 4)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -4;
result = (x / y);
check = -536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 / -4)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (2147483648 / y)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x / -4)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 8;
result = (x / y);
check = 268435456;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 / 8)
check = 268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2147483648 / y)
check = 268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x / 8)
check = 268435456
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test6() {
var x;
var y;
var result;
var check;

x = 2147483648;
y = -8;
result = (x / y);
check = -268435456;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 / -8)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (2147483648 / y)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x / -8)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 1073741824;
result = (x / y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 / 1073741824)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (2147483648 / y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x / 1073741824)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = (-0x3fffffff-1);
result = (x / y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 / (-0x3fffffff-1))
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (2147483648 / y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x / (-0x3fffffff-1))
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 2147483648;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 / 2147483648)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (2147483648 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x / 2147483648)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -2147483648;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 / -2147483648)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (2147483648 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x / -2147483648)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 1;
result = (x / y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 / 1)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483649 / y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x / 1)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -1;
result = (x / y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 / -1)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2147483649 / y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x / -1)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 3;
result = (x / y);
check = 715827883;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 / 3)
check = 715827883
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2147483649 / y)
check = 715827883
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x / 3)
check = 715827883
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -3;
result = (x / y);
check = -715827883;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 / -3)
check = -715827883
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (2147483649 / y)
check = -715827883
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x / -3)
check = -715827883
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 2147483649;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 / 2147483649)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (2147483649 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x / 2147483649)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -2147483649;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 / -2147483649)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (2147483649 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x / -2147483649)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 1;
result = (x / y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 / 1)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483647 / y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x / 1)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -1;
result = (x / y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 / -1)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2147483647 / y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x / -1)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 2147483647;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 / 2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-2147483647 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x / 2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -2147483647;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 / -2147483647)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-2147483647 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x / -2147483647)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 1;
result = (x / y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 / 1)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483648 / y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x / 1)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -1;
result = (x / y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 / -1)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2147483648 / y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x / -1)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 2;
result = (x / y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 / 2)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2147483648 / y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x / 2)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -2;
result = (x / y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 / -2)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-2147483648 / y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x / -2)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 4;
result = (x / y);
check = -536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 / 4)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2147483648 / y)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x / 4)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -4;
result = (x / y);
check = 536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 / -4)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-2147483648 / y)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x / -4)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 8;
result = (x / y);
check = -268435456;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 / 8)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2147483648 / y)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x / 8)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -8;
result = (x / y);
check = 268435456;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 / -8)
check = 268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-2147483648 / y)
check = 268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x / -8)
check = 268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 1073741824;
result = (x / y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 / 1073741824)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-2147483648 / y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x / 1073741824)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = (-0x3fffffff-1);
result = (x / y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 / (-0x3fffffff-1))
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-2147483648 / y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x / (-0x3fffffff-1))
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test7() {
var x;
var y;
var result;
var check;

x = -2147483648;
y = 2147483648;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 / 2147483648)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-2147483648 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x / 2147483648)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -2147483648;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 / -2147483648)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-2147483648 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x / -2147483648)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 1;
result = (x / y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 / 1)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483649 / y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x / 1)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -1;
result = (x / y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 / -1)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2147483649 / y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x / -1)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 3;
result = (x / y);
check = -715827883;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 / 3)
check = -715827883
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2147483649 / y)
check = -715827883
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x / 3)
check = -715827883
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -3;
result = (x / y);
check = 715827883;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 / -3)
check = 715827883
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-2147483649 / y)
check = 715827883
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x / -3)
check = 715827883
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 2147483649;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 / 2147483649)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-2147483649 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x / 2147483649)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -2147483649;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 / -2147483649)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-2147483649 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x / -2147483649)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 1;
result = (x / y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 / 1)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483650 / y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x / 1)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -1;
result = (x / y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 / -1)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2147483650 / y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x / -1)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 2;
result = (x / y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 / 2)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2147483650 / y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x / 2)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -2;
result = (x / y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 / -2)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-2147483650 / y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x / -2)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 1073741825;
result = (x / y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 / 1073741825)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-2147483650 / y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x / 1073741825)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -1073741825;
result = (x / y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 / -1073741825)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-2147483650 / y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x / -1073741825)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -2147483650;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 / -2147483650)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-2147483650 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x / -2147483650)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 1;
result = (x / y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 / 1)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (4294967295 / y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x / 1)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -1;
result = (x / y);
check = -4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 / -1)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (4294967295 / y)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x / -1)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 3;
result = (x / y);
check = 1431655765;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 / 3)
check = 1431655765
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (4294967295 / y)
check = 1431655765
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x / 3)
check = 1431655765
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -3;
result = (x / y);
check = -1431655765;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 / -3)
check = -1431655765
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (4294967295 / y)
check = -1431655765
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x / -3)
check = -1431655765
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 4294967295;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 / 4294967295)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (4294967295 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x / 4294967295)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -4294967295;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 / -4294967295)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (4294967295 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x / -4294967295)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 1;
result = (x / y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 / 1)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (4294967296 / y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x / 1)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -1;
result = (x / y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 / -1)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (4294967296 / y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x / -1)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 2;
result = (x / y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 / 2)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (4294967296 / y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x / 2)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -2;
result = (x / y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 / -2)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (4294967296 / y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x / -2)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test8() {
var x;
var y;
var result;
var check;

x = 4294967296;
y = 4;
result = (x / y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 / 4)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (4294967296 / y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x / 4)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -4;
result = (x / y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 / -4)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (4294967296 / y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x / -4)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 8;
result = (x / y);
check = 536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 / 8)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (4294967296 / y)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x / 8)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -8;
result = (x / y);
check = -536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 / -8)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (4294967296 / y)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x / -8)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 1073741824;
result = (x / y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 / 1073741824)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (4294967296 / y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x / 1073741824)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = (-0x3fffffff-1);
result = (x / y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 / (-0x3fffffff-1))
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (4294967296 / y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x / (-0x3fffffff-1))
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 2147483648;
result = (x / y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 / 2147483648)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (4294967296 / y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x / 2147483648)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -2147483648;
result = (x / y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 / -2147483648)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (4294967296 / y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x / -2147483648)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 4294967296;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 / 4294967296)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (4294967296 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x / 4294967296)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -4294967296;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 / -4294967296)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (4294967296 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x / -4294967296)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 1;
result = (x / y);
check = -4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 / 1)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-4294967295 / y)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x / 1)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -1;
result = (x / y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 / -1)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-4294967295 / y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x / -1)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 3;
result = (x / y);
check = -1431655765;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 / 3)
check = -1431655765
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-4294967295 / y)
check = -1431655765
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x / 3)
check = -1431655765
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -3;
result = (x / y);
check = 1431655765;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 / -3)
check = 1431655765
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-4294967295 / y)
check = 1431655765
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x / -3)
check = 1431655765
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 4294967295;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 / 4294967295)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-4294967295 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x / 4294967295)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -4294967295;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 / -4294967295)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-4294967295 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x / -4294967295)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 1;
result = (x / y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 / 1)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-4294967296 / y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x / 1)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -1;
result = (x / y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 / -1)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-4294967296 / y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x / -1)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 2;
result = (x / y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 / 2)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-4294967296 / y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x / 2)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -2;
result = (x / y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 / -2)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-4294967296 / y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x / -2)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 4;
result = (x / y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 / 4)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-4294967296 / y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x / 4)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -4;
result = (x / y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 / -4)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-4294967296 / y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x / -4)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 8;
result = (x / y);
check = -536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 / 8)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-4294967296 / y)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x / 8)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -8;
result = (x / y);
check = 536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 / -8)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-4294967296 / y)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x / -8)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 1073741824;
result = (x / y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 / 1073741824)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-4294967296 / y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x / 1073741824)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test9() {
var x;
var y;
var result;
var check;

x = -4294967296;
y = (-0x3fffffff-1);
result = (x / y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 / (-0x3fffffff-1))
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-4294967296 / y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x / (-0x3fffffff-1))
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 2147483648;
result = (x / y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 / 2147483648)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-4294967296 / y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x / 2147483648)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -2147483648;
result = (x / y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 / -2147483648)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-4294967296 / y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x / -2147483648)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 4294967296;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 / 4294967296)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-4294967296 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x / 4294967296)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -4294967296;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 / -4294967296)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-4294967296 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x / -4294967296)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 684451;
result = (x / y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 / 684451)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (0 / y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x / 684451)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 684451;
y = 684451;
result = (x / y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (684451 / 684451)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (684451 / y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 684451;
result = (x / 684451)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -684451;
y = 684451;
result = (x / y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-684451 / 684451)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (-684451 / y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -684451;
result = (x / 684451)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1368902;
y = 684451;
result = (x / y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1368902 / 684451)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (1368902 / y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1368902;
result = (x / 684451)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1368902;
y = 684451;
result = (x / y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1368902 / 684451)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (-1368902 / y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1368902;
result = (x / 684451)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2053353;
y = 684451;
result = (x / y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (2053353 / 684451)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (2053353 / y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2053353;
result = (x / 684451)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2053353;
y = 684451;
result = (x / y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2053353 / 684451)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (-2053353 / y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2053353;
result = (x / 684451)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2737804;
y = 684451;
result = (x / y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (2737804 / 684451)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (2737804 / y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2737804;
result = (x / 684451)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2737804;
y = 684451;
result = (x / y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2737804 / 684451)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (-2737804 / y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2737804;
result = (x / 684451)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 5475608;
y = 684451;
result = (x / y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (5475608 / 684451)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (5475608 / y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 5475608;
result = (x / 684451)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -5475608;
y = 684451;
result = (x / y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-5475608 / 684451)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (-5475608 / y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -5475608;
result = (x / 684451)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 734923663809722;
y = 684451;
result = (x / y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (734923663809722 / 684451)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (734923663809722 / y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 734923663809722;
result = (x / 684451)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 734923664494173;
y = 684451;
result = (x / y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (734923664494173 / 684451)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (734923664494173 / y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 734923664494173;
result = (x / 684451)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 734923665178624;
y = 684451;
result = (x / y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (734923665178624 / 684451)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (734923665178624 / y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 734923665178624;
result = (x / 684451)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 734923665863075;
y = 684451;
result = (x / y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (734923665863075 / 684451)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (734923665863075 / y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 734923665863075;
result = (x / 684451)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -734923664494173;
y = 684451;
result = (x / y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-734923664494173 / 684451)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (-734923664494173 / y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -734923664494173;
result = (x / 684451)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -734923665178624;
y = 684451;
result = (x / y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-734923665178624 / 684451)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (-734923665178624 / y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -734923665178624;
result = (x / 684451)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -734923665863075;
y = 684451;
result = (x / y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-734923665863075 / 684451)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (-734923665863075 / y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -734923665863075;
result = (x / 684451)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -734923666547526;
y = 684451;
result = (x / y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-734923666547526 / 684451)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (-734923666547526 / y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -734923666547526;
result = (x / 684451)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1469847328988346;
y = 684451;
result = (x / y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (1469847328988346 / 684451)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (1469847328988346 / y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1469847328988346;
result = (x / 684451)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test10() {
var x;
var y;
var result;
var check;

x = 1469847329672797;
y = 684451;
result = (x / y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (1469847329672797 / 684451)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (1469847329672797 / y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1469847329672797;
result = (x / 684451)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1469847330357248;
y = 684451;
result = (x / y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (1469847330357248 / 684451)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (1469847330357248 / y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1469847330357248;
result = (x / 684451)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1469847331041699;
y = 684451;
result = (x / y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (1469847331041699 / 684451)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (1469847331041699 / y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1469847331041699;
result = (x / 684451)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1469847329672797;
y = 684451;
result = (x / y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1469847329672797 / 684451)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (-1469847329672797 / y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1469847329672797;
result = (x / 684451)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1469847330357248;
y = 684451;
result = (x / y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1469847330357248 / 684451)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (-1469847330357248 / y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1469847330357248;
result = (x / 684451)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1469847331041699;
y = 684451;
result = (x / y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1469847331041699 / 684451)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (-1469847331041699 / y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1469847331041699;
result = (x / 684451)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1469847331726150;
y = 684451;
result = (x / y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1469847331726150 / 684451)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (-1469847331726150 / y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1469847331726150;
result = (x / 684451)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2939694660030045;
y = 684451;
result = (x / y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (2939694660030045 / 684451)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (2939694660030045 / y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2939694660030045;
result = (x / 684451)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2939694660714496;
y = 684451;
result = (x / y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (2939694660714496 / 684451)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (2939694660714496 / y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2939694660714496;
result = (x / 684451)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2939694660030045;
y = 684451;
result = (x / y);
check = -4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2939694660030045 / 684451)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (-2939694660030045 / y)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2939694660030045;
result = (x / 684451)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2939694660714496;
y = 684451;
result = (x / y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2939694660714496 / 684451)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 684451;
result = (-2939694660714496 / y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2939694660714496;
result = (x / 684451)
check = -4294967296
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
test8();
test9();
test10();

print("pass");
