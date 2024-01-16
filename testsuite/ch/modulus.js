




var test = 1; 
function fail(n, expected, result) { WScript.Echo("failure in test " + test + "; expected " + expected + ", got " + result); }
function test0() {
var x;
var y;
var result;
var check;

x = 0;
y = 7919;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % 7919)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % 7919)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 7919;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % 7919)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % 7919)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 7919;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % 7919)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % 7919)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 7919;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % 7919)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % 7919)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 7919;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % 7919)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % 7919)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 7919;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % 7919)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % 7919)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 7919;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % 7919)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % 7919)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 7919;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % 7919)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % 7919)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 7919;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % 7919)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % 7919)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 7919;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % 7919)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % 7919)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 7919;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % 7919)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % 7919)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 7919;
result = (x % y);
check = 4612;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % 7919)
check = 4612
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (1073741822 % y)
check = 4612
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % 7919)
check = 4612
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 7919;
result = (x % y);
check = 4613;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % 7919)
check = 4613
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (1073741823 % y)
check = 4613
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % 7919)
check = 4613
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 7919;
result = (x % y);
check = 4614;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % 7919)
check = 4614
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (1073741824 % y)
check = 4614
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % 7919)
check = 4614
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 7919;
result = (x % y);
check = 4615;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % 7919)
check = 4615
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (1073741825 % y)
check = 4615
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % 7919)
check = 4615
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 7919;
result = (x % y);
check = -4613;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % 7919)
check = -4613
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (-1073741823 % y)
check = -4613
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % 7919)
check = -4613
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 7919;
result = (x % y);
check = -4614;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % 7919)
check = -4614
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = ((-0x3fffffff-1) % y)
check = -4614
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % 7919)
check = -4614
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 7919;
result = (x % y);
check = -4615;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % 7919)
check = -4615
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (-1073741825 % y)
check = -4615
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % 7919)
check = -4615
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 7919;
result = (x % y);
check = -4616;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % 7919)
check = -4616
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (-1073741826 % y)
check = -4616
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % 7919)
check = -4616
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 7919;
result = (x % y);
check = 1307;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % 7919)
check = 1307
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (2147483646 % y)
check = 1307
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % 7919)
check = 1307
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 7919;
result = (x % y);
check = 1308;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % 7919)
check = 1308
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (2147483647 % y)
check = 1308
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % 7919)
check = 1308
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 7919;
result = (x % y);
check = 1309;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % 7919)
check = 1309
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (2147483648 % y)
check = 1309
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % 7919)
check = 1309
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 7919;
result = (x % y);
check = 1310;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % 7919)
check = 1310
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (2147483649 % y)
check = 1310
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % 7919)
check = 1310
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 7919;
result = (x % y);
check = -1308;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % 7919)
check = -1308
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (-2147483647 % y)
check = -1308
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % 7919)
check = -1308
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 7919;
result = (x % y);
check = -1309;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % 7919)
check = -1309
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (-2147483648 % y)
check = -1309
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % 7919)
check = -1309
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test1() {
var x;
var y;
var result;
var check;

x = -2147483649;
y = 7919;
result = (x % y);
check = -1310;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % 7919)
check = -1310
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (-2147483649 % y)
check = -1310
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % 7919)
check = -1310
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 7919;
result = (x % y);
check = -1311;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % 7919)
check = -1311
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (-2147483650 % y)
check = -1311
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % 7919)
check = -1311
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 7919;
result = (x % y);
check = 2617;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % 7919)
check = 2617
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (4294967295 % y)
check = 2617
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % 7919)
check = 2617
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 7919;
result = (x % y);
check = 2618;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % 7919)
check = 2618
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (4294967296 % y)
check = 2618
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % 7919)
check = 2618
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 7919;
result = (x % y);
check = -2617;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % 7919)
check = -2617
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (-4294967295 % y)
check = -2617
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % 7919)
check = -2617
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 7919;
result = (x % y);
check = -2618;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % 7919)
check = -2618
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7919;
result = (-4294967296 % y)
check = -2618
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % 7919)
check = -2618
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 8;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -8;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1073741822;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % 1073741822)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % 1073741822)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1073741823;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % 1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % 1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1073741824;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1073741825;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % 1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % 1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -1073741823;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % -1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % -1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = (-0x3fffffff-1);
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -1073741825;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % -1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % -1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -1073741826;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % -1073741826)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % -1073741826)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2147483646;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % 2147483646)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % 2147483646)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test2() {
var x;
var y;
var result;
var check;

x = 0;
y = 2147483647;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % 2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % 2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2147483648;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % 2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % 2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2147483649;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % 2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % 2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -2147483647;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % -2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % -2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -2147483648;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % -2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % -2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -2147483649;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % -2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % -2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -2147483650;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % -2147483650)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % -2147483650)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 4294967295;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % 4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % 4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 4294967296;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % 4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % 4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -4294967295;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % -4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % -4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -4294967296;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 % -4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (0 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x % -4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 2;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -2;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % -2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % -2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 3;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % 3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % 3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -3;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % -3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % -3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 4;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % 4)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % 4)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -4;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % -4)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % -4)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 8;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % 8)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % 8)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -8;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % -8)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % -8)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 1073741822;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % 1073741822)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % 1073741822)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 1073741823;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % 1073741823)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % 1073741823)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 1073741824;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % 1073741824)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % 1073741824)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 1073741825;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % 1073741825)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % 1073741825)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test3() {
var x;
var y;
var result;
var check;

x = 1;
y = -1073741823;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % -1073741823)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % -1073741823)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = (-0x3fffffff-1);
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % (-0x3fffffff-1))
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % (-0x3fffffff-1))
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -1073741825;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % -1073741825)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % -1073741825)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -1073741826;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % -1073741826)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % -1073741826)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 2147483646;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % 2147483646)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % 2147483646)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 2147483647;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % 2147483647)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % 2147483647)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 2147483648;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % 2147483648)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % 2147483648)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 2147483649;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % 2147483649)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % 2147483649)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -2147483647;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % -2147483647)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % -2147483647)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -2147483648;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % -2147483648)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % -2147483648)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -2147483649;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % -2147483649)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % -2147483649)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -2147483650;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % -2147483650)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % -2147483650)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 4294967295;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % 4294967295)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % 4294967295)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 4294967296;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % 4294967296)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % 4294967296)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -4294967295;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % -4294967295)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % -4294967295)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -4294967296;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 % -4294967296)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (1 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x % -4294967296)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-1 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 2;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -2;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % -2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % -2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 3;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -3;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % -3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % -3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 4;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -4;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % -4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % -4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 8;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test4() {
var x;
var y;
var result;
var check;

x = -1;
y = -8;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % -8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % -8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 1073741822;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % 1073741822)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % 1073741822)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 1073741823;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % 1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % 1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 1073741824;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % 1073741824)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % 1073741824)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 1073741825;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % 1073741825)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % 1073741825)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -1073741823;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % -1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % -1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = (-0x3fffffff-1);
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % (-0x3fffffff-1))
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % (-0x3fffffff-1))
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -1073741825;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % -1073741825)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % -1073741825)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -1073741826;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % -1073741826)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % -1073741826)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 2147483646;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % 2147483646)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % 2147483646)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 2147483647;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % 2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % 2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 2147483648;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % 2147483648)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % 2147483648)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 2147483649;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % 2147483649)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % 2147483649)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -2147483647;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % -2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % -2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -2147483648;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % -2147483648)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % -2147483648)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -2147483649;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % -2147483649)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % -2147483649)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -2147483650;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % -2147483650)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % -2147483650)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 4294967295;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % 4294967295)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % 4294967295)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 4294967296;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % 4294967296)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % 4294967296)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -4294967295;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % -4294967295)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % -4294967295)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -4294967296;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 % -4294967296)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-1 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x % -4294967296)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (2 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test5() {
var x;
var y;
var result;
var check;

x = 2;
y = 3;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % 3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % 3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -3;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % -3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % -3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 4;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % 4)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % 4)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -4;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % -4)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % -4)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 8;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % 8)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % 8)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -8;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % -8)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % -8)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 1073741822;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % 1073741822)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % 1073741822)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 1073741823;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % 1073741823)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % 1073741823)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 1073741824;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % 1073741824)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % 1073741824)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 1073741825;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % 1073741825)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % 1073741825)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -1073741823;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % -1073741823)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % -1073741823)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = (-0x3fffffff-1);
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % (-0x3fffffff-1))
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % (-0x3fffffff-1))
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -1073741825;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % -1073741825)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % -1073741825)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -1073741826;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % -1073741826)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % -1073741826)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 2147483646;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % 2147483646)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % 2147483646)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 2147483647;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % 2147483647)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % 2147483647)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 2147483648;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % 2147483648)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % 2147483648)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 2147483649;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % 2147483649)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % 2147483649)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -2147483647;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % -2147483647)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % -2147483647)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -2147483648;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % -2147483648)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % -2147483648)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -2147483649;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % -2147483649)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % -2147483649)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -2147483650;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % -2147483650)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % -2147483650)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 4294967295;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % 4294967295)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % 4294967295)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 4294967296;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % 4294967296)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % 4294967296)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -4294967295;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % -4294967295)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % -4294967295)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test6() {
var x;
var y;
var result;
var check;

x = 2;
y = -4294967296;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 % -4294967296)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (2 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x % -4294967296)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-2 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 3;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % 3)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % 3)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -3;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % -3)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % -3)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 4;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % 4)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % 4)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -4;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % -4)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % -4)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 8;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % 8)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % 8)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -8;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % -8)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % -8)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 1073741822;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % 1073741822)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % 1073741822)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 1073741823;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % 1073741823)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % 1073741823)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 1073741824;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % 1073741824)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % 1073741824)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 1073741825;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % 1073741825)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % 1073741825)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -1073741823;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % -1073741823)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % -1073741823)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = (-0x3fffffff-1);
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % (-0x3fffffff-1))
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % (-0x3fffffff-1))
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -1073741825;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % -1073741825)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % -1073741825)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -1073741826;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % -1073741826)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % -1073741826)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 2147483646;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % 2147483646)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % 2147483646)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 2147483647;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % 2147483647)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % 2147483647)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 2147483648;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % 2147483648)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % 2147483648)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 2147483649;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % 2147483649)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % 2147483649)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -2147483647;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % -2147483647)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % -2147483647)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -2147483648;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % -2147483648)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % -2147483648)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test7() {
var x;
var y;
var result;
var check;

x = -2;
y = -2147483649;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % -2147483649)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % -2147483649)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -2147483650;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % -2147483650)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % -2147483650)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 4294967295;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % 4294967295)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % 4294967295)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 4294967296;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % 4294967296)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % 4294967296)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -4294967295;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % -4294967295)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % -4294967295)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -4294967296;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 % -4294967296)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-2 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x % -4294967296)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (3 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (3 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 2;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (3 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -2;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % -2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (3 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % -2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (3 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (3 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 4;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % 4)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % 4)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -4;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % -4)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % -4)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 8;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % 8)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % 8)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -8;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % -8)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % -8)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 1073741822;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % 1073741822)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % 1073741822)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 1073741823;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % 1073741823)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % 1073741823)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 1073741824;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % 1073741824)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % 1073741824)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 1073741825;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % 1073741825)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % 1073741825)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -1073741823;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % -1073741823)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % -1073741823)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = (-0x3fffffff-1);
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % (-0x3fffffff-1))
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % (-0x3fffffff-1))
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -1073741825;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % -1073741825)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % -1073741825)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -1073741826;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % -1073741826)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % -1073741826)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 2147483646;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % 2147483646)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % 2147483646)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test8() {
var x;
var y;
var result;
var check;

x = 3;
y = 2147483647;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % 2147483647)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % 2147483647)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 2147483648;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % 2147483648)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % 2147483648)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 2147483649;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % 2147483649)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % 2147483649)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -2147483647;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % -2147483647)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % -2147483647)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -2147483648;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % -2147483648)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % -2147483648)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -2147483649;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % -2147483649)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % -2147483649)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -2147483650;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % -2147483650)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % -2147483650)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 4294967295;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % 4294967295)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % 4294967295)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 4294967296;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % 4294967296)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % 4294967296)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -4294967295;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % -4294967295)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % -4294967295)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -4294967296;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 % -4294967296)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (3 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x % -4294967296)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-3 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-3 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 2;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-3 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -2;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % -2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-3 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % -2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-3 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-3 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 4;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % 4)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % 4)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -4;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % -4)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % -4)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 8;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % 8)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % 8)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -8;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % -8)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % -8)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 1073741822;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % 1073741822)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % 1073741822)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 1073741823;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % 1073741823)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % 1073741823)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 1073741824;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % 1073741824)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % 1073741824)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 1073741825;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % 1073741825)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % 1073741825)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test9() {
var x;
var y;
var result;
var check;

x = -3;
y = -1073741823;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % -1073741823)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % -1073741823)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = (-0x3fffffff-1);
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % (-0x3fffffff-1))
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % (-0x3fffffff-1))
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -1073741825;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % -1073741825)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % -1073741825)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -1073741826;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % -1073741826)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % -1073741826)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 2147483646;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % 2147483646)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % 2147483646)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 2147483647;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % 2147483647)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % 2147483647)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 2147483648;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % 2147483648)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % 2147483648)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 2147483649;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % 2147483649)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % 2147483649)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -2147483647;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % -2147483647)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % -2147483647)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -2147483648;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % -2147483648)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % -2147483648)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -2147483649;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % -2147483649)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % -2147483649)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -2147483650;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % -2147483650)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % -2147483650)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 4294967295;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % 4294967295)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % 4294967295)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 4294967296;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % 4294967296)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % 4294967296)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -4294967295;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % -4294967295)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % -4294967295)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -4294967296;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 % -4294967296)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-3 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x % -4294967296)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (4 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (4 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (4 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (4 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 3;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % 3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (4 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % 3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -3;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % -3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (4 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % -3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (4 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (4 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 8;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % 8)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % 8)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test10() {
var x;
var y;
var result;
var check;

x = 4;
y = -8;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % -8)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % -8)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 1073741822;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % 1073741822)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % 1073741822)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 1073741823;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % 1073741823)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % 1073741823)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 1073741824;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % 1073741824)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % 1073741824)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 1073741825;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % 1073741825)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % 1073741825)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -1073741823;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % -1073741823)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % -1073741823)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = (-0x3fffffff-1);
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % (-0x3fffffff-1))
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % (-0x3fffffff-1))
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -1073741825;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % -1073741825)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % -1073741825)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -1073741826;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % -1073741826)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % -1073741826)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 2147483646;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % 2147483646)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % 2147483646)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 2147483647;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % 2147483647)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % 2147483647)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 2147483648;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % 2147483648)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % 2147483648)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 2147483649;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % 2147483649)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % 2147483649)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -2147483647;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % -2147483647)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % -2147483647)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -2147483648;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % -2147483648)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % -2147483648)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -2147483649;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % -2147483649)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % -2147483649)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -2147483650;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % -2147483650)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % -2147483650)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 4294967295;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % 4294967295)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % 4294967295)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 4294967296;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % 4294967296)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % 4294967296)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -4294967295;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % -4294967295)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % -4294967295)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -4294967296;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 % -4294967296)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (4 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x % -4294967296)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-4 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-4 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-4 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-4 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test11() {
var x;
var y;
var result;
var check;

x = -4;
y = 3;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-4 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -3;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % -3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-4 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % -3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-4 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-4 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 8;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % 8)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % 8)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -8;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % -8)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % -8)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 1073741822;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % 1073741822)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % 1073741822)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 1073741823;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % 1073741823)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % 1073741823)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 1073741824;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % 1073741824)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % 1073741824)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 1073741825;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % 1073741825)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % 1073741825)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -1073741823;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % -1073741823)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % -1073741823)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = (-0x3fffffff-1);
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % (-0x3fffffff-1))
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % (-0x3fffffff-1))
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -1073741825;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % -1073741825)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % -1073741825)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -1073741826;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % -1073741826)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % -1073741826)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 2147483646;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % 2147483646)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % 2147483646)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 2147483647;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % 2147483647)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % 2147483647)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 2147483648;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % 2147483648)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % 2147483648)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 2147483649;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % 2147483649)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % 2147483649)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -2147483647;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % -2147483647)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % -2147483647)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -2147483648;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % -2147483648)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % -2147483648)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -2147483649;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % -2147483649)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % -2147483649)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -2147483650;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % -2147483650)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % -2147483650)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 4294967295;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % 4294967295)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % 4294967295)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 4294967296;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % 4294967296)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % 4294967296)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -4294967295;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % -4294967295)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % -4294967295)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test12() {
var x;
var y;
var result;
var check;

x = -4;
y = -4294967296;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 % -4294967296)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-4 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x % -4294967296)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (8 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (8 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (8 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (8 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 3;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % 3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (8 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % 3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -3;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % -3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (8 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % -3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (8 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (8 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 8;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (8 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -8;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (8 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 1073741822;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % 1073741822)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % 1073741822)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 1073741823;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % 1073741823)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % 1073741823)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 1073741824;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % 1073741824)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % 1073741824)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 1073741825;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % 1073741825)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % 1073741825)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -1073741823;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % -1073741823)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % -1073741823)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = (-0x3fffffff-1);
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % (-0x3fffffff-1))
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % (-0x3fffffff-1))
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -1073741825;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % -1073741825)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % -1073741825)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -1073741826;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % -1073741826)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % -1073741826)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 2147483646;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % 2147483646)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % 2147483646)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 2147483647;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % 2147483647)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % 2147483647)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 2147483648;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % 2147483648)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % 2147483648)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 2147483649;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % 2147483649)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % 2147483649)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -2147483647;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % -2147483647)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % -2147483647)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -2147483648;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % -2147483648)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % -2147483648)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test13() {
var x;
var y;
var result;
var check;

x = 8;
y = -2147483649;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % -2147483649)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % -2147483649)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -2147483650;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % -2147483650)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % -2147483650)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 4294967295;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % 4294967295)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % 4294967295)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 4294967296;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % 4294967296)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % 4294967296)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -4294967295;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % -4294967295)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % -4294967295)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -4294967296;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 % -4294967296)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (8 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x % -4294967296)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-8 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-8 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-8 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-8 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 3;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % 3)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-8 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % 3)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -3;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % -3)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-8 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % -3)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-8 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-8 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 8;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-8 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -8;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-8 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 1073741822;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % 1073741822)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % 1073741822)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 1073741823;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % 1073741823)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % 1073741823)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 1073741824;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % 1073741824)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % 1073741824)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 1073741825;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % 1073741825)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % 1073741825)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -1073741823;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % -1073741823)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % -1073741823)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = (-0x3fffffff-1);
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % (-0x3fffffff-1))
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % (-0x3fffffff-1))
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -1073741825;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % -1073741825)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % -1073741825)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -1073741826;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % -1073741826)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % -1073741826)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 2147483646;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % 2147483646)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % 2147483646)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test14() {
var x;
var y;
var result;
var check;

x = -8;
y = 2147483647;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % 2147483647)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % 2147483647)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 2147483648;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % 2147483648)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % 2147483648)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 2147483649;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % 2147483649)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % 2147483649)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -2147483647;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % -2147483647)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % -2147483647)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -2147483648;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % -2147483648)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % -2147483648)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -2147483649;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % -2147483649)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % -2147483649)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -2147483650;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % -2147483650)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % -2147483650)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 4294967295;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % 4294967295)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % 4294967295)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 4294967296;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % 4294967296)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % 4294967296)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -4294967295;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % -4294967295)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % -4294967295)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -4294967296;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 % -4294967296)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-8 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x % -4294967296)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741822 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1073741822 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1073741822 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (1073741822 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 3;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % 3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1073741822 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % 3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -3;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % -3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (1073741822 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % -3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 4;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % 4)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1073741822 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % 4)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -4;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % -4)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (1073741822 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % -4)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 8;
result = (x % y);
check = 6;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % 8)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1073741822 % y)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % 8)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -8;
result = (x % y);
check = 6;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % -8)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (1073741822 % y)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % -8)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 1073741822;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % 1073741822)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (1073741822 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % 1073741822)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 1073741823;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % 1073741823)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % 1073741823)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 1073741824;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % 1073741824)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % 1073741824)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 1073741825;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % 1073741825)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % 1073741825)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test15() {
var x;
var y;
var result;
var check;

x = 1073741822;
y = -1073741823;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % -1073741823)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % -1073741823)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = (-0x3fffffff-1);
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % (-0x3fffffff-1))
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % (-0x3fffffff-1))
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -1073741825;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % -1073741825)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % -1073741825)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -1073741826;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % -1073741826)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % -1073741826)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 2147483646;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % 2147483646)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % 2147483646)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 2147483647;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % 2147483647)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % 2147483647)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 2147483648;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % 2147483648)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % 2147483648)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 2147483649;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % 2147483649)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % 2147483649)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -2147483647;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % -2147483647)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % -2147483647)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -2147483648;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % -2147483648)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % -2147483648)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -2147483649;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % -2147483649)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % -2147483649)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -2147483650;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % -2147483650)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % -2147483650)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 4294967295;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % 4294967295)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % 4294967295)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 4294967296;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % 4294967296)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % 4294967296)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -4294967295;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % -4294967295)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % -4294967295)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -4294967296;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 % -4294967296)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (1073741822 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x % -4294967296)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741823 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1073741823 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 2;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1073741823 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -2;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % -2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (1073741823 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % -2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1073741823 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (1073741823 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 4;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % 4)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1073741823 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % 4)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -4;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % -4)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (1073741823 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % -4)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 8;
result = (x % y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % 8)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1073741823 % y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % 8)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test16() {
var x;
var y;
var result;
var check;

x = 1073741823;
y = -8;
result = (x % y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % -8)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (1073741823 % y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % -8)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 1073741822;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % 1073741822)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (1073741823 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % 1073741822)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 1073741823;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % 1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (1073741823 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % 1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 1073741824;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % 1073741824)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (1073741823 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % 1073741824)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 1073741825;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % 1073741825)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (1073741823 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % 1073741825)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -1073741823;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % -1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (1073741823 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % -1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = (-0x3fffffff-1);
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % (-0x3fffffff-1))
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (1073741823 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % (-0x3fffffff-1))
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -1073741825;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % -1073741825)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (1073741823 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % -1073741825)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -1073741826;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % -1073741826)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (1073741823 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % -1073741826)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 2147483646;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % 2147483646)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (1073741823 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % 2147483646)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 2147483647;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % 2147483647)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (1073741823 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % 2147483647)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 2147483648;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % 2147483648)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (1073741823 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % 2147483648)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 2147483649;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % 2147483649)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (1073741823 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % 2147483649)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -2147483647;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % -2147483647)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (1073741823 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % -2147483647)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -2147483648;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % -2147483648)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (1073741823 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % -2147483648)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -2147483649;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % -2147483649)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (1073741823 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % -2147483649)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -2147483650;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % -2147483650)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (1073741823 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % -2147483650)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 4294967295;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % 4294967295)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (1073741823 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % 4294967295)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 4294967296;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % 4294967296)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (1073741823 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % 4294967296)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -4294967295;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % -4294967295)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (1073741823 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % -4294967295)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -4294967296;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 % -4294967296)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (1073741823 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x % -4294967296)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741824 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1073741824 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1073741824 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (1073741824 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test17() {
var x;
var y;
var result;
var check;

x = 1073741824;
y = 3;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % 3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1073741824 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % 3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -3;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % -3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (1073741824 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % -3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1073741824 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (1073741824 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 8;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1073741824 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -8;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (1073741824 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 1073741822;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % 1073741822)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (1073741824 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % 1073741822)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 1073741823;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % 1073741823)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (1073741824 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % 1073741823)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 1073741824;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (1073741824 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 1073741825;
result = (x % y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % 1073741825)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (1073741824 % y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % 1073741825)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -1073741823;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % -1073741823)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (1073741824 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % -1073741823)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = (-0x3fffffff-1);
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (1073741824 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -1073741825;
result = (x % y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % -1073741825)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (1073741824 % y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % -1073741825)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -1073741826;
result = (x % y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % -1073741826)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (1073741824 % y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % -1073741826)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 2147483646;
result = (x % y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % 2147483646)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (1073741824 % y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % 2147483646)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 2147483647;
result = (x % y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % 2147483647)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (1073741824 % y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % 2147483647)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 2147483648;
result = (x % y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % 2147483648)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (1073741824 % y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % 2147483648)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 2147483649;
result = (x % y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % 2147483649)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (1073741824 % y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % 2147483649)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -2147483647;
result = (x % y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % -2147483647)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (1073741824 % y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % -2147483647)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -2147483648;
result = (x % y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % -2147483648)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (1073741824 % y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % -2147483648)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -2147483649;
result = (x % y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % -2147483649)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (1073741824 % y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % -2147483649)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -2147483650;
result = (x % y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % -2147483650)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (1073741824 % y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % -2147483650)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 4294967295;
result = (x % y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % 4294967295)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (1073741824 % y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % 4294967295)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 4294967296;
result = (x % y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % 4294967296)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (1073741824 % y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % 4294967296)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -4294967295;
result = (x % y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % -4294967295)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (1073741824 % y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % -4294967295)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test18() {
var x;
var y;
var result;
var check;

x = 1073741824;
y = -4294967296;
result = (x % y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 % -4294967296)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (1073741824 % y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x % -4294967296)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741825 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1073741825 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 2;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1073741825 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -2;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % -2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (1073741825 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % -2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 3;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % 3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1073741825 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % 3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -3;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % -3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (1073741825 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % -3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 4;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % 4)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1073741825 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % 4)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -4;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % -4)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (1073741825 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % -4)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 8;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % 8)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1073741825 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % 8)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -8;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % -8)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (1073741825 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % -8)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 1073741822;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % 1073741822)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (1073741825 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % 1073741822)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 1073741823;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % 1073741823)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (1073741825 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % 1073741823)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 1073741824;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % 1073741824)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (1073741825 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % 1073741824)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 1073741825;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % 1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (1073741825 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % 1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -1073741823;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % -1073741823)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (1073741825 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % -1073741823)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = (-0x3fffffff-1);
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % (-0x3fffffff-1))
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (1073741825 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % (-0x3fffffff-1))
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -1073741825;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % -1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (1073741825 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % -1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -1073741826;
result = (x % y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % -1073741826)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (1073741825 % y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % -1073741826)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 2147483646;
result = (x % y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % 2147483646)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (1073741825 % y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % 2147483646)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 2147483647;
result = (x % y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % 2147483647)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (1073741825 % y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % 2147483647)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 2147483648;
result = (x % y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % 2147483648)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (1073741825 % y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % 2147483648)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 2147483649;
result = (x % y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % 2147483649)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (1073741825 % y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % 2147483649)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -2147483647;
result = (x % y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % -2147483647)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (1073741825 % y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % -2147483647)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -2147483648;
result = (x % y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % -2147483648)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (1073741825 % y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % -2147483648)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test19() {
var x;
var y;
var result;
var check;

x = 1073741825;
y = -2147483649;
result = (x % y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % -2147483649)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (1073741825 % y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % -2147483649)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -2147483650;
result = (x % y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % -2147483650)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (1073741825 % y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % -2147483650)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 4294967295;
result = (x % y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % 4294967295)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (1073741825 % y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % 4294967295)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 4294967296;
result = (x % y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % 4294967296)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (1073741825 % y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % 4294967296)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -4294967295;
result = (x % y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % -4294967295)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (1073741825 % y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % -4294967295)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -4294967296;
result = (x % y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 % -4294967296)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (1073741825 % y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x % -4294967296)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1073741823 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-1073741823 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 2;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-1073741823 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -2;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % -2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-1073741823 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % -2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-1073741823 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-1073741823 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 4;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % 4)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-1073741823 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % 4)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -4;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % -4)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-1073741823 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % -4)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 8;
result = (x % y);
check = -7;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % 8)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-1073741823 % y)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % 8)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -8;
result = (x % y);
check = -7;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % -8)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-1073741823 % y)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % -8)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 1073741822;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % 1073741822)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-1073741823 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % 1073741822)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 1073741823;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % 1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-1073741823 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % 1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 1073741824;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % 1073741824)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-1073741823 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % 1073741824)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 1073741825;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % 1073741825)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-1073741823 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % 1073741825)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -1073741823;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % -1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-1073741823 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % -1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = (-0x3fffffff-1);
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % (-0x3fffffff-1))
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-1073741823 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % (-0x3fffffff-1))
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -1073741825;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % -1073741825)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-1073741823 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % -1073741825)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -1073741826;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % -1073741826)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-1073741823 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % -1073741826)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 2147483646;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % 2147483646)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-1073741823 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % 2147483646)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test20() {
var x;
var y;
var result;
var check;

x = -1073741823;
y = 2147483647;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % 2147483647)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-1073741823 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % 2147483647)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 2147483648;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % 2147483648)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-1073741823 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % 2147483648)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 2147483649;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % 2147483649)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-1073741823 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % 2147483649)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -2147483647;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % -2147483647)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-1073741823 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % -2147483647)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -2147483648;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % -2147483648)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-1073741823 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % -2147483648)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -2147483649;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % -2147483649)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-1073741823 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % -2147483649)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -2147483650;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % -2147483650)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-1073741823 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % -2147483650)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 4294967295;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % 4294967295)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-1073741823 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % 4294967295)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 4294967296;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % 4294967296)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-1073741823 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % 4294967296)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -4294967295;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % -4294967295)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-1073741823 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % -4294967295)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -4294967296;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 % -4294967296)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-1073741823 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x % -4294967296)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = ((-0x3fffffff-1) % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = ((-0x3fffffff-1) % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = ((-0x3fffffff-1) % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = ((-0x3fffffff-1) % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 3;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = ((-0x3fffffff-1) % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -3;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % -3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = ((-0x3fffffff-1) % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % -3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = ((-0x3fffffff-1) % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = ((-0x3fffffff-1) % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 8;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = ((-0x3fffffff-1) % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -8;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = ((-0x3fffffff-1) % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 1073741822;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % 1073741822)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = ((-0x3fffffff-1) % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % 1073741822)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 1073741823;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % 1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = ((-0x3fffffff-1) % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % 1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 1073741824;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = ((-0x3fffffff-1) % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 1073741825;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % 1073741825)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = ((-0x3fffffff-1) % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % 1073741825)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test21() {
var x;
var y;
var result;
var check;

x = (-0x3fffffff-1);
y = -1073741823;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % -1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = ((-0x3fffffff-1) % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % -1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = (-0x3fffffff-1);
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = ((-0x3fffffff-1) % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -1073741825;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % -1073741825)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = ((-0x3fffffff-1) % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % -1073741825)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -1073741826;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % -1073741826)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = ((-0x3fffffff-1) % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % -1073741826)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 2147483646;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % 2147483646)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = ((-0x3fffffff-1) % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % 2147483646)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 2147483647;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % 2147483647)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = ((-0x3fffffff-1) % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % 2147483647)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 2147483648;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % 2147483648)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = ((-0x3fffffff-1) % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % 2147483648)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 2147483649;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % 2147483649)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = ((-0x3fffffff-1) % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % 2147483649)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -2147483647;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % -2147483647)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = ((-0x3fffffff-1) % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % -2147483647)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -2147483648;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % -2147483648)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = ((-0x3fffffff-1) % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % -2147483648)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -2147483649;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % -2147483649)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = ((-0x3fffffff-1) % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % -2147483649)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -2147483650;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % -2147483650)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = ((-0x3fffffff-1) % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % -2147483650)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 4294967295;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % 4294967295)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = ((-0x3fffffff-1) % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % 4294967295)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 4294967296;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % 4294967296)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = ((-0x3fffffff-1) % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % 4294967296)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -4294967295;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % -4294967295)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = ((-0x3fffffff-1) % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % -4294967295)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -4294967296;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) % -4294967296)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = ((-0x3fffffff-1) % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x % -4294967296)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1073741825 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-1073741825 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 2;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-1073741825 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -2;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % -2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-1073741825 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % -2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 3;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % 3)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-1073741825 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % 3)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -3;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % -3)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-1073741825 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % -3)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 4;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-1073741825 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -4;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % -4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-1073741825 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % -4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 8;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-1073741825 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test22() {
var x;
var y;
var result;
var check;

x = -1073741825;
y = -8;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % -8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-1073741825 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % -8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 1073741822;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % 1073741822)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-1073741825 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % 1073741822)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 1073741823;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % 1073741823)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-1073741825 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % 1073741823)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 1073741824;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % 1073741824)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-1073741825 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % 1073741824)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 1073741825;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % 1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-1073741825 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % 1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -1073741823;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % -1073741823)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-1073741825 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % -1073741823)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = (-0x3fffffff-1);
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % (-0x3fffffff-1))
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-1073741825 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % (-0x3fffffff-1))
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -1073741825;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % -1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-1073741825 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % -1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -1073741826;
result = (x % y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % -1073741826)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-1073741825 % y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % -1073741826)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 2147483646;
result = (x % y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % 2147483646)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-1073741825 % y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % 2147483646)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 2147483647;
result = (x % y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % 2147483647)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-1073741825 % y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % 2147483647)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 2147483648;
result = (x % y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % 2147483648)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-1073741825 % y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % 2147483648)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 2147483649;
result = (x % y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % 2147483649)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-1073741825 % y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % 2147483649)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -2147483647;
result = (x % y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % -2147483647)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-1073741825 % y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % -2147483647)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -2147483648;
result = (x % y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % -2147483648)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-1073741825 % y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % -2147483648)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -2147483649;
result = (x % y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % -2147483649)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-1073741825 % y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % -2147483649)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -2147483650;
result = (x % y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % -2147483650)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-1073741825 % y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % -2147483650)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 4294967295;
result = (x % y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % 4294967295)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-1073741825 % y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % 4294967295)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 4294967296;
result = (x % y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % 4294967296)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-1073741825 % y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % 4294967296)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -4294967295;
result = (x % y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % -4294967295)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-1073741825 % y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % -4294967295)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -4294967296;
result = (x % y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 % -4294967296)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-1073741825 % y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x % -4294967296)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1073741826 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-1073741826 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-1073741826 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-1073741826 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test23() {
var x;
var y;
var result;
var check;

x = -1073741826;
y = 3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-1073741826 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-1073741826 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 4;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % 4)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-1073741826 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % 4)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -4;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % -4)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-1073741826 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % -4)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 8;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % 8)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-1073741826 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % 8)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -8;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % -8)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-1073741826 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % -8)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 1073741822;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % 1073741822)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-1073741826 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % 1073741822)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 1073741823;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % 1073741823)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-1073741826 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % 1073741823)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 1073741824;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % 1073741824)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-1073741826 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % 1073741824)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 1073741825;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % 1073741825)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-1073741826 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % 1073741825)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -1073741823;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % -1073741823)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-1073741826 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % -1073741823)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = (-0x3fffffff-1);
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % (-0x3fffffff-1))
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-1073741826 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % (-0x3fffffff-1))
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -1073741825;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % -1073741825)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-1073741826 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % -1073741825)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -1073741826;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % -1073741826)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-1073741826 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % -1073741826)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 2147483646;
result = (x % y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % 2147483646)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-1073741826 % y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % 2147483646)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 2147483647;
result = (x % y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % 2147483647)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-1073741826 % y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % 2147483647)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 2147483648;
result = (x % y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % 2147483648)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-1073741826 % y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % 2147483648)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 2147483649;
result = (x % y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % 2147483649)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-1073741826 % y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % 2147483649)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -2147483647;
result = (x % y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % -2147483647)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-1073741826 % y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % -2147483647)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -2147483648;
result = (x % y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % -2147483648)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-1073741826 % y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % -2147483648)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -2147483649;
result = (x % y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % -2147483649)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-1073741826 % y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % -2147483649)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -2147483650;
result = (x % y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % -2147483650)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-1073741826 % y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % -2147483650)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 4294967295;
result = (x % y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % 4294967295)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-1073741826 % y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % 4294967295)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 4294967296;
result = (x % y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % 4294967296)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-1073741826 % y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % 4294967296)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -4294967295;
result = (x % y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % -4294967295)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-1073741826 % y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % -4294967295)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test24() {
var x;
var y;
var result;
var check;

x = -1073741826;
y = -4294967296;
result = (x % y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 % -4294967296)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-1073741826 % y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x % -4294967296)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483646 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2147483646 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2147483646 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (2147483646 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2147483646 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (2147483646 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 4;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % 4)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2147483646 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % 4)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -4;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % -4)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (2147483646 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % -4)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 8;
result = (x % y);
check = 6;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % 8)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2147483646 % y)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % 8)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -8;
result = (x % y);
check = 6;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % -8)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (2147483646 % y)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % -8)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 1073741822;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % 1073741822)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (2147483646 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % 1073741822)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 1073741823;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % 1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (2147483646 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % 1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 1073741824;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % 1073741824)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (2147483646 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % 1073741824)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 1073741825;
result = (x % y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % 1073741825)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (2147483646 % y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % 1073741825)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -1073741823;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % -1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (2147483646 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % -1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = (-0x3fffffff-1);
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % (-0x3fffffff-1))
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (2147483646 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % (-0x3fffffff-1))
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -1073741825;
result = (x % y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % -1073741825)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (2147483646 % y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % -1073741825)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -1073741826;
result = (x % y);
check = 1073741820;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % -1073741826)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (2147483646 % y)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % -1073741826)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 2147483646;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % 2147483646)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (2147483646 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % 2147483646)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 2147483647;
result = (x % y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % 2147483647)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (2147483646 % y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % 2147483647)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 2147483648;
result = (x % y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % 2147483648)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (2147483646 % y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % 2147483648)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 2147483649;
result = (x % y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % 2147483649)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (2147483646 % y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % 2147483649)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -2147483647;
result = (x % y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % -2147483647)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (2147483646 % y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % -2147483647)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -2147483648;
result = (x % y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % -2147483648)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (2147483646 % y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % -2147483648)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test25() {
var x;
var y;
var result;
var check;

x = 2147483646;
y = -2147483649;
result = (x % y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % -2147483649)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (2147483646 % y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % -2147483649)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -2147483650;
result = (x % y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % -2147483650)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (2147483646 % y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % -2147483650)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 4294967295;
result = (x % y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % 4294967295)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (2147483646 % y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % 4294967295)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 4294967296;
result = (x % y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % 4294967296)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (2147483646 % y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % 4294967296)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -4294967295;
result = (x % y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % -4294967295)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (2147483646 % y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % -4294967295)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -4294967296;
result = (x % y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 % -4294967296)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (2147483646 % y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x % -4294967296)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483647 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2147483647 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 2;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2147483647 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -2;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % -2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (2147483647 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % -2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 3;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % 3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2147483647 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % 3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -3;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % -3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (2147483647 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % -3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 4;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % 4)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2147483647 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % 4)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -4;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % -4)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (2147483647 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % -4)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 8;
result = (x % y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % 8)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2147483647 % y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % 8)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -8;
result = (x % y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % -8)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (2147483647 % y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % -8)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 1073741822;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % 1073741822)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (2147483647 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % 1073741822)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 1073741823;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % 1073741823)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (2147483647 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % 1073741823)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 1073741824;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % 1073741824)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (2147483647 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % 1073741824)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 1073741825;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % 1073741825)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (2147483647 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % 1073741825)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -1073741823;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % -1073741823)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (2147483647 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % -1073741823)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = (-0x3fffffff-1);
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % (-0x3fffffff-1))
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (2147483647 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % (-0x3fffffff-1))
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -1073741825;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % -1073741825)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (2147483647 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % -1073741825)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -1073741826;
result = (x % y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % -1073741826)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (2147483647 % y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % -1073741826)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 2147483646;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % 2147483646)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (2147483647 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % 2147483646)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test26() {
var x;
var y;
var result;
var check;

x = 2147483647;
y = 2147483647;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % 2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (2147483647 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % 2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 2147483648;
result = (x % y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % 2147483648)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (2147483647 % y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % 2147483648)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 2147483649;
result = (x % y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % 2147483649)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (2147483647 % y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % 2147483649)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -2147483647;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % -2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (2147483647 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % -2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -2147483648;
result = (x % y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % -2147483648)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (2147483647 % y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % -2147483648)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -2147483649;
result = (x % y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % -2147483649)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (2147483647 % y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % -2147483649)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -2147483650;
result = (x % y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % -2147483650)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (2147483647 % y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % -2147483650)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 4294967295;
result = (x % y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % 4294967295)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (2147483647 % y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % 4294967295)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 4294967296;
result = (x % y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % 4294967296)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (2147483647 % y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % 4294967296)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -4294967295;
result = (x % y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % -4294967295)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (2147483647 % y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % -4294967295)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -4294967296;
result = (x % y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 % -4294967296)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (2147483647 % y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x % -4294967296)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 3;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % 3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2147483648 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % 3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -3;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % -3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (2147483648 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % -3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 8;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -8;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 1073741822;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % 1073741822)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (2147483648 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % 1073741822)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 1073741823;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % 1073741823)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (2147483648 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % 1073741823)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 1073741824;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 1073741825;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % 1073741825)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (2147483648 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % 1073741825)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test27() {
var x;
var y;
var result;
var check;

x = 2147483648;
y = -1073741823;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % -1073741823)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (2147483648 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % -1073741823)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = (-0x3fffffff-1);
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -1073741825;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % -1073741825)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (2147483648 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % -1073741825)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -1073741826;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % -1073741826)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (2147483648 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % -1073741826)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 2147483646;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % 2147483646)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (2147483648 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % 2147483646)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 2147483647;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % 2147483647)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (2147483648 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % 2147483647)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 2147483648;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % 2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % 2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 2147483649;
result = (x % y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % 2147483649)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (2147483648 % y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % 2147483649)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -2147483647;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % -2147483647)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (2147483648 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % -2147483647)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -2147483648;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % -2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % -2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -2147483649;
result = (x % y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % -2147483649)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (2147483648 % y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % -2147483649)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -2147483650;
result = (x % y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % -2147483650)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (2147483648 % y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % -2147483650)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 4294967295;
result = (x % y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % 4294967295)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (2147483648 % y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % 4294967295)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 4294967296;
result = (x % y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % 4294967296)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (2147483648 % y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % 4294967296)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -4294967295;
result = (x % y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % -4294967295)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (2147483648 % y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % -4294967295)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -4294967296;
result = (x % y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 % -4294967296)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (2147483648 % y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x % -4294967296)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483649 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2147483649 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 2;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2147483649 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -2;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % -2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (2147483649 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % -2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2147483649 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (2147483649 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 4;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % 4)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2147483649 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % 4)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -4;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % -4)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (2147483649 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % -4)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 8;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % 8)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2147483649 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % 8)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test28() {
var x;
var y;
var result;
var check;

x = 2147483649;
y = -8;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % -8)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (2147483649 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % -8)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 1073741822;
result = (x % y);
check = 5;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % 1073741822)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (2147483649 % y)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % 1073741822)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 1073741823;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % 1073741823)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (2147483649 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % 1073741823)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 1073741824;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % 1073741824)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (2147483649 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % 1073741824)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 1073741825;
result = (x % y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % 1073741825)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (2147483649 % y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % 1073741825)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -1073741823;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % -1073741823)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (2147483649 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % -1073741823)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = (-0x3fffffff-1);
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % (-0x3fffffff-1))
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (2147483649 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % (-0x3fffffff-1))
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -1073741825;
result = (x % y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % -1073741825)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (2147483649 % y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % -1073741825)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -1073741826;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % -1073741826)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (2147483649 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % -1073741826)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 2147483646;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % 2147483646)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (2147483649 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % 2147483646)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 2147483647;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % 2147483647)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (2147483649 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % 2147483647)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 2147483648;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % 2147483648)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (2147483649 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % 2147483648)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 2147483649;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % 2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (2147483649 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % 2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -2147483647;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % -2147483647)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (2147483649 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % -2147483647)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -2147483648;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % -2147483648)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (2147483649 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % -2147483648)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -2147483649;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % -2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (2147483649 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % -2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -2147483650;
result = (x % y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % -2147483650)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (2147483649 % y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % -2147483650)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 4294967295;
result = (x % y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % 4294967295)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (2147483649 % y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % 4294967295)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 4294967296;
result = (x % y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % 4294967296)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (2147483649 % y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % 4294967296)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -4294967295;
result = (x % y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % -4294967295)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (2147483649 % y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % -4294967295)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -4294967296;
result = (x % y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 % -4294967296)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (2147483649 % y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x % -4294967296)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483647 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2147483647 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 2;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2147483647 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -2;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % -2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-2147483647 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % -2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test29() {
var x;
var y;
var result;
var check;

x = -2147483647;
y = 3;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2147483647 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -3;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % -3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-2147483647 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % -3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 4;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % 4)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2147483647 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % 4)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -4;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % -4)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-2147483647 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % -4)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 8;
result = (x % y);
check = -7;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % 8)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2147483647 % y)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % 8)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -8;
result = (x % y);
check = -7;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % -8)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-2147483647 % y)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % -8)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 1073741822;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % 1073741822)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-2147483647 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % 1073741822)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 1073741823;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % 1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-2147483647 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % 1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 1073741824;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % 1073741824)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-2147483647 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % 1073741824)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 1073741825;
result = (x % y);
check = -1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % 1073741825)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-2147483647 % y)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % 1073741825)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -1073741823;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % -1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-2147483647 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % -1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = (-0x3fffffff-1);
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % (-0x3fffffff-1))
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-2147483647 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % (-0x3fffffff-1))
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -1073741825;
result = (x % y);
check = -1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % -1073741825)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-2147483647 % y)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % -1073741825)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -1073741826;
result = (x % y);
check = -1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % -1073741826)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-2147483647 % y)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % -1073741826)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 2147483646;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % 2147483646)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-2147483647 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % 2147483646)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 2147483647;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % 2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-2147483647 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % 2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 2147483648;
result = (x % y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % 2147483648)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-2147483647 % y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % 2147483648)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 2147483649;
result = (x % y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % 2147483649)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-2147483647 % y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % 2147483649)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -2147483647;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % -2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-2147483647 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % -2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -2147483648;
result = (x % y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % -2147483648)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-2147483647 % y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % -2147483648)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -2147483649;
result = (x % y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % -2147483649)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-2147483647 % y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % -2147483649)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -2147483650;
result = (x % y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % -2147483650)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-2147483647 % y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % -2147483650)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 4294967295;
result = (x % y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % 4294967295)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-2147483647 % y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % 4294967295)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 4294967296;
result = (x % y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % 4294967296)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-2147483647 % y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % 4294967296)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -4294967295;
result = (x % y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % -4294967295)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-2147483647 % y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % -4294967295)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test30() {
var x;
var y;
var result;
var check;

x = -2147483647;
y = -4294967296;
result = (x % y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 % -4294967296)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-2147483647 % y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x % -4294967296)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 3;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % 3)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2147483648 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % 3)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -3;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % -3)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-2147483648 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % -3)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 8;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -8;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 1073741822;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % 1073741822)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-2147483648 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % 1073741822)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 1073741823;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % 1073741823)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-2147483648 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % 1073741823)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 1073741824;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 1073741825;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % 1073741825)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-2147483648 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % 1073741825)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -1073741823;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % -1073741823)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-2147483648 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % -1073741823)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = (-0x3fffffff-1);
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -1073741825;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % -1073741825)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-2147483648 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % -1073741825)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -1073741826;
result = (x % y);
check = -1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % -1073741826)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-2147483648 % y)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % -1073741826)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 2147483646;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % 2147483646)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-2147483648 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % 2147483646)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 2147483647;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % 2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-2147483648 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % 2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 2147483648;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % 2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % 2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 2147483649;
result = (x % y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % 2147483649)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-2147483648 % y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % 2147483649)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -2147483647;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % -2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-2147483648 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % -2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -2147483648;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % -2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-2147483648 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % -2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test31() {
var x;
var y;
var result;
var check;

x = -2147483648;
y = -2147483649;
result = (x % y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % -2147483649)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-2147483648 % y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % -2147483649)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -2147483650;
result = (x % y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % -2147483650)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-2147483648 % y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % -2147483650)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 4294967295;
result = (x % y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % 4294967295)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-2147483648 % y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % 4294967295)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 4294967296;
result = (x % y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % 4294967296)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-2147483648 % y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % 4294967296)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -4294967295;
result = (x % y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % -4294967295)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-2147483648 % y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % -4294967295)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -4294967296;
result = (x % y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 % -4294967296)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-2147483648 % y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x % -4294967296)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483649 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2147483649 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 2;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2147483649 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -2;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % -2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-2147483649 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % -2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2147483649 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-2147483649 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 4;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2147483649 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -4;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % -4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-2147483649 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % -4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 8;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2147483649 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -8;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % -8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-2147483649 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % -8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 1073741822;
result = (x % y);
check = -5;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % 1073741822)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-2147483649 % y)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % 1073741822)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 1073741823;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % 1073741823)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-2147483649 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % 1073741823)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 1073741824;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % 1073741824)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-2147483649 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % 1073741824)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 1073741825;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % 1073741825)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-2147483649 % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % 1073741825)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -1073741823;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % -1073741823)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-2147483649 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % -1073741823)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = (-0x3fffffff-1);
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % (-0x3fffffff-1))
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-2147483649 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % (-0x3fffffff-1))
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -1073741825;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % -1073741825)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-2147483649 % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % -1073741825)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -1073741826;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % -1073741826)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-2147483649 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % -1073741826)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 2147483646;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % 2147483646)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-2147483649 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % 2147483646)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test32() {
var x;
var y;
var result;
var check;

x = -2147483649;
y = 2147483647;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % 2147483647)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-2147483649 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % 2147483647)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 2147483648;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % 2147483648)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-2147483649 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % 2147483648)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 2147483649;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % 2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-2147483649 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % 2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -2147483647;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % -2147483647)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-2147483649 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % -2147483647)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -2147483648;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % -2147483648)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-2147483649 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % -2147483648)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -2147483649;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % -2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-2147483649 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % -2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -2147483650;
result = (x % y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % -2147483650)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-2147483649 % y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % -2147483650)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 4294967295;
result = (x % y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % 4294967295)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-2147483649 % y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % 4294967295)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 4294967296;
result = (x % y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % 4294967296)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-2147483649 % y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % 4294967296)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -4294967295;
result = (x % y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % -4294967295)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-2147483649 % y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % -4294967295)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -4294967296;
result = (x % y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 % -4294967296)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-2147483649 % y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x % -4294967296)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483650 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2147483650 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2147483650 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-2147483650 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 3;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2147483650 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -3;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % -3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-2147483650 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % -3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 4;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % 4)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2147483650 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % 4)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -4;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % -4)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-2147483650 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % -4)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 8;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % 8)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2147483650 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % 8)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -8;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % -8)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-2147483650 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % -8)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 1073741822;
result = (x % y);
check = -6;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % 1073741822)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-2147483650 % y)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % 1073741822)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 1073741823;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % 1073741823)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-2147483650 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % 1073741823)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 1073741824;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % 1073741824)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-2147483650 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % 1073741824)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 1073741825;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % 1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-2147483650 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % 1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test33() {
var x;
var y;
var result;
var check;

x = -2147483650;
y = -1073741823;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % -1073741823)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-2147483650 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % -1073741823)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = (-0x3fffffff-1);
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % (-0x3fffffff-1))
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-2147483650 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % (-0x3fffffff-1))
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -1073741825;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % -1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-2147483650 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % -1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -1073741826;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % -1073741826)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-2147483650 % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % -1073741826)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 2147483646;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % 2147483646)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-2147483650 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % 2147483646)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 2147483647;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % 2147483647)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-2147483650 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % 2147483647)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 2147483648;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % 2147483648)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-2147483650 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % 2147483648)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 2147483649;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % 2147483649)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-2147483650 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % 2147483649)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -2147483647;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % -2147483647)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-2147483650 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % -2147483647)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -2147483648;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % -2147483648)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-2147483650 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % -2147483648)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -2147483649;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % -2147483649)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-2147483650 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % -2147483649)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -2147483650;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % -2147483650)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-2147483650 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % -2147483650)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 4294967295;
result = (x % y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % 4294967295)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-2147483650 % y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % 4294967295)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 4294967296;
result = (x % y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % 4294967296)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-2147483650 % y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % 4294967296)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -4294967295;
result = (x % y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % -4294967295)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-2147483650 % y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % -4294967295)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -4294967296;
result = (x % y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 % -4294967296)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-2147483650 % y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x % -4294967296)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (4294967295 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (4294967295 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 2;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (4294967295 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -2;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % -2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (4294967295 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % -2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (4294967295 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (4294967295 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 4;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % 4)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (4294967295 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % 4)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -4;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % -4)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (4294967295 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % -4)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 8;
result = (x % y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % 8)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (4294967295 % y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % 8)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test34() {
var x;
var y;
var result;
var check;

x = 4294967295;
y = -8;
result = (x % y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % -8)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (4294967295 % y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % -8)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 1073741822;
result = (x % y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % 1073741822)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (4294967295 % y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % 1073741822)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 1073741823;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % 1073741823)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (4294967295 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % 1073741823)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 1073741824;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % 1073741824)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (4294967295 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % 1073741824)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 1073741825;
result = (x % y);
check = 1073741820;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % 1073741825)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (4294967295 % y)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % 1073741825)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -1073741823;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % -1073741823)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (4294967295 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % -1073741823)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = (-0x3fffffff-1);
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % (-0x3fffffff-1))
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (4294967295 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % (-0x3fffffff-1))
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -1073741825;
result = (x % y);
check = 1073741820;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % -1073741825)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (4294967295 % y)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % -1073741825)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -1073741826;
result = (x % y);
check = 1073741817;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % -1073741826)
check = 1073741817
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (4294967295 % y)
check = 1073741817
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % -1073741826)
check = 1073741817
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 2147483646;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % 2147483646)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (4294967295 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % 2147483646)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 2147483647;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % 2147483647)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (4294967295 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % 2147483647)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 2147483648;
result = (x % y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % 2147483648)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (4294967295 % y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % 2147483648)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 2147483649;
result = (x % y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % 2147483649)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (4294967295 % y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % 2147483649)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -2147483647;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % -2147483647)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (4294967295 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % -2147483647)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -2147483648;
result = (x % y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % -2147483648)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (4294967295 % y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % -2147483648)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -2147483649;
result = (x % y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % -2147483649)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (4294967295 % y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % -2147483649)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -2147483650;
result = (x % y);
check = 2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % -2147483650)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (4294967295 % y)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % -2147483650)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 4294967295;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % 4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (4294967295 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % 4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 4294967296;
result = (x % y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % 4294967296)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (4294967295 % y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % 4294967296)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -4294967295;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % -4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (4294967295 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % -4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -4294967296;
result = (x % y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 % -4294967296)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (4294967295 % y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x % -4294967296)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test35() {
var x;
var y;
var result;
var check;

x = 4294967296;
y = 3;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % 3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (4294967296 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % 3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -3;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % -3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (4294967296 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % -3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 8;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -8;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 1073741822;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % 1073741822)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (4294967296 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % 1073741822)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 1073741823;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % 1073741823)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (4294967296 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % 1073741823)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 1073741824;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 1073741825;
result = (x % y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % 1073741825)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (4294967296 % y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % 1073741825)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -1073741823;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % -1073741823)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (4294967296 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % -1073741823)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = (-0x3fffffff-1);
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -1073741825;
result = (x % y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % -1073741825)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (4294967296 % y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % -1073741825)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -1073741826;
result = (x % y);
check = 1073741818;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % -1073741826)
check = 1073741818
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (4294967296 % y)
check = 1073741818
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % -1073741826)
check = 1073741818
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 2147483646;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % 2147483646)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (4294967296 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % 2147483646)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 2147483647;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % 2147483647)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (4294967296 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % 2147483647)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 2147483648;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % 2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % 2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 2147483649;
result = (x % y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % 2147483649)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (4294967296 % y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % 2147483649)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -2147483647;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % -2147483647)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (4294967296 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % -2147483647)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -2147483648;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % -2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % -2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -2147483649;
result = (x % y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % -2147483649)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (4294967296 % y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % -2147483649)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -2147483650;
result = (x % y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % -2147483650)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (4294967296 % y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % -2147483650)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 4294967295;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % 4294967295)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (4294967296 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % 4294967295)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 4294967296;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % 4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % 4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -4294967295;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % -4294967295)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (4294967296 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % -4294967295)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test36() {
var x;
var y;
var result;
var check;

x = 4294967296;
y = -4294967296;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 % -4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x % -4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-4294967295 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-4294967295 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 2;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-4294967295 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -2;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % -2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-4294967295 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % -2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-4294967295 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -3;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-4294967295 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 4;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % 4)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-4294967295 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % 4)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -4;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % -4)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-4294967295 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % -4)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 8;
result = (x % y);
check = -7;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % 8)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-4294967295 % y)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % 8)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -8;
result = (x % y);
check = -7;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % -8)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-4294967295 % y)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % -8)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 1073741822;
result = (x % y);
check = -7;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % 1073741822)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-4294967295 % y)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % 1073741822)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 1073741823;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % 1073741823)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-4294967295 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % 1073741823)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 1073741824;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % 1073741824)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-4294967295 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % 1073741824)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 1073741825;
result = (x % y);
check = -1073741820;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % 1073741825)
check = -1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-4294967295 % y)
check = -1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % 1073741825)
check = -1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -1073741823;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % -1073741823)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-4294967295 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % -1073741823)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = (-0x3fffffff-1);
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % (-0x3fffffff-1))
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-4294967295 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % (-0x3fffffff-1))
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -1073741825;
result = (x % y);
check = -1073741820;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % -1073741825)
check = -1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-4294967295 % y)
check = -1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % -1073741825)
check = -1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -1073741826;
result = (x % y);
check = -1073741817;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % -1073741826)
check = -1073741817
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-4294967295 % y)
check = -1073741817
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % -1073741826)
check = -1073741817
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 2147483646;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % 2147483646)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-4294967295 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % 2147483646)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 2147483647;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % 2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-4294967295 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % 2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 2147483648;
result = (x % y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % 2147483648)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-4294967295 % y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % 2147483648)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 2147483649;
result = (x % y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % 2147483649)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-4294967295 % y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % 2147483649)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -2147483647;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % -2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-4294967295 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % -2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -2147483648;
result = (x % y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % -2147483648)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-4294967295 % y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % -2147483648)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test37() {
var x;
var y;
var result;
var check;

x = -4294967295;
y = -2147483649;
result = (x % y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % -2147483649)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-4294967295 % y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % -2147483649)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -2147483650;
result = (x % y);
check = -2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % -2147483650)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-4294967295 % y)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % -2147483650)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 4294967295;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % 4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-4294967295 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % 4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 4294967296;
result = (x % y);
check = -4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % 4294967296)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-4294967295 % y)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % 4294967296)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -4294967295;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % -4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-4294967295 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % -4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -4294967296;
result = (x % y);
check = -4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 % -4294967296)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-4294967295 % y)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x % -4294967296)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -1;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -2;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 3;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-4294967296 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -3;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % -3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-4294967296 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % -3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -4;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 8;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -8;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 1073741822;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % 1073741822)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-4294967296 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % 1073741822)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 1073741823;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % 1073741823)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-4294967296 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % 1073741823)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 1073741824;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 1073741825;
result = (x % y);
check = -1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % 1073741825)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-4294967296 % y)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % 1073741825)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -1073741823;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % -1073741823)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-4294967296 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % -1073741823)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = (-0x3fffffff-1);
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -1073741825;
result = (x % y);
check = -1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % -1073741825)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-4294967296 % y)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % -1073741825)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -1073741826;
result = (x % y);
check = -1073741818;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % -1073741826)
check = -1073741818
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-4294967296 % y)
check = -1073741818
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % -1073741826)
check = -1073741818
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 2147483646;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % 2147483646)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-4294967296 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % 2147483646)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test38() {
var x;
var y;
var result;
var check;

x = -4294967296;
y = 2147483647;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % 2147483647)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-4294967296 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % 2147483647)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 2147483648;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % 2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % 2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 2147483649;
result = (x % y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % 2147483649)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-4294967296 % y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % 2147483649)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -2147483647;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % -2147483647)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-4294967296 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % -2147483647)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -2147483648;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % -2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % -2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -2147483649;
result = (x % y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % -2147483649)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-4294967296 % y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % -2147483649)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -2147483650;
result = (x % y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % -2147483650)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-4294967296 % y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % -2147483650)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 4294967295;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % 4294967295)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-4294967296 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % 4294967295)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 4294967296;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % 4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % 4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -4294967295;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % -4294967295)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-4294967296 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % -4294967295)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -4294967296;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 % -4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-4294967296 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x % -4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583118391664353;
y = 34301081862609;
result = (x % y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-583118391664353 % 34301081862609)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (-583118391664353 % y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583118391664353;
result = (x % 34301081862609)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583118391664354;
y = 34301081862609;
result = (x % y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (583118391664354 % 34301081862609)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (583118391664354 % y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583118391664354;
result = (x % 34301081862609)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583118391664354;
y = 34301081862609;
result = (x % y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-583118391664354 % 34301081862609)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (-583118391664354 % y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583118391664354;
result = (x % 34301081862609)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583118391664355;
y = 34301081862609;
result = (x % y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (583118391664355 % 34301081862609)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (583118391664355 % y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583118391664355;
result = (x % 34301081862609)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583118391664355;
y = 34301081862609;
result = (x % y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-583118391664355 % 34301081862609)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (-583118391664355 % y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583118391664355;
result = (x % 34301081862609)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583118391664356;
y = 34301081862609;
result = (x % y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (583118391664356 % 34301081862609)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (583118391664356 % y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583118391664356;
result = (x % 34301081862609)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583118391664356;
y = 34301081862609;
result = (x % y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-583118391664356 % 34301081862609)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (-583118391664356 % y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583118391664356;
result = (x % 34301081862609)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583118391664357;
y = 34301081862609;
result = (x % y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (583118391664357 % 34301081862609)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (583118391664357 % y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583118391664357;
result = (x % 34301081862609)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583118391664357;
y = 34301081862609;
result = (x % y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-583118391664357 % 34301081862609)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (-583118391664357 % y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583118391664357;
result = (x % 34301081862609)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583118391664361;
y = 34301081862609;
result = (x % y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (583118391664361 % 34301081862609)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (583118391664361 % y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583118391664361;
result = (x % 34301081862609)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583118391664361;
y = 34301081862609;
result = (x % y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-583118391664361 % 34301081862609)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (-583118391664361 % y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583118391664361;
result = (x % 34301081862609)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583119465406175;
y = 34301081862609;
result = (x % y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (583119465406175 % 34301081862609)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (583119465406175 % y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583119465406175;
result = (x % 34301081862609)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583119465406176;
y = 34301081862609;
result = (x % y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (583119465406176 % 34301081862609)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (583119465406176 % y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583119465406176;
result = (x % 34301081862609)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583119465406177;
y = 34301081862609;
result = (x % y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (583119465406177 % 34301081862609)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (583119465406177 % y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583119465406177;
result = (x % 34301081862609)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test39() {
var x;
var y;
var result;
var check;

x = 583119465406178;
y = 34301081862609;
result = (x % y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (583119465406178 % 34301081862609)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (583119465406178 % y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583119465406178;
result = (x % 34301081862609)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583119465406176;
y = 34301081862609;
result = (x % y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-583119465406176 % 34301081862609)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (-583119465406176 % y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583119465406176;
result = (x % 34301081862609)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583119465406177;
y = 34301081862609;
result = (x % y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-583119465406177 % 34301081862609)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (-583119465406177 % y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583119465406177;
result = (x % 34301081862609)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583119465406178;
y = 34301081862609;
result = (x % y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-583119465406178 % 34301081862609)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (-583119465406178 % y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583119465406178;
result = (x % 34301081862609)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583119465406179;
y = 34301081862609;
result = (x % y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-583119465406179 % 34301081862609)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (-583119465406179 % y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583119465406179;
result = (x % 34301081862609)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583120539147999;
y = 34301081862609;
result = (x % y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (583120539147999 % 34301081862609)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (583120539147999 % y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583120539147999;
result = (x % 34301081862609)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583120539148000;
y = 34301081862609;
result = (x % y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (583120539148000 % 34301081862609)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (583120539148000 % y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583120539148000;
result = (x % 34301081862609)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583120539148001;
y = 34301081862609;
result = (x % y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (583120539148001 % 34301081862609)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (583120539148001 % y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583120539148001;
result = (x % 34301081862609)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583120539148002;
y = 34301081862609;
result = (x % y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (583120539148002 % 34301081862609)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (583120539148002 % y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583120539148002;
result = (x % 34301081862609)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583120539148000;
y = 34301081862609;
result = (x % y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-583120539148000 % 34301081862609)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (-583120539148000 % y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583120539148000;
result = (x % 34301081862609)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583120539148001;
y = 34301081862609;
result = (x % y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-583120539148001 % 34301081862609)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (-583120539148001 % y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583120539148001;
result = (x % 34301081862609)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583120539148002;
y = 34301081862609;
result = (x % y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-583120539148002 % 34301081862609)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (-583120539148002 % y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583120539148002;
result = (x % 34301081862609)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583120539148003;
y = 34301081862609;
result = (x % y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-583120539148003 % 34301081862609)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (-583120539148003 % y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583120539148003;
result = (x % 34301081862609)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583122686631648;
y = 34301081862609;
result = (x % y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (583122686631648 % 34301081862609)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (583122686631648 % y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583122686631648;
result = (x % 34301081862609)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583122686631649;
y = 34301081862609;
result = (x % y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (583122686631649 % 34301081862609)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (583122686631649 % y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 583122686631649;
result = (x % 34301081862609)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583122686631648;
y = 34301081862609;
result = (x % y);
check = -4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-583122686631648 % 34301081862609)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (-583122686631648 % y)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583122686631648;
result = (x % 34301081862609)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583122686631649;
y = 34301081862609;
result = (x % y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-583122686631649 % 34301081862609)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 34301081862609;
result = (-583122686631649 % y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -583122686631649;
result = (x % 34301081862609)
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
test11();
test12();
test13();
test14();
test15();
test16();
test17();
test18();
test19();
test20();
test21();
test22();
test23();
test24();
test25();
test26();
test27();
test28();
test29();
test30();
test31();
test32();
test33();
test34();
test35();
test36();
test37();
test38();
test39();

print("pass");
