




var test = 1; 
function fail(n, expected, result) { WScript.Echo("failure in test " + test + "; expected " + expected + ", got " + result); }
function test0() {
var x;
var y;
var result;
var check;

x = 0;
y = 0;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (0 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1;
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + 1)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (0 + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + 1)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -1;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + -1)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (0 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + -1)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2;
result = (x + y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + 2)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (0 + y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + 2)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -2;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + -2)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (0 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + -2)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 3;
result = (x + y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + 3)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (0 + y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + 3)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -3;
result = (x + y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + -3)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (0 + y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + -3)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 4;
result = (x + y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + 4)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (0 + y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + 4)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -4;
result = (x + y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + -4)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (0 + y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + -4)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 8;
result = (x + y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + 8)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (0 + y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + 8)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -8;
result = (x + y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + -8)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (0 + y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + -8)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1073741822;
result = (x + y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + 1073741822)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (0 + y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + 1073741822)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1073741823;
result = (x + y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + 1073741823)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (0 + y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + 1073741823)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1073741824;
result = (x + y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + 1073741824)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (0 + y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + 1073741824)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1073741825;
result = (x + y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + 1073741825)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (0 + y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + 1073741825)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -1073741823;
result = (x + y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + -1073741823)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (0 + y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + -1073741823)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = (-0x3fffffff-1);
result = (x + y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + (-0x3fffffff-1))
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (0 + y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + (-0x3fffffff-1))
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -1073741825;
result = (x + y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + -1073741825)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (0 + y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + -1073741825)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -1073741826;
result = (x + y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + -1073741826)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (0 + y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + -1073741826)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2147483646;
result = (x + y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + 2147483646)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (0 + y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + 2147483646)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2147483647;
result = (x + y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + 2147483647)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (0 + y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + 2147483647)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2147483648;
result = (x + y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + 2147483648)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (0 + y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + 2147483648)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2147483649;
result = (x + y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + 2147483649)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (0 + y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + 2147483649)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -2147483647;
result = (x + y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + -2147483647)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (0 + y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + -2147483647)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -2147483648;
result = (x + y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + -2147483648)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (0 + y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + -2147483648)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test1() {
var x;
var y;
var result;
var check;

x = 0;
y = -2147483649;
result = (x + y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + -2147483649)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (0 + y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + -2147483649)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -2147483650;
result = (x + y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + -2147483650)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (0 + y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + -2147483650)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 4294967295;
result = (x + y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + 4294967295)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (0 + y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + 4294967295)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 4294967296;
result = (x + y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + 4294967296)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (0 + y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + 4294967296)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -4294967295;
result = (x + y);
check = -4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + -4294967295)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (0 + y)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + -4294967295)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -4294967296;
result = (x + y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 + -4294967296)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (0 + y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x + -4294967296)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 0;
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1 + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + 0)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 1;
result = (x + y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + 1)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1 + y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + 1)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -1;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 2;
result = (x + y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + 2)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1 + y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + 2)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -2;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + -2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (1 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + -2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 3;
result = (x + y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + 3)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1 + y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + 3)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -3;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + -3)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (1 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + -3)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 4;
result = (x + y);
check = 5;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + 4)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1 + y)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + 4)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -4;
result = (x + y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + -4)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (1 + y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + -4)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 8;
result = (x + y);
check = 9;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + 8)
check = 9
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1 + y)
check = 9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + 8)
check = 9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -8;
result = (x + y);
check = -7;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + -8)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (1 + y)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + -8)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 1073741822;
result = (x + y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + 1073741822)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (1 + y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + 1073741822)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 1073741823;
result = (x + y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + 1073741823)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (1 + y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + 1073741823)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 1073741824;
result = (x + y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + 1073741824)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (1 + y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + 1073741824)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 1073741825;
result = (x + y);
check = 1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + 1073741825)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (1 + y)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + 1073741825)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -1073741823;
result = (x + y);
check = -1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + -1073741823)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (1 + y)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + -1073741823)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = (-0x3fffffff-1);
result = (x + y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + (-0x3fffffff-1))
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (1 + y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + (-0x3fffffff-1))
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -1073741825;
result = (x + y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + -1073741825)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (1 + y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + -1073741825)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -1073741826;
result = (x + y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + -1073741826)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (1 + y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + -1073741826)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test2() {
var x;
var y;
var result;
var check;

x = 1;
y = 2147483646;
result = (x + y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + 2147483646)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (1 + y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + 2147483646)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 2147483647;
result = (x + y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + 2147483647)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (1 + y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + 2147483647)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 2147483648;
result = (x + y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + 2147483648)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (1 + y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + 2147483648)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 2147483649;
result = (x + y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + 2147483649)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (1 + y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + 2147483649)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -2147483647;
result = (x + y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + -2147483647)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (1 + y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + -2147483647)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -2147483648;
result = (x + y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + -2147483648)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (1 + y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + -2147483648)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -2147483649;
result = (x + y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + -2147483649)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (1 + y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + -2147483649)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -2147483650;
result = (x + y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + -2147483650)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (1 + y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + -2147483650)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 4294967295;
result = (x + y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + 4294967295)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (1 + y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + 4294967295)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 4294967296;
result = (x + y);
check = 4294967297;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + 4294967296)
check = 4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (1 + y)
check = 4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + 4294967296)
check = 4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -4294967295;
result = (x + y);
check = -4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + -4294967295)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (1 + y)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + -4294967295)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -4294967296;
result = (x + y);
check = -4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 + -4294967296)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (1 + y)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x + -4294967296)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 0;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + 0)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + 0)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 1;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -1;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + -1)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-1 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + -1)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 2;
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-1 + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + 2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -2;
result = (x + y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + -2)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-1 + y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + -2)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 3;
result = (x + y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + 3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-1 + y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + 3)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -3;
result = (x + y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + -3)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-1 + y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + -3)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 4;
result = (x + y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + 4)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-1 + y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + 4)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -4;
result = (x + y);
check = -5;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + -4)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-1 + y)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + -4)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 8;
result = (x + y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + 8)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-1 + y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + 8)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -8;
result = (x + y);
check = -9;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + -8)
check = -9
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-1 + y)
check = -9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + -8)
check = -9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 1073741822;
result = (x + y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + 1073741822)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-1 + y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + 1073741822)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 1073741823;
result = (x + y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + 1073741823)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-1 + y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + 1073741823)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test3() {
var x;
var y;
var result;
var check;

x = -1;
y = 1073741824;
result = (x + y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + 1073741824)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-1 + y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + 1073741824)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 1073741825;
result = (x + y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + 1073741825)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-1 + y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + 1073741825)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -1073741823;
result = (x + y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + -1073741823)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-1 + y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + -1073741823)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = (-0x3fffffff-1);
result = (x + y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + (-0x3fffffff-1))
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-1 + y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + (-0x3fffffff-1))
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -1073741825;
result = (x + y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + -1073741825)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-1 + y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + -1073741825)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -1073741826;
result = (x + y);
check = -1073741827;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + -1073741826)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-1 + y)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + -1073741826)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 2147483646;
result = (x + y);
check = 2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + 2147483646)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-1 + y)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + 2147483646)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 2147483647;
result = (x + y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + 2147483647)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-1 + y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + 2147483647)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 2147483648;
result = (x + y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + 2147483648)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-1 + y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + 2147483648)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 2147483649;
result = (x + y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + 2147483649)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-1 + y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + 2147483649)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -2147483647;
result = (x + y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + -2147483647)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-1 + y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + -2147483647)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -2147483648;
result = (x + y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + -2147483648)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-1 + y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + -2147483648)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -2147483649;
result = (x + y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + -2147483649)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-1 + y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + -2147483649)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -2147483650;
result = (x + y);
check = -2147483651;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + -2147483650)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-1 + y)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + -2147483650)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 4294967295;
result = (x + y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + 4294967295)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-1 + y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + 4294967295)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 4294967296;
result = (x + y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + 4294967296)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-1 + y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + 4294967296)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -4294967295;
result = (x + y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + -4294967295)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-1 + y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + -4294967295)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -4294967296;
result = (x + y);
check = -4294967297;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 + -4294967296)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-1 + y)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x + -4294967296)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 0;
result = (x + y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2 + y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + 0)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 1;
result = (x + y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + 1)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2 + y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + 1)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -1;
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + -1)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2 + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + -1)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 2;
result = (x + y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + 2)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2 + y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + 2)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -2;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (2 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 3;
result = (x + y);
check = 5;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + 3)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2 + y)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + 3)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -3;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + -3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (2 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + -3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test4() {
var x;
var y;
var result;
var check;

x = 2;
y = 4;
result = (x + y);
check = 6;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + 4)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2 + y)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + 4)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -4;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + -4)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (2 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + -4)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 8;
result = (x + y);
check = 10;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + 8)
check = 10
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2 + y)
check = 10
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + 8)
check = 10
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -8;
result = (x + y);
check = -6;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + -8)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (2 + y)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + -8)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 1073741822;
result = (x + y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + 1073741822)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (2 + y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + 1073741822)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 1073741823;
result = (x + y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + 1073741823)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (2 + y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + 1073741823)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 1073741824;
result = (x + y);
check = 1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + 1073741824)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (2 + y)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + 1073741824)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 1073741825;
result = (x + y);
check = 1073741827;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + 1073741825)
check = 1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (2 + y)
check = 1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + 1073741825)
check = 1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -1073741823;
result = (x + y);
check = -1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + -1073741823)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (2 + y)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + -1073741823)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = (-0x3fffffff-1);
result = (x + y);
check = -1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + (-0x3fffffff-1))
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (2 + y)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + (-0x3fffffff-1))
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -1073741825;
result = (x + y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + -1073741825)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (2 + y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + -1073741825)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -1073741826;
result = (x + y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + -1073741826)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (2 + y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + -1073741826)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 2147483646;
result = (x + y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + 2147483646)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (2 + y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + 2147483646)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 2147483647;
result = (x + y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + 2147483647)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (2 + y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + 2147483647)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 2147483648;
result = (x + y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + 2147483648)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (2 + y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + 2147483648)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 2147483649;
result = (x + y);
check = 2147483651;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + 2147483649)
check = 2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (2 + y)
check = 2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + 2147483649)
check = 2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -2147483647;
result = (x + y);
check = -2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + -2147483647)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (2 + y)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + -2147483647)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -2147483648;
result = (x + y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + -2147483648)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (2 + y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + -2147483648)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -2147483649;
result = (x + y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + -2147483649)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (2 + y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + -2147483649)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -2147483650;
result = (x + y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + -2147483650)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (2 + y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + -2147483650)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 4294967295;
result = (x + y);
check = 4294967297;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + 4294967295)
check = 4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (2 + y)
check = 4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + 4294967295)
check = 4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 4294967296;
result = (x + y);
check = 4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + 4294967296)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (2 + y)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + 4294967296)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -4294967295;
result = (x + y);
check = -4294967293;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + -4294967295)
check = -4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (2 + y)
check = -4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + -4294967295)
check = -4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -4294967296;
result = (x + y);
check = -4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 + -4294967296)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (2 + y)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x + -4294967296)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 0;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + 0)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + 0)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test5() {
var x;
var y;
var result;
var check;

x = -2;
y = 1;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + 1)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + 1)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -1;
result = (x + y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + -1)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2 + y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + -1)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 2;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -2;
result = (x + y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + -2)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-2 + y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + -2)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 3;
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + 3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2 + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + 3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -3;
result = (x + y);
check = -5;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + -3)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-2 + y)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + -3)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 4;
result = (x + y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + 4)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2 + y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + 4)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -4;
result = (x + y);
check = -6;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + -4)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-2 + y)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + -4)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 8;
result = (x + y);
check = 6;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + 8)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2 + y)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + 8)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -8;
result = (x + y);
check = -10;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + -8)
check = -10
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-2 + y)
check = -10
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + -8)
check = -10
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 1073741822;
result = (x + y);
check = 1073741820;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + 1073741822)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-2 + y)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + 1073741822)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 1073741823;
result = (x + y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + 1073741823)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-2 + y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + 1073741823)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 1073741824;
result = (x + y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + 1073741824)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-2 + y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + 1073741824)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 1073741825;
result = (x + y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + 1073741825)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-2 + y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + 1073741825)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -1073741823;
result = (x + y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + -1073741823)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-2 + y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + -1073741823)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = (-0x3fffffff-1);
result = (x + y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + (-0x3fffffff-1))
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-2 + y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + (-0x3fffffff-1))
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -1073741825;
result = (x + y);
check = -1073741827;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + -1073741825)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-2 + y)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + -1073741825)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -1073741826;
result = (x + y);
check = -1073741828;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + -1073741826)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-2 + y)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + -1073741826)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 2147483646;
result = (x + y);
check = 2147483644;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + 2147483646)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-2 + y)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + 2147483646)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 2147483647;
result = (x + y);
check = 2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + 2147483647)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-2 + y)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + 2147483647)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 2147483648;
result = (x + y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + 2147483648)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-2 + y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + 2147483648)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 2147483649;
result = (x + y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + 2147483649)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-2 + y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + 2147483649)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -2147483647;
result = (x + y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + -2147483647)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-2 + y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + -2147483647)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -2147483648;
result = (x + y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + -2147483648)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-2 + y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + -2147483648)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -2147483649;
result = (x + y);
check = -2147483651;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + -2147483649)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-2 + y)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + -2147483649)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test6() {
var x;
var y;
var result;
var check;

x = -2;
y = -2147483650;
result = (x + y);
check = -2147483652;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + -2147483650)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-2 + y)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + -2147483650)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 4294967295;
result = (x + y);
check = 4294967293;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + 4294967295)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-2 + y)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + 4294967295)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 4294967296;
result = (x + y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + 4294967296)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-2 + y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + 4294967296)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -4294967295;
result = (x + y);
check = -4294967297;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + -4294967295)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-2 + y)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + -4294967295)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -4294967296;
result = (x + y);
check = -4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 + -4294967296)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-2 + y)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x + -4294967296)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 0;
result = (x + y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + 0)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (3 + y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + 0)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 1;
result = (x + y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + 1)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (3 + y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + 1)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -1;
result = (x + y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + -1)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (3 + y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + -1)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 2;
result = (x + y);
check = 5;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + 2)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (3 + y)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + 2)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -2;
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + -2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (3 + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + -2)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 3;
result = (x + y);
check = 6;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + 3)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (3 + y)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + 3)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -3;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (3 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 4;
result = (x + y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + 4)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (3 + y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + 4)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -4;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + -4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (3 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + -4)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 8;
result = (x + y);
check = 11;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + 8)
check = 11
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (3 + y)
check = 11
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + 8)
check = 11
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -8;
result = (x + y);
check = -5;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + -8)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (3 + y)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + -8)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 1073741822;
result = (x + y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + 1073741822)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (3 + y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + 1073741822)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 1073741823;
result = (x + y);
check = 1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + 1073741823)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (3 + y)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + 1073741823)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 1073741824;
result = (x + y);
check = 1073741827;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + 1073741824)
check = 1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (3 + y)
check = 1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + 1073741824)
check = 1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 1073741825;
result = (x + y);
check = 1073741828;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + 1073741825)
check = 1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (3 + y)
check = 1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + 1073741825)
check = 1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -1073741823;
result = (x + y);
check = -1073741820;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + -1073741823)
check = -1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (3 + y)
check = -1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + -1073741823)
check = -1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = (-0x3fffffff-1);
result = (x + y);
check = -1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + (-0x3fffffff-1))
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (3 + y)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + (-0x3fffffff-1))
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -1073741825;
result = (x + y);
check = -1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + -1073741825)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (3 + y)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + -1073741825)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -1073741826;
result = (x + y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + -1073741826)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (3 + y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + -1073741826)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 2147483646;
result = (x + y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + 2147483646)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (3 + y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + 2147483646)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test7() {
var x;
var y;
var result;
var check;

x = 3;
y = 2147483647;
result = (x + y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + 2147483647)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (3 + y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + 2147483647)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 2147483648;
result = (x + y);
check = 2147483651;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + 2147483648)
check = 2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (3 + y)
check = 2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + 2147483648)
check = 2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 2147483649;
result = (x + y);
check = 2147483652;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + 2147483649)
check = 2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (3 + y)
check = 2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + 2147483649)
check = 2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -2147483647;
result = (x + y);
check = -2147483644;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + -2147483647)
check = -2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (3 + y)
check = -2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + -2147483647)
check = -2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -2147483648;
result = (x + y);
check = -2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + -2147483648)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (3 + y)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + -2147483648)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -2147483649;
result = (x + y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + -2147483649)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (3 + y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + -2147483649)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -2147483650;
result = (x + y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + -2147483650)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (3 + y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + -2147483650)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 4294967295;
result = (x + y);
check = 4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + 4294967295)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (3 + y)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + 4294967295)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 4294967296;
result = (x + y);
check = 4294967299;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + 4294967296)
check = 4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (3 + y)
check = 4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + 4294967296)
check = 4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -4294967295;
result = (x + y);
check = -4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + -4294967295)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (3 + y)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + -4294967295)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -4294967296;
result = (x + y);
check = -4294967293;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 + -4294967296)
check = -4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (3 + y)
check = -4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x + -4294967296)
check = -4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 0;
result = (x + y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + 0)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-3 + y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + 0)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 1;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + 1)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-3 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + 1)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -1;
result = (x + y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + -1)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-3 + y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + -1)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 2;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-3 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + 2)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -2;
result = (x + y);
check = -5;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + -2)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-3 + y)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + -2)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 3;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-3 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -3;
result = (x + y);
check = -6;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + -3)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-3 + y)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + -3)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 4;
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + 4)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-3 + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + 4)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -4;
result = (x + y);
check = -7;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + -4)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-3 + y)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + -4)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 8;
result = (x + y);
check = 5;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + 8)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-3 + y)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + 8)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -8;
result = (x + y);
check = -11;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + -8)
check = -11
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-3 + y)
check = -11
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + -8)
check = -11
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 1073741822;
result = (x + y);
check = 1073741819;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + 1073741822)
check = 1073741819
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-3 + y)
check = 1073741819
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + 1073741822)
check = 1073741819
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 1073741823;
result = (x + y);
check = 1073741820;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + 1073741823)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-3 + y)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + 1073741823)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 1073741824;
result = (x + y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + 1073741824)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-3 + y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + 1073741824)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test8() {
var x;
var y;
var result;
var check;

x = -3;
y = 1073741825;
result = (x + y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + 1073741825)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-3 + y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + 1073741825)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -1073741823;
result = (x + y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + -1073741823)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-3 + y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + -1073741823)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = (-0x3fffffff-1);
result = (x + y);
check = -1073741827;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + (-0x3fffffff-1))
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-3 + y)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + (-0x3fffffff-1))
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -1073741825;
result = (x + y);
check = -1073741828;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + -1073741825)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-3 + y)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + -1073741825)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -1073741826;
result = (x + y);
check = -1073741829;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + -1073741826)
check = -1073741829
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-3 + y)
check = -1073741829
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + -1073741826)
check = -1073741829
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 2147483646;
result = (x + y);
check = 2147483643;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + 2147483646)
check = 2147483643
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-3 + y)
check = 2147483643
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + 2147483646)
check = 2147483643
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 2147483647;
result = (x + y);
check = 2147483644;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + 2147483647)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-3 + y)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + 2147483647)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 2147483648;
result = (x + y);
check = 2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + 2147483648)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-3 + y)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + 2147483648)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 2147483649;
result = (x + y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + 2147483649)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-3 + y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + 2147483649)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -2147483647;
result = (x + y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + -2147483647)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-3 + y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + -2147483647)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -2147483648;
result = (x + y);
check = -2147483651;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + -2147483648)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-3 + y)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + -2147483648)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -2147483649;
result = (x + y);
check = -2147483652;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + -2147483649)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-3 + y)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + -2147483649)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -2147483650;
result = (x + y);
check = -2147483653;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + -2147483650)
check = -2147483653
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-3 + y)
check = -2147483653
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + -2147483650)
check = -2147483653
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 4294967295;
result = (x + y);
check = 4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + 4294967295)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-3 + y)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + 4294967295)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 4294967296;
result = (x + y);
check = 4294967293;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + 4294967296)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-3 + y)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + 4294967296)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -4294967295;
result = (x + y);
check = -4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + -4294967295)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-3 + y)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + -4294967295)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -4294967296;
result = (x + y);
check = -4294967299;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 + -4294967296)
check = -4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-3 + y)
check = -4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x + -4294967296)
check = -4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 0;
result = (x + y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + 0)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4 + y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + 0)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 1;
result = (x + y);
check = 5;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + 1)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (4 + y)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + 1)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -1;
result = (x + y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + -1)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (4 + y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + -1)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 2;
result = (x + y);
check = 6;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + 2)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (4 + y)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + 2)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -2;
result = (x + y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + -2)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (4 + y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + -2)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 3;
result = (x + y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + 3)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (4 + y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + 3)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -3;
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + -3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (4 + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + -3)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 4;
result = (x + y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + 4)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (4 + y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + 4)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test9() {
var x;
var y;
var result;
var check;

x = 4;
y = -4;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (4 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 8;
result = (x + y);
check = 12;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + 8)
check = 12
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (4 + y)
check = 12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + 8)
check = 12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -8;
result = (x + y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + -8)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (4 + y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + -8)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 1073741822;
result = (x + y);
check = 1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + 1073741822)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (4 + y)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + 1073741822)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 1073741823;
result = (x + y);
check = 1073741827;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + 1073741823)
check = 1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (4 + y)
check = 1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + 1073741823)
check = 1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 1073741824;
result = (x + y);
check = 1073741828;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + 1073741824)
check = 1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (4 + y)
check = 1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + 1073741824)
check = 1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 1073741825;
result = (x + y);
check = 1073741829;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + 1073741825)
check = 1073741829
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (4 + y)
check = 1073741829
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + 1073741825)
check = 1073741829
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -1073741823;
result = (x + y);
check = -1073741819;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + -1073741823)
check = -1073741819
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (4 + y)
check = -1073741819
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + -1073741823)
check = -1073741819
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = (-0x3fffffff-1);
result = (x + y);
check = -1073741820;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + (-0x3fffffff-1))
check = -1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (4 + y)
check = -1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + (-0x3fffffff-1))
check = -1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -1073741825;
result = (x + y);
check = -1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + -1073741825)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (4 + y)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + -1073741825)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -1073741826;
result = (x + y);
check = -1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + -1073741826)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (4 + y)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + -1073741826)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 2147483646;
result = (x + y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + 2147483646)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (4 + y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + 2147483646)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 2147483647;
result = (x + y);
check = 2147483651;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + 2147483647)
check = 2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (4 + y)
check = 2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + 2147483647)
check = 2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 2147483648;
result = (x + y);
check = 2147483652;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + 2147483648)
check = 2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (4 + y)
check = 2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + 2147483648)
check = 2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 2147483649;
result = (x + y);
check = 2147483653;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + 2147483649)
check = 2147483653
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (4 + y)
check = 2147483653
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + 2147483649)
check = 2147483653
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -2147483647;
result = (x + y);
check = -2147483643;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + -2147483647)
check = -2147483643
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (4 + y)
check = -2147483643
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + -2147483647)
check = -2147483643
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -2147483648;
result = (x + y);
check = -2147483644;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + -2147483648)
check = -2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (4 + y)
check = -2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + -2147483648)
check = -2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -2147483649;
result = (x + y);
check = -2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + -2147483649)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (4 + y)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + -2147483649)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -2147483650;
result = (x + y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + -2147483650)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (4 + y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + -2147483650)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 4294967295;
result = (x + y);
check = 4294967299;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + 4294967295)
check = 4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (4 + y)
check = 4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + 4294967295)
check = 4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 4294967296;
result = (x + y);
check = 4294967300;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + 4294967296)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (4 + y)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + 4294967296)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -4294967295;
result = (x + y);
check = -4294967291;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + -4294967295)
check = -4294967291
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (4 + y)
check = -4294967291
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + -4294967295)
check = -4294967291
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -4294967296;
result = (x + y);
check = -4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 + -4294967296)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (4 + y)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x + -4294967296)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 0;
result = (x + y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + 0)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4 + y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + 0)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 1;
result = (x + y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + 1)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-4 + y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + 1)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test10() {
var x;
var y;
var result;
var check;

x = -4;
y = -1;
result = (x + y);
check = -5;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + -1)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-4 + y)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + -1)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 2;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + 2)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-4 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + 2)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -2;
result = (x + y);
check = -6;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + -2)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-4 + y)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + -2)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 3;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-4 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + 3)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -3;
result = (x + y);
check = -7;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + -3)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-4 + y)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + -3)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 4;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-4 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -4;
result = (x + y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + -4)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-4 + y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + -4)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 8;
result = (x + y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + 8)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-4 + y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + 8)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -8;
result = (x + y);
check = -12;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + -8)
check = -12
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-4 + y)
check = -12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + -8)
check = -12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 1073741822;
result = (x + y);
check = 1073741818;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + 1073741822)
check = 1073741818
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-4 + y)
check = 1073741818
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + 1073741822)
check = 1073741818
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 1073741823;
result = (x + y);
check = 1073741819;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + 1073741823)
check = 1073741819
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-4 + y)
check = 1073741819
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + 1073741823)
check = 1073741819
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 1073741824;
result = (x + y);
check = 1073741820;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + 1073741824)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-4 + y)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + 1073741824)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 1073741825;
result = (x + y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + 1073741825)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-4 + y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + 1073741825)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -1073741823;
result = (x + y);
check = -1073741827;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + -1073741823)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-4 + y)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + -1073741823)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = (-0x3fffffff-1);
result = (x + y);
check = -1073741828;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + (-0x3fffffff-1))
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-4 + y)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + (-0x3fffffff-1))
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -1073741825;
result = (x + y);
check = -1073741829;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + -1073741825)
check = -1073741829
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-4 + y)
check = -1073741829
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + -1073741825)
check = -1073741829
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -1073741826;
result = (x + y);
check = -1073741830;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + -1073741826)
check = -1073741830
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-4 + y)
check = -1073741830
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + -1073741826)
check = -1073741830
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 2147483646;
result = (x + y);
check = 2147483642;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + 2147483646)
check = 2147483642
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-4 + y)
check = 2147483642
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + 2147483646)
check = 2147483642
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 2147483647;
result = (x + y);
check = 2147483643;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + 2147483647)
check = 2147483643
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-4 + y)
check = 2147483643
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + 2147483647)
check = 2147483643
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 2147483648;
result = (x + y);
check = 2147483644;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + 2147483648)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-4 + y)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + 2147483648)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 2147483649;
result = (x + y);
check = 2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + 2147483649)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-4 + y)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + 2147483649)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -2147483647;
result = (x + y);
check = -2147483651;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + -2147483647)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-4 + y)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + -2147483647)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -2147483648;
result = (x + y);
check = -2147483652;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + -2147483648)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-4 + y)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + -2147483648)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -2147483649;
result = (x + y);
check = -2147483653;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + -2147483649)
check = -2147483653
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-4 + y)
check = -2147483653
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + -2147483649)
check = -2147483653
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -2147483650;
result = (x + y);
check = -2147483654;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + -2147483650)
check = -2147483654
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-4 + y)
check = -2147483654
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + -2147483650)
check = -2147483654
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test11() {
var x;
var y;
var result;
var check;

x = -4;
y = 4294967295;
result = (x + y);
check = 4294967291;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + 4294967295)
check = 4294967291
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-4 + y)
check = 4294967291
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + 4294967295)
check = 4294967291
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 4294967296;
result = (x + y);
check = 4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + 4294967296)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-4 + y)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + 4294967296)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -4294967295;
result = (x + y);
check = -4294967299;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + -4294967295)
check = -4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-4 + y)
check = -4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + -4294967295)
check = -4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -4294967296;
result = (x + y);
check = -4294967300;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 + -4294967296)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-4 + y)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x + -4294967296)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 0;
result = (x + y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + 0)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (8 + y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + 0)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 1;
result = (x + y);
check = 9;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + 1)
check = 9
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (8 + y)
check = 9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + 1)
check = 9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -1;
result = (x + y);
check = 7;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + -1)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (8 + y)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + -1)
check = 7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 2;
result = (x + y);
check = 10;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + 2)
check = 10
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (8 + y)
check = 10
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + 2)
check = 10
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -2;
result = (x + y);
check = 6;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + -2)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (8 + y)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + -2)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 3;
result = (x + y);
check = 11;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + 3)
check = 11
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (8 + y)
check = 11
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + 3)
check = 11
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -3;
result = (x + y);
check = 5;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + -3)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (8 + y)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + -3)
check = 5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 4;
result = (x + y);
check = 12;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + 4)
check = 12
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (8 + y)
check = 12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + 4)
check = 12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -4;
result = (x + y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + -4)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (8 + y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + -4)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 8;
result = (x + y);
check = 16;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + 8)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (8 + y)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + 8)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -8;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (8 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 1073741822;
result = (x + y);
check = 1073741830;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + 1073741822)
check = 1073741830
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (8 + y)
check = 1073741830
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + 1073741822)
check = 1073741830
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 1073741823;
result = (x + y);
check = 1073741831;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + 1073741823)
check = 1073741831
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (8 + y)
check = 1073741831
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + 1073741823)
check = 1073741831
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 1073741824;
result = (x + y);
check = 1073741832;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + 1073741824)
check = 1073741832
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (8 + y)
check = 1073741832
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + 1073741824)
check = 1073741832
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 1073741825;
result = (x + y);
check = 1073741833;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + 1073741825)
check = 1073741833
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (8 + y)
check = 1073741833
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + 1073741825)
check = 1073741833
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -1073741823;
result = (x + y);
check = -1073741815;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + -1073741823)
check = -1073741815
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (8 + y)
check = -1073741815
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + -1073741823)
check = -1073741815
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = (-0x3fffffff-1);
result = (x + y);
check = -1073741816;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + (-0x3fffffff-1))
check = -1073741816
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (8 + y)
check = -1073741816
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + (-0x3fffffff-1))
check = -1073741816
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -1073741825;
result = (x + y);
check = -1073741817;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + -1073741825)
check = -1073741817
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (8 + y)
check = -1073741817
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + -1073741825)
check = -1073741817
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -1073741826;
result = (x + y);
check = -1073741818;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + -1073741826)
check = -1073741818
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (8 + y)
check = -1073741818
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + -1073741826)
check = -1073741818
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 2147483646;
result = (x + y);
check = 2147483654;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + 2147483646)
check = 2147483654
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (8 + y)
check = 2147483654
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + 2147483646)
check = 2147483654
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 2147483647;
result = (x + y);
check = 2147483655;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + 2147483647)
check = 2147483655
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (8 + y)
check = 2147483655
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + 2147483647)
check = 2147483655
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test12() {
var x;
var y;
var result;
var check;

x = 8;
y = 2147483648;
result = (x + y);
check = 2147483656;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + 2147483648)
check = 2147483656
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (8 + y)
check = 2147483656
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + 2147483648)
check = 2147483656
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 2147483649;
result = (x + y);
check = 2147483657;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + 2147483649)
check = 2147483657
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (8 + y)
check = 2147483657
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + 2147483649)
check = 2147483657
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -2147483647;
result = (x + y);
check = -2147483639;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + -2147483647)
check = -2147483639
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (8 + y)
check = -2147483639
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + -2147483647)
check = -2147483639
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -2147483648;
result = (x + y);
check = -2147483640;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + -2147483648)
check = -2147483640
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (8 + y)
check = -2147483640
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + -2147483648)
check = -2147483640
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -2147483649;
result = (x + y);
check = -2147483641;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + -2147483649)
check = -2147483641
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (8 + y)
check = -2147483641
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + -2147483649)
check = -2147483641
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -2147483650;
result = (x + y);
check = -2147483642;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + -2147483650)
check = -2147483642
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (8 + y)
check = -2147483642
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + -2147483650)
check = -2147483642
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 4294967295;
result = (x + y);
check = 4294967303;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + 4294967295)
check = 4294967303
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (8 + y)
check = 4294967303
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + 4294967295)
check = 4294967303
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 4294967296;
result = (x + y);
check = 4294967304;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + 4294967296)
check = 4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (8 + y)
check = 4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + 4294967296)
check = 4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -4294967295;
result = (x + y);
check = -4294967287;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + -4294967295)
check = -4294967287
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (8 + y)
check = -4294967287
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + -4294967295)
check = -4294967287
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -4294967296;
result = (x + y);
check = -4294967288;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 + -4294967296)
check = -4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (8 + y)
check = -4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x + -4294967296)
check = -4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 0;
result = (x + y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + 0)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-8 + y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + 0)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 1;
result = (x + y);
check = -7;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + 1)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-8 + y)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + 1)
check = -7
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -1;
result = (x + y);
check = -9;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + -1)
check = -9
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-8 + y)
check = -9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + -1)
check = -9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 2;
result = (x + y);
check = -6;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + 2)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-8 + y)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + 2)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -2;
result = (x + y);
check = -10;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + -2)
check = -10
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-8 + y)
check = -10
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + -2)
check = -10
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 3;
result = (x + y);
check = -5;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + 3)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-8 + y)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + 3)
check = -5
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -3;
result = (x + y);
check = -11;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + -3)
check = -11
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-8 + y)
check = -11
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + -3)
check = -11
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 4;
result = (x + y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + 4)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-8 + y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + 4)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -4;
result = (x + y);
check = -12;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + -4)
check = -12
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-8 + y)
check = -12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + -4)
check = -12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 8;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-8 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -8;
result = (x + y);
check = -16;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + -8)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-8 + y)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + -8)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 1073741822;
result = (x + y);
check = 1073741814;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + 1073741822)
check = 1073741814
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-8 + y)
check = 1073741814
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + 1073741822)
check = 1073741814
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 1073741823;
result = (x + y);
check = 1073741815;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + 1073741823)
check = 1073741815
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-8 + y)
check = 1073741815
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + 1073741823)
check = 1073741815
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 1073741824;
result = (x + y);
check = 1073741816;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + 1073741824)
check = 1073741816
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-8 + y)
check = 1073741816
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + 1073741824)
check = 1073741816
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 1073741825;
result = (x + y);
check = 1073741817;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + 1073741825)
check = 1073741817
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-8 + y)
check = 1073741817
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + 1073741825)
check = 1073741817
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test13() {
var x;
var y;
var result;
var check;

x = -8;
y = -1073741823;
result = (x + y);
check = -1073741831;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + -1073741823)
check = -1073741831
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-8 + y)
check = -1073741831
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + -1073741823)
check = -1073741831
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = (-0x3fffffff-1);
result = (x + y);
check = -1073741832;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + (-0x3fffffff-1))
check = -1073741832
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-8 + y)
check = -1073741832
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + (-0x3fffffff-1))
check = -1073741832
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -1073741825;
result = (x + y);
check = -1073741833;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + -1073741825)
check = -1073741833
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-8 + y)
check = -1073741833
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + -1073741825)
check = -1073741833
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -1073741826;
result = (x + y);
check = -1073741834;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + -1073741826)
check = -1073741834
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-8 + y)
check = -1073741834
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + -1073741826)
check = -1073741834
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 2147483646;
result = (x + y);
check = 2147483638;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + 2147483646)
check = 2147483638
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-8 + y)
check = 2147483638
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + 2147483646)
check = 2147483638
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 2147483647;
result = (x + y);
check = 2147483639;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + 2147483647)
check = 2147483639
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-8 + y)
check = 2147483639
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + 2147483647)
check = 2147483639
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 2147483648;
result = (x + y);
check = 2147483640;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + 2147483648)
check = 2147483640
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-8 + y)
check = 2147483640
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + 2147483648)
check = 2147483640
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 2147483649;
result = (x + y);
check = 2147483641;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + 2147483649)
check = 2147483641
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-8 + y)
check = 2147483641
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + 2147483649)
check = 2147483641
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -2147483647;
result = (x + y);
check = -2147483655;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + -2147483647)
check = -2147483655
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-8 + y)
check = -2147483655
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + -2147483647)
check = -2147483655
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -2147483648;
result = (x + y);
check = -2147483656;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + -2147483648)
check = -2147483656
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-8 + y)
check = -2147483656
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + -2147483648)
check = -2147483656
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -2147483649;
result = (x + y);
check = -2147483657;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + -2147483649)
check = -2147483657
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-8 + y)
check = -2147483657
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + -2147483649)
check = -2147483657
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -2147483650;
result = (x + y);
check = -2147483658;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + -2147483650)
check = -2147483658
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-8 + y)
check = -2147483658
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + -2147483650)
check = -2147483658
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 4294967295;
result = (x + y);
check = 4294967287;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + 4294967295)
check = 4294967287
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-8 + y)
check = 4294967287
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + 4294967295)
check = 4294967287
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 4294967296;
result = (x + y);
check = 4294967288;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + 4294967296)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-8 + y)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + 4294967296)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -4294967295;
result = (x + y);
check = -4294967303;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + -4294967295)
check = -4294967303
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-8 + y)
check = -4294967303
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + -4294967295)
check = -4294967303
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -4294967296;
result = (x + y);
check = -4294967304;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 + -4294967296)
check = -4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-8 + y)
check = -4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x + -4294967296)
check = -4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 0;
result = (x + y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + 0)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741822 + y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + 0)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 1;
result = (x + y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + 1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741822 + y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + 1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -1;
result = (x + y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + -1)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1073741822 + y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + -1)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 2;
result = (x + y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + 2)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1073741822 + y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + 2)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -2;
result = (x + y);
check = 1073741820;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + -2)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (1073741822 + y)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + -2)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 3;
result = (x + y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + 3)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1073741822 + y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + 3)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -3;
result = (x + y);
check = 1073741819;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + -3)
check = 1073741819
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (1073741822 + y)
check = 1073741819
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + -3)
check = 1073741819
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 4;
result = (x + y);
check = 1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + 4)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1073741822 + y)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + 4)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -4;
result = (x + y);
check = 1073741818;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + -4)
check = 1073741818
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (1073741822 + y)
check = 1073741818
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + -4)
check = 1073741818
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test14() {
var x;
var y;
var result;
var check;

x = 1073741822;
y = 8;
result = (x + y);
check = 1073741830;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + 8)
check = 1073741830
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1073741822 + y)
check = 1073741830
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + 8)
check = 1073741830
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -8;
result = (x + y);
check = 1073741814;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + -8)
check = 1073741814
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (1073741822 + y)
check = 1073741814
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + -8)
check = 1073741814
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 1073741822;
result = (x + y);
check = 2147483644;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + 1073741822)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (1073741822 + y)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + 1073741822)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 1073741823;
result = (x + y);
check = 2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + 1073741823)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (1073741822 + y)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + 1073741823)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 1073741824;
result = (x + y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + 1073741824)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (1073741822 + y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + 1073741824)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 1073741825;
result = (x + y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + 1073741825)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (1073741822 + y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + 1073741825)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -1073741823;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + -1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (1073741822 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + -1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = (-0x3fffffff-1);
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + (-0x3fffffff-1))
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (1073741822 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + (-0x3fffffff-1))
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -1073741825;
result = (x + y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + -1073741825)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (1073741822 + y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + -1073741825)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -1073741826;
result = (x + y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + -1073741826)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (1073741822 + y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + -1073741826)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 2147483646;
result = (x + y);
check = 3221225468;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + 2147483646)
check = 3221225468
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (1073741822 + y)
check = 3221225468
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + 2147483646)
check = 3221225468
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 2147483647;
result = (x + y);
check = 3221225469;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + 2147483647)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (1073741822 + y)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + 2147483647)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 2147483648;
result = (x + y);
check = 3221225470;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + 2147483648)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (1073741822 + y)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + 2147483648)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 2147483649;
result = (x + y);
check = 3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + 2147483649)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (1073741822 + y)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + 2147483649)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -2147483647;
result = (x + y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + -2147483647)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (1073741822 + y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + -2147483647)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -2147483648;
result = (x + y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + -2147483648)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (1073741822 + y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + -2147483648)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -2147483649;
result = (x + y);
check = -1073741827;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + -2147483649)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (1073741822 + y)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + -2147483649)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -2147483650;
result = (x + y);
check = -1073741828;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + -2147483650)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (1073741822 + y)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + -2147483650)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 4294967295;
result = (x + y);
check = 5368709117;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + 4294967295)
check = 5368709117
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (1073741822 + y)
check = 5368709117
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + 4294967295)
check = 5368709117
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 4294967296;
result = (x + y);
check = 5368709118;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + 4294967296)
check = 5368709118
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (1073741822 + y)
check = 5368709118
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + 4294967296)
check = 5368709118
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -4294967295;
result = (x + y);
check = -3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + -4294967295)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (1073741822 + y)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + -4294967295)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -4294967296;
result = (x + y);
check = -3221225474;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 + -4294967296)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (1073741822 + y)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x + -4294967296)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 0;
result = (x + y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + 0)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741823 + y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + 0)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 1;
result = (x + y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + 1)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741823 + y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + 1)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -1;
result = (x + y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + -1)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1073741823 + y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + -1)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test15() {
var x;
var y;
var result;
var check;

x = 1073741823;
y = 2;
result = (x + y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + 2)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1073741823 + y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + 2)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -2;
result = (x + y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + -2)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (1073741823 + y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + -2)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 3;
result = (x + y);
check = 1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + 3)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1073741823 + y)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + 3)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -3;
result = (x + y);
check = 1073741820;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + -3)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (1073741823 + y)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + -3)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 4;
result = (x + y);
check = 1073741827;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + 4)
check = 1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1073741823 + y)
check = 1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + 4)
check = 1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -4;
result = (x + y);
check = 1073741819;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + -4)
check = 1073741819
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (1073741823 + y)
check = 1073741819
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + -4)
check = 1073741819
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 8;
result = (x + y);
check = 1073741831;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + 8)
check = 1073741831
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1073741823 + y)
check = 1073741831
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + 8)
check = 1073741831
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -8;
result = (x + y);
check = 1073741815;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + -8)
check = 1073741815
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (1073741823 + y)
check = 1073741815
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + -8)
check = 1073741815
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 1073741822;
result = (x + y);
check = 2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + 1073741822)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (1073741823 + y)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + 1073741822)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 1073741823;
result = (x + y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + 1073741823)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (1073741823 + y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + 1073741823)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 1073741824;
result = (x + y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + 1073741824)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (1073741823 + y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + 1073741824)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 1073741825;
result = (x + y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + 1073741825)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (1073741823 + y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + 1073741825)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -1073741823;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + -1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (1073741823 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + -1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = (-0x3fffffff-1);
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + (-0x3fffffff-1))
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (1073741823 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + (-0x3fffffff-1))
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -1073741825;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + -1073741825)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (1073741823 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + -1073741825)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -1073741826;
result = (x + y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + -1073741826)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (1073741823 + y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + -1073741826)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 2147483646;
result = (x + y);
check = 3221225469;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + 2147483646)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (1073741823 + y)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + 2147483646)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 2147483647;
result = (x + y);
check = 3221225470;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + 2147483647)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (1073741823 + y)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + 2147483647)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 2147483648;
result = (x + y);
check = 3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + 2147483648)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (1073741823 + y)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + 2147483648)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 2147483649;
result = (x + y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + 2147483649)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (1073741823 + y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + 2147483649)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -2147483647;
result = (x + y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + -2147483647)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (1073741823 + y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + -2147483647)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -2147483648;
result = (x + y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + -2147483648)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (1073741823 + y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + -2147483648)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -2147483649;
result = (x + y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + -2147483649)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (1073741823 + y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + -2147483649)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -2147483650;
result = (x + y);
check = -1073741827;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + -2147483650)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (1073741823 + y)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + -2147483650)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 4294967295;
result = (x + y);
check = 5368709118;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + 4294967295)
check = 5368709118
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (1073741823 + y)
check = 5368709118
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + 4294967295)
check = 5368709118
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test16() {
var x;
var y;
var result;
var check;

x = 1073741823;
y = 4294967296;
result = (x + y);
check = 5368709119;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + 4294967296)
check = 5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (1073741823 + y)
check = 5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + 4294967296)
check = 5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -4294967295;
result = (x + y);
check = -3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + -4294967295)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (1073741823 + y)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + -4294967295)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -4294967296;
result = (x + y);
check = -3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 + -4294967296)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (1073741823 + y)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x + -4294967296)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 0;
result = (x + y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + 0)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741824 + y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + 0)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 1;
result = (x + y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + 1)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741824 + y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + 1)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -1;
result = (x + y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + -1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1073741824 + y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + -1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 2;
result = (x + y);
check = 1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + 2)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1073741824 + y)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + 2)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -2;
result = (x + y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + -2)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (1073741824 + y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + -2)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 3;
result = (x + y);
check = 1073741827;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + 3)
check = 1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1073741824 + y)
check = 1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + 3)
check = 1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -3;
result = (x + y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + -3)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (1073741824 + y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + -3)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 4;
result = (x + y);
check = 1073741828;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + 4)
check = 1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1073741824 + y)
check = 1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + 4)
check = 1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -4;
result = (x + y);
check = 1073741820;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + -4)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (1073741824 + y)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + -4)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 8;
result = (x + y);
check = 1073741832;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + 8)
check = 1073741832
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1073741824 + y)
check = 1073741832
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + 8)
check = 1073741832
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -8;
result = (x + y);
check = 1073741816;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + -8)
check = 1073741816
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (1073741824 + y)
check = 1073741816
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + -8)
check = 1073741816
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 1073741822;
result = (x + y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + 1073741822)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (1073741824 + y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + 1073741822)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 1073741823;
result = (x + y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + 1073741823)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (1073741824 + y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + 1073741823)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 1073741824;
result = (x + y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + 1073741824)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (1073741824 + y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + 1073741824)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 1073741825;
result = (x + y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + 1073741825)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (1073741824 + y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + 1073741825)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -1073741823;
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + -1073741823)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (1073741824 + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + -1073741823)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = (-0x3fffffff-1);
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (1073741824 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -1073741825;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + -1073741825)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (1073741824 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + -1073741825)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -1073741826;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + -1073741826)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (1073741824 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + -1073741826)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 2147483646;
result = (x + y);
check = 3221225470;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + 2147483646)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (1073741824 + y)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + 2147483646)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 2147483647;
result = (x + y);
check = 3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + 2147483647)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (1073741824 + y)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + 2147483647)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 2147483648;
result = (x + y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + 2147483648)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (1073741824 + y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + 2147483648)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test17() {
var x;
var y;
var result;
var check;

x = 1073741824;
y = 2147483649;
result = (x + y);
check = 3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + 2147483649)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (1073741824 + y)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + 2147483649)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -2147483647;
result = (x + y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + -2147483647)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (1073741824 + y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + -2147483647)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -2147483648;
result = (x + y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + -2147483648)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (1073741824 + y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + -2147483648)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -2147483649;
result = (x + y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + -2147483649)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (1073741824 + y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + -2147483649)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -2147483650;
result = (x + y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + -2147483650)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (1073741824 + y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + -2147483650)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 4294967295;
result = (x + y);
check = 5368709119;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + 4294967295)
check = 5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (1073741824 + y)
check = 5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + 4294967295)
check = 5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 4294967296;
result = (x + y);
check = 5368709120;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + 4294967296)
check = 5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (1073741824 + y)
check = 5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + 4294967296)
check = 5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -4294967295;
result = (x + y);
check = -3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + -4294967295)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (1073741824 + y)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + -4294967295)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -4294967296;
result = (x + y);
check = -3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 + -4294967296)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (1073741824 + y)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x + -4294967296)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 0;
result = (x + y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + 0)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741825 + y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + 0)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 1;
result = (x + y);
check = 1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + 1)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741825 + y)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + 1)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -1;
result = (x + y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + -1)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1073741825 + y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + -1)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 2;
result = (x + y);
check = 1073741827;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + 2)
check = 1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1073741825 + y)
check = 1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + 2)
check = 1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -2;
result = (x + y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + -2)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (1073741825 + y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + -2)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 3;
result = (x + y);
check = 1073741828;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + 3)
check = 1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1073741825 + y)
check = 1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + 3)
check = 1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -3;
result = (x + y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + -3)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (1073741825 + y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + -3)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 4;
result = (x + y);
check = 1073741829;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + 4)
check = 1073741829
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1073741825 + y)
check = 1073741829
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + 4)
check = 1073741829
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -4;
result = (x + y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + -4)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (1073741825 + y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + -4)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 8;
result = (x + y);
check = 1073741833;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + 8)
check = 1073741833
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1073741825 + y)
check = 1073741833
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + 8)
check = 1073741833
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -8;
result = (x + y);
check = 1073741817;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + -8)
check = 1073741817
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (1073741825 + y)
check = 1073741817
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + -8)
check = 1073741817
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 1073741822;
result = (x + y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + 1073741822)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (1073741825 + y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + 1073741822)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 1073741823;
result = (x + y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + 1073741823)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (1073741825 + y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + 1073741823)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 1073741824;
result = (x + y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + 1073741824)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (1073741825 + y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + 1073741824)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 1073741825;
result = (x + y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + 1073741825)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (1073741825 + y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + 1073741825)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -1073741823;
result = (x + y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + -1073741823)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (1073741825 + y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + -1073741823)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test18() {
var x;
var y;
var result;
var check;

x = 1073741825;
y = (-0x3fffffff-1);
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + (-0x3fffffff-1))
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (1073741825 + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + (-0x3fffffff-1))
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -1073741825;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + -1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (1073741825 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + -1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -1073741826;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + -1073741826)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (1073741825 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + -1073741826)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 2147483646;
result = (x + y);
check = 3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + 2147483646)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (1073741825 + y)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + 2147483646)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 2147483647;
result = (x + y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + 2147483647)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (1073741825 + y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + 2147483647)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 2147483648;
result = (x + y);
check = 3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + 2147483648)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (1073741825 + y)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + 2147483648)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 2147483649;
result = (x + y);
check = 3221225474;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + 2147483649)
check = 3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (1073741825 + y)
check = 3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + 2147483649)
check = 3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -2147483647;
result = (x + y);
check = -1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + -2147483647)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (1073741825 + y)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + -2147483647)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -2147483648;
result = (x + y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + -2147483648)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (1073741825 + y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + -2147483648)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -2147483649;
result = (x + y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + -2147483649)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (1073741825 + y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + -2147483649)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -2147483650;
result = (x + y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + -2147483650)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (1073741825 + y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + -2147483650)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 4294967295;
result = (x + y);
check = 5368709120;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + 4294967295)
check = 5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (1073741825 + y)
check = 5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + 4294967295)
check = 5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 4294967296;
result = (x + y);
check = 5368709121;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + 4294967296)
check = 5368709121
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (1073741825 + y)
check = 5368709121
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + 4294967296)
check = 5368709121
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -4294967295;
result = (x + y);
check = -3221225470;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + -4294967295)
check = -3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (1073741825 + y)
check = -3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + -4294967295)
check = -3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -4294967296;
result = (x + y);
check = -3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 + -4294967296)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (1073741825 + y)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x + -4294967296)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 0;
result = (x + y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + 0)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741823 + y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + 0)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 1;
result = (x + y);
check = -1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + 1)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1073741823 + y)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + 1)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -1;
result = (x + y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + -1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-1073741823 + y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + -1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 2;
result = (x + y);
check = -1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + 2)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-1073741823 + y)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + 2)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -2;
result = (x + y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + -2)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-1073741823 + y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + -2)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 3;
result = (x + y);
check = -1073741820;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + 3)
check = -1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-1073741823 + y)
check = -1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + 3)
check = -1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -3;
result = (x + y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + -3)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-1073741823 + y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + -3)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 4;
result = (x + y);
check = -1073741819;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + 4)
check = -1073741819
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-1073741823 + y)
check = -1073741819
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + 4)
check = -1073741819
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -4;
result = (x + y);
check = -1073741827;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + -4)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-1073741823 + y)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + -4)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 8;
result = (x + y);
check = -1073741815;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + 8)
check = -1073741815
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-1073741823 + y)
check = -1073741815
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + 8)
check = -1073741815
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test19() {
var x;
var y;
var result;
var check;

x = -1073741823;
y = -8;
result = (x + y);
check = -1073741831;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + -8)
check = -1073741831
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-1073741823 + y)
check = -1073741831
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + -8)
check = -1073741831
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 1073741822;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + 1073741822)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-1073741823 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + 1073741822)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 1073741823;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + 1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-1073741823 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + 1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 1073741824;
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + 1073741824)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-1073741823 + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + 1073741824)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 1073741825;
result = (x + y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + 1073741825)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-1073741823 + y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + 1073741825)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -1073741823;
result = (x + y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + -1073741823)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-1073741823 + y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + -1073741823)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = (-0x3fffffff-1);
result = (x + y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + (-0x3fffffff-1))
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-1073741823 + y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + (-0x3fffffff-1))
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -1073741825;
result = (x + y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + -1073741825)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-1073741823 + y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + -1073741825)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -1073741826;
result = (x + y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + -1073741826)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-1073741823 + y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + -1073741826)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 2147483646;
result = (x + y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + 2147483646)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-1073741823 + y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + 2147483646)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 2147483647;
result = (x + y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + 2147483647)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-1073741823 + y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + 2147483647)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 2147483648;
result = (x + y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + 2147483648)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-1073741823 + y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + 2147483648)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 2147483649;
result = (x + y);
check = 1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + 2147483649)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-1073741823 + y)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + 2147483649)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -2147483647;
result = (x + y);
check = -3221225470;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + -2147483647)
check = -3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-1073741823 + y)
check = -3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + -2147483647)
check = -3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -2147483648;
result = (x + y);
check = -3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + -2147483648)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-1073741823 + y)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + -2147483648)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -2147483649;
result = (x + y);
check = -3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + -2147483649)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-1073741823 + y)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + -2147483649)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -2147483650;
result = (x + y);
check = -3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + -2147483650)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-1073741823 + y)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + -2147483650)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 4294967295;
result = (x + y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + 4294967295)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-1073741823 + y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + 4294967295)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 4294967296;
result = (x + y);
check = 3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + 4294967296)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-1073741823 + y)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + 4294967296)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -4294967295;
result = (x + y);
check = -5368709118;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + -4294967295)
check = -5368709118
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-1073741823 + y)
check = -5368709118
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + -4294967295)
check = -5368709118
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -4294967296;
result = (x + y);
check = -5368709119;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 + -4294967296)
check = -5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-1073741823 + y)
check = -5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x + -4294967296)
check = -5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 0;
result = (x + y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + 0)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = ((-0x3fffffff-1) + y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + 0)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 1;
result = (x + y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + 1)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = ((-0x3fffffff-1) + y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + 1)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -1;
result = (x + y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + -1)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = ((-0x3fffffff-1) + y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + -1)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 2;
result = (x + y);
check = -1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + 2)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = ((-0x3fffffff-1) + y)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + 2)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test20() {
var x;
var y;
var result;
var check;

x = (-0x3fffffff-1);
y = -2;
result = (x + y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + -2)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = ((-0x3fffffff-1) + y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + -2)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 3;
result = (x + y);
check = -1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + 3)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = ((-0x3fffffff-1) + y)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + 3)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -3;
result = (x + y);
check = -1073741827;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + -3)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = ((-0x3fffffff-1) + y)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + -3)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 4;
result = (x + y);
check = -1073741820;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + 4)
check = -1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = ((-0x3fffffff-1) + y)
check = -1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + 4)
check = -1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -4;
result = (x + y);
check = -1073741828;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + -4)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = ((-0x3fffffff-1) + y)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + -4)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 8;
result = (x + y);
check = -1073741816;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + 8)
check = -1073741816
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = ((-0x3fffffff-1) + y)
check = -1073741816
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + 8)
check = -1073741816
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -8;
result = (x + y);
check = -1073741832;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + -8)
check = -1073741832
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = ((-0x3fffffff-1) + y)
check = -1073741832
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + -8)
check = -1073741832
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 1073741822;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + 1073741822)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = ((-0x3fffffff-1) + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + 1073741822)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 1073741823;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + 1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = ((-0x3fffffff-1) + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + 1073741823)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 1073741824;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = ((-0x3fffffff-1) + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 1073741825;
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + 1073741825)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = ((-0x3fffffff-1) + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + 1073741825)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -1073741823;
result = (x + y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + -1073741823)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = ((-0x3fffffff-1) + y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + -1073741823)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = (-0x3fffffff-1);
result = (x + y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + (-0x3fffffff-1))
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = ((-0x3fffffff-1) + y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + (-0x3fffffff-1))
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -1073741825;
result = (x + y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + -1073741825)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = ((-0x3fffffff-1) + y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + -1073741825)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -1073741826;
result = (x + y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + -1073741826)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = ((-0x3fffffff-1) + y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + -1073741826)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 2147483646;
result = (x + y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + 2147483646)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = ((-0x3fffffff-1) + y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + 2147483646)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 2147483647;
result = (x + y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + 2147483647)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = ((-0x3fffffff-1) + y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + 2147483647)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 2147483648;
result = (x + y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + 2147483648)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = ((-0x3fffffff-1) + y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + 2147483648)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 2147483649;
result = (x + y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + 2147483649)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = ((-0x3fffffff-1) + y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + 2147483649)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -2147483647;
result = (x + y);
check = -3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + -2147483647)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = ((-0x3fffffff-1) + y)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + -2147483647)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -2147483648;
result = (x + y);
check = -3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + -2147483648)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = ((-0x3fffffff-1) + y)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + -2147483648)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -2147483649;
result = (x + y);
check = -3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + -2147483649)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = ((-0x3fffffff-1) + y)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + -2147483649)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -2147483650;
result = (x + y);
check = -3221225474;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + -2147483650)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = ((-0x3fffffff-1) + y)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + -2147483650)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 4294967295;
result = (x + y);
check = 3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + 4294967295)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = ((-0x3fffffff-1) + y)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + 4294967295)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 4294967296;
result = (x + y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + 4294967296)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = ((-0x3fffffff-1) + y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + 4294967296)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test21() {
var x;
var y;
var result;
var check;

x = (-0x3fffffff-1);
y = -4294967295;
result = (x + y);
check = -5368709119;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + -4294967295)
check = -5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = ((-0x3fffffff-1) + y)
check = -5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + -4294967295)
check = -5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -4294967296;
result = (x + y);
check = -5368709120;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) + -4294967296)
check = -5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = ((-0x3fffffff-1) + y)
check = -5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x + -4294967296)
check = -5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 0;
result = (x + y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + 0)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741825 + y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + 0)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 1;
result = (x + y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + 1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1073741825 + y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + 1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -1;
result = (x + y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + -1)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-1073741825 + y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + -1)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 2;
result = (x + y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + 2)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-1073741825 + y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + 2)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -2;
result = (x + y);
check = -1073741827;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + -2)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-1073741825 + y)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + -2)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 3;
result = (x + y);
check = -1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + 3)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-1073741825 + y)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + 3)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -3;
result = (x + y);
check = -1073741828;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + -3)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-1073741825 + y)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + -3)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 4;
result = (x + y);
check = -1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + 4)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-1073741825 + y)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + 4)
check = -1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -4;
result = (x + y);
check = -1073741829;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + -4)
check = -1073741829
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-1073741825 + y)
check = -1073741829
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + -4)
check = -1073741829
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 8;
result = (x + y);
check = -1073741817;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + 8)
check = -1073741817
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-1073741825 + y)
check = -1073741817
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + 8)
check = -1073741817
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -8;
result = (x + y);
check = -1073741833;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + -8)
check = -1073741833
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-1073741825 + y)
check = -1073741833
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + -8)
check = -1073741833
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 1073741822;
result = (x + y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + 1073741822)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-1073741825 + y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + 1073741822)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 1073741823;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + 1073741823)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-1073741825 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + 1073741823)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 1073741824;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + 1073741824)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-1073741825 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + 1073741824)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 1073741825;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + 1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-1073741825 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + 1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -1073741823;
result = (x + y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + -1073741823)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-1073741825 + y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + -1073741823)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = (-0x3fffffff-1);
result = (x + y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + (-0x3fffffff-1))
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-1073741825 + y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + (-0x3fffffff-1))
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -1073741825;
result = (x + y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + -1073741825)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-1073741825 + y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + -1073741825)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -1073741826;
result = (x + y);
check = -2147483651;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + -1073741826)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-1073741825 + y)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + -1073741826)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 2147483646;
result = (x + y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + 2147483646)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-1073741825 + y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + 2147483646)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 2147483647;
result = (x + y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + 2147483647)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-1073741825 + y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + 2147483647)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 2147483648;
result = (x + y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + 2147483648)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-1073741825 + y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + 2147483648)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 2147483649;
result = (x + y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + 2147483649)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-1073741825 + y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + 2147483649)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test22() {
var x;
var y;
var result;
var check;

x = -1073741825;
y = -2147483647;
result = (x + y);
check = -3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + -2147483647)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-1073741825 + y)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + -2147483647)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -2147483648;
result = (x + y);
check = -3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + -2147483648)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-1073741825 + y)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + -2147483648)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -2147483649;
result = (x + y);
check = -3221225474;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + -2147483649)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-1073741825 + y)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + -2147483649)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -2147483650;
result = (x + y);
check = -3221225475;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + -2147483650)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-1073741825 + y)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + -2147483650)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 4294967295;
result = (x + y);
check = 3221225470;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + 4294967295)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-1073741825 + y)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + 4294967295)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 4294967296;
result = (x + y);
check = 3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + 4294967296)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-1073741825 + y)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + 4294967296)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -4294967295;
result = (x + y);
check = -5368709120;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + -4294967295)
check = -5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-1073741825 + y)
check = -5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + -4294967295)
check = -5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -4294967296;
result = (x + y);
check = -5368709121;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 + -4294967296)
check = -5368709121
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-1073741825 + y)
check = -5368709121
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x + -4294967296)
check = -5368709121
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 0;
result = (x + y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + 0)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741826 + y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + 0)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 1;
result = (x + y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + 1)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1073741826 + y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + 1)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -1;
result = (x + y);
check = -1073741827;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + -1)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-1073741826 + y)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + -1)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 2;
result = (x + y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + 2)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-1073741826 + y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + 2)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -2;
result = (x + y);
check = -1073741828;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + -2)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-1073741826 + y)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + -2)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 3;
result = (x + y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + 3)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-1073741826 + y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + 3)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -3;
result = (x + y);
check = -1073741829;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + -3)
check = -1073741829
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-1073741826 + y)
check = -1073741829
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + -3)
check = -1073741829
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 4;
result = (x + y);
check = -1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + 4)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-1073741826 + y)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + 4)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -4;
result = (x + y);
check = -1073741830;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + -4)
check = -1073741830
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-1073741826 + y)
check = -1073741830
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + -4)
check = -1073741830
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 8;
result = (x + y);
check = -1073741818;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + 8)
check = -1073741818
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-1073741826 + y)
check = -1073741818
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + 8)
check = -1073741818
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -8;
result = (x + y);
check = -1073741834;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + -8)
check = -1073741834
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-1073741826 + y)
check = -1073741834
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + -8)
check = -1073741834
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 1073741822;
result = (x + y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + 1073741822)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-1073741826 + y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + 1073741822)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 1073741823;
result = (x + y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + 1073741823)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-1073741826 + y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + 1073741823)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 1073741824;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + 1073741824)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-1073741826 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + 1073741824)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 1073741825;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + 1073741825)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-1073741826 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + 1073741825)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -1073741823;
result = (x + y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + -1073741823)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-1073741826 + y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + -1073741823)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = (-0x3fffffff-1);
result = (x + y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + (-0x3fffffff-1))
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-1073741826 + y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + (-0x3fffffff-1))
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test23() {
var x;
var y;
var result;
var check;

x = -1073741826;
y = -1073741825;
result = (x + y);
check = -2147483651;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + -1073741825)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-1073741826 + y)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + -1073741825)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -1073741826;
result = (x + y);
check = -2147483652;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + -1073741826)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-1073741826 + y)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + -1073741826)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 2147483646;
result = (x + y);
check = 1073741820;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + 2147483646)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-1073741826 + y)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + 2147483646)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 2147483647;
result = (x + y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + 2147483647)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-1073741826 + y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + 2147483647)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 2147483648;
result = (x + y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + 2147483648)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-1073741826 + y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + 2147483648)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 2147483649;
result = (x + y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + 2147483649)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-1073741826 + y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + 2147483649)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -2147483647;
result = (x + y);
check = -3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + -2147483647)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-1073741826 + y)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + -2147483647)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -2147483648;
result = (x + y);
check = -3221225474;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + -2147483648)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-1073741826 + y)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + -2147483648)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -2147483649;
result = (x + y);
check = -3221225475;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + -2147483649)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-1073741826 + y)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + -2147483649)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -2147483650;
result = (x + y);
check = -3221225476;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + -2147483650)
check = -3221225476
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-1073741826 + y)
check = -3221225476
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + -2147483650)
check = -3221225476
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 4294967295;
result = (x + y);
check = 3221225469;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + 4294967295)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-1073741826 + y)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + 4294967295)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 4294967296;
result = (x + y);
check = 3221225470;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + 4294967296)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-1073741826 + y)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + 4294967296)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -4294967295;
result = (x + y);
check = -5368709121;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + -4294967295)
check = -5368709121
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-1073741826 + y)
check = -5368709121
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + -4294967295)
check = -5368709121
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -4294967296;
result = (x + y);
check = -5368709122;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 + -4294967296)
check = -5368709122
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-1073741826 + y)
check = -5368709122
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x + -4294967296)
check = -5368709122
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 0;
result = (x + y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483646 + y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + 0)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 1;
result = (x + y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + 1)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483646 + y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + 1)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -1;
result = (x + y);
check = 2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + -1)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2147483646 + y)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + -1)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 2;
result = (x + y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + 2)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2147483646 + y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + 2)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -2;
result = (x + y);
check = 2147483644;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + -2)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (2147483646 + y)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + -2)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 3;
result = (x + y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + 3)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2147483646 + y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + 3)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -3;
result = (x + y);
check = 2147483643;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + -3)
check = 2147483643
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (2147483646 + y)
check = 2147483643
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + -3)
check = 2147483643
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 4;
result = (x + y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + 4)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2147483646 + y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + 4)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -4;
result = (x + y);
check = 2147483642;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + -4)
check = 2147483642
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (2147483646 + y)
check = 2147483642
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + -4)
check = 2147483642
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 8;
result = (x + y);
check = 2147483654;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + 8)
check = 2147483654
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2147483646 + y)
check = 2147483654
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + 8)
check = 2147483654
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -8;
result = (x + y);
check = 2147483638;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + -8)
check = 2147483638
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (2147483646 + y)
check = 2147483638
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + -8)
check = 2147483638
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test24() {
var x;
var y;
var result;
var check;

x = 2147483646;
y = 1073741822;
result = (x + y);
check = 3221225468;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + 1073741822)
check = 3221225468
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (2147483646 + y)
check = 3221225468
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + 1073741822)
check = 3221225468
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 1073741823;
result = (x + y);
check = 3221225469;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + 1073741823)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (2147483646 + y)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + 1073741823)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 1073741824;
result = (x + y);
check = 3221225470;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + 1073741824)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (2147483646 + y)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + 1073741824)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 1073741825;
result = (x + y);
check = 3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + 1073741825)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (2147483646 + y)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + 1073741825)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -1073741823;
result = (x + y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + -1073741823)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (2147483646 + y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + -1073741823)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = (-0x3fffffff-1);
result = (x + y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + (-0x3fffffff-1))
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (2147483646 + y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + (-0x3fffffff-1))
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -1073741825;
result = (x + y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + -1073741825)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (2147483646 + y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + -1073741825)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -1073741826;
result = (x + y);
check = 1073741820;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + -1073741826)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (2147483646 + y)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + -1073741826)
check = 1073741820
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 2147483646;
result = (x + y);
check = 4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + 2147483646)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (2147483646 + y)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + 2147483646)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 2147483647;
result = (x + y);
check = 4294967293;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + 2147483647)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (2147483646 + y)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + 2147483647)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 2147483648;
result = (x + y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + 2147483648)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (2147483646 + y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + 2147483648)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 2147483649;
result = (x + y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + 2147483649)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (2147483646 + y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + 2147483649)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -2147483647;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + -2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (2147483646 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + -2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -2147483648;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + -2147483648)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (2147483646 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + -2147483648)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -2147483649;
result = (x + y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + -2147483649)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (2147483646 + y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + -2147483649)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -2147483650;
result = (x + y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + -2147483650)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (2147483646 + y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + -2147483650)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 4294967295;
result = (x + y);
check = 6442450941;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + 4294967295)
check = 6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (2147483646 + y)
check = 6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + 4294967295)
check = 6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 4294967296;
result = (x + y);
check = 6442450942;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + 4294967296)
check = 6442450942
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (2147483646 + y)
check = 6442450942
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + 4294967296)
check = 6442450942
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -4294967295;
result = (x + y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + -4294967295)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (2147483646 + y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + -4294967295)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -4294967296;
result = (x + y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 + -4294967296)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (2147483646 + y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x + -4294967296)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 0;
result = (x + y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483647 + y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + 0)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 1;
result = (x + y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + 1)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483647 + y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + 1)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -1;
result = (x + y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + -1)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2147483647 + y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + -1)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 2;
result = (x + y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + 2)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2147483647 + y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + 2)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -2;
result = (x + y);
check = 2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + -2)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (2147483647 + y)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + -2)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test25() {
var x;
var y;
var result;
var check;

x = 2147483647;
y = 3;
result = (x + y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + 3)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2147483647 + y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + 3)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -3;
result = (x + y);
check = 2147483644;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + -3)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (2147483647 + y)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + -3)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 4;
result = (x + y);
check = 2147483651;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + 4)
check = 2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2147483647 + y)
check = 2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + 4)
check = 2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -4;
result = (x + y);
check = 2147483643;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + -4)
check = 2147483643
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (2147483647 + y)
check = 2147483643
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + -4)
check = 2147483643
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 8;
result = (x + y);
check = 2147483655;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + 8)
check = 2147483655
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2147483647 + y)
check = 2147483655
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + 8)
check = 2147483655
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -8;
result = (x + y);
check = 2147483639;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + -8)
check = 2147483639
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (2147483647 + y)
check = 2147483639
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + -8)
check = 2147483639
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 1073741822;
result = (x + y);
check = 3221225469;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + 1073741822)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (2147483647 + y)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + 1073741822)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 1073741823;
result = (x + y);
check = 3221225470;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + 1073741823)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (2147483647 + y)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + 1073741823)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 1073741824;
result = (x + y);
check = 3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + 1073741824)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (2147483647 + y)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + 1073741824)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 1073741825;
result = (x + y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + 1073741825)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (2147483647 + y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + 1073741825)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -1073741823;
result = (x + y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + -1073741823)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (2147483647 + y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + -1073741823)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = (-0x3fffffff-1);
result = (x + y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + (-0x3fffffff-1))
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (2147483647 + y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + (-0x3fffffff-1))
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -1073741825;
result = (x + y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + -1073741825)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (2147483647 + y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + -1073741825)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -1073741826;
result = (x + y);
check = 1073741821;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + -1073741826)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (2147483647 + y)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + -1073741826)
check = 1073741821
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 2147483646;
result = (x + y);
check = 4294967293;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + 2147483646)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (2147483647 + y)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + 2147483646)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 2147483647;
result = (x + y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + 2147483647)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (2147483647 + y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + 2147483647)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 2147483648;
result = (x + y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + 2147483648)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (2147483647 + y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + 2147483648)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 2147483649;
result = (x + y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + 2147483649)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (2147483647 + y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + 2147483649)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -2147483647;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + -2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (2147483647 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + -2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -2147483648;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + -2147483648)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (2147483647 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + -2147483648)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -2147483649;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + -2147483649)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (2147483647 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + -2147483649)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -2147483650;
result = (x + y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + -2147483650)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (2147483647 + y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + -2147483650)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 4294967295;
result = (x + y);
check = 6442450942;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + 4294967295)
check = 6442450942
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (2147483647 + y)
check = 6442450942
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + 4294967295)
check = 6442450942
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 4294967296;
result = (x + y);
check = 6442450943;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + 4294967296)
check = 6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (2147483647 + y)
check = 6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + 4294967296)
check = 6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -4294967295;
result = (x + y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + -4294967295)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (2147483647 + y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + -4294967295)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test26() {
var x;
var y;
var result;
var check;

x = 2147483647;
y = -4294967296;
result = (x + y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 + -4294967296)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (2147483647 + y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x + -4294967296)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 0;
result = (x + y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483648 + y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + 0)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 1;
result = (x + y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + 1)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483648 + y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + 1)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -1;
result = (x + y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + -1)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2147483648 + y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + -1)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 2;
result = (x + y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + 2)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2147483648 + y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + 2)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -2;
result = (x + y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + -2)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (2147483648 + y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + -2)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 3;
result = (x + y);
check = 2147483651;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + 3)
check = 2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2147483648 + y)
check = 2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + 3)
check = 2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -3;
result = (x + y);
check = 2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + -3)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (2147483648 + y)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + -3)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 4;
result = (x + y);
check = 2147483652;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + 4)
check = 2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2147483648 + y)
check = 2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + 4)
check = 2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -4;
result = (x + y);
check = 2147483644;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + -4)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (2147483648 + y)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + -4)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 8;
result = (x + y);
check = 2147483656;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + 8)
check = 2147483656
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2147483648 + y)
check = 2147483656
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + 8)
check = 2147483656
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -8;
result = (x + y);
check = 2147483640;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + -8)
check = 2147483640
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (2147483648 + y)
check = 2147483640
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + -8)
check = 2147483640
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 1073741822;
result = (x + y);
check = 3221225470;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + 1073741822)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (2147483648 + y)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + 1073741822)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 1073741823;
result = (x + y);
check = 3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + 1073741823)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (2147483648 + y)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + 1073741823)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 1073741824;
result = (x + y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + 1073741824)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (2147483648 + y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + 1073741824)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 1073741825;
result = (x + y);
check = 3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + 1073741825)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (2147483648 + y)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + 1073741825)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -1073741823;
result = (x + y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + -1073741823)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (2147483648 + y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + -1073741823)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = (-0x3fffffff-1);
result = (x + y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + (-0x3fffffff-1))
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (2147483648 + y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + (-0x3fffffff-1))
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -1073741825;
result = (x + y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + -1073741825)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (2147483648 + y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + -1073741825)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -1073741826;
result = (x + y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + -1073741826)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (2147483648 + y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + -1073741826)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 2147483646;
result = (x + y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + 2147483646)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (2147483648 + y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + 2147483646)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 2147483647;
result = (x + y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + 2147483647)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (2147483648 + y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + 2147483647)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 2147483648;
result = (x + y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + 2147483648)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (2147483648 + y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + 2147483648)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 2147483649;
result = (x + y);
check = 4294967297;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + 2147483649)
check = 4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (2147483648 + y)
check = 4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + 2147483649)
check = 4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -2147483647;
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + -2147483647)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (2147483648 + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + -2147483647)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test27() {
var x;
var y;
var result;
var check;

x = 2147483648;
y = -2147483648;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + -2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (2147483648 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + -2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -2147483649;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + -2147483649)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (2147483648 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + -2147483649)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -2147483650;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + -2147483650)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (2147483648 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + -2147483650)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 4294967295;
result = (x + y);
check = 6442450943;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + 4294967295)
check = 6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (2147483648 + y)
check = 6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + 4294967295)
check = 6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 4294967296;
result = (x + y);
check = 6442450944;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + 4294967296)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (2147483648 + y)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + 4294967296)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -4294967295;
result = (x + y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + -4294967295)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (2147483648 + y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + -4294967295)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -4294967296;
result = (x + y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 + -4294967296)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (2147483648 + y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x + -4294967296)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 0;
result = (x + y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483649 + y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + 0)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 1;
result = (x + y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + 1)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483649 + y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + 1)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -1;
result = (x + y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + -1)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2147483649 + y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + -1)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 2;
result = (x + y);
check = 2147483651;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + 2)
check = 2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2147483649 + y)
check = 2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + 2)
check = 2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -2;
result = (x + y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + -2)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (2147483649 + y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + -2)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 3;
result = (x + y);
check = 2147483652;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + 3)
check = 2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2147483649 + y)
check = 2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + 3)
check = 2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -3;
result = (x + y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + -3)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (2147483649 + y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + -3)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 4;
result = (x + y);
check = 2147483653;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + 4)
check = 2147483653
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2147483649 + y)
check = 2147483653
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + 4)
check = 2147483653
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -4;
result = (x + y);
check = 2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + -4)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (2147483649 + y)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + -4)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 8;
result = (x + y);
check = 2147483657;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + 8)
check = 2147483657
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2147483649 + y)
check = 2147483657
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + 8)
check = 2147483657
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -8;
result = (x + y);
check = 2147483641;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + -8)
check = 2147483641
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (2147483649 + y)
check = 2147483641
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + -8)
check = 2147483641
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 1073741822;
result = (x + y);
check = 3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + 1073741822)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (2147483649 + y)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + 1073741822)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 1073741823;
result = (x + y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + 1073741823)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (2147483649 + y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + 1073741823)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 1073741824;
result = (x + y);
check = 3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + 1073741824)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (2147483649 + y)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + 1073741824)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 1073741825;
result = (x + y);
check = 3221225474;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + 1073741825)
check = 3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (2147483649 + y)
check = 3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + 1073741825)
check = 3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -1073741823;
result = (x + y);
check = 1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + -1073741823)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (2147483649 + y)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + -1073741823)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = (-0x3fffffff-1);
result = (x + y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + (-0x3fffffff-1))
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (2147483649 + y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + (-0x3fffffff-1))
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -1073741825;
result = (x + y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + -1073741825)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (2147483649 + y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + -1073741825)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test28() {
var x;
var y;
var result;
var check;

x = 2147483649;
y = -1073741826;
result = (x + y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + -1073741826)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (2147483649 + y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + -1073741826)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 2147483646;
result = (x + y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + 2147483646)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (2147483649 + y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + 2147483646)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 2147483647;
result = (x + y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + 2147483647)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (2147483649 + y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + 2147483647)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 2147483648;
result = (x + y);
check = 4294967297;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + 2147483648)
check = 4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (2147483649 + y)
check = 4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + 2147483648)
check = 4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 2147483649;
result = (x + y);
check = 4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + 2147483649)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (2147483649 + y)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + 2147483649)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -2147483647;
result = (x + y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + -2147483647)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (2147483649 + y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + -2147483647)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -2147483648;
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + -2147483648)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (2147483649 + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + -2147483648)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -2147483649;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + -2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (2147483649 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + -2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -2147483650;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + -2147483650)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (2147483649 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + -2147483650)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 4294967295;
result = (x + y);
check = 6442450944;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + 4294967295)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (2147483649 + y)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + 4294967295)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 4294967296;
result = (x + y);
check = 6442450945;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + 4294967296)
check = 6442450945
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (2147483649 + y)
check = 6442450945
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + 4294967296)
check = 6442450945
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -4294967295;
result = (x + y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + -4294967295)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (2147483649 + y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + -4294967295)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -4294967296;
result = (x + y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 + -4294967296)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (2147483649 + y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x + -4294967296)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 0;
result = (x + y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + 0)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483647 + y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + 0)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 1;
result = (x + y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + 1)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483647 + y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + 1)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -1;
result = (x + y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + -1)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2147483647 + y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + -1)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 2;
result = (x + y);
check = -2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + 2)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2147483647 + y)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + 2)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -2;
result = (x + y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + -2)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-2147483647 + y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + -2)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 3;
result = (x + y);
check = -2147483644;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + 3)
check = -2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2147483647 + y)
check = -2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + 3)
check = -2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -3;
result = (x + y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + -3)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-2147483647 + y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + -3)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 4;
result = (x + y);
check = -2147483643;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + 4)
check = -2147483643
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2147483647 + y)
check = -2147483643
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + 4)
check = -2147483643
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -4;
result = (x + y);
check = -2147483651;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + -4)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-2147483647 + y)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + -4)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 8;
result = (x + y);
check = -2147483639;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + 8)
check = -2147483639
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2147483647 + y)
check = -2147483639
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + 8)
check = -2147483639
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -8;
result = (x + y);
check = -2147483655;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + -8)
check = -2147483655
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-2147483647 + y)
check = -2147483655
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + -8)
check = -2147483655
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 1073741822;
result = (x + y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + 1073741822)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-2147483647 + y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + 1073741822)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test29() {
var x;
var y;
var result;
var check;

x = -2147483647;
y = 1073741823;
result = (x + y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + 1073741823)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-2147483647 + y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + 1073741823)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 1073741824;
result = (x + y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + 1073741824)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-2147483647 + y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + 1073741824)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 1073741825;
result = (x + y);
check = -1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + 1073741825)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-2147483647 + y)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + 1073741825)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -1073741823;
result = (x + y);
check = -3221225470;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + -1073741823)
check = -3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-2147483647 + y)
check = -3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + -1073741823)
check = -3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = (-0x3fffffff-1);
result = (x + y);
check = -3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + (-0x3fffffff-1))
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-2147483647 + y)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + (-0x3fffffff-1))
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -1073741825;
result = (x + y);
check = -3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + -1073741825)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-2147483647 + y)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + -1073741825)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -1073741826;
result = (x + y);
check = -3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + -1073741826)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-2147483647 + y)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + -1073741826)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 2147483646;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + 2147483646)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-2147483647 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + 2147483646)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 2147483647;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + 2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-2147483647 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + 2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 2147483648;
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + 2147483648)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-2147483647 + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + 2147483648)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 2147483649;
result = (x + y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + 2147483649)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-2147483647 + y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + 2147483649)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -2147483647;
result = (x + y);
check = -4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + -2147483647)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-2147483647 + y)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + -2147483647)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -2147483648;
result = (x + y);
check = -4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + -2147483648)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-2147483647 + y)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + -2147483648)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -2147483649;
result = (x + y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + -2147483649)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-2147483647 + y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + -2147483649)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -2147483650;
result = (x + y);
check = -4294967297;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + -2147483650)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-2147483647 + y)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + -2147483650)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 4294967295;
result = (x + y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + 4294967295)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-2147483647 + y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + 4294967295)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 4294967296;
result = (x + y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + 4294967296)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-2147483647 + y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + 4294967296)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -4294967295;
result = (x + y);
check = -6442450942;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + -4294967295)
check = -6442450942
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-2147483647 + y)
check = -6442450942
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + -4294967295)
check = -6442450942
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -4294967296;
result = (x + y);
check = -6442450943;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 + -4294967296)
check = -6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-2147483647 + y)
check = -6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x + -4294967296)
check = -6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 0;
result = (x + y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + 0)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483648 + y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + 0)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 1;
result = (x + y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + 1)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483648 + y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + 1)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -1;
result = (x + y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + -1)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2147483648 + y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + -1)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 2;
result = (x + y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + 2)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2147483648 + y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + 2)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -2;
result = (x + y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + -2)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-2147483648 + y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + -2)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 3;
result = (x + y);
check = -2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + 3)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2147483648 + y)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + 3)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test30() {
var x;
var y;
var result;
var check;

x = -2147483648;
y = -3;
result = (x + y);
check = -2147483651;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + -3)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-2147483648 + y)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + -3)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 4;
result = (x + y);
check = -2147483644;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + 4)
check = -2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2147483648 + y)
check = -2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + 4)
check = -2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -4;
result = (x + y);
check = -2147483652;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + -4)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-2147483648 + y)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + -4)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 8;
result = (x + y);
check = -2147483640;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + 8)
check = -2147483640
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2147483648 + y)
check = -2147483640
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + 8)
check = -2147483640
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -8;
result = (x + y);
check = -2147483656;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + -8)
check = -2147483656
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-2147483648 + y)
check = -2147483656
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + -8)
check = -2147483656
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 1073741822;
result = (x + y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + 1073741822)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-2147483648 + y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + 1073741822)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 1073741823;
result = (x + y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + 1073741823)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-2147483648 + y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + 1073741823)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 1073741824;
result = (x + y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + 1073741824)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-2147483648 + y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + 1073741824)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 1073741825;
result = (x + y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + 1073741825)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-2147483648 + y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + 1073741825)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -1073741823;
result = (x + y);
check = -3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + -1073741823)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-2147483648 + y)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + -1073741823)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = (-0x3fffffff-1);
result = (x + y);
check = -3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + (-0x3fffffff-1))
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-2147483648 + y)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + (-0x3fffffff-1))
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -1073741825;
result = (x + y);
check = -3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + -1073741825)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-2147483648 + y)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + -1073741825)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -1073741826;
result = (x + y);
check = -3221225474;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + -1073741826)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-2147483648 + y)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + -1073741826)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 2147483646;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + 2147483646)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-2147483648 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + 2147483646)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 2147483647;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + 2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-2147483648 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + 2147483647)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 2147483648;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + 2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-2147483648 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + 2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 2147483649;
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + 2147483649)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-2147483648 + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + 2147483649)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -2147483647;
result = (x + y);
check = -4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + -2147483647)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-2147483648 + y)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + -2147483647)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -2147483648;
result = (x + y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + -2147483648)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-2147483648 + y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + -2147483648)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -2147483649;
result = (x + y);
check = -4294967297;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + -2147483649)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-2147483648 + y)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + -2147483649)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -2147483650;
result = (x + y);
check = -4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + -2147483650)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-2147483648 + y)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + -2147483650)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 4294967295;
result = (x + y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + 4294967295)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-2147483648 + y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + 4294967295)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 4294967296;
result = (x + y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + 4294967296)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-2147483648 + y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + 4294967296)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -4294967295;
result = (x + y);
check = -6442450943;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + -4294967295)
check = -6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-2147483648 + y)
check = -6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + -4294967295)
check = -6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -4294967296;
result = (x + y);
check = -6442450944;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 + -4294967296)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-2147483648 + y)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x + -4294967296)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test31() {
var x;
var y;
var result;
var check;

x = -2147483649;
y = 0;
result = (x + y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + 0)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483649 + y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + 0)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 1;
result = (x + y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + 1)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483649 + y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + 1)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -1;
result = (x + y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + -1)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2147483649 + y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + -1)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 2;
result = (x + y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + 2)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2147483649 + y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + 2)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -2;
result = (x + y);
check = -2147483651;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + -2)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-2147483649 + y)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + -2)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 3;
result = (x + y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + 3)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2147483649 + y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + 3)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -3;
result = (x + y);
check = -2147483652;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + -3)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-2147483649 + y)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + -3)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 4;
result = (x + y);
check = -2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + 4)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2147483649 + y)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + 4)
check = -2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -4;
result = (x + y);
check = -2147483653;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + -4)
check = -2147483653
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-2147483649 + y)
check = -2147483653
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + -4)
check = -2147483653
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 8;
result = (x + y);
check = -2147483641;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + 8)
check = -2147483641
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2147483649 + y)
check = -2147483641
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + 8)
check = -2147483641
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -8;
result = (x + y);
check = -2147483657;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + -8)
check = -2147483657
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-2147483649 + y)
check = -2147483657
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + -8)
check = -2147483657
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 1073741822;
result = (x + y);
check = -1073741827;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + 1073741822)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-2147483649 + y)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + 1073741822)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 1073741823;
result = (x + y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + 1073741823)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-2147483649 + y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + 1073741823)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 1073741824;
result = (x + y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + 1073741824)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-2147483649 + y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + 1073741824)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 1073741825;
result = (x + y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + 1073741825)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-2147483649 + y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + 1073741825)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -1073741823;
result = (x + y);
check = -3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + -1073741823)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-2147483649 + y)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + -1073741823)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = (-0x3fffffff-1);
result = (x + y);
check = -3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + (-0x3fffffff-1))
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-2147483649 + y)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + (-0x3fffffff-1))
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -1073741825;
result = (x + y);
check = -3221225474;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + -1073741825)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-2147483649 + y)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + -1073741825)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -1073741826;
result = (x + y);
check = -3221225475;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + -1073741826)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-2147483649 + y)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + -1073741826)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 2147483646;
result = (x + y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + 2147483646)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-2147483649 + y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + 2147483646)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 2147483647;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + 2147483647)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-2147483649 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + 2147483647)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 2147483648;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + 2147483648)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-2147483649 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + 2147483648)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 2147483649;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + 2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-2147483649 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + 2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -2147483647;
result = (x + y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + -2147483647)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-2147483649 + y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + -2147483647)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -2147483648;
result = (x + y);
check = -4294967297;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + -2147483648)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-2147483649 + y)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + -2147483648)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test32() {
var x;
var y;
var result;
var check;

x = -2147483649;
y = -2147483649;
result = (x + y);
check = -4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + -2147483649)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-2147483649 + y)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + -2147483649)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -2147483650;
result = (x + y);
check = -4294967299;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + -2147483650)
check = -4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-2147483649 + y)
check = -4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + -2147483650)
check = -4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 4294967295;
result = (x + y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + 4294967295)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-2147483649 + y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + 4294967295)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 4294967296;
result = (x + y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + 4294967296)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-2147483649 + y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + 4294967296)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -4294967295;
result = (x + y);
check = -6442450944;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + -4294967295)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-2147483649 + y)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + -4294967295)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -4294967296;
result = (x + y);
check = -6442450945;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 + -4294967296)
check = -6442450945
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-2147483649 + y)
check = -6442450945
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x + -4294967296)
check = -6442450945
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 0;
result = (x + y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + 0)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483650 + y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + 0)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 1;
result = (x + y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + 1)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483650 + y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + 1)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -1;
result = (x + y);
check = -2147483651;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + -1)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2147483650 + y)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + -1)
check = -2147483651
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 2;
result = (x + y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + 2)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2147483650 + y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + 2)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -2;
result = (x + y);
check = -2147483652;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + -2)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-2147483650 + y)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + -2)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 3;
result = (x + y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + 3)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2147483650 + y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + 3)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -3;
result = (x + y);
check = -2147483653;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + -3)
check = -2147483653
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-2147483650 + y)
check = -2147483653
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + -3)
check = -2147483653
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 4;
result = (x + y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + 4)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2147483650 + y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + 4)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -4;
result = (x + y);
check = -2147483654;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + -4)
check = -2147483654
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-2147483650 + y)
check = -2147483654
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + -4)
check = -2147483654
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 8;
result = (x + y);
check = -2147483642;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + 8)
check = -2147483642
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2147483650 + y)
check = -2147483642
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + 8)
check = -2147483642
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -8;
result = (x + y);
check = -2147483658;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + -8)
check = -2147483658
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-2147483650 + y)
check = -2147483658
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + -8)
check = -2147483658
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 1073741822;
result = (x + y);
check = -1073741828;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + 1073741822)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-2147483650 + y)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + 1073741822)
check = -1073741828
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 1073741823;
result = (x + y);
check = -1073741827;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + 1073741823)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-2147483650 + y)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + 1073741823)
check = -1073741827
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 1073741824;
result = (x + y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + 1073741824)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-2147483650 + y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + 1073741824)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 1073741825;
result = (x + y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + 1073741825)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-2147483650 + y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + 1073741825)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -1073741823;
result = (x + y);
check = -3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + -1073741823)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-2147483650 + y)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + -1073741823)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = (-0x3fffffff-1);
result = (x + y);
check = -3221225474;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + (-0x3fffffff-1))
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-2147483650 + y)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + (-0x3fffffff-1))
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -1073741825;
result = (x + y);
check = -3221225475;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + -1073741825)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-2147483650 + y)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + -1073741825)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -1073741826;
result = (x + y);
check = -3221225476;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + -1073741826)
check = -3221225476
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-2147483650 + y)
check = -3221225476
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + -1073741826)
check = -3221225476
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test33() {
var x;
var y;
var result;
var check;

x = -2147483650;
y = 2147483646;
result = (x + y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + 2147483646)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-2147483650 + y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + 2147483646)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 2147483647;
result = (x + y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + 2147483647)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-2147483650 + y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + 2147483647)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 2147483648;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + 2147483648)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-2147483650 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + 2147483648)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 2147483649;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + 2147483649)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-2147483650 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + 2147483649)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -2147483647;
result = (x + y);
check = -4294967297;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + -2147483647)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-2147483650 + y)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + -2147483647)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -2147483648;
result = (x + y);
check = -4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + -2147483648)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-2147483650 + y)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + -2147483648)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -2147483649;
result = (x + y);
check = -4294967299;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + -2147483649)
check = -4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-2147483650 + y)
check = -4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + -2147483649)
check = -4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -2147483650;
result = (x + y);
check = -4294967300;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + -2147483650)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-2147483650 + y)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + -2147483650)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 4294967295;
result = (x + y);
check = 2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + 4294967295)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-2147483650 + y)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + 4294967295)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 4294967296;
result = (x + y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + 4294967296)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-2147483650 + y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + 4294967296)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -4294967295;
result = (x + y);
check = -6442450945;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + -4294967295)
check = -6442450945
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-2147483650 + y)
check = -6442450945
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + -4294967295)
check = -6442450945
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -4294967296;
result = (x + y);
check = -6442450946;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 + -4294967296)
check = -6442450946
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-2147483650 + y)
check = -6442450946
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x + -4294967296)
check = -6442450946
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 0;
result = (x + y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4294967295 + y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + 0)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 1;
result = (x + y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + 1)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (4294967295 + y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + 1)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -1;
result = (x + y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + -1)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (4294967295 + y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + -1)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 2;
result = (x + y);
check = 4294967297;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + 2)
check = 4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (4294967295 + y)
check = 4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + 2)
check = 4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -2;
result = (x + y);
check = 4294967293;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + -2)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (4294967295 + y)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + -2)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 3;
result = (x + y);
check = 4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + 3)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (4294967295 + y)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + 3)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -3;
result = (x + y);
check = 4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + -3)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (4294967295 + y)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + -3)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 4;
result = (x + y);
check = 4294967299;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + 4)
check = 4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (4294967295 + y)
check = 4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + 4)
check = 4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -4;
result = (x + y);
check = 4294967291;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + -4)
check = 4294967291
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (4294967295 + y)
check = 4294967291
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + -4)
check = 4294967291
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 8;
result = (x + y);
check = 4294967303;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + 8)
check = 4294967303
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (4294967295 + y)
check = 4294967303
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + 8)
check = 4294967303
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -8;
result = (x + y);
check = 4294967287;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + -8)
check = 4294967287
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (4294967295 + y)
check = 4294967287
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + -8)
check = 4294967287
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 1073741822;
result = (x + y);
check = 5368709117;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + 1073741822)
check = 5368709117
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (4294967295 + y)
check = 5368709117
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + 1073741822)
check = 5368709117
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 1073741823;
result = (x + y);
check = 5368709118;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + 1073741823)
check = 5368709118
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (4294967295 + y)
check = 5368709118
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + 1073741823)
check = 5368709118
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test34() {
var x;
var y;
var result;
var check;

x = 4294967295;
y = 1073741824;
result = (x + y);
check = 5368709119;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + 1073741824)
check = 5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (4294967295 + y)
check = 5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + 1073741824)
check = 5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 1073741825;
result = (x + y);
check = 5368709120;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + 1073741825)
check = 5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (4294967295 + y)
check = 5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + 1073741825)
check = 5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -1073741823;
result = (x + y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + -1073741823)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (4294967295 + y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + -1073741823)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = (-0x3fffffff-1);
result = (x + y);
check = 3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + (-0x3fffffff-1))
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (4294967295 + y)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + (-0x3fffffff-1))
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -1073741825;
result = (x + y);
check = 3221225470;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + -1073741825)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (4294967295 + y)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + -1073741825)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -1073741826;
result = (x + y);
check = 3221225469;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + -1073741826)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (4294967295 + y)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + -1073741826)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 2147483646;
result = (x + y);
check = 6442450941;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + 2147483646)
check = 6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (4294967295 + y)
check = 6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + 2147483646)
check = 6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 2147483647;
result = (x + y);
check = 6442450942;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + 2147483647)
check = 6442450942
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (4294967295 + y)
check = 6442450942
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + 2147483647)
check = 6442450942
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 2147483648;
result = (x + y);
check = 6442450943;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + 2147483648)
check = 6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (4294967295 + y)
check = 6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + 2147483648)
check = 6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 2147483649;
result = (x + y);
check = 6442450944;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + 2147483649)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (4294967295 + y)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + 2147483649)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -2147483647;
result = (x + y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + -2147483647)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (4294967295 + y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + -2147483647)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -2147483648;
result = (x + y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + -2147483648)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (4294967295 + y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + -2147483648)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -2147483649;
result = (x + y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + -2147483649)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (4294967295 + y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + -2147483649)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -2147483650;
result = (x + y);
check = 2147483645;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + -2147483650)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (4294967295 + y)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + -2147483650)
check = 2147483645
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 4294967295;
result = (x + y);
check = 8589934590;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + 4294967295)
check = 8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (4294967295 + y)
check = 8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + 4294967295)
check = 8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 4294967296;
result = (x + y);
check = 8589934591;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + 4294967296)
check = 8589934591
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (4294967295 + y)
check = 8589934591
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + 4294967296)
check = 8589934591
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -4294967295;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + -4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (4294967295 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + -4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -4294967296;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 + -4294967296)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (4294967295 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x + -4294967296)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 0;
result = (x + y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + 0)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4294967296 + y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + 0)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 1;
result = (x + y);
check = 4294967297;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + 1)
check = 4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (4294967296 + y)
check = 4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + 1)
check = 4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -1;
result = (x + y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + -1)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (4294967296 + y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + -1)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 2;
result = (x + y);
check = 4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + 2)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (4294967296 + y)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + 2)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -2;
result = (x + y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + -2)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (4294967296 + y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + -2)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 3;
result = (x + y);
check = 4294967299;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + 3)
check = 4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (4294967296 + y)
check = 4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + 3)
check = 4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -3;
result = (x + y);
check = 4294967293;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + -3)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (4294967296 + y)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + -3)
check = 4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test35() {
var x;
var y;
var result;
var check;

x = 4294967296;
y = 4;
result = (x + y);
check = 4294967300;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + 4)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (4294967296 + y)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + 4)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -4;
result = (x + y);
check = 4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + -4)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (4294967296 + y)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + -4)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 8;
result = (x + y);
check = 4294967304;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + 8)
check = 4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (4294967296 + y)
check = 4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + 8)
check = 4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -8;
result = (x + y);
check = 4294967288;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + -8)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (4294967296 + y)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + -8)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 1073741822;
result = (x + y);
check = 5368709118;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + 1073741822)
check = 5368709118
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (4294967296 + y)
check = 5368709118
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + 1073741822)
check = 5368709118
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 1073741823;
result = (x + y);
check = 5368709119;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + 1073741823)
check = 5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (4294967296 + y)
check = 5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + 1073741823)
check = 5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 1073741824;
result = (x + y);
check = 5368709120;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + 1073741824)
check = 5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (4294967296 + y)
check = 5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + 1073741824)
check = 5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 1073741825;
result = (x + y);
check = 5368709121;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + 1073741825)
check = 5368709121
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (4294967296 + y)
check = 5368709121
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + 1073741825)
check = 5368709121
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -1073741823;
result = (x + y);
check = 3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + -1073741823)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (4294967296 + y)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + -1073741823)
check = 3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = (-0x3fffffff-1);
result = (x + y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + (-0x3fffffff-1))
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (4294967296 + y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + (-0x3fffffff-1))
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -1073741825;
result = (x + y);
check = 3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + -1073741825)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (4294967296 + y)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + -1073741825)
check = 3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -1073741826;
result = (x + y);
check = 3221225470;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + -1073741826)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (4294967296 + y)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + -1073741826)
check = 3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 2147483646;
result = (x + y);
check = 6442450942;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + 2147483646)
check = 6442450942
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (4294967296 + y)
check = 6442450942
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + 2147483646)
check = 6442450942
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 2147483647;
result = (x + y);
check = 6442450943;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + 2147483647)
check = 6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (4294967296 + y)
check = 6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + 2147483647)
check = 6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 2147483648;
result = (x + y);
check = 6442450944;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + 2147483648)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (4294967296 + y)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + 2147483648)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 2147483649;
result = (x + y);
check = 6442450945;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + 2147483649)
check = 6442450945
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (4294967296 + y)
check = 6442450945
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + 2147483649)
check = 6442450945
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -2147483647;
result = (x + y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + -2147483647)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (4294967296 + y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + -2147483647)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -2147483648;
result = (x + y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + -2147483648)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (4294967296 + y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + -2147483648)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -2147483649;
result = (x + y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + -2147483649)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (4294967296 + y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + -2147483649)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -2147483650;
result = (x + y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + -2147483650)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (4294967296 + y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + -2147483650)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 4294967295;
result = (x + y);
check = 8589934591;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + 4294967295)
check = 8589934591
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (4294967296 + y)
check = 8589934591
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + 4294967295)
check = 8589934591
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 4294967296;
result = (x + y);
check = 8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + 4294967296)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (4294967296 + y)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + 4294967296)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -4294967295;
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + -4294967295)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (4294967296 + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + -4294967295)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -4294967296;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 + -4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (4294967296 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x + -4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 0;
result = (x + y);
check = -4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + 0)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4294967295 + y)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + 0)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test36() {
var x;
var y;
var result;
var check;

x = -4294967295;
y = 1;
result = (x + y);
check = -4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + 1)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-4294967295 + y)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + 1)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -1;
result = (x + y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + -1)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-4294967295 + y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + -1)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 2;
result = (x + y);
check = -4294967293;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + 2)
check = -4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-4294967295 + y)
check = -4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + 2)
check = -4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -2;
result = (x + y);
check = -4294967297;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + -2)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-4294967295 + y)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + -2)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 3;
result = (x + y);
check = -4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + 3)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-4294967295 + y)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + 3)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -3;
result = (x + y);
check = -4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + -3)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-4294967295 + y)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + -3)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 4;
result = (x + y);
check = -4294967291;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + 4)
check = -4294967291
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-4294967295 + y)
check = -4294967291
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + 4)
check = -4294967291
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -4;
result = (x + y);
check = -4294967299;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + -4)
check = -4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-4294967295 + y)
check = -4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + -4)
check = -4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 8;
result = (x + y);
check = -4294967287;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + 8)
check = -4294967287
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-4294967295 + y)
check = -4294967287
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + 8)
check = -4294967287
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -8;
result = (x + y);
check = -4294967303;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + -8)
check = -4294967303
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-4294967295 + y)
check = -4294967303
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + -8)
check = -4294967303
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 1073741822;
result = (x + y);
check = -3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + 1073741822)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-4294967295 + y)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + 1073741822)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 1073741823;
result = (x + y);
check = -3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + 1073741823)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-4294967295 + y)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + 1073741823)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 1073741824;
result = (x + y);
check = -3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + 1073741824)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-4294967295 + y)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + 1073741824)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 1073741825;
result = (x + y);
check = -3221225470;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + 1073741825)
check = -3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-4294967295 + y)
check = -3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + 1073741825)
check = -3221225470
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -1073741823;
result = (x + y);
check = -5368709118;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + -1073741823)
check = -5368709118
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-4294967295 + y)
check = -5368709118
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + -1073741823)
check = -5368709118
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = (-0x3fffffff-1);
result = (x + y);
check = -5368709119;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + (-0x3fffffff-1))
check = -5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-4294967295 + y)
check = -5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + (-0x3fffffff-1))
check = -5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -1073741825;
result = (x + y);
check = -5368709120;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + -1073741825)
check = -5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-4294967295 + y)
check = -5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + -1073741825)
check = -5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -1073741826;
result = (x + y);
check = -5368709121;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + -1073741826)
check = -5368709121
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-4294967295 + y)
check = -5368709121
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + -1073741826)
check = -5368709121
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 2147483646;
result = (x + y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + 2147483646)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-4294967295 + y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + 2147483646)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 2147483647;
result = (x + y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + 2147483647)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-4294967295 + y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + 2147483647)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 2147483648;
result = (x + y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + 2147483648)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-4294967295 + y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + 2147483648)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 2147483649;
result = (x + y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + 2147483649)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-4294967295 + y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + 2147483649)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -2147483647;
result = (x + y);
check = -6442450942;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + -2147483647)
check = -6442450942
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-4294967295 + y)
check = -6442450942
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + -2147483647)
check = -6442450942
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -2147483648;
result = (x + y);
check = -6442450943;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + -2147483648)
check = -6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-4294967295 + y)
check = -6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + -2147483648)
check = -6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -2147483649;
result = (x + y);
check = -6442450944;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + -2147483649)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-4294967295 + y)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + -2147483649)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test37() {
var x;
var y;
var result;
var check;

x = -4294967295;
y = -2147483650;
result = (x + y);
check = -6442450945;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + -2147483650)
check = -6442450945
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-4294967295 + y)
check = -6442450945
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + -2147483650)
check = -6442450945
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 4294967295;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + 4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-4294967295 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + 4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 4294967296;
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + 4294967296)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-4294967295 + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + 4294967296)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -4294967295;
result = (x + y);
check = -8589934590;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + -4294967295)
check = -8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-4294967295 + y)
check = -8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + -4294967295)
check = -8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -4294967296;
result = (x + y);
check = -8589934591;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 + -4294967296)
check = -8589934591
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-4294967295 + y)
check = -8589934591
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x + -4294967296)
check = -8589934591
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 0;
result = (x + y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + 0)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4294967296 + y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + 0)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 1;
result = (x + y);
check = -4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + 1)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-4294967296 + y)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + 1)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -1;
result = (x + y);
check = -4294967297;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + -1)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-4294967296 + y)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + -1)
check = -4294967297
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 2;
result = (x + y);
check = -4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + 2)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-4294967296 + y)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + 2)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -2;
result = (x + y);
check = -4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + -2)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-4294967296 + y)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + -2)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 3;
result = (x + y);
check = -4294967293;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + 3)
check = -4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-4294967296 + y)
check = -4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + 3)
check = -4294967293
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -3;
result = (x + y);
check = -4294967299;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + -3)
check = -4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-4294967296 + y)
check = -4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + -3)
check = -4294967299
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 4;
result = (x + y);
check = -4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + 4)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-4294967296 + y)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + 4)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -4;
result = (x + y);
check = -4294967300;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + -4)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-4294967296 + y)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + -4)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 8;
result = (x + y);
check = -4294967288;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + 8)
check = -4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-4294967296 + y)
check = -4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + 8)
check = -4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -8;
result = (x + y);
check = -4294967304;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + -8)
check = -4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-4294967296 + y)
check = -4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + -8)
check = -4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 1073741822;
result = (x + y);
check = -3221225474;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + 1073741822)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-4294967296 + y)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + 1073741822)
check = -3221225474
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 1073741823;
result = (x + y);
check = -3221225473;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + 1073741823)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-4294967296 + y)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + 1073741823)
check = -3221225473
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 1073741824;
result = (x + y);
check = -3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + 1073741824)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-4294967296 + y)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + 1073741824)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 1073741825;
result = (x + y);
check = -3221225471;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + 1073741825)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-4294967296 + y)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + 1073741825)
check = -3221225471
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -1073741823;
result = (x + y);
check = -5368709119;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + -1073741823)
check = -5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-4294967296 + y)
check = -5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + -1073741823)
check = -5368709119
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = (-0x3fffffff-1);
result = (x + y);
check = -5368709120;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + (-0x3fffffff-1))
check = -5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-4294967296 + y)
check = -5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + (-0x3fffffff-1))
check = -5368709120
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -1073741825;
result = (x + y);
check = -5368709121;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + -1073741825)
check = -5368709121
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-4294967296 + y)
check = -5368709121
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + -1073741825)
check = -5368709121
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -1073741826;
result = (x + y);
check = -5368709122;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + -1073741826)
check = -5368709122
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-4294967296 + y)
check = -5368709122
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + -1073741826)
check = -5368709122
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 2147483646;
result = (x + y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + 2147483646)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-4294967296 + y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + 2147483646)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test38() {
var x;
var y;
var result;
var check;

x = -4294967296;
y = 2147483647;
result = (x + y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + 2147483647)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-4294967296 + y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + 2147483647)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 2147483648;
result = (x + y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + 2147483648)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-4294967296 + y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + 2147483648)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 2147483649;
result = (x + y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + 2147483649)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-4294967296 + y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + 2147483649)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -2147483647;
result = (x + y);
check = -6442450943;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + -2147483647)
check = -6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-4294967296 + y)
check = -6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + -2147483647)
check = -6442450943
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -2147483648;
result = (x + y);
check = -6442450944;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + -2147483648)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-4294967296 + y)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + -2147483648)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -2147483649;
result = (x + y);
check = -6442450945;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + -2147483649)
check = -6442450945
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-4294967296 + y)
check = -6442450945
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + -2147483649)
check = -6442450945
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -2147483650;
result = (x + y);
check = -6442450946;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + -2147483650)
check = -6442450946
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-4294967296 + y)
check = -6442450946
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + -2147483650)
check = -6442450946
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 4294967295;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + 4294967295)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-4294967296 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + 4294967295)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 4294967296;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + 4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-4294967296 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + 4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -4294967295;
result = (x + y);
check = -8589934591;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + -4294967295)
check = -8589934591
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-4294967296 + y)
check = -8589934591
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + -4294967295)
check = -8589934591
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -4294967296;
result = (x + y);
check = -8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 + -4294967296)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-4294967296 + y)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x + -4294967296)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37175050519585;
result = (x + y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37175050519585)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37175050519585;
result = (37175050519585 + y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37175050519585)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37175050519584;
result = (x + y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37175050519584)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37175050519584;
result = (37175050519585 + y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37175050519584)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37175050519586;
result = (x + y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37175050519586)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37175050519586;
result = (37175050519585 + y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37175050519586)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37175050519583;
result = (x + y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37175050519583)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37175050519583;
result = (37175050519585 + y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37175050519583)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37175050519587;
result = (x + y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37175050519587)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37175050519587;
result = (37175050519585 + y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37175050519587)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37175050519582;
result = (x + y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37175050519582)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37175050519582;
result = (37175050519585 + y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37175050519582)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37175050519588;
result = (x + y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37175050519588)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37175050519588;
result = (37175050519585 + y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37175050519588)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37175050519581;
result = (x + y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37175050519581)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37175050519581;
result = (37175050519585 + y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37175050519581)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37175050519589;
result = (x + y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37175050519589)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37175050519589;
result = (37175050519585 + y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37175050519589)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37175050519577;
result = (x + y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37175050519577)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37175050519577;
result = (37175050519585 + y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37175050519577)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37175050519593;
result = (x + y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37175050519593)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37175050519593;
result = (37175050519585 + y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37175050519593)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37173976777763;
result = (x + y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37173976777763)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37173976777763;
result = (37175050519585 + y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37173976777763)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37173976777762;
result = (x + y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37173976777762)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37173976777762;
result = (37175050519585 + y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37173976777762)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37173976777761;
result = (x + y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37173976777761)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37173976777761;
result = (37175050519585 + y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37173976777761)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test39() {
var x;
var y;
var result;
var check;

x = 37175050519585;
y = -37173976777760;
result = (x + y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37173976777760)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37173976777760;
result = (37175050519585 + y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37173976777760)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37176124261408;
result = (x + y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37176124261408)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37176124261408;
result = (37175050519585 + y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37176124261408)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37176124261409;
result = (x + y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37176124261409)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37176124261409;
result = (37175050519585 + y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37176124261409)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37176124261410;
result = (x + y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37176124261410)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37176124261410;
result = (37175050519585 + y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37176124261410)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37176124261411;
result = (x + y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37176124261411)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37176124261411;
result = (37175050519585 + y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37176124261411)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37172903035939;
result = (x + y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37172903035939)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37172903035939;
result = (37175050519585 + y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37172903035939)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37172903035938;
result = (x + y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37172903035938)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37172903035938;
result = (37175050519585 + y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37172903035938)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37172903035937;
result = (x + y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37172903035937)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37172903035937;
result = (37175050519585 + y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37172903035937)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37172903035936;
result = (x + y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37172903035936)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37172903035936;
result = (37175050519585 + y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37172903035936)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37177198003232;
result = (x + y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37177198003232)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37177198003232;
result = (37175050519585 + y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37177198003232)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37177198003233;
result = (x + y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37177198003233)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37177198003233;
result = (37175050519585 + y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37177198003233)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37177198003234;
result = (x + y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37177198003234)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37177198003234;
result = (37175050519585 + y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37177198003234)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37177198003235;
result = (x + y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37177198003235)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37177198003235;
result = (37175050519585 + y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37177198003235)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37170755552290;
result = (x + y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37170755552290)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37170755552290;
result = (37175050519585 + y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37170755552290)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37170755552289;
result = (x + y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37170755552289)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37170755552289;
result = (37175050519585 + y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37170755552289)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37179345486880;
result = (x + y);
check = -4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37179345486880)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37179345486880;
result = (37175050519585 + y)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37179345486880)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
y = -37179345486881;
result = (x + y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (37175050519585 + -37179345486881)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -37179345486881;
result = (37175050519585 + y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 37175050519585;
result = (x + -37179345486881)
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
