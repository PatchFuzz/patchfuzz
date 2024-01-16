




var test = 1; 
function fail(n, expected, result) { WScript.Echo("failure in test " + test + "; expected " + expected + ", got " + result); }
function test0() {
var x;
var y;
var result;
var check;

x = 0;
y = 0;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 >> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (0 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x >> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 0;
result = (x >> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 >> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1 >> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x >> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 0;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 >> 0)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x >> 0)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 0;
result = (x >> y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 >> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2 >> y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x >> 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 0;
result = (x >> y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 >> 0)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2 >> y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x >> 0)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 0;
result = (x >> y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 >> 0)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (3 >> y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x >> 0)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 0;
result = (x >> y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 >> 0)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-3 >> y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x >> 0)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 0;
result = (x >> y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 >> 0)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4 >> y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x >> 0)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 0;
result = (x >> y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 >> 0)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4 >> y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x >> 0)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 0;
result = (x >> y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 >> 0)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (8 >> y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x >> 0)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 0;
result = (x >> y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 >> 0)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-8 >> y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x >> 0)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 0;
result = (x >> y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 >> 0)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741822 >> y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x >> 0)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 0;
result = (x >> y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 >> 0)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741823 >> y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x >> 0)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 0;
result = (x >> y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 >> 0)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741824 >> y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x >> 0)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 0;
result = (x >> y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 >> 0)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741825 >> y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x >> 0)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 0;
result = (x >> y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 >> 0)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741823 >> y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x >> 0)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 0;
result = (x >> y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) >> 0)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = ((-0x3fffffff-1) >> y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x >> 0)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 0;
result = (x >> y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 >> 0)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741825 >> y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x >> 0)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 0;
result = (x >> y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 >> 0)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741826 >> y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x >> 0)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 0;
result = (x >> y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 >> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483646 >> y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x >> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 0;
result = (x >> y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 >> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483647 >> y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x >> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 0;
result = (x >> y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 >> 0)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483648 >> y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x >> 0)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 0;
result = (x >> y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 >> 0)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483649 >> y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x >> 0)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 0;
result = (x >> y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 >> 0)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483647 >> y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x >> 0)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 0;
result = (x >> y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 >> 0)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483648 >> y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x >> 0)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test1() {
var x;
var y;
var result;
var check;

x = -2147483649;
y = 0;
result = (x >> y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 >> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483649 >> y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x >> 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 0;
result = (x >> y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 >> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483650 >> y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x >> 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 0;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 >> 0)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4294967295 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x >> 0)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 0;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 >> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x >> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 0;
result = (x >> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 >> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4294967295 >> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x >> 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 0;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 >> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x >> 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 >> 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (0 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x >> 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 1;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 >> 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x >> 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 1;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 >> 1)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x >> 1)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 1;
result = (x >> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 >> 1)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2 >> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x >> 1)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 1;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 >> 1)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x >> 1)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 1;
result = (x >> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 >> 1)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (3 >> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x >> 1)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 1;
result = (x >> y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 >> 1)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-3 >> y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x >> 1)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 1;
result = (x >> y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 >> 1)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (4 >> y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x >> 1)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 1;
result = (x >> y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 >> 1)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-4 >> y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x >> 1)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 1;
result = (x >> y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 >> 1)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (8 >> y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x >> 1)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 1;
result = (x >> y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 >> 1)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-8 >> y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x >> 1)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 1;
result = (x >> y);
check = 536870911;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 >> 1)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741822 >> y)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x >> 1)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 1;
result = (x >> y);
check = 536870911;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 >> 1)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741823 >> y)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x >> 1)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 1;
result = (x >> y);
check = 536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 >> 1)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741824 >> y)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x >> 1)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 1;
result = (x >> y);
check = 536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 >> 1)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741825 >> y)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x >> 1)
check = 536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 1;
result = (x >> y);
check = -536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 >> 1)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1073741823 >> y)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x >> 1)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 1;
result = (x >> y);
check = -536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) >> 1)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = ((-0x3fffffff-1) >> y)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x >> 1)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 1;
result = (x >> y);
check = -536870913;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 >> 1)
check = -536870913
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1073741825 >> y)
check = -536870913
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x >> 1)
check = -536870913
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 1;
result = (x >> y);
check = -536870913;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 >> 1)
check = -536870913
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1073741826 >> y)
check = -536870913
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x >> 1)
check = -536870913
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test2() {
var x;
var y;
var result;
var check;

x = 2147483646;
y = 1;
result = (x >> y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 >> 1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483646 >> y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x >> 1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 1;
result = (x >> y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 >> 1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483647 >> y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x >> 1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 1;
result = (x >> y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 >> 1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483648 >> y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x >> 1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 1;
result = (x >> y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 >> 1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483649 >> y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x >> 1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 1;
result = (x >> y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 >> 1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483647 >> y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x >> 1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 1;
result = (x >> y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 >> 1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483648 >> y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x >> 1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 1;
result = (x >> y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 >> 1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483649 >> y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x >> 1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 1;
result = (x >> y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 >> 1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483650 >> y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x >> 1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 1;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 >> 1)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (4294967295 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x >> 1)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 1;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 >> 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x >> 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 1;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 >> 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-4294967295 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x >> 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 1;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 >> 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x >> 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 >> 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (0 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x >> 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 2;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 >> 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x >> 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 2;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 >> 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-1 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x >> 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 2;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 >> 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x >> 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 2;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 >> 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x >> 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 2;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 >> 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (3 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x >> 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 2;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 >> 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-3 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x >> 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 2;
result = (x >> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 >> 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (4 >> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x >> 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 2;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 >> 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-4 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x >> 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 2;
result = (x >> y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 >> 2)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (8 >> y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x >> 2)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 2;
result = (x >> y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 >> 2)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-8 >> y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x >> 2)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 2;
result = (x >> y);
check = 268435455;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 >> 2)
check = 268435455
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1073741822 >> y)
check = 268435455
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x >> 2)
check = 268435455
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 2;
result = (x >> y);
check = 268435455;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 >> 2)
check = 268435455
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1073741823 >> y)
check = 268435455
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x >> 2)
check = 268435455
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test3() {
var x;
var y;
var result;
var check;

x = 1073741824;
y = 2;
result = (x >> y);
check = 268435456;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 >> 2)
check = 268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1073741824 >> y)
check = 268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x >> 2)
check = 268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 2;
result = (x >> y);
check = 268435456;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 >> 2)
check = 268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1073741825 >> y)
check = 268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x >> 2)
check = 268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 2;
result = (x >> y);
check = -268435456;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 >> 2)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-1073741823 >> y)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x >> 2)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 2;
result = (x >> y);
check = -268435456;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) >> 2)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = ((-0x3fffffff-1) >> y)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x >> 2)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 2;
result = (x >> y);
check = -268435457;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 >> 2)
check = -268435457
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-1073741825 >> y)
check = -268435457
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x >> 2)
check = -268435457
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 2;
result = (x >> y);
check = -268435457;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 >> 2)
check = -268435457
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-1073741826 >> y)
check = -268435457
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x >> 2)
check = -268435457
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 2;
result = (x >> y);
check = 536870911;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 >> 2)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2147483646 >> y)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x >> 2)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 2;
result = (x >> y);
check = 536870911;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 >> 2)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2147483647 >> y)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x >> 2)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 2;
result = (x >> y);
check = -536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 >> 2)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2147483648 >> y)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x >> 2)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 2;
result = (x >> y);
check = -536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 >> 2)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2147483649 >> y)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x >> 2)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 2;
result = (x >> y);
check = -536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 >> 2)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2147483647 >> y)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x >> 2)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 2;
result = (x >> y);
check = -536870912;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 >> 2)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2147483648 >> y)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x >> 2)
check = -536870912
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 2;
result = (x >> y);
check = 536870911;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 >> 2)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2147483649 >> y)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x >> 2)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 2;
result = (x >> y);
check = 536870911;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 >> 2)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2147483650 >> y)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x >> 2)
check = 536870911
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 2;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 >> 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (4294967295 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x >> 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 2;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 >> 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x >> 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 2;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 >> 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-4294967295 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x >> 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 2;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 >> 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x >> 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 3;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 >> 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (0 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x >> 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 3;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 >> 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x >> 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 3;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 >> 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-1 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x >> 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 3;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 >> 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x >> 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 3;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 >> 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x >> 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 3;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 >> 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (3 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x >> 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 3;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 >> 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-3 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x >> 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test4() {
var x;
var y;
var result;
var check;

x = 4;
y = 3;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 >> 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (4 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x >> 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 3;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 >> 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-4 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x >> 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 3;
result = (x >> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 >> 3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (8 >> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x >> 3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 3;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 >> 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-8 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x >> 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 3;
result = (x >> y);
check = 134217727;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 >> 3)
check = 134217727
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1073741822 >> y)
check = 134217727
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x >> 3)
check = 134217727
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 3;
result = (x >> y);
check = 134217727;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 >> 3)
check = 134217727
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1073741823 >> y)
check = 134217727
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x >> 3)
check = 134217727
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 3;
result = (x >> y);
check = 134217728;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 >> 3)
check = 134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1073741824 >> y)
check = 134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x >> 3)
check = 134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 3;
result = (x >> y);
check = 134217728;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 >> 3)
check = 134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1073741825 >> y)
check = 134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x >> 3)
check = 134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 3;
result = (x >> y);
check = -134217728;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 >> 3)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-1073741823 >> y)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x >> 3)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 3;
result = (x >> y);
check = -134217728;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) >> 3)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = ((-0x3fffffff-1) >> y)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x >> 3)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 3;
result = (x >> y);
check = -134217729;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 >> 3)
check = -134217729
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-1073741825 >> y)
check = -134217729
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x >> 3)
check = -134217729
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 3;
result = (x >> y);
check = -134217729;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 >> 3)
check = -134217729
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-1073741826 >> y)
check = -134217729
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x >> 3)
check = -134217729
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 3;
result = (x >> y);
check = 268435455;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 >> 3)
check = 268435455
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2147483646 >> y)
check = 268435455
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x >> 3)
check = 268435455
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 3;
result = (x >> y);
check = 268435455;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 >> 3)
check = 268435455
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2147483647 >> y)
check = 268435455
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x >> 3)
check = 268435455
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 3;
result = (x >> y);
check = -268435456;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 >> 3)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2147483648 >> y)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x >> 3)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 3;
result = (x >> y);
check = -268435456;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 >> 3)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2147483649 >> y)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x >> 3)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 3;
result = (x >> y);
check = -268435456;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 >> 3)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2147483647 >> y)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x >> 3)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 3;
result = (x >> y);
check = -268435456;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 >> 3)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2147483648 >> y)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x >> 3)
check = -268435456
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 3;
result = (x >> y);
check = 268435455;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 >> 3)
check = 268435455
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2147483649 >> y)
check = 268435455
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x >> 3)
check = 268435455
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 3;
result = (x >> y);
check = 268435455;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 >> 3)
check = 268435455
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2147483650 >> y)
check = 268435455
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x >> 3)
check = 268435455
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 3;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 >> 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (4294967295 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x >> 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 3;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 >> 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x >> 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 3;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 >> 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-4294967295 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x >> 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 3;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 >> 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x >> 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 4;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 >> 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (0 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x >> 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test5() {
var x;
var y;
var result;
var check;

x = 1;
y = 4;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 >> 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x >> 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 4;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 >> 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-1 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x >> 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 4;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 >> 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x >> 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 4;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 >> 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x >> 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 4;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 >> 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (3 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x >> 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 4;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 >> 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-3 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x >> 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 4;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 >> 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (4 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x >> 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 4;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 >> 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-4 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x >> 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 4;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 >> 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (8 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x >> 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 4;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 >> 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-8 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x >> 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 4;
result = (x >> y);
check = 67108863;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 >> 4)
check = 67108863
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1073741822 >> y)
check = 67108863
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x >> 4)
check = 67108863
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 4;
result = (x >> y);
check = 67108863;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 >> 4)
check = 67108863
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1073741823 >> y)
check = 67108863
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x >> 4)
check = 67108863
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 4;
result = (x >> y);
check = 67108864;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 >> 4)
check = 67108864
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1073741824 >> y)
check = 67108864
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x >> 4)
check = 67108864
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 4;
result = (x >> y);
check = 67108864;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 >> 4)
check = 67108864
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1073741825 >> y)
check = 67108864
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x >> 4)
check = 67108864
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 4;
result = (x >> y);
check = -67108864;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 >> 4)
check = -67108864
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-1073741823 >> y)
check = -67108864
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x >> 4)
check = -67108864
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 4;
result = (x >> y);
check = -67108864;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) >> 4)
check = -67108864
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = ((-0x3fffffff-1) >> y)
check = -67108864
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x >> 4)
check = -67108864
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 4;
result = (x >> y);
check = -67108865;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 >> 4)
check = -67108865
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-1073741825 >> y)
check = -67108865
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x >> 4)
check = -67108865
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 4;
result = (x >> y);
check = -67108865;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 >> 4)
check = -67108865
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-1073741826 >> y)
check = -67108865
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x >> 4)
check = -67108865
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 4;
result = (x >> y);
check = 134217727;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 >> 4)
check = 134217727
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2147483646 >> y)
check = 134217727
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x >> 4)
check = 134217727
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 4;
result = (x >> y);
check = 134217727;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 >> 4)
check = 134217727
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2147483647 >> y)
check = 134217727
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x >> 4)
check = 134217727
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 4;
result = (x >> y);
check = -134217728;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 >> 4)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2147483648 >> y)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x >> 4)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 4;
result = (x >> y);
check = -134217728;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 >> 4)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2147483649 >> y)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x >> 4)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 4;
result = (x >> y);
check = -134217728;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 >> 4)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2147483647 >> y)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x >> 4)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 4;
result = (x >> y);
check = -134217728;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 >> 4)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2147483648 >> y)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x >> 4)
check = -134217728
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 4;
result = (x >> y);
check = 134217727;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 >> 4)
check = 134217727
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2147483649 >> y)
check = 134217727
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x >> 4)
check = 134217727
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test6() {
var x;
var y;
var result;
var check;

x = -2147483650;
y = 4;
result = (x >> y);
check = 134217727;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 >> 4)
check = 134217727
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2147483650 >> y)
check = 134217727
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x >> 4)
check = 134217727
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 4;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 >> 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (4294967295 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x >> 4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 4;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 >> 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x >> 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 4;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 >> 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-4294967295 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x >> 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 4;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 >> 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x >> 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 7;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 >> 7)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (0 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x >> 7)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 7;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 >> 7)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (1 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x >> 7)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 7;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 >> 7)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (-1 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x >> 7)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 7;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 >> 7)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (2 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x >> 7)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 7;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 >> 7)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (-2 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x >> 7)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 7;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 >> 7)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (3 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x >> 7)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 7;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 >> 7)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (-3 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x >> 7)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 7;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 >> 7)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (4 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x >> 7)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 7;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 >> 7)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (-4 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x >> 7)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 7;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 >> 7)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (8 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x >> 7)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 7;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 >> 7)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (-8 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x >> 7)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 7;
result = (x >> y);
check = 8388607;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 >> 7)
check = 8388607
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (1073741822 >> y)
check = 8388607
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x >> 7)
check = 8388607
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 7;
result = (x >> y);
check = 8388607;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 >> 7)
check = 8388607
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (1073741823 >> y)
check = 8388607
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x >> 7)
check = 8388607
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 7;
result = (x >> y);
check = 8388608;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 >> 7)
check = 8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (1073741824 >> y)
check = 8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x >> 7)
check = 8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 7;
result = (x >> y);
check = 8388608;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 >> 7)
check = 8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (1073741825 >> y)
check = 8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x >> 7)
check = 8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 7;
result = (x >> y);
check = -8388608;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 >> 7)
check = -8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (-1073741823 >> y)
check = -8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x >> 7)
check = -8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 7;
result = (x >> y);
check = -8388608;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) >> 7)
check = -8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = ((-0x3fffffff-1) >> y)
check = -8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x >> 7)
check = -8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 7;
result = (x >> y);
check = -8388609;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 >> 7)
check = -8388609
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (-1073741825 >> y)
check = -8388609
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x >> 7)
check = -8388609
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 7;
result = (x >> y);
check = -8388609;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 >> 7)
check = -8388609
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (-1073741826 >> y)
check = -8388609
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x >> 7)
check = -8388609
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 7;
result = (x >> y);
check = 16777215;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 >> 7)
check = 16777215
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (2147483646 >> y)
check = 16777215
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x >> 7)
check = 16777215
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test7() {
var x;
var y;
var result;
var check;

x = 2147483647;
y = 7;
result = (x >> y);
check = 16777215;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 >> 7)
check = 16777215
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (2147483647 >> y)
check = 16777215
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x >> 7)
check = 16777215
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 7;
result = (x >> y);
check = -16777216;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 >> 7)
check = -16777216
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (2147483648 >> y)
check = -16777216
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x >> 7)
check = -16777216
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 7;
result = (x >> y);
check = -16777216;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 >> 7)
check = -16777216
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (2147483649 >> y)
check = -16777216
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x >> 7)
check = -16777216
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 7;
result = (x >> y);
check = -16777216;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 >> 7)
check = -16777216
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (-2147483647 >> y)
check = -16777216
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x >> 7)
check = -16777216
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 7;
result = (x >> y);
check = -16777216;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 >> 7)
check = -16777216
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (-2147483648 >> y)
check = -16777216
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x >> 7)
check = -16777216
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 7;
result = (x >> y);
check = 16777215;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 >> 7)
check = 16777215
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (-2147483649 >> y)
check = 16777215
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x >> 7)
check = 16777215
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 7;
result = (x >> y);
check = 16777215;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 >> 7)
check = 16777215
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (-2147483650 >> y)
check = 16777215
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x >> 7)
check = 16777215
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 7;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 >> 7)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (4294967295 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x >> 7)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 7;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 >> 7)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x >> 7)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 7;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 >> 7)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (-4294967295 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x >> 7)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 7;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 >> 7)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 7;
result = (-4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x >> 7)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 8;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 >> 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (0 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x >> 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 8;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 >> 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x >> 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 8;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 >> 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-1 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x >> 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 8;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 >> 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x >> 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 8;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 >> 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x >> 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 8;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 >> 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (3 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x >> 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 8;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 >> 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-3 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x >> 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 8;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 >> 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (4 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x >> 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 8;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 >> 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-4 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x >> 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 8;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 >> 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (8 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x >> 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 8;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 >> 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-8 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x >> 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 8;
result = (x >> y);
check = 4194303;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 >> 8)
check = 4194303
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1073741822 >> y)
check = 4194303
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x >> 8)
check = 4194303
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 8;
result = (x >> y);
check = 4194303;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 >> 8)
check = 4194303
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1073741823 >> y)
check = 4194303
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x >> 8)
check = 4194303
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 8;
result = (x >> y);
check = 4194304;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 >> 8)
check = 4194304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1073741824 >> y)
check = 4194304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x >> 8)
check = 4194304
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test8() {
var x;
var y;
var result;
var check;

x = 1073741825;
y = 8;
result = (x >> y);
check = 4194304;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 >> 8)
check = 4194304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1073741825 >> y)
check = 4194304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x >> 8)
check = 4194304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 8;
result = (x >> y);
check = -4194304;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 >> 8)
check = -4194304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-1073741823 >> y)
check = -4194304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x >> 8)
check = -4194304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 8;
result = (x >> y);
check = -4194304;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) >> 8)
check = -4194304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = ((-0x3fffffff-1) >> y)
check = -4194304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x >> 8)
check = -4194304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 8;
result = (x >> y);
check = -4194305;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 >> 8)
check = -4194305
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-1073741825 >> y)
check = -4194305
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x >> 8)
check = -4194305
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 8;
result = (x >> y);
check = -4194305;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 >> 8)
check = -4194305
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-1073741826 >> y)
check = -4194305
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x >> 8)
check = -4194305
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 8;
result = (x >> y);
check = 8388607;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 >> 8)
check = 8388607
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2147483646 >> y)
check = 8388607
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x >> 8)
check = 8388607
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 8;
result = (x >> y);
check = 8388607;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 >> 8)
check = 8388607
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2147483647 >> y)
check = 8388607
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x >> 8)
check = 8388607
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 8;
result = (x >> y);
check = -8388608;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 >> 8)
check = -8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2147483648 >> y)
check = -8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x >> 8)
check = -8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 8;
result = (x >> y);
check = -8388608;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 >> 8)
check = -8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2147483649 >> y)
check = -8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x >> 8)
check = -8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 8;
result = (x >> y);
check = -8388608;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 >> 8)
check = -8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2147483647 >> y)
check = -8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x >> 8)
check = -8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 8;
result = (x >> y);
check = -8388608;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 >> 8)
check = -8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2147483648 >> y)
check = -8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x >> 8)
check = -8388608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 8;
result = (x >> y);
check = 8388607;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 >> 8)
check = 8388607
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2147483649 >> y)
check = 8388607
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x >> 8)
check = 8388607
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 8;
result = (x >> y);
check = 8388607;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 >> 8)
check = 8388607
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2147483650 >> y)
check = 8388607
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x >> 8)
check = 8388607
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 8;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 >> 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (4294967295 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x >> 8)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 8;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 >> 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x >> 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 8;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 >> 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-4294967295 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x >> 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 8;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 >> 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x >> 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 15;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 >> 15)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (0 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x >> 15)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 15;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 >> 15)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (1 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x >> 15)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 15;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 >> 15)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (-1 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x >> 15)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 15;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 >> 15)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (2 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x >> 15)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 15;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 >> 15)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (-2 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x >> 15)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 15;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 >> 15)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (3 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x >> 15)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 15;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 >> 15)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (-3 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x >> 15)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 15;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 >> 15)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (4 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x >> 15)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test9() {
var x;
var y;
var result;
var check;

x = -4;
y = 15;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 >> 15)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (-4 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x >> 15)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 15;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 >> 15)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (8 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x >> 15)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 15;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 >> 15)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (-8 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x >> 15)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 15;
result = (x >> y);
check = 32767;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 >> 15)
check = 32767
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (1073741822 >> y)
check = 32767
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x >> 15)
check = 32767
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 15;
result = (x >> y);
check = 32767;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 >> 15)
check = 32767
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (1073741823 >> y)
check = 32767
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x >> 15)
check = 32767
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 15;
result = (x >> y);
check = 32768;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 >> 15)
check = 32768
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (1073741824 >> y)
check = 32768
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x >> 15)
check = 32768
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 15;
result = (x >> y);
check = 32768;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 >> 15)
check = 32768
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (1073741825 >> y)
check = 32768
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x >> 15)
check = 32768
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 15;
result = (x >> y);
check = -32768;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 >> 15)
check = -32768
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (-1073741823 >> y)
check = -32768
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x >> 15)
check = -32768
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 15;
result = (x >> y);
check = -32768;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) >> 15)
check = -32768
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = ((-0x3fffffff-1) >> y)
check = -32768
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x >> 15)
check = -32768
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 15;
result = (x >> y);
check = -32769;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 >> 15)
check = -32769
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (-1073741825 >> y)
check = -32769
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x >> 15)
check = -32769
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 15;
result = (x >> y);
check = -32769;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 >> 15)
check = -32769
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (-1073741826 >> y)
check = -32769
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x >> 15)
check = -32769
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 15;
result = (x >> y);
check = 65535;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 >> 15)
check = 65535
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (2147483646 >> y)
check = 65535
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x >> 15)
check = 65535
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 15;
result = (x >> y);
check = 65535;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 >> 15)
check = 65535
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (2147483647 >> y)
check = 65535
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x >> 15)
check = 65535
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 15;
result = (x >> y);
check = -65536;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 >> 15)
check = -65536
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (2147483648 >> y)
check = -65536
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x >> 15)
check = -65536
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 15;
result = (x >> y);
check = -65536;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 >> 15)
check = -65536
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (2147483649 >> y)
check = -65536
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x >> 15)
check = -65536
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 15;
result = (x >> y);
check = -65536;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 >> 15)
check = -65536
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (-2147483647 >> y)
check = -65536
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x >> 15)
check = -65536
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 15;
result = (x >> y);
check = -65536;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 >> 15)
check = -65536
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (-2147483648 >> y)
check = -65536
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x >> 15)
check = -65536
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 15;
result = (x >> y);
check = 65535;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 >> 15)
check = 65535
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (-2147483649 >> y)
check = 65535
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x >> 15)
check = 65535
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 15;
result = (x >> y);
check = 65535;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 >> 15)
check = 65535
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (-2147483650 >> y)
check = 65535
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x >> 15)
check = 65535
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 15;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 >> 15)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (4294967295 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x >> 15)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 15;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 >> 15)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x >> 15)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 15;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 >> 15)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (-4294967295 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x >> 15)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 15;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 >> 15)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 15;
result = (-4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x >> 15)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 16;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 >> 16)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (0 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x >> 16)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 16;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 >> 16)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (1 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x >> 16)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test10() {
var x;
var y;
var result;
var check;

x = -1;
y = 16;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 >> 16)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (-1 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x >> 16)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 16;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 >> 16)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (2 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x >> 16)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 16;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 >> 16)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (-2 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x >> 16)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 16;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 >> 16)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (3 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x >> 16)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 16;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 >> 16)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (-3 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x >> 16)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 16;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 >> 16)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (4 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x >> 16)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 16;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 >> 16)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (-4 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x >> 16)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 16;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 >> 16)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (8 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x >> 16)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 16;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 >> 16)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (-8 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x >> 16)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 16;
result = (x >> y);
check = 16383;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 >> 16)
check = 16383
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (1073741822 >> y)
check = 16383
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x >> 16)
check = 16383
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 16;
result = (x >> y);
check = 16383;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 >> 16)
check = 16383
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (1073741823 >> y)
check = 16383
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x >> 16)
check = 16383
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 16;
result = (x >> y);
check = 16384;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 >> 16)
check = 16384
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (1073741824 >> y)
check = 16384
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x >> 16)
check = 16384
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 16;
result = (x >> y);
check = 16384;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 >> 16)
check = 16384
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (1073741825 >> y)
check = 16384
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x >> 16)
check = 16384
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 16;
result = (x >> y);
check = -16384;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 >> 16)
check = -16384
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (-1073741823 >> y)
check = -16384
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x >> 16)
check = -16384
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 16;
result = (x >> y);
check = -16384;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) >> 16)
check = -16384
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = ((-0x3fffffff-1) >> y)
check = -16384
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x >> 16)
check = -16384
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 16;
result = (x >> y);
check = -16385;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 >> 16)
check = -16385
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (-1073741825 >> y)
check = -16385
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x >> 16)
check = -16385
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 16;
result = (x >> y);
check = -16385;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 >> 16)
check = -16385
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (-1073741826 >> y)
check = -16385
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x >> 16)
check = -16385
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 16;
result = (x >> y);
check = 32767;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 >> 16)
check = 32767
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (2147483646 >> y)
check = 32767
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x >> 16)
check = 32767
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 16;
result = (x >> y);
check = 32767;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 >> 16)
check = 32767
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (2147483647 >> y)
check = 32767
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x >> 16)
check = 32767
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 16;
result = (x >> y);
check = -32768;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 >> 16)
check = -32768
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (2147483648 >> y)
check = -32768
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x >> 16)
check = -32768
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 16;
result = (x >> y);
check = -32768;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 >> 16)
check = -32768
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (2147483649 >> y)
check = -32768
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x >> 16)
check = -32768
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 16;
result = (x >> y);
check = -32768;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 >> 16)
check = -32768
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (-2147483647 >> y)
check = -32768
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x >> 16)
check = -32768
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 16;
result = (x >> y);
check = -32768;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 >> 16)
check = -32768
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (-2147483648 >> y)
check = -32768
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x >> 16)
check = -32768
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 16;
result = (x >> y);
check = 32767;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 >> 16)
check = 32767
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (-2147483649 >> y)
check = 32767
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x >> 16)
check = 32767
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 16;
result = (x >> y);
check = 32767;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 >> 16)
check = 32767
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (-2147483650 >> y)
check = 32767
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x >> 16)
check = 32767
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test11() {
var x;
var y;
var result;
var check;

x = 4294967295;
y = 16;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 >> 16)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (4294967295 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x >> 16)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 16;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 >> 16)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x >> 16)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 16;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 >> 16)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (-4294967295 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x >> 16)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 16;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 >> 16)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 16;
result = (-4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x >> 16)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 27;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 >> 27)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (0 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x >> 27)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 27;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 >> 27)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (1 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x >> 27)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 27;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 >> 27)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (-1 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x >> 27)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 27;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 >> 27)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (2 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x >> 27)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 27;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 >> 27)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (-2 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x >> 27)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 27;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 >> 27)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (3 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x >> 27)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 27;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 >> 27)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (-3 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x >> 27)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 27;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 >> 27)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (4 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x >> 27)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 27;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 >> 27)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (-4 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x >> 27)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 27;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 >> 27)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (8 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x >> 27)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 27;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 >> 27)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (-8 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x >> 27)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 27;
result = (x >> y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 >> 27)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (1073741822 >> y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x >> 27)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 27;
result = (x >> y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 >> 27)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (1073741823 >> y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x >> 27)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 27;
result = (x >> y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 >> 27)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (1073741824 >> y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x >> 27)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 27;
result = (x >> y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 >> 27)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (1073741825 >> y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x >> 27)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 27;
result = (x >> y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 >> 27)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (-1073741823 >> y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x >> 27)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 27;
result = (x >> y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) >> 27)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = ((-0x3fffffff-1) >> y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x >> 27)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 27;
result = (x >> y);
check = -9;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 >> 27)
check = -9
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (-1073741825 >> y)
check = -9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x >> 27)
check = -9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 27;
result = (x >> y);
check = -9;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 >> 27)
check = -9
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (-1073741826 >> y)
check = -9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x >> 27)
check = -9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 27;
result = (x >> y);
check = 15;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 >> 27)
check = 15
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (2147483646 >> y)
check = 15
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x >> 27)
check = 15
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 27;
result = (x >> y);
check = 15;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 >> 27)
check = 15
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (2147483647 >> y)
check = 15
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x >> 27)
check = 15
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test12() {
var x;
var y;
var result;
var check;

x = 2147483648;
y = 27;
result = (x >> y);
check = -16;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 >> 27)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (2147483648 >> y)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x >> 27)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 27;
result = (x >> y);
check = -16;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 >> 27)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (2147483649 >> y)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x >> 27)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 27;
result = (x >> y);
check = -16;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 >> 27)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (-2147483647 >> y)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x >> 27)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 27;
result = (x >> y);
check = -16;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 >> 27)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (-2147483648 >> y)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x >> 27)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 27;
result = (x >> y);
check = 15;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 >> 27)
check = 15
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (-2147483649 >> y)
check = 15
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x >> 27)
check = 15
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 27;
result = (x >> y);
check = 15;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 >> 27)
check = 15
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (-2147483650 >> y)
check = 15
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x >> 27)
check = 15
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 27;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 >> 27)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (4294967295 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x >> 27)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 27;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 >> 27)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x >> 27)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 27;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 >> 27)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (-4294967295 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x >> 27)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 27;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 >> 27)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 27;
result = (-4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x >> 27)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 28;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 >> 28)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (0 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x >> 28)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 28;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 >> 28)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (1 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x >> 28)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 28;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 >> 28)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (-1 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x >> 28)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 28;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 >> 28)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (2 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x >> 28)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 28;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 >> 28)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (-2 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x >> 28)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 28;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 >> 28)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (3 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x >> 28)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 28;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 >> 28)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (-3 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x >> 28)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 28;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 >> 28)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (4 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x >> 28)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 28;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 >> 28)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (-4 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x >> 28)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 28;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 >> 28)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (8 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x >> 28)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 28;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 >> 28)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (-8 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x >> 28)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 28;
result = (x >> y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 >> 28)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (1073741822 >> y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x >> 28)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 28;
result = (x >> y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 >> 28)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (1073741823 >> y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x >> 28)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 28;
result = (x >> y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 >> 28)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (1073741824 >> y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x >> 28)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 28;
result = (x >> y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 >> 28)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (1073741825 >> y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x >> 28)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test13() {
var x;
var y;
var result;
var check;

x = -1073741823;
y = 28;
result = (x >> y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 >> 28)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (-1073741823 >> y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x >> 28)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 28;
result = (x >> y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) >> 28)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = ((-0x3fffffff-1) >> y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x >> 28)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 28;
result = (x >> y);
check = -5;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 >> 28)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (-1073741825 >> y)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x >> 28)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 28;
result = (x >> y);
check = -5;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 >> 28)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (-1073741826 >> y)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x >> 28)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 28;
result = (x >> y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 >> 28)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (2147483646 >> y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x >> 28)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 28;
result = (x >> y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 >> 28)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (2147483647 >> y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x >> 28)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 28;
result = (x >> y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 >> 28)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (2147483648 >> y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x >> 28)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 28;
result = (x >> y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 >> 28)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (2147483649 >> y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x >> 28)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 28;
result = (x >> y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 >> 28)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (-2147483647 >> y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x >> 28)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 28;
result = (x >> y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 >> 28)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (-2147483648 >> y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x >> 28)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 28;
result = (x >> y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 >> 28)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (-2147483649 >> y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x >> 28)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 28;
result = (x >> y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 >> 28)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (-2147483650 >> y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x >> 28)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 28;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 >> 28)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (4294967295 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x >> 28)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 28;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 >> 28)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x >> 28)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 28;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 >> 28)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (-4294967295 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x >> 28)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 28;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 >> 28)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 28;
result = (-4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x >> 28)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 29;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 >> 29)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (0 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x >> 29)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 29;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 >> 29)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (1 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x >> 29)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 29;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 >> 29)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (-1 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x >> 29)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 29;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 >> 29)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (2 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x >> 29)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 29;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 >> 29)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (-2 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x >> 29)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 29;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 >> 29)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (3 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x >> 29)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 29;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 >> 29)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (-3 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x >> 29)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 29;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 >> 29)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (4 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x >> 29)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 29;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 >> 29)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (-4 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x >> 29)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test14() {
var x;
var y;
var result;
var check;

x = 8;
y = 29;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 >> 29)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (8 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x >> 29)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 29;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 >> 29)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (-8 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x >> 29)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 29;
result = (x >> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 >> 29)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (1073741822 >> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x >> 29)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 29;
result = (x >> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 >> 29)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (1073741823 >> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x >> 29)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 29;
result = (x >> y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 >> 29)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (1073741824 >> y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x >> 29)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 29;
result = (x >> y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 >> 29)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (1073741825 >> y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x >> 29)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 29;
result = (x >> y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 >> 29)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (-1073741823 >> y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x >> 29)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 29;
result = (x >> y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) >> 29)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = ((-0x3fffffff-1) >> y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x >> 29)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 29;
result = (x >> y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 >> 29)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (-1073741825 >> y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x >> 29)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 29;
result = (x >> y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 >> 29)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (-1073741826 >> y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x >> 29)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 29;
result = (x >> y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 >> 29)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (2147483646 >> y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x >> 29)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 29;
result = (x >> y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 >> 29)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (2147483647 >> y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x >> 29)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 29;
result = (x >> y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 >> 29)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (2147483648 >> y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x >> 29)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 29;
result = (x >> y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 >> 29)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (2147483649 >> y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x >> 29)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 29;
result = (x >> y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 >> 29)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (-2147483647 >> y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x >> 29)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 29;
result = (x >> y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 >> 29)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (-2147483648 >> y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x >> 29)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 29;
result = (x >> y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 >> 29)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (-2147483649 >> y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x >> 29)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 29;
result = (x >> y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 >> 29)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (-2147483650 >> y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x >> 29)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 29;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 >> 29)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (4294967295 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x >> 29)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 29;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 >> 29)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x >> 29)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 29;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 >> 29)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (-4294967295 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x >> 29)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 29;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 >> 29)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 29;
result = (-4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x >> 29)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 30;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (0 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 30;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (1 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 30;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 >> 30)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (-1 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x >> 30)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test15() {
var x;
var y;
var result;
var check;

x = 2;
y = 30;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (2 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 30;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 >> 30)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (-2 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x >> 30)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 30;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (3 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 30;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 >> 30)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (-3 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x >> 30)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 30;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (4 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 30;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 >> 30)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (-4 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x >> 30)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 30;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (8 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 30;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 >> 30)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (-8 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x >> 30)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 30;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (1073741822 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 30;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (1073741823 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 30;
result = (x >> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 >> 30)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (1073741824 >> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x >> 30)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 30;
result = (x >> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 >> 30)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (1073741825 >> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x >> 30)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 30;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 >> 30)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (-1073741823 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x >> 30)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 30;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) >> 30)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = ((-0x3fffffff-1) >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x >> 30)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 30;
result = (x >> y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 >> 30)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (-1073741825 >> y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x >> 30)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 30;
result = (x >> y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 >> 30)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (-1073741826 >> y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x >> 30)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 30;
result = (x >> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 >> 30)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (2147483646 >> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x >> 30)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 30;
result = (x >> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 >> 30)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (2147483647 >> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x >> 30)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 30;
result = (x >> y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 >> 30)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (2147483648 >> y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x >> 30)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 30;
result = (x >> y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 >> 30)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (2147483649 >> y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x >> 30)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 30;
result = (x >> y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 >> 30)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (-2147483647 >> y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x >> 30)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 30;
result = (x >> y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 >> 30)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (-2147483648 >> y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x >> 30)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 30;
result = (x >> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 >> 30)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (-2147483649 >> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x >> 30)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 30;
result = (x >> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 >> 30)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (-2147483650 >> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x >> 30)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 30;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 >> 30)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (4294967295 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x >> 30)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test16() {
var x;
var y;
var result;
var check;

x = 4294967296;
y = 30;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 30;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (-4294967295 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 30;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 30;
result = (-4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x >> 30)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 31;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (0 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 31;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (1 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 31;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (-1 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 31;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (2 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 31;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (-2 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 31;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (3 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 31;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (-3 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 31;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (4 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 31;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (-4 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 31;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (8 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 31;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (-8 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 31;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (1073741822 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 31;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (1073741823 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 31;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (1073741824 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 31;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (1073741825 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 31;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (-1073741823 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 31;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = ((-0x3fffffff-1) >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 31;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (-1073741825 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 31;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (-1073741826 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 31;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (2147483646 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 31;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (2147483647 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 31;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (2147483648 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test17() {
var x;
var y;
var result;
var check;

x = 2147483649;
y = 31;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (2147483649 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 31;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (-2147483647 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 31;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (-2147483648 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 31;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (-2147483649 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 31;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (-2147483650 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 31;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (4294967295 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x >> 31)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 31;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 31;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (-4294967295 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 31;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 31;
result = (-4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x >> 31)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 32;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 >> 32)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (0 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x >> 32)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 32;
result = (x >> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 >> 32)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (1 >> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x >> 32)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 32;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 >> 32)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (-1 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x >> 32)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 32;
result = (x >> y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 >> 32)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (2 >> y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x >> 32)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 32;
result = (x >> y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 >> 32)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (-2 >> y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x >> 32)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 32;
result = (x >> y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 >> 32)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (3 >> y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x >> 32)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 32;
result = (x >> y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 >> 32)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (-3 >> y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x >> 32)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 32;
result = (x >> y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 >> 32)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (4 >> y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x >> 32)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 32;
result = (x >> y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 >> 32)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (-4 >> y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x >> 32)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 32;
result = (x >> y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 >> 32)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (8 >> y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x >> 32)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 32;
result = (x >> y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 >> 32)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (-8 >> y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x >> 32)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 32;
result = (x >> y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 >> 32)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (1073741822 >> y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x >> 32)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 32;
result = (x >> y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 >> 32)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (1073741823 >> y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x >> 32)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 32;
result = (x >> y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 >> 32)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (1073741824 >> y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x >> 32)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 32;
result = (x >> y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 >> 32)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (1073741825 >> y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x >> 32)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 32;
result = (x >> y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 >> 32)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (-1073741823 >> y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x >> 32)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test18() {
var x;
var y;
var result;
var check;

x = (-0x3fffffff-1);
y = 32;
result = (x >> y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) >> 32)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = ((-0x3fffffff-1) >> y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x >> 32)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 32;
result = (x >> y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 >> 32)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (-1073741825 >> y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x >> 32)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 32;
result = (x >> y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 >> 32)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (-1073741826 >> y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x >> 32)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 32;
result = (x >> y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 >> 32)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (2147483646 >> y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x >> 32)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 32;
result = (x >> y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 >> 32)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (2147483647 >> y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x >> 32)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 32;
result = (x >> y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 >> 32)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (2147483648 >> y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x >> 32)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 32;
result = (x >> y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 >> 32)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (2147483649 >> y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x >> 32)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 32;
result = (x >> y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 >> 32)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (-2147483647 >> y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x >> 32)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 32;
result = (x >> y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 >> 32)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (-2147483648 >> y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x >> 32)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 32;
result = (x >> y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 >> 32)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (-2147483649 >> y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x >> 32)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 32;
result = (x >> y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 >> 32)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (-2147483650 >> y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x >> 32)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 32;
result = (x >> y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 >> 32)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (4294967295 >> y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x >> 32)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 32;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 >> 32)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x >> 32)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 32;
result = (x >> y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 >> 32)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (-4294967295 >> y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x >> 32)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 32;
result = (x >> y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 >> 32)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 32;
result = (-4294967296 >> y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x >> 32)
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

print("pass");
