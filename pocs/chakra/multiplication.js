var test = 1; 
function fail(n, expected, result) { print("failure in test " + test + "; expected " + expected + ", got " + result); }
function test0() {
var x;
var y;
var result;
var check;

x = 0;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * 1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -1;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * -1)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * 2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -2;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * -2)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 3;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * 3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -3;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * -3)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 4;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * 4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -4;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * -4)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 8;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * 8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -8;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * -8)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1073741822;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * 1073741822)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * 1073741822)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1073741823;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * 1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * 1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1073741824;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * 1073741824)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 1073741825;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * 1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * 1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -1073741823;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * -1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * -1073741823)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = (-0x3fffffff-1);
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * (-0x3fffffff-1))
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -1073741825;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * -1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * -1073741825)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -1073741826;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * -1073741826)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * -1073741826)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2147483646;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * 2147483646)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * 2147483646)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2147483647;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * 2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * 2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2147483648;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * 2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * 2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 2147483649;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * 2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * 2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -2147483647;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * -2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * -2147483647)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -2147483648;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * -2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * -2147483648)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test1() {
var x;
var y;
var result;
var check;

x = 0;
y = -2147483649;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * -2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * -2147483649)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -2147483650;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * -2147483650)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * -2147483650)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 4294967295;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * 4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * 4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = 4294967296;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * 4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * 4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -4294967295;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * -4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * -4294967295)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
y = -4294967296;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (0 * -4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (0 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 0;
result = (x * -4294967296)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 1;
result = (x * y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * 1)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1 * y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * 1)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -1;
result = (x * y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * -1)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1 * y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * -1)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 2;
result = (x * y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * 2)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1 * y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * 2)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -2;
result = (x * y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * -2)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (1 * y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * -2)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 3;
result = (x * y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * 3)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1 * y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * 3)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -3;
result = (x * y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * -3)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (1 * y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * -3)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 4;
result = (x * y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * 4)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1 * y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * 4)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -4;
result = (x * y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * -4)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (1 * y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * -4)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 8;
result = (x * y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * 8)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1 * y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * 8)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -8;
result = (x * y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * -8)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (1 * y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * -8)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 1073741822;
result = (x * y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * 1073741822)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (1 * y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * 1073741822)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 1073741823;
result = (x * y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * 1073741823)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (1 * y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * 1073741823)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 1073741824;
result = (x * y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * 1073741824)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (1 * y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * 1073741824)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 1073741825;
result = (x * y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * 1073741825)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (1 * y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * 1073741825)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -1073741823;
result = (x * y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * -1073741823)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (1 * y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * -1073741823)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = (-0x3fffffff-1);
result = (x * y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * (-0x3fffffff-1))
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (1 * y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * (-0x3fffffff-1))
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -1073741825;
result = (x * y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * -1073741825)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (1 * y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * -1073741825)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -1073741826;
result = (x * y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * -1073741826)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (1 * y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * -1073741826)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test2() {
var x;
var y;
var result;
var check;

x = 1;
y = 2147483646;
result = (x * y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * 2147483646)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (1 * y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * 2147483646)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 2147483647;
result = (x * y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * 2147483647)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (1 * y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * 2147483647)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 2147483648;
result = (x * y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * 2147483648)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (1 * y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * 2147483648)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 2147483649;
result = (x * y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * 2147483649)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (1 * y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * 2147483649)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -2147483647;
result = (x * y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * -2147483647)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (1 * y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * -2147483647)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -2147483648;
result = (x * y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * -2147483648)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (1 * y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * -2147483648)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -2147483649;
result = (x * y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * -2147483649)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (1 * y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * -2147483649)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -2147483650;
result = (x * y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * -2147483650)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (1 * y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * -2147483650)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 4294967295;
result = (x * y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * 4294967295)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (1 * y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * 4294967295)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = 4294967296;
result = (x * y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * 4294967296)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (1 * y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * 4294967296)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -4294967295;
result = (x * y);
check = -4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * -4294967295)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (1 * y)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * -4294967295)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
y = -4294967296;
result = (x * y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (1 * -4294967296)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (1 * y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1;
result = (x * -4294967296)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 1;
result = (x * y);
check = -1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * 1)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1 * y)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * 1)
check = -1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -1;
result = (x * y);
check = 1;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * -1)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-1 * y)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * -1)
check = 1
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 2;
result = (x * y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * 2)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-1 * y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * 2)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -2;
result = (x * y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * -2)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-1 * y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * -2)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 3;
result = (x * y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * 3)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-1 * y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * 3)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -3;
result = (x * y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * -3)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-1 * y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * -3)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 4;
result = (x * y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * 4)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-1 * y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * 4)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -4;
result = (x * y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * -4)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-1 * y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * -4)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 8;
result = (x * y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * 8)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-1 * y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * 8)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -8;
result = (x * y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * -8)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-1 * y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * -8)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 1073741822;
result = (x * y);
check = -1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * 1073741822)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-1 * y)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * 1073741822)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 1073741823;
result = (x * y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * 1073741823)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-1 * y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * 1073741823)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test3() {
var x;
var y;
var result;
var check;

x = -1;
y = 1073741824;
result = (x * y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * 1073741824)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-1 * y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * 1073741824)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 1073741825;
result = (x * y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * 1073741825)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-1 * y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * 1073741825)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -1073741823;
result = (x * y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * -1073741823)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-1 * y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * -1073741823)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = (-0x3fffffff-1);
result = (x * y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * (-0x3fffffff-1))
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-1 * y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * (-0x3fffffff-1))
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -1073741825;
result = (x * y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * -1073741825)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-1 * y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * -1073741825)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -1073741826;
result = (x * y);
check = 1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * -1073741826)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-1 * y)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * -1073741826)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 2147483646;
result = (x * y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * 2147483646)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-1 * y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * 2147483646)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 2147483647;
result = (x * y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * 2147483647)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-1 * y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * 2147483647)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 2147483648;
result = (x * y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * 2147483648)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-1 * y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * 2147483648)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 2147483649;
result = (x * y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * 2147483649)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-1 * y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * 2147483649)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -2147483647;
result = (x * y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * -2147483647)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-1 * y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * -2147483647)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -2147483648;
result = (x * y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * -2147483648)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-1 * y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * -2147483648)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -2147483649;
result = (x * y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * -2147483649)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-1 * y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * -2147483649)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -2147483650;
result = (x * y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * -2147483650)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-1 * y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * -2147483650)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 4294967295;
result = (x * y);
check = -4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * 4294967295)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-1 * y)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * 4294967295)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = 4294967296;
result = (x * y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * 4294967296)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-1 * y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * 4294967296)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -4294967295;
result = (x * y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * -4294967295)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-1 * y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * -4294967295)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
y = -4294967296;
result = (x * y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1 * -4294967296)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-1 * y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1;
result = (x * -4294967296)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 1;
result = (x * y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * 1)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2 * y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * 1)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -1;
result = (x * y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * -1)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2 * y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * -1)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 2;
result = (x * y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * 2)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2 * y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * 2)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -2;
result = (x * y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * -2)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (2 * y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * -2)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 3;
result = (x * y);
check = 6;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * 3)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2 * y)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * 3)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -3;
result = (x * y);
check = -6;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * -3)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (2 * y)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * -3)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test4() {
var x;
var y;
var result;
var check;

x = 2;
y = 4;
result = (x * y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * 4)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2 * y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * 4)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -4;
result = (x * y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * -4)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (2 * y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * -4)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 8;
result = (x * y);
check = 16;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * 8)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2 * y)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * 8)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -8;
result = (x * y);
check = -16;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * -8)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (2 * y)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * -8)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 1073741822;
result = (x * y);
check = 2147483644;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * 1073741822)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (2 * y)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * 1073741822)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 1073741823;
result = (x * y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * 1073741823)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (2 * y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * 1073741823)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 1073741824;
result = (x * y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * 1073741824)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (2 * y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * 1073741824)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 1073741825;
result = (x * y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * 1073741825)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (2 * y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * 1073741825)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -1073741823;
result = (x * y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * -1073741823)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (2 * y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * -1073741823)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = (-0x3fffffff-1);
result = (x * y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * (-0x3fffffff-1))
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (2 * y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * (-0x3fffffff-1))
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -1073741825;
result = (x * y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * -1073741825)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (2 * y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * -1073741825)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -1073741826;
result = (x * y);
check = -2147483652;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * -1073741826)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (2 * y)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * -1073741826)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 2147483646;
result = (x * y);
check = 4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * 2147483646)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (2 * y)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * 2147483646)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 2147483647;
result = (x * y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * 2147483647)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (2 * y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * 2147483647)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 2147483648;
result = (x * y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * 2147483648)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (2 * y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * 2147483648)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 2147483649;
result = (x * y);
check = 4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * 2147483649)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (2 * y)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * 2147483649)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -2147483647;
result = (x * y);
check = -4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * -2147483647)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (2 * y)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * -2147483647)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -2147483648;
result = (x * y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * -2147483648)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (2 * y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * -2147483648)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -2147483649;
result = (x * y);
check = -4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * -2147483649)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (2 * y)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * -2147483649)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -2147483650;
result = (x * y);
check = -4294967300;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * -2147483650)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (2 * y)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * -2147483650)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 4294967295;
result = (x * y);
check = 8589934590;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * 4294967295)
check = 8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (2 * y)
check = 8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * 4294967295)
check = 8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = 4294967296;
result = (x * y);
check = 8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * 4294967296)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (2 * y)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * 4294967296)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -4294967295;
result = (x * y);
check = -8589934590;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * -4294967295)
check = -8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (2 * y)
check = -8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * -4294967295)
check = -8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
y = -4294967296;
result = (x * y);
check = -8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (2 * -4294967296)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (2 * y)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2;
result = (x * -4294967296)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test5() {
var x;
var y;
var result;
var check;

x = -2;
y = 1;
result = (x * y);
check = -2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * 1)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2 * y)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * 1)
check = -2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -1;
result = (x * y);
check = 2;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * -1)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2 * y)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * -1)
check = 2
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 2;
result = (x * y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * 2)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2 * y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * 2)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -2;
result = (x * y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * -2)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-2 * y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * -2)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 3;
result = (x * y);
check = -6;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * 3)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2 * y)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * 3)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -3;
result = (x * y);
check = 6;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * -3)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-2 * y)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * -3)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 4;
result = (x * y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * 4)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2 * y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * 4)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -4;
result = (x * y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * -4)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-2 * y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * -4)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 8;
result = (x * y);
check = -16;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * 8)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2 * y)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * 8)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -8;
result = (x * y);
check = 16;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * -8)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-2 * y)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * -8)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 1073741822;
result = (x * y);
check = -2147483644;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * 1073741822)
check = -2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-2 * y)
check = -2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * 1073741822)
check = -2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 1073741823;
result = (x * y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * 1073741823)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-2 * y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * 1073741823)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 1073741824;
result = (x * y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * 1073741824)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-2 * y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * 1073741824)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 1073741825;
result = (x * y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * 1073741825)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-2 * y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * 1073741825)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -1073741823;
result = (x * y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * -1073741823)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-2 * y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * -1073741823)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = (-0x3fffffff-1);
result = (x * y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * (-0x3fffffff-1))
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-2 * y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * (-0x3fffffff-1))
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -1073741825;
result = (x * y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * -1073741825)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-2 * y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * -1073741825)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -1073741826;
result = (x * y);
check = 2147483652;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * -1073741826)
check = 2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-2 * y)
check = 2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * -1073741826)
check = 2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 2147483646;
result = (x * y);
check = -4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * 2147483646)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-2 * y)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * 2147483646)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 2147483647;
result = (x * y);
check = -4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * 2147483647)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-2 * y)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * 2147483647)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 2147483648;
result = (x * y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * 2147483648)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-2 * y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * 2147483648)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 2147483649;
result = (x * y);
check = -4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * 2147483649)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-2 * y)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * 2147483649)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -2147483647;
result = (x * y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * -2147483647)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-2 * y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * -2147483647)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -2147483648;
result = (x * y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * -2147483648)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-2 * y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * -2147483648)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -2147483649;
result = (x * y);
check = 4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * -2147483649)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-2 * y)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * -2147483649)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test6() {
var x;
var y;
var result;
var check;

x = -2;
y = -2147483650;
result = (x * y);
check = 4294967300;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * -2147483650)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-2 * y)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * -2147483650)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 4294967295;
result = (x * y);
check = -8589934590;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * 4294967295)
check = -8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-2 * y)
check = -8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * 4294967295)
check = -8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = 4294967296;
result = (x * y);
check = -8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * 4294967296)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-2 * y)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * 4294967296)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -4294967295;
result = (x * y);
check = 8589934590;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * -4294967295)
check = 8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-2 * y)
check = 8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * -4294967295)
check = 8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
y = -4294967296;
result = (x * y);
check = 8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2 * -4294967296)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-2 * y)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2;
result = (x * -4294967296)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (3 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 1;
result = (x * y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * 1)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (3 * y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * 1)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -1;
result = (x * y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * -1)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (3 * y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * -1)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 2;
result = (x * y);
check = 6;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * 2)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (3 * y)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * 2)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -2;
result = (x * y);
check = -6;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * -2)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (3 * y)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * -2)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 3;
result = (x * y);
check = 9;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * 3)
check = 9
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (3 * y)
check = 9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * 3)
check = 9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -3;
result = (x * y);
check = -9;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * -3)
check = -9
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (3 * y)
check = -9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * -3)
check = -9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 4;
result = (x * y);
check = 12;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * 4)
check = 12
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (3 * y)
check = 12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * 4)
check = 12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -4;
result = (x * y);
check = -12;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * -4)
check = -12
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (3 * y)
check = -12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * -4)
check = -12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 8;
result = (x * y);
check = 24;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * 8)
check = 24
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (3 * y)
check = 24
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * 8)
check = 24
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -8;
result = (x * y);
check = -24;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * -8)
check = -24
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (3 * y)
check = -24
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * -8)
check = -24
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 1073741822;
result = (x * y);
check = 3221225466;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * 1073741822)
check = 3221225466
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (3 * y)
check = 3221225466
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * 1073741822)
check = 3221225466
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 1073741823;
result = (x * y);
check = 3221225469;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * 1073741823)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (3 * y)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * 1073741823)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 1073741824;
result = (x * y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * 1073741824)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (3 * y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * 1073741824)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 1073741825;
result = (x * y);
check = 3221225475;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * 1073741825)
check = 3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (3 * y)
check = 3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * 1073741825)
check = 3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -1073741823;
result = (x * y);
check = -3221225469;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * -1073741823)
check = -3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (3 * y)
check = -3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * -1073741823)
check = -3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = (-0x3fffffff-1);
result = (x * y);
check = -3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * (-0x3fffffff-1))
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (3 * y)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * (-0x3fffffff-1))
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -1073741825;
result = (x * y);
check = -3221225475;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * -1073741825)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (3 * y)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * -1073741825)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -1073741826;
result = (x * y);
check = -3221225478;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * -1073741826)
check = -3221225478
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (3 * y)
check = -3221225478
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * -1073741826)
check = -3221225478
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 2147483646;
result = (x * y);
check = 6442450938;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * 2147483646)
check = 6442450938
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (3 * y)
check = 6442450938
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * 2147483646)
check = 6442450938
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test7() {
var x;
var y;
var result;
var check;

x = 3;
y = 2147483647;
result = (x * y);
check = 6442450941;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * 2147483647)
check = 6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (3 * y)
check = 6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * 2147483647)
check = 6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 2147483648;
result = (x * y);
check = 6442450944;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * 2147483648)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (3 * y)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * 2147483648)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 2147483649;
result = (x * y);
check = 6442450947;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * 2147483649)
check = 6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (3 * y)
check = 6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * 2147483649)
check = 6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -2147483647;
result = (x * y);
check = -6442450941;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * -2147483647)
check = -6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (3 * y)
check = -6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * -2147483647)
check = -6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -2147483648;
result = (x * y);
check = -6442450944;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * -2147483648)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (3 * y)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * -2147483648)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -2147483649;
result = (x * y);
check = -6442450947;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * -2147483649)
check = -6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (3 * y)
check = -6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * -2147483649)
check = -6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -2147483650;
result = (x * y);
check = -6442450950;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * -2147483650)
check = -6442450950
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (3 * y)
check = -6442450950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * -2147483650)
check = -6442450950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 4294967295;
result = (x * y);
check = 12884901885;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * 4294967295)
check = 12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (3 * y)
check = 12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * 4294967295)
check = 12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = 4294967296;
result = (x * y);
check = 12884901888;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * 4294967296)
check = 12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (3 * y)
check = 12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * 4294967296)
check = 12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -4294967295;
result = (x * y);
check = -12884901885;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * -4294967295)
check = -12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (3 * y)
check = -12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * -4294967295)
check = -12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
y = -4294967296;
result = (x * y);
check = -12884901888;
if(result != check) { fail(test, check, result); } ++test; 


result = (3 * -4294967296)
check = -12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (3 * y)
check = -12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 3;
result = (x * -4294967296)
check = -12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-3 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 1;
result = (x * y);
check = -3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * 1)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-3 * y)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * 1)
check = -3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -1;
result = (x * y);
check = 3;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * -1)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-3 * y)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * -1)
check = 3
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 2;
result = (x * y);
check = -6;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * 2)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-3 * y)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * 2)
check = -6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -2;
result = (x * y);
check = 6;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * -2)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-3 * y)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * -2)
check = 6
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 3;
result = (x * y);
check = -9;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * 3)
check = -9
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-3 * y)
check = -9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * 3)
check = -9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -3;
result = (x * y);
check = 9;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * -3)
check = 9
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-3 * y)
check = 9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * -3)
check = 9
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 4;
result = (x * y);
check = -12;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * 4)
check = -12
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-3 * y)
check = -12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * 4)
check = -12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -4;
result = (x * y);
check = 12;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * -4)
check = 12
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-3 * y)
check = 12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * -4)
check = 12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 8;
result = (x * y);
check = -24;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * 8)
check = -24
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-3 * y)
check = -24
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * 8)
check = -24
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -8;
result = (x * y);
check = 24;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * -8)
check = 24
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-3 * y)
check = 24
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * -8)
check = 24
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 1073741822;
result = (x * y);
check = -3221225466;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * 1073741822)
check = -3221225466
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-3 * y)
check = -3221225466
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * 1073741822)
check = -3221225466
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 1073741823;
result = (x * y);
check = -3221225469;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * 1073741823)
check = -3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-3 * y)
check = -3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * 1073741823)
check = -3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 1073741824;
result = (x * y);
check = -3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * 1073741824)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-3 * y)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * 1073741824)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test8() {
var x;
var y;
var result;
var check;

x = -3;
y = 1073741825;
result = (x * y);
check = -3221225475;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * 1073741825)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-3 * y)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * 1073741825)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -1073741823;
result = (x * y);
check = 3221225469;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * -1073741823)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-3 * y)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * -1073741823)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = (-0x3fffffff-1);
result = (x * y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * (-0x3fffffff-1))
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-3 * y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * (-0x3fffffff-1))
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -1073741825;
result = (x * y);
check = 3221225475;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * -1073741825)
check = 3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-3 * y)
check = 3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * -1073741825)
check = 3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -1073741826;
result = (x * y);
check = 3221225478;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * -1073741826)
check = 3221225478
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-3 * y)
check = 3221225478
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * -1073741826)
check = 3221225478
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 2147483646;
result = (x * y);
check = -6442450938;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * 2147483646)
check = -6442450938
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-3 * y)
check = -6442450938
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * 2147483646)
check = -6442450938
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 2147483647;
result = (x * y);
check = -6442450941;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * 2147483647)
check = -6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-3 * y)
check = -6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * 2147483647)
check = -6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 2147483648;
result = (x * y);
check = -6442450944;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * 2147483648)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-3 * y)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * 2147483648)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 2147483649;
result = (x * y);
check = -6442450947;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * 2147483649)
check = -6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-3 * y)
check = -6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * 2147483649)
check = -6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -2147483647;
result = (x * y);
check = 6442450941;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * -2147483647)
check = 6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-3 * y)
check = 6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * -2147483647)
check = 6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -2147483648;
result = (x * y);
check = 6442450944;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * -2147483648)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-3 * y)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * -2147483648)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -2147483649;
result = (x * y);
check = 6442450947;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * -2147483649)
check = 6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-3 * y)
check = 6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * -2147483649)
check = 6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -2147483650;
result = (x * y);
check = 6442450950;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * -2147483650)
check = 6442450950
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-3 * y)
check = 6442450950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * -2147483650)
check = 6442450950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 4294967295;
result = (x * y);
check = -12884901885;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * 4294967295)
check = -12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-3 * y)
check = -12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * 4294967295)
check = -12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = 4294967296;
result = (x * y);
check = -12884901888;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * 4294967296)
check = -12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-3 * y)
check = -12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * 4294967296)
check = -12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -4294967295;
result = (x * y);
check = 12884901885;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * -4294967295)
check = 12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-3 * y)
check = 12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * -4294967295)
check = 12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
y = -4294967296;
result = (x * y);
check = 12884901888;
if(result != check) { fail(test, check, result); } ++test; 


result = (-3 * -4294967296)
check = 12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-3 * y)
check = 12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -3;
result = (x * -4294967296)
check = 12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 1;
result = (x * y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * 1)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (4 * y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * 1)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -1;
result = (x * y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * -1)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (4 * y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * -1)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 2;
result = (x * y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * 2)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (4 * y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * 2)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -2;
result = (x * y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * -2)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (4 * y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * -2)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 3;
result = (x * y);
check = 12;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * 3)
check = 12
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (4 * y)
check = 12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * 3)
check = 12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -3;
result = (x * y);
check = -12;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * -3)
check = -12
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (4 * y)
check = -12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * -3)
check = -12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 4;
result = (x * y);
check = 16;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * 4)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (4 * y)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * 4)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test9() {
var x;
var y;
var result;
var check;

x = 4;
y = -4;
result = (x * y);
check = -16;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * -4)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (4 * y)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * -4)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 8;
result = (x * y);
check = 32;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * 8)
check = 32
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (4 * y)
check = 32
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * 8)
check = 32
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -8;
result = (x * y);
check = -32;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * -8)
check = -32
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (4 * y)
check = -32
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * -8)
check = -32
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 1073741822;
result = (x * y);
check = 4294967288;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * 1073741822)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (4 * y)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * 1073741822)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 1073741823;
result = (x * y);
check = 4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * 1073741823)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (4 * y)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * 1073741823)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 1073741824;
result = (x * y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * 1073741824)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (4 * y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * 1073741824)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 1073741825;
result = (x * y);
check = 4294967300;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * 1073741825)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (4 * y)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * 1073741825)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -1073741823;
result = (x * y);
check = -4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * -1073741823)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (4 * y)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * -1073741823)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = (-0x3fffffff-1);
result = (x * y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * (-0x3fffffff-1))
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (4 * y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * (-0x3fffffff-1))
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -1073741825;
result = (x * y);
check = -4294967300;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * -1073741825)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (4 * y)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * -1073741825)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -1073741826;
result = (x * y);
check = -4294967304;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * -1073741826)
check = -4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (4 * y)
check = -4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * -1073741826)
check = -4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 2147483646;
result = (x * y);
check = 8589934584;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * 2147483646)
check = 8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (4 * y)
check = 8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * 2147483646)
check = 8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 2147483647;
result = (x * y);
check = 8589934588;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * 2147483647)
check = 8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (4 * y)
check = 8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * 2147483647)
check = 8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 2147483648;
result = (x * y);
check = 8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * 2147483648)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (4 * y)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * 2147483648)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 2147483649;
result = (x * y);
check = 8589934596;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * 2147483649)
check = 8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (4 * y)
check = 8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * 2147483649)
check = 8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -2147483647;
result = (x * y);
check = -8589934588;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * -2147483647)
check = -8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (4 * y)
check = -8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * -2147483647)
check = -8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -2147483648;
result = (x * y);
check = -8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * -2147483648)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (4 * y)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * -2147483648)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -2147483649;
result = (x * y);
check = -8589934596;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * -2147483649)
check = -8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (4 * y)
check = -8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * -2147483649)
check = -8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -2147483650;
result = (x * y);
check = -8589934600;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * -2147483650)
check = -8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (4 * y)
check = -8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * -2147483650)
check = -8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 4294967295;
result = (x * y);
check = 17179869180;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * 4294967295)
check = 17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (4 * y)
check = 17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * 4294967295)
check = 17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = 4294967296;
result = (x * y);
check = 17179869184;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * 4294967296)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (4 * y)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * 4294967296)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -4294967295;
result = (x * y);
check = -17179869180;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * -4294967295)
check = -17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (4 * y)
check = -17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * -4294967295)
check = -17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
y = -4294967296;
result = (x * y);
check = -17179869184;
if(result != check) { fail(test, check, result); } ++test; 


result = (4 * -4294967296)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (4 * y)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4;
result = (x * -4294967296)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 1;
result = (x * y);
check = -4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * 1)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-4 * y)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * 1)
check = -4
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test10() {
var x;
var y;
var result;
var check;

x = -4;
y = -1;
result = (x * y);
check = 4;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * -1)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-4 * y)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * -1)
check = 4
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 2;
result = (x * y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * 2)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-4 * y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * 2)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -2;
result = (x * y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * -2)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-4 * y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * -2)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 3;
result = (x * y);
check = -12;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * 3)
check = -12
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-4 * y)
check = -12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * 3)
check = -12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -3;
result = (x * y);
check = 12;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * -3)
check = 12
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-4 * y)
check = 12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * -3)
check = 12
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 4;
result = (x * y);
check = -16;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * 4)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-4 * y)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * 4)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -4;
result = (x * y);
check = 16;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * -4)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-4 * y)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * -4)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 8;
result = (x * y);
check = -32;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * 8)
check = -32
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-4 * y)
check = -32
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * 8)
check = -32
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -8;
result = (x * y);
check = 32;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * -8)
check = 32
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-4 * y)
check = 32
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * -8)
check = 32
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 1073741822;
result = (x * y);
check = -4294967288;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * 1073741822)
check = -4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-4 * y)
check = -4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * 1073741822)
check = -4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 1073741823;
result = (x * y);
check = -4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * 1073741823)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-4 * y)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * 1073741823)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 1073741824;
result = (x * y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * 1073741824)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-4 * y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * 1073741824)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 1073741825;
result = (x * y);
check = -4294967300;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * 1073741825)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-4 * y)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * 1073741825)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -1073741823;
result = (x * y);
check = 4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * -1073741823)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-4 * y)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * -1073741823)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = (-0x3fffffff-1);
result = (x * y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * (-0x3fffffff-1))
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-4 * y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * (-0x3fffffff-1))
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -1073741825;
result = (x * y);
check = 4294967300;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * -1073741825)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-4 * y)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * -1073741825)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -1073741826;
result = (x * y);
check = 4294967304;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * -1073741826)
check = 4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-4 * y)
check = 4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * -1073741826)
check = 4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 2147483646;
result = (x * y);
check = -8589934584;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * 2147483646)
check = -8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-4 * y)
check = -8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * 2147483646)
check = -8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 2147483647;
result = (x * y);
check = -8589934588;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * 2147483647)
check = -8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-4 * y)
check = -8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * 2147483647)
check = -8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 2147483648;
result = (x * y);
check = -8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * 2147483648)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-4 * y)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * 2147483648)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 2147483649;
result = (x * y);
check = -8589934596;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * 2147483649)
check = -8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-4 * y)
check = -8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * 2147483649)
check = -8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -2147483647;
result = (x * y);
check = 8589934588;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * -2147483647)
check = 8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-4 * y)
check = 8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * -2147483647)
check = 8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -2147483648;
result = (x * y);
check = 8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * -2147483648)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-4 * y)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * -2147483648)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -2147483649;
result = (x * y);
check = 8589934596;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * -2147483649)
check = 8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-4 * y)
check = 8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * -2147483649)
check = 8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -2147483650;
result = (x * y);
check = 8589934600;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * -2147483650)
check = 8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-4 * y)
check = 8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * -2147483650)
check = 8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test11() {
var x;
var y;
var result;
var check;

x = -4;
y = 4294967295;
result = (x * y);
check = -17179869180;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * 4294967295)
check = -17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-4 * y)
check = -17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * 4294967295)
check = -17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = 4294967296;
result = (x * y);
check = -17179869184;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * 4294967296)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-4 * y)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * 4294967296)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -4294967295;
result = (x * y);
check = 17179869180;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * -4294967295)
check = 17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-4 * y)
check = 17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * -4294967295)
check = 17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
y = -4294967296;
result = (x * y);
check = 17179869184;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4 * -4294967296)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-4 * y)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4;
result = (x * -4294967296)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (8 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 1;
result = (x * y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * 1)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (8 * y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * 1)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -1;
result = (x * y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * -1)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (8 * y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * -1)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 2;
result = (x * y);
check = 16;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * 2)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (8 * y)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * 2)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -2;
result = (x * y);
check = -16;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * -2)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (8 * y)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * -2)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 3;
result = (x * y);
check = 24;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * 3)
check = 24
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (8 * y)
check = 24
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * 3)
check = 24
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -3;
result = (x * y);
check = -24;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * -3)
check = -24
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (8 * y)
check = -24
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * -3)
check = -24
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 4;
result = (x * y);
check = 32;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * 4)
check = 32
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (8 * y)
check = 32
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * 4)
check = 32
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -4;
result = (x * y);
check = -32;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * -4)
check = -32
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (8 * y)
check = -32
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * -4)
check = -32
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 8;
result = (x * y);
check = 64;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * 8)
check = 64
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (8 * y)
check = 64
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * 8)
check = 64
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -8;
result = (x * y);
check = -64;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * -8)
check = -64
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (8 * y)
check = -64
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * -8)
check = -64
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 1073741822;
result = (x * y);
check = 8589934576;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * 1073741822)
check = 8589934576
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (8 * y)
check = 8589934576
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * 1073741822)
check = 8589934576
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 1073741823;
result = (x * y);
check = 8589934584;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * 1073741823)
check = 8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (8 * y)
check = 8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * 1073741823)
check = 8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 1073741824;
result = (x * y);
check = 8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * 1073741824)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (8 * y)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * 1073741824)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 1073741825;
result = (x * y);
check = 8589934600;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * 1073741825)
check = 8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (8 * y)
check = 8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * 1073741825)
check = 8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -1073741823;
result = (x * y);
check = -8589934584;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * -1073741823)
check = -8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (8 * y)
check = -8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * -1073741823)
check = -8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = (-0x3fffffff-1);
result = (x * y);
check = -8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * (-0x3fffffff-1))
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (8 * y)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * (-0x3fffffff-1))
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -1073741825;
result = (x * y);
check = -8589934600;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * -1073741825)
check = -8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (8 * y)
check = -8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * -1073741825)
check = -8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -1073741826;
result = (x * y);
check = -8589934608;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * -1073741826)
check = -8589934608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (8 * y)
check = -8589934608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * -1073741826)
check = -8589934608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 2147483646;
result = (x * y);
check = 17179869168;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * 2147483646)
check = 17179869168
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (8 * y)
check = 17179869168
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * 2147483646)
check = 17179869168
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 2147483647;
result = (x * y);
check = 17179869176;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * 2147483647)
check = 17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (8 * y)
check = 17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * 2147483647)
check = 17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test12() {
var x;
var y;
var result;
var check;

x = 8;
y = 2147483648;
result = (x * y);
check = 17179869184;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * 2147483648)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (8 * y)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * 2147483648)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 2147483649;
result = (x * y);
check = 17179869192;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * 2147483649)
check = 17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (8 * y)
check = 17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * 2147483649)
check = 17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -2147483647;
result = (x * y);
check = -17179869176;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * -2147483647)
check = -17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (8 * y)
check = -17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * -2147483647)
check = -17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -2147483648;
result = (x * y);
check = -17179869184;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * -2147483648)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (8 * y)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * -2147483648)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -2147483649;
result = (x * y);
check = -17179869192;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * -2147483649)
check = -17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (8 * y)
check = -17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * -2147483649)
check = -17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -2147483650;
result = (x * y);
check = -17179869200;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * -2147483650)
check = -17179869200
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (8 * y)
check = -17179869200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * -2147483650)
check = -17179869200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 4294967295;
result = (x * y);
check = 34359738360;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * 4294967295)
check = 34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (8 * y)
check = 34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * 4294967295)
check = 34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = 4294967296;
result = (x * y);
check = 34359738368;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * 4294967296)
check = 34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (8 * y)
check = 34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * 4294967296)
check = 34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -4294967295;
result = (x * y);
check = -34359738360;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * -4294967295)
check = -34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (8 * y)
check = -34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * -4294967295)
check = -34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
y = -4294967296;
result = (x * y);
check = -34359738368;
if(result != check) { fail(test, check, result); } ++test; 


result = (8 * -4294967296)
check = -34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (8 * y)
check = -34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 8;
result = (x * -4294967296)
check = -34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-8 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 1;
result = (x * y);
check = -8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * 1)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-8 * y)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * 1)
check = -8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -1;
result = (x * y);
check = 8;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * -1)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-8 * y)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * -1)
check = 8
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 2;
result = (x * y);
check = -16;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * 2)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-8 * y)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * 2)
check = -16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -2;
result = (x * y);
check = 16;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * -2)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-8 * y)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * -2)
check = 16
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 3;
result = (x * y);
check = -24;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * 3)
check = -24
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-8 * y)
check = -24
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * 3)
check = -24
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -3;
result = (x * y);
check = 24;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * -3)
check = 24
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-8 * y)
check = 24
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * -3)
check = 24
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 4;
result = (x * y);
check = -32;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * 4)
check = -32
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-8 * y)
check = -32
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * 4)
check = -32
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -4;
result = (x * y);
check = 32;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * -4)
check = 32
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-8 * y)
check = 32
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * -4)
check = 32
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 8;
result = (x * y);
check = -64;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * 8)
check = -64
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-8 * y)
check = -64
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * 8)
check = -64
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -8;
result = (x * y);
check = 64;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * -8)
check = 64
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-8 * y)
check = 64
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * -8)
check = 64
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 1073741822;
result = (x * y);
check = -8589934576;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * 1073741822)
check = -8589934576
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-8 * y)
check = -8589934576
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * 1073741822)
check = -8589934576
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 1073741823;
result = (x * y);
check = -8589934584;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * 1073741823)
check = -8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-8 * y)
check = -8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * 1073741823)
check = -8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 1073741824;
result = (x * y);
check = -8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * 1073741824)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-8 * y)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * 1073741824)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 1073741825;
result = (x * y);
check = -8589934600;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * 1073741825)
check = -8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-8 * y)
check = -8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * 1073741825)
check = -8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test13() {
var x;
var y;
var result;
var check;

x = -8;
y = -1073741823;
result = (x * y);
check = 8589934584;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * -1073741823)
check = 8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-8 * y)
check = 8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * -1073741823)
check = 8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = (-0x3fffffff-1);
result = (x * y);
check = 8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * (-0x3fffffff-1))
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-8 * y)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * (-0x3fffffff-1))
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -1073741825;
result = (x * y);
check = 8589934600;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * -1073741825)
check = 8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-8 * y)
check = 8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * -1073741825)
check = 8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -1073741826;
result = (x * y);
check = 8589934608;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * -1073741826)
check = 8589934608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-8 * y)
check = 8589934608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * -1073741826)
check = 8589934608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 2147483646;
result = (x * y);
check = -17179869168;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * 2147483646)
check = -17179869168
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-8 * y)
check = -17179869168
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * 2147483646)
check = -17179869168
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 2147483647;
result = (x * y);
check = -17179869176;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * 2147483647)
check = -17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-8 * y)
check = -17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * 2147483647)
check = -17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 2147483648;
result = (x * y);
check = -17179869184;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * 2147483648)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-8 * y)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * 2147483648)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 2147483649;
result = (x * y);
check = -17179869192;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * 2147483649)
check = -17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-8 * y)
check = -17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * 2147483649)
check = -17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -2147483647;
result = (x * y);
check = 17179869176;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * -2147483647)
check = 17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-8 * y)
check = 17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * -2147483647)
check = 17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -2147483648;
result = (x * y);
check = 17179869184;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * -2147483648)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-8 * y)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * -2147483648)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -2147483649;
result = (x * y);
check = 17179869192;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * -2147483649)
check = 17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-8 * y)
check = 17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * -2147483649)
check = 17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -2147483650;
result = (x * y);
check = 17179869200;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * -2147483650)
check = 17179869200
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-8 * y)
check = 17179869200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * -2147483650)
check = 17179869200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 4294967295;
result = (x * y);
check = -34359738360;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * 4294967295)
check = -34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-8 * y)
check = -34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * 4294967295)
check = -34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = 4294967296;
result = (x * y);
check = -34359738368;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * 4294967296)
check = -34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-8 * y)
check = -34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * 4294967296)
check = -34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -4294967295;
result = (x * y);
check = 34359738360;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * -4294967295)
check = 34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-8 * y)
check = 34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * -4294967295)
check = 34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
y = -4294967296;
result = (x * y);
check = 34359738368;
if(result != check) { fail(test, check, result); } ++test; 


result = (-8 * -4294967296)
check = 34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-8 * y)
check = 34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -8;
result = (x * -4294967296)
check = 34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741822 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 1;
result = (x * y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * 1)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741822 * y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * 1)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -1;
result = (x * y);
check = -1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * -1)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1073741822 * y)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * -1)
check = -1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 2;
result = (x * y);
check = 2147483644;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * 2)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1073741822 * y)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * 2)
check = 2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -2;
result = (x * y);
check = -2147483644;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * -2)
check = -2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (1073741822 * y)
check = -2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * -2)
check = -2147483644
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 3;
result = (x * y);
check = 3221225466;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * 3)
check = 3221225466
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1073741822 * y)
check = 3221225466
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * 3)
check = 3221225466
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -3;
result = (x * y);
check = -3221225466;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * -3)
check = -3221225466
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (1073741822 * y)
check = -3221225466
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * -3)
check = -3221225466
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 4;
result = (x * y);
check = 4294967288;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * 4)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1073741822 * y)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * 4)
check = 4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -4;
result = (x * y);
check = -4294967288;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * -4)
check = -4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (1073741822 * y)
check = -4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * -4)
check = -4294967288
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test14() {
var x;
var y;
var result;
var check;

x = 1073741822;
y = 8;
result = (x * y);
check = 8589934576;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * 8)
check = 8589934576
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1073741822 * y)
check = 8589934576
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * 8)
check = 8589934576
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -8;
result = (x * y);
check = -8589934576;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * -8)
check = -8589934576
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (1073741822 * y)
check = -8589934576
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * -8)
check = -8589934576
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 1073741822;
result = (x * y);
check = 1152921500311879684;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * 1073741822)
check = 1152921500311879684
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (1073741822 * y)
check = 1152921500311879684
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * 1073741822)
check = 1152921500311879684
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 1073741823;
result = (x * y);
check = 1152921501385621506;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * 1073741823)
check = 1152921501385621506
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (1073741822 * y)
check = 1152921501385621506
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * 1073741823)
check = 1152921501385621506
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 1073741824;
result = (x * y);
check = 1152921502459363328;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * 1073741824)
check = 1152921502459363328
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (1073741822 * y)
check = 1152921502459363328
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * 1073741824)
check = 1152921502459363328
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 1073741825;
result = (x * y);
check = 1152921503533105150;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * 1073741825)
check = 1152921503533105150
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (1073741822 * y)
check = 1152921503533105150
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * 1073741825)
check = 1152921503533105150
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -1073741823;
result = (x * y);
check = -1152921501385621506;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * -1073741823)
check = -1152921501385621506
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (1073741822 * y)
check = -1152921501385621506
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * -1073741823)
check = -1152921501385621506
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = (-0x3fffffff-1);
result = (x * y);
check = -1152921502459363328;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * (-0x3fffffff-1))
check = -1152921502459363328
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (1073741822 * y)
check = -1152921502459363328
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * (-0x3fffffff-1))
check = -1152921502459363328
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -1073741825;
result = (x * y);
check = -1152921503533105150;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * -1073741825)
check = -1152921503533105150
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (1073741822 * y)
check = -1152921503533105150
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * -1073741825)
check = -1152921503533105150
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -1073741826;
result = (x * y);
check = -1152921504606846972;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * -1073741826)
check = -1152921504606846972
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (1073741822 * y)
check = -1152921504606846972
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * -1073741826)
check = -1152921504606846972
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 2147483646;
result = (x * y);
check = 2305843002771243012;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * 2147483646)
check = 2305843002771243012
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (1073741822 * y)
check = 2305843002771243012
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * 2147483646)
check = 2305843002771243012
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 2147483647;
result = (x * y);
check = 2305843003844984834;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * 2147483647)
check = 2305843003844984834
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (1073741822 * y)
check = 2305843003844984834
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * 2147483647)
check = 2305843003844984834
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 2147483648;
result = (x * y);
check = 2305843004918726656;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * 2147483648)
check = 2305843004918726656
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (1073741822 * y)
check = 2305843004918726656
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * 2147483648)
check = 2305843004918726656
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 2147483649;
result = (x * y);
check = 2305843005992468478;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * 2147483649)
check = 2305843005992468478
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (1073741822 * y)
check = 2305843005992468478
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * 2147483649)
check = 2305843005992468478
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -2147483647;
result = (x * y);
check = -2305843003844984834;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * -2147483647)
check = -2305843003844984834
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (1073741822 * y)
check = -2305843003844984834
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * -2147483647)
check = -2305843003844984834
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -2147483648;
result = (x * y);
check = -2305843004918726656;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * -2147483648)
check = -2305843004918726656
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (1073741822 * y)
check = -2305843004918726656
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * -2147483648)
check = -2305843004918726656
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -2147483649;
result = (x * y);
check = -2305843005992468478;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * -2147483649)
check = -2305843005992468478
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (1073741822 * y)
check = -2305843005992468478
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * -2147483649)
check = -2305843005992468478
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -2147483650;
result = (x * y);
check = -2305843007066210300;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * -2147483650)
check = -2305843007066210300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (1073741822 * y)
check = -2305843007066210300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * -2147483650)
check = -2305843007066210300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 4294967295;
result = (x * y);
check = 4611686008763711490;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * 4294967295)
check = 4611686008763711490
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (1073741822 * y)
check = 4611686008763711490
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * 4294967295)
check = 4611686008763711490
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = 4294967296;
result = (x * y);
check = 4611686009837453312;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * 4294967296)
check = 4611686009837453312
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (1073741822 * y)
check = 4611686009837453312
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * 4294967296)
check = 4611686009837453312
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -4294967295;
result = (x * y);
check = -4611686008763711490;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * -4294967295)
check = -4611686008763711490
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (1073741822 * y)
check = -4611686008763711490
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * -4294967295)
check = -4611686008763711490
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
y = -4294967296;
result = (x * y);
check = -4611686009837453312;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741822 * -4294967296)
check = -4611686009837453312
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (1073741822 * y)
check = -4611686009837453312
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741822;
result = (x * -4294967296)
check = -4611686009837453312
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741823 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 1;
result = (x * y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * 1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741823 * y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * 1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -1;
result = (x * y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * -1)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1073741823 * y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * -1)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test15() {
var x;
var y;
var result;
var check;

x = 1073741823;
y = 2;
result = (x * y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * 2)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1073741823 * y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * 2)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -2;
result = (x * y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * -2)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (1073741823 * y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * -2)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 3;
result = (x * y);
check = 3221225469;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * 3)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1073741823 * y)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * 3)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -3;
result = (x * y);
check = -3221225469;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * -3)
check = -3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (1073741823 * y)
check = -3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * -3)
check = -3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 4;
result = (x * y);
check = 4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * 4)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1073741823 * y)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * 4)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -4;
result = (x * y);
check = -4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * -4)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (1073741823 * y)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * -4)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 8;
result = (x * y);
check = 8589934584;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * 8)
check = 8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1073741823 * y)
check = 8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * 8)
check = 8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -8;
result = (x * y);
check = -8589934584;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * -8)
check = -8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (1073741823 * y)
check = -8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * -8)
check = -8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 1073741822;
result = (x * y);
check = 1152921501385621506;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * 1073741822)
check = 1152921501385621506
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (1073741823 * y)
check = 1152921501385621506
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * 1073741822)
check = 1152921501385621506
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 1073741823;
result = (x * y);
check = 1152921502459363329;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * 1073741823)
check = 1152921502459363329
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (1073741823 * y)
check = 1152921502459363329
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * 1073741823)
check = 1152921502459363329
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 1073741824;
result = (x * y);
check = 1152921503533105152;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * 1073741824)
check = 1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (1073741823 * y)
check = 1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * 1073741824)
check = 1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 1073741825;
result = (x * y);
check = 1152921504606846975;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * 1073741825)
check = 1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (1073741823 * y)
check = 1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * 1073741825)
check = 1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -1073741823;
result = (x * y);
check = -1152921502459363329;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * -1073741823)
check = -1152921502459363329
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (1073741823 * y)
check = -1152921502459363329
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * -1073741823)
check = -1152921502459363329
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = (-0x3fffffff-1);
result = (x * y);
check = -1152921503533105152;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * (-0x3fffffff-1))
check = -1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (1073741823 * y)
check = -1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * (-0x3fffffff-1))
check = -1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -1073741825;
result = (x * y);
check = -1152921504606846975;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * -1073741825)
check = -1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (1073741823 * y)
check = -1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * -1073741825)
check = -1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -1073741826;
result = (x * y);
check = -1152921505680588798;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * -1073741826)
check = -1152921505680588798
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (1073741823 * y)
check = -1152921505680588798
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * -1073741826)
check = -1152921505680588798
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 2147483646;
result = (x * y);
check = 2305843004918726658;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * 2147483646)
check = 2305843004918726658
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (1073741823 * y)
check = 2305843004918726658
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * 2147483646)
check = 2305843004918726658
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 2147483647;
result = (x * y);
check = 2305843005992468481;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * 2147483647)
check = 2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (1073741823 * y)
check = 2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * 2147483647)
check = 2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 2147483648;
result = (x * y);
check = 2305843007066210304;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * 2147483648)
check = 2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (1073741823 * y)
check = 2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * 2147483648)
check = 2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 2147483649;
result = (x * y);
check = 2305843008139952127;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * 2147483649)
check = 2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (1073741823 * y)
check = 2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * 2147483649)
check = 2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -2147483647;
result = (x * y);
check = -2305843005992468481;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * -2147483647)
check = -2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (1073741823 * y)
check = -2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * -2147483647)
check = -2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -2147483648;
result = (x * y);
check = -2305843007066210304;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * -2147483648)
check = -2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (1073741823 * y)
check = -2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * -2147483648)
check = -2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -2147483649;
result = (x * y);
check = -2305843008139952127;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * -2147483649)
check = -2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (1073741823 * y)
check = -2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * -2147483649)
check = -2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -2147483650;
result = (x * y);
check = -2305843009213693950;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * -2147483650)
check = -2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (1073741823 * y)
check = -2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * -2147483650)
check = -2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = 4294967295;
result = (x * y);
check = 4611686013058678785;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * 4294967295)
check = 4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (1073741823 * y)
check = 4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * 4294967295)
check = 4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test16() {
var x;
var y;
var result;
var check;

x = 1073741823;
y = 4294967296;
result = (x * y);
check = 4611686014132420608;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * 4294967296)
check = 4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (1073741823 * y)
check = 4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * 4294967296)
check = 4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -4294967295;
result = (x * y);
check = -4611686013058678785;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * -4294967295)
check = -4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (1073741823 * y)
check = -4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * -4294967295)
check = -4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
y = -4294967296;
result = (x * y);
check = -4611686014132420608;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741823 * -4294967296)
check = -4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (1073741823 * y)
check = -4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741823;
result = (x * -4294967296)
check = -4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741824 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 1;
result = (x * y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * 1)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741824 * y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * 1)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -1;
result = (x * y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * -1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1073741824 * y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * -1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 2;
result = (x * y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * 2)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1073741824 * y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * 2)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -2;
result = (x * y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * -2)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (1073741824 * y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * -2)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 3;
result = (x * y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * 3)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1073741824 * y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * 3)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -3;
result = (x * y);
check = -3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * -3)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (1073741824 * y)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * -3)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 4;
result = (x * y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * 4)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1073741824 * y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * 4)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -4;
result = (x * y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * -4)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (1073741824 * y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * -4)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 8;
result = (x * y);
check = 8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * 8)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1073741824 * y)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * 8)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -8;
result = (x * y);
check = -8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * -8)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (1073741824 * y)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * -8)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 1073741822;
result = (x * y);
check = 1152921502459363328;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * 1073741822)
check = 1152921502459363328
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (1073741824 * y)
check = 1152921502459363328
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * 1073741822)
check = 1152921502459363328
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 1073741823;
result = (x * y);
check = 1152921503533105152;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * 1073741823)
check = 1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (1073741824 * y)
check = 1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * 1073741823)
check = 1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 1073741824;
result = (x * y);
check = 1152921504606846976;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * 1073741824)
check = 1152921504606846976
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (1073741824 * y)
check = 1152921504606846976
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * 1073741824)
check = 1152921504606846976
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 1073741825;
result = (x * y);
check = 1152921505680588800;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * 1073741825)
check = 1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (1073741824 * y)
check = 1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * 1073741825)
check = 1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -1073741823;
result = (x * y);
check = -1152921503533105152;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * -1073741823)
check = -1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (1073741824 * y)
check = -1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * -1073741823)
check = -1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = (-0x3fffffff-1);
result = (x * y);
check = -1152921504606846976;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * (-0x3fffffff-1))
check = -1152921504606846976
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (1073741824 * y)
check = -1152921504606846976
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * (-0x3fffffff-1))
check = -1152921504606846976
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -1073741825;
result = (x * y);
check = -1152921505680588800;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * -1073741825)
check = -1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (1073741824 * y)
check = -1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * -1073741825)
check = -1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -1073741826;
result = (x * y);
check = -1152921506754330624;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * -1073741826)
check = -1152921506754330624
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (1073741824 * y)
check = -1152921506754330624
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * -1073741826)
check = -1152921506754330624
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 2147483646;
result = (x * y);
check = 2305843007066210304;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * 2147483646)
check = 2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (1073741824 * y)
check = 2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * 2147483646)
check = 2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 2147483647;
result = (x * y);
check = 2305843008139952128;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * 2147483647)
check = 2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (1073741824 * y)
check = 2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * 2147483647)
check = 2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 2147483648;
result = (x * y);
check = 2305843009213693952;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * 2147483648)
check = 2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (1073741824 * y)
check = 2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * 2147483648)
check = 2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test17() {
var x;
var y;
var result;
var check;

x = 1073741824;
y = 2147483649;
result = (x * y);
check = 2305843010287435776;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * 2147483649)
check = 2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (1073741824 * y)
check = 2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * 2147483649)
check = 2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -2147483647;
result = (x * y);
check = -2305843008139952128;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * -2147483647)
check = -2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (1073741824 * y)
check = -2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * -2147483647)
check = -2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -2147483648;
result = (x * y);
check = -2305843009213693952;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * -2147483648)
check = -2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (1073741824 * y)
check = -2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * -2147483648)
check = -2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -2147483649;
result = (x * y);
check = -2305843010287435776;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * -2147483649)
check = -2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (1073741824 * y)
check = -2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * -2147483649)
check = -2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -2147483650;
result = (x * y);
check = -2305843011361177600;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * -2147483650)
check = -2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (1073741824 * y)
check = -2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * -2147483650)
check = -2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 4294967295;
result = (x * y);
check = 4611686017353646080;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * 4294967295)
check = 4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (1073741824 * y)
check = 4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * 4294967295)
check = 4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = 4294967296;
result = (x * y);
check = 4611686018427387904;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * 4294967296)
check = 4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (1073741824 * y)
check = 4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * 4294967296)
check = 4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -4294967295;
result = (x * y);
check = -4611686017353646080;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * -4294967295)
check = -4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (1073741824 * y)
check = -4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * -4294967295)
check = -4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
y = -4294967296;
result = (x * y);
check = -4611686018427387904;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741824 * -4294967296)
check = -4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (1073741824 * y)
check = -4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741824;
result = (x * -4294967296)
check = -4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (1073741825 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 1;
result = (x * y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * 1)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (1073741825 * y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * 1)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -1;
result = (x * y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * -1)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (1073741825 * y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * -1)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 2;
result = (x * y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * 2)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (1073741825 * y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * 2)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -2;
result = (x * y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * -2)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (1073741825 * y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * -2)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 3;
result = (x * y);
check = 3221225475;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * 3)
check = 3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (1073741825 * y)
check = 3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * 3)
check = 3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -3;
result = (x * y);
check = -3221225475;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * -3)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (1073741825 * y)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * -3)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 4;
result = (x * y);
check = 4294967300;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * 4)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (1073741825 * y)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * 4)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -4;
result = (x * y);
check = -4294967300;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * -4)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (1073741825 * y)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * -4)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 8;
result = (x * y);
check = 8589934600;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * 8)
check = 8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (1073741825 * y)
check = 8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * 8)
check = 8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -8;
result = (x * y);
check = -8589934600;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * -8)
check = -8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (1073741825 * y)
check = -8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * -8)
check = -8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 1073741822;
result = (x * y);
check = 1152921503533105150;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * 1073741822)
check = 1152921503533105150
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (1073741825 * y)
check = 1152921503533105150
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * 1073741822)
check = 1152921503533105150
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 1073741823;
result = (x * y);
check = 1152921504606846975;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * 1073741823)
check = 1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (1073741825 * y)
check = 1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * 1073741823)
check = 1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 1073741824;
result = (x * y);
check = 1152921505680588800;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * 1073741824)
check = 1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (1073741825 * y)
check = 1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * 1073741824)
check = 1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 1073741825;
result = (x * y);
check = 1152921506754330625;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * 1073741825)
check = 1152921506754330625
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (1073741825 * y)
check = 1152921506754330625
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * 1073741825)
check = 1152921506754330625
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -1073741823;
result = (x * y);
check = -1152921504606846975;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * -1073741823)
check = -1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (1073741825 * y)
check = -1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * -1073741823)
check = -1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test18() {
var x;
var y;
var result;
var check;

x = 1073741825;
y = (-0x3fffffff-1);
result = (x * y);
check = -1152921505680588800;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * (-0x3fffffff-1))
check = -1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (1073741825 * y)
check = -1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * (-0x3fffffff-1))
check = -1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -1073741825;
result = (x * y);
check = -1152921506754330625;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * -1073741825)
check = -1152921506754330625
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (1073741825 * y)
check = -1152921506754330625
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * -1073741825)
check = -1152921506754330625
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -1073741826;
result = (x * y);
check = -1152921507828072450;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * -1073741826)
check = -1152921507828072450
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (1073741825 * y)
check = -1152921507828072450
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * -1073741826)
check = -1152921507828072450
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 2147483646;
result = (x * y);
check = 2305843009213693950;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * 2147483646)
check = 2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (1073741825 * y)
check = 2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * 2147483646)
check = 2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 2147483647;
result = (x * y);
check = 2305843010287435775;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * 2147483647)
check = 2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (1073741825 * y)
check = 2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * 2147483647)
check = 2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 2147483648;
result = (x * y);
check = 2305843011361177600;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * 2147483648)
check = 2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (1073741825 * y)
check = 2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * 2147483648)
check = 2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 2147483649;
result = (x * y);
check = 2305843012434919425;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * 2147483649)
check = 2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (1073741825 * y)
check = 2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * 2147483649)
check = 2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -2147483647;
result = (x * y);
check = -2305843010287435775;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * -2147483647)
check = -2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (1073741825 * y)
check = -2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * -2147483647)
check = -2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -2147483648;
result = (x * y);
check = -2305843011361177600;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * -2147483648)
check = -2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (1073741825 * y)
check = -2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * -2147483648)
check = -2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -2147483649;
result = (x * y);
check = -2305843012434919425;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * -2147483649)
check = -2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (1073741825 * y)
check = -2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * -2147483649)
check = -2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -2147483650;
result = (x * y);
check = -2305843013508661250;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * -2147483650)
check = -2305843013508661250
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (1073741825 * y)
check = -2305843013508661250
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * -2147483650)
check = -2305843013508661250
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 4294967295;
result = (x * y);
check = 4611686021648613375;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * 4294967295)
check = 4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (1073741825 * y)
check = 4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * 4294967295)
check = 4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = 4294967296;
result = (x * y);
check = 4611686022722355200;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * 4294967296)
check = 4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (1073741825 * y)
check = 4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * 4294967296)
check = 4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -4294967295;
result = (x * y);
check = -4611686021648613375;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * -4294967295)
check = -4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (1073741825 * y)
check = -4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * -4294967295)
check = -4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
y = -4294967296;
result = (x * y);
check = -4611686022722355200;
if(result != check) { fail(test, check, result); } ++test; 


result = (1073741825 * -4294967296)
check = -4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (1073741825 * y)
check = -4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 1073741825;
result = (x * -4294967296)
check = -4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741823 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 1;
result = (x * y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * 1)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1073741823 * y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * 1)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -1;
result = (x * y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * -1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-1073741823 * y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * -1)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 2;
result = (x * y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * 2)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-1073741823 * y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * 2)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -2;
result = (x * y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * -2)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-1073741823 * y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * -2)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 3;
result = (x * y);
check = -3221225469;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * 3)
check = -3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-1073741823 * y)
check = -3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * 3)
check = -3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -3;
result = (x * y);
check = 3221225469;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * -3)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-1073741823 * y)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * -3)
check = 3221225469
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 4;
result = (x * y);
check = -4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * 4)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-1073741823 * y)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * 4)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -4;
result = (x * y);
check = 4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * -4)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-1073741823 * y)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * -4)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 8;
result = (x * y);
check = -8589934584;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * 8)
check = -8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-1073741823 * y)
check = -8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * 8)
check = -8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test19() {
var x;
var y;
var result;
var check;

x = -1073741823;
y = -8;
result = (x * y);
check = 8589934584;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * -8)
check = 8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-1073741823 * y)
check = 8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * -8)
check = 8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 1073741822;
result = (x * y);
check = -1152921501385621506;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * 1073741822)
check = -1152921501385621506
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-1073741823 * y)
check = -1152921501385621506
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * 1073741822)
check = -1152921501385621506
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 1073741823;
result = (x * y);
check = -1152921502459363329;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * 1073741823)
check = -1152921502459363329
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-1073741823 * y)
check = -1152921502459363329
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * 1073741823)
check = -1152921502459363329
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 1073741824;
result = (x * y);
check = -1152921503533105152;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * 1073741824)
check = -1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-1073741823 * y)
check = -1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * 1073741824)
check = -1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 1073741825;
result = (x * y);
check = -1152921504606846975;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * 1073741825)
check = -1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-1073741823 * y)
check = -1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * 1073741825)
check = -1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -1073741823;
result = (x * y);
check = 1152921502459363329;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * -1073741823)
check = 1152921502459363329
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-1073741823 * y)
check = 1152921502459363329
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * -1073741823)
check = 1152921502459363329
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = (-0x3fffffff-1);
result = (x * y);
check = 1152921503533105152;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * (-0x3fffffff-1))
check = 1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-1073741823 * y)
check = 1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * (-0x3fffffff-1))
check = 1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -1073741825;
result = (x * y);
check = 1152921504606846975;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * -1073741825)
check = 1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-1073741823 * y)
check = 1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * -1073741825)
check = 1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -1073741826;
result = (x * y);
check = 1152921505680588798;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * -1073741826)
check = 1152921505680588798
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-1073741823 * y)
check = 1152921505680588798
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * -1073741826)
check = 1152921505680588798
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 2147483646;
result = (x * y);
check = -2305843004918726658;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * 2147483646)
check = -2305843004918726658
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-1073741823 * y)
check = -2305843004918726658
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * 2147483646)
check = -2305843004918726658
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 2147483647;
result = (x * y);
check = -2305843005992468481;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * 2147483647)
check = -2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-1073741823 * y)
check = -2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * 2147483647)
check = -2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 2147483648;
result = (x * y);
check = -2305843007066210304;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * 2147483648)
check = -2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-1073741823 * y)
check = -2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * 2147483648)
check = -2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 2147483649;
result = (x * y);
check = -2305843008139952127;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * 2147483649)
check = -2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-1073741823 * y)
check = -2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * 2147483649)
check = -2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -2147483647;
result = (x * y);
check = 2305843005992468481;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * -2147483647)
check = 2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-1073741823 * y)
check = 2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * -2147483647)
check = 2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -2147483648;
result = (x * y);
check = 2305843007066210304;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * -2147483648)
check = 2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-1073741823 * y)
check = 2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * -2147483648)
check = 2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -2147483649;
result = (x * y);
check = 2305843008139952127;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * -2147483649)
check = 2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-1073741823 * y)
check = 2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * -2147483649)
check = 2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -2147483650;
result = (x * y);
check = 2305843009213693950;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * -2147483650)
check = 2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-1073741823 * y)
check = 2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * -2147483650)
check = 2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 4294967295;
result = (x * y);
check = -4611686013058678785;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * 4294967295)
check = -4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-1073741823 * y)
check = -4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * 4294967295)
check = -4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = 4294967296;
result = (x * y);
check = -4611686014132420608;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * 4294967296)
check = -4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-1073741823 * y)
check = -4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * 4294967296)
check = -4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -4294967295;
result = (x * y);
check = 4611686013058678785;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * -4294967295)
check = 4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-1073741823 * y)
check = 4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * -4294967295)
check = 4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
y = -4294967296;
result = (x * y);
check = 4611686014132420608;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741823 * -4294967296)
check = 4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-1073741823 * y)
check = 4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741823;
result = (x * -4294967296)
check = 4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = ((-0x3fffffff-1) * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 1;
result = (x * y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * 1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = ((-0x3fffffff-1) * y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * 1)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -1;
result = (x * y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * -1)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = ((-0x3fffffff-1) * y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * -1)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 2;
result = (x * y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * 2)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = ((-0x3fffffff-1) * y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * 2)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test20() {
var x;
var y;
var result;
var check;

x = (-0x3fffffff-1);
y = -2;
result = (x * y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * -2)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = ((-0x3fffffff-1) * y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * -2)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 3;
result = (x * y);
check = -3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * 3)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = ((-0x3fffffff-1) * y)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * 3)
check = -3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -3;
result = (x * y);
check = 3221225472;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * -3)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = ((-0x3fffffff-1) * y)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * -3)
check = 3221225472
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 4;
result = (x * y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * 4)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = ((-0x3fffffff-1) * y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * 4)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -4;
result = (x * y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * -4)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = ((-0x3fffffff-1) * y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * -4)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 8;
result = (x * y);
check = -8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * 8)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = ((-0x3fffffff-1) * y)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * 8)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -8;
result = (x * y);
check = 8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * -8)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = ((-0x3fffffff-1) * y)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * -8)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 1073741822;
result = (x * y);
check = -1152921502459363328;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * 1073741822)
check = -1152921502459363328
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = ((-0x3fffffff-1) * y)
check = -1152921502459363328
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * 1073741822)
check = -1152921502459363328
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 1073741823;
result = (x * y);
check = -1152921503533105152;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * 1073741823)
check = -1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = ((-0x3fffffff-1) * y)
check = -1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * 1073741823)
check = -1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 1073741824;
result = (x * y);
check = -1152921504606846976;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * 1073741824)
check = -1152921504606846976
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = ((-0x3fffffff-1) * y)
check = -1152921504606846976
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * 1073741824)
check = -1152921504606846976
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 1073741825;
result = (x * y);
check = -1152921505680588800;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * 1073741825)
check = -1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = ((-0x3fffffff-1) * y)
check = -1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * 1073741825)
check = -1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -1073741823;
result = (x * y);
check = 1152921503533105152;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * -1073741823)
check = 1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = ((-0x3fffffff-1) * y)
check = 1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * -1073741823)
check = 1152921503533105152
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = (-0x3fffffff-1);
result = (x * y);
check = 1152921504606846976;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * (-0x3fffffff-1))
check = 1152921504606846976
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = ((-0x3fffffff-1) * y)
check = 1152921504606846976
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * (-0x3fffffff-1))
check = 1152921504606846976
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -1073741825;
result = (x * y);
check = 1152921505680588800;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * -1073741825)
check = 1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = ((-0x3fffffff-1) * y)
check = 1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * -1073741825)
check = 1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -1073741826;
result = (x * y);
check = 1152921506754330624;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * -1073741826)
check = 1152921506754330624
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = ((-0x3fffffff-1) * y)
check = 1152921506754330624
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * -1073741826)
check = 1152921506754330624
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 2147483646;
result = (x * y);
check = -2305843007066210304;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * 2147483646)
check = -2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = ((-0x3fffffff-1) * y)
check = -2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * 2147483646)
check = -2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 2147483647;
result = (x * y);
check = -2305843008139952128;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * 2147483647)
check = -2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = ((-0x3fffffff-1) * y)
check = -2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * 2147483647)
check = -2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 2147483648;
result = (x * y);
check = -2305843009213693952;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * 2147483648)
check = -2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = ((-0x3fffffff-1) * y)
check = -2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * 2147483648)
check = -2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 2147483649;
result = (x * y);
check = -2305843010287435776;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * 2147483649)
check = -2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = ((-0x3fffffff-1) * y)
check = -2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * 2147483649)
check = -2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -2147483647;
result = (x * y);
check = 2305843008139952128;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * -2147483647)
check = 2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = ((-0x3fffffff-1) * y)
check = 2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * -2147483647)
check = 2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -2147483648;
result = (x * y);
check = 2305843009213693952;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * -2147483648)
check = 2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = ((-0x3fffffff-1) * y)
check = 2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * -2147483648)
check = 2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -2147483649;
result = (x * y);
check = 2305843010287435776;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * -2147483649)
check = 2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = ((-0x3fffffff-1) * y)
check = 2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * -2147483649)
check = 2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -2147483650;
result = (x * y);
check = 2305843011361177600;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * -2147483650)
check = 2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = ((-0x3fffffff-1) * y)
check = 2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * -2147483650)
check = 2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 4294967295;
result = (x * y);
check = -4611686017353646080;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * 4294967295)
check = -4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = ((-0x3fffffff-1) * y)
check = -4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * 4294967295)
check = -4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = 4294967296;
result = (x * y);
check = -4611686018427387904;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * 4294967296)
check = -4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = ((-0x3fffffff-1) * y)
check = -4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * 4294967296)
check = -4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test21() {
var x;
var y;
var result;
var check;

x = (-0x3fffffff-1);
y = -4294967295;
result = (x * y);
check = 4611686017353646080;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * -4294967295)
check = 4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = ((-0x3fffffff-1) * y)
check = 4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * -4294967295)
check = 4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
y = -4294967296;
result = (x * y);
check = 4611686018427387904;
if(result != check) { fail(test, check, result); } ++test; 


result = ((-0x3fffffff-1) * -4294967296)
check = 4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = ((-0x3fffffff-1) * y)
check = 4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = (-0x3fffffff-1);
result = (x * -4294967296)
check = 4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741825 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 1;
result = (x * y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * 1)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1073741825 * y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * 1)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -1;
result = (x * y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * -1)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-1073741825 * y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * -1)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 2;
result = (x * y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * 2)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-1073741825 * y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * 2)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -2;
result = (x * y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * -2)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-1073741825 * y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * -2)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 3;
result = (x * y);
check = -3221225475;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * 3)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-1073741825 * y)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * 3)
check = -3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -3;
result = (x * y);
check = 3221225475;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * -3)
check = 3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-1073741825 * y)
check = 3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * -3)
check = 3221225475
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 4;
result = (x * y);
check = -4294967300;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * 4)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-1073741825 * y)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * 4)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -4;
result = (x * y);
check = 4294967300;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * -4)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-1073741825 * y)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * -4)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 8;
result = (x * y);
check = -8589934600;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * 8)
check = -8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-1073741825 * y)
check = -8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * 8)
check = -8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -8;
result = (x * y);
check = 8589934600;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * -8)
check = 8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-1073741825 * y)
check = 8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * -8)
check = 8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 1073741822;
result = (x * y);
check = -1152921503533105150;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * 1073741822)
check = -1152921503533105150
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-1073741825 * y)
check = -1152921503533105150
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * 1073741822)
check = -1152921503533105150
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 1073741823;
result = (x * y);
check = -1152921504606846975;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * 1073741823)
check = -1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-1073741825 * y)
check = -1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * 1073741823)
check = -1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 1073741824;
result = (x * y);
check = -1152921505680588800;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * 1073741824)
check = -1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-1073741825 * y)
check = -1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * 1073741824)
check = -1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 1073741825;
result = (x * y);
check = -1152921506754330625;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * 1073741825)
check = -1152921506754330625
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-1073741825 * y)
check = -1152921506754330625
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * 1073741825)
check = -1152921506754330625
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -1073741823;
result = (x * y);
check = 1152921504606846975;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * -1073741823)
check = 1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-1073741825 * y)
check = 1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * -1073741823)
check = 1152921504606846975
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = (-0x3fffffff-1);
result = (x * y);
check = 1152921505680588800;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * (-0x3fffffff-1))
check = 1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-1073741825 * y)
check = 1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * (-0x3fffffff-1))
check = 1152921505680588800
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -1073741825;
result = (x * y);
check = 1152921506754330625;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * -1073741825)
check = 1152921506754330625
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-1073741825 * y)
check = 1152921506754330625
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * -1073741825)
check = 1152921506754330625
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -1073741826;
result = (x * y);
check = 1152921507828072450;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * -1073741826)
check = 1152921507828072450
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-1073741825 * y)
check = 1152921507828072450
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * -1073741826)
check = 1152921507828072450
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 2147483646;
result = (x * y);
check = -2305843009213693950;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * 2147483646)
check = -2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-1073741825 * y)
check = -2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * 2147483646)
check = -2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 2147483647;
result = (x * y);
check = -2305843010287435775;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * 2147483647)
check = -2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-1073741825 * y)
check = -2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * 2147483647)
check = -2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 2147483648;
result = (x * y);
check = -2305843011361177600;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * 2147483648)
check = -2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-1073741825 * y)
check = -2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * 2147483648)
check = -2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 2147483649;
result = (x * y);
check = -2305843012434919425;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * 2147483649)
check = -2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-1073741825 * y)
check = -2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * 2147483649)
check = -2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test22() {
var x;
var y;
var result;
var check;

x = -1073741825;
y = -2147483647;
result = (x * y);
check = 2305843010287435775;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * -2147483647)
check = 2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-1073741825 * y)
check = 2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * -2147483647)
check = 2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -2147483648;
result = (x * y);
check = 2305843011361177600;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * -2147483648)
check = 2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-1073741825 * y)
check = 2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * -2147483648)
check = 2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -2147483649;
result = (x * y);
check = 2305843012434919425;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * -2147483649)
check = 2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-1073741825 * y)
check = 2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * -2147483649)
check = 2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -2147483650;
result = (x * y);
check = 2305843013508661250;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * -2147483650)
check = 2305843013508661250
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-1073741825 * y)
check = 2305843013508661250
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * -2147483650)
check = 2305843013508661250
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 4294967295;
result = (x * y);
check = -4611686021648613375;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * 4294967295)
check = -4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-1073741825 * y)
check = -4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * 4294967295)
check = -4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = 4294967296;
result = (x * y);
check = -4611686022722355200;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * 4294967296)
check = -4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-1073741825 * y)
check = -4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * 4294967296)
check = -4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -4294967295;
result = (x * y);
check = 4611686021648613375;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * -4294967295)
check = 4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-1073741825 * y)
check = 4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * -4294967295)
check = 4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
y = -4294967296;
result = (x * y);
check = 4611686022722355200;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741825 * -4294967296)
check = 4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-1073741825 * y)
check = 4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741825;
result = (x * -4294967296)
check = 4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-1073741826 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 1;
result = (x * y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * 1)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-1073741826 * y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * 1)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -1;
result = (x * y);
check = 1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * -1)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-1073741826 * y)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * -1)
check = 1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 2;
result = (x * y);
check = -2147483652;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * 2)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-1073741826 * y)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * 2)
check = -2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -2;
result = (x * y);
check = 2147483652;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * -2)
check = 2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-1073741826 * y)
check = 2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * -2)
check = 2147483652
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 3;
result = (x * y);
check = -3221225478;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * 3)
check = -3221225478
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-1073741826 * y)
check = -3221225478
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * 3)
check = -3221225478
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -3;
result = (x * y);
check = 3221225478;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * -3)
check = 3221225478
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-1073741826 * y)
check = 3221225478
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * -3)
check = 3221225478
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 4;
result = (x * y);
check = -4294967304;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * 4)
check = -4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-1073741826 * y)
check = -4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * 4)
check = -4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -4;
result = (x * y);
check = 4294967304;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * -4)
check = 4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-1073741826 * y)
check = 4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * -4)
check = 4294967304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 8;
result = (x * y);
check = -8589934608;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * 8)
check = -8589934608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-1073741826 * y)
check = -8589934608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * 8)
check = -8589934608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -8;
result = (x * y);
check = 8589934608;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * -8)
check = 8589934608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-1073741826 * y)
check = 8589934608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * -8)
check = 8589934608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 1073741822;
result = (x * y);
check = -1152921504606846972;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * 1073741822)
check = -1152921504606846972
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-1073741826 * y)
check = -1152921504606846972
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * 1073741822)
check = -1152921504606846972
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 1073741823;
result = (x * y);
check = -1152921505680588798;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * 1073741823)
check = -1152921505680588798
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-1073741826 * y)
check = -1152921505680588798
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * 1073741823)
check = -1152921505680588798
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 1073741824;
result = (x * y);
check = -1152921506754330624;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * 1073741824)
check = -1152921506754330624
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-1073741826 * y)
check = -1152921506754330624
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * 1073741824)
check = -1152921506754330624
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 1073741825;
result = (x * y);
check = -1152921507828072450;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * 1073741825)
check = -1152921507828072450
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-1073741826 * y)
check = -1152921507828072450
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * 1073741825)
check = -1152921507828072450
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -1073741823;
result = (x * y);
check = 1152921505680588798;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * -1073741823)
check = 1152921505680588798
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-1073741826 * y)
check = 1152921505680588798
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * -1073741823)
check = 1152921505680588798
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = (-0x3fffffff-1);
result = (x * y);
check = 1152921506754330624;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * (-0x3fffffff-1))
check = 1152921506754330624
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-1073741826 * y)
check = 1152921506754330624
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * (-0x3fffffff-1))
check = 1152921506754330624
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test23() {
var x;
var y;
var result;
var check;

x = -1073741826;
y = -1073741825;
result = (x * y);
check = 1152921507828072450;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * -1073741825)
check = 1152921507828072450
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-1073741826 * y)
check = 1152921507828072450
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * -1073741825)
check = 1152921507828072450
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -1073741826;
result = (x * y);
check = 1152921508901814276;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * -1073741826)
check = 1152921508901814276
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-1073741826 * y)
check = 1152921508901814276
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * -1073741826)
check = 1152921508901814276
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 2147483646;
result = (x * y);
check = -2305843011361177596;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * 2147483646)
check = -2305843011361177596
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-1073741826 * y)
check = -2305843011361177596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * 2147483646)
check = -2305843011361177596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 2147483647;
result = (x * y);
check = -2305843012434919422;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * 2147483647)
check = -2305843012434919422
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-1073741826 * y)
check = -2305843012434919422
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * 2147483647)
check = -2305843012434919422
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 2147483648;
result = (x * y);
check = -2305843013508661248;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * 2147483648)
check = -2305843013508661248
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-1073741826 * y)
check = -2305843013508661248
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * 2147483648)
check = -2305843013508661248
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 2147483649;
result = (x * y);
check = -2305843014582403074;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * 2147483649)
check = -2305843014582403074
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-1073741826 * y)
check = -2305843014582403074
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * 2147483649)
check = -2305843014582403074
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -2147483647;
result = (x * y);
check = 2305843012434919422;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * -2147483647)
check = 2305843012434919422
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-1073741826 * y)
check = 2305843012434919422
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * -2147483647)
check = 2305843012434919422
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -2147483648;
result = (x * y);
check = 2305843013508661248;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * -2147483648)
check = 2305843013508661248
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-1073741826 * y)
check = 2305843013508661248
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * -2147483648)
check = 2305843013508661248
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -2147483649;
result = (x * y);
check = 2305843014582403074;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * -2147483649)
check = 2305843014582403074
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-1073741826 * y)
check = 2305843014582403074
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * -2147483649)
check = 2305843014582403074
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -2147483650;
result = (x * y);
check = 2305843015656144900;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * -2147483650)
check = 2305843015656144900
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-1073741826 * y)
check = 2305843015656144900
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * -2147483650)
check = 2305843015656144900
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 4294967295;
result = (x * y);
check = -4611686025943580670;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * 4294967295)
check = -4611686025943580670
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-1073741826 * y)
check = -4611686025943580670
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * 4294967295)
check = -4611686025943580670
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = 4294967296;
result = (x * y);
check = -4611686027017322496;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * 4294967296)
check = -4611686027017322496
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-1073741826 * y)
check = -4611686027017322496
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * 4294967296)
check = -4611686027017322496
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -4294967295;
result = (x * y);
check = 4611686025943580670;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * -4294967295)
check = 4611686025943580670
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-1073741826 * y)
check = 4611686025943580670
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * -4294967295)
check = 4611686025943580670
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
y = -4294967296;
result = (x * y);
check = 4611686027017322496;
if(result != check) { fail(test, check, result); } ++test; 


result = (-1073741826 * -4294967296)
check = 4611686027017322496
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-1073741826 * y)
check = 4611686027017322496
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -1073741826;
result = (x * -4294967296)
check = 4611686027017322496
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483646 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 1;
result = (x * y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * 1)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483646 * y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * 1)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -1;
result = (x * y);
check = -2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * -1)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2147483646 * y)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * -1)
check = -2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 2;
result = (x * y);
check = 4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * 2)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2147483646 * y)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * 2)
check = 4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -2;
result = (x * y);
check = -4294967292;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * -2)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (2147483646 * y)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * -2)
check = -4294967292
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 3;
result = (x * y);
check = 6442450938;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * 3)
check = 6442450938
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2147483646 * y)
check = 6442450938
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * 3)
check = 6442450938
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -3;
result = (x * y);
check = -6442450938;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * -3)
check = -6442450938
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (2147483646 * y)
check = -6442450938
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * -3)
check = -6442450938
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 4;
result = (x * y);
check = 8589934584;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * 4)
check = 8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2147483646 * y)
check = 8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * 4)
check = 8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -4;
result = (x * y);
check = -8589934584;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * -4)
check = -8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (2147483646 * y)
check = -8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * -4)
check = -8589934584
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 8;
result = (x * y);
check = 17179869168;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * 8)
check = 17179869168
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2147483646 * y)
check = 17179869168
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * 8)
check = 17179869168
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -8;
result = (x * y);
check = -17179869168;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * -8)
check = -17179869168
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (2147483646 * y)
check = -17179869168
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * -8)
check = -17179869168
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test24() {
var x;
var y;
var result;
var check;

x = 2147483646;
y = 1073741822;
result = (x * y);
check = 2305843002771243012;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * 1073741822)
check = 2305843002771243012
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (2147483646 * y)
check = 2305843002771243012
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * 1073741822)
check = 2305843002771243012
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 1073741823;
result = (x * y);
check = 2305843004918726658;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * 1073741823)
check = 2305843004918726658
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (2147483646 * y)
check = 2305843004918726658
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * 1073741823)
check = 2305843004918726658
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 1073741824;
result = (x * y);
check = 2305843007066210304;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * 1073741824)
check = 2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (2147483646 * y)
check = 2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * 1073741824)
check = 2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 1073741825;
result = (x * y);
check = 2305843009213693950;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * 1073741825)
check = 2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (2147483646 * y)
check = 2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * 1073741825)
check = 2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -1073741823;
result = (x * y);
check = -2305843004918726658;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * -1073741823)
check = -2305843004918726658
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (2147483646 * y)
check = -2305843004918726658
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * -1073741823)
check = -2305843004918726658
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = (-0x3fffffff-1);
result = (x * y);
check = -2305843007066210304;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * (-0x3fffffff-1))
check = -2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (2147483646 * y)
check = -2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * (-0x3fffffff-1))
check = -2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -1073741825;
result = (x * y);
check = -2305843009213693950;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * -1073741825)
check = -2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (2147483646 * y)
check = -2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * -1073741825)
check = -2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -1073741826;
result = (x * y);
check = -2305843011361177596;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * -1073741826)
check = -2305843011361177596
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (2147483646 * y)
check = -2305843011361177596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * -1073741826)
check = -2305843011361177596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 2147483646;
result = (x * y);
check = 4611686009837453316;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * 2147483646)
check = 4611686009837453316
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (2147483646 * y)
check = 4611686009837453316
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * 2147483646)
check = 4611686009837453316
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 2147483647;
result = (x * y);
check = 4611686011984936962;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * 2147483647)
check = 4611686011984936962
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (2147483646 * y)
check = 4611686011984936962
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * 2147483647)
check = 4611686011984936962
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 2147483648;
result = (x * y);
check = 4611686014132420608;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * 2147483648)
check = 4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (2147483646 * y)
check = 4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * 2147483648)
check = 4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 2147483649;
result = (x * y);
check = 4611686016279904254;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * 2147483649)
check = 4611686016279904254
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (2147483646 * y)
check = 4611686016279904254
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * 2147483649)
check = 4611686016279904254
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -2147483647;
result = (x * y);
check = -4611686011984936962;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * -2147483647)
check = -4611686011984936962
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (2147483646 * y)
check = -4611686011984936962
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * -2147483647)
check = -4611686011984936962
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -2147483648;
result = (x * y);
check = -4611686014132420608;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * -2147483648)
check = -4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (2147483646 * y)
check = -4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * -2147483648)
check = -4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -2147483649;
result = (x * y);
check = -4611686016279904254;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * -2147483649)
check = -4611686016279904254
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (2147483646 * y)
check = -4611686016279904254
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * -2147483649)
check = -4611686016279904254
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -2147483650;
result = (x * y);
check = -4611686018427387900;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * -2147483650)
check = -4611686018427387900
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (2147483646 * y)
check = -4611686018427387900
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * -2147483650)
check = -4611686018427387900
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 4294967295;
result = (x * y);
check = 9223372026117357570;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * 4294967295)
check = 9223372026117357570
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (2147483646 * y)
check = 9223372026117357570
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * 4294967295)
check = 9223372026117357570
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = 4294967296;
result = (x * y);
check = 9223372028264841216;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * 4294967296)
check = 9223372028264841216
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (2147483646 * y)
check = 9223372028264841216
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * 4294967296)
check = 9223372028264841216
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -4294967295;
result = (x * y);
check = -9223372026117357570;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * -4294967295)
check = -9223372026117357570
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (2147483646 * y)
check = -9223372026117357570
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * -4294967295)
check = -9223372026117357570
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
y = -4294967296;
result = (x * y);
check = -9223372028264841216;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483646 * -4294967296)
check = -9223372028264841216
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (2147483646 * y)
check = -9223372028264841216
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483646;
result = (x * -4294967296)
check = -9223372028264841216
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483647 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 1;
result = (x * y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * 1)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483647 * y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * 1)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -1;
result = (x * y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * -1)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2147483647 * y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * -1)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 2;
result = (x * y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * 2)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2147483647 * y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * 2)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -2;
result = (x * y);
check = -4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * -2)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (2147483647 * y)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * -2)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test25() {
var x;
var y;
var result;
var check;

x = 2147483647;
y = 3;
result = (x * y);
check = 6442450941;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * 3)
check = 6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2147483647 * y)
check = 6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * 3)
check = 6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -3;
result = (x * y);
check = -6442450941;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * -3)
check = -6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (2147483647 * y)
check = -6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * -3)
check = -6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 4;
result = (x * y);
check = 8589934588;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * 4)
check = 8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2147483647 * y)
check = 8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * 4)
check = 8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -4;
result = (x * y);
check = -8589934588;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * -4)
check = -8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (2147483647 * y)
check = -8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * -4)
check = -8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 8;
result = (x * y);
check = 17179869176;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * 8)
check = 17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2147483647 * y)
check = 17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * 8)
check = 17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -8;
result = (x * y);
check = -17179869176;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * -8)
check = -17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (2147483647 * y)
check = -17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * -8)
check = -17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 1073741822;
result = (x * y);
check = 2305843003844984834;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * 1073741822)
check = 2305843003844984834
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (2147483647 * y)
check = 2305843003844984834
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * 1073741822)
check = 2305843003844984834
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 1073741823;
result = (x * y);
check = 2305843005992468481;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * 1073741823)
check = 2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (2147483647 * y)
check = 2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * 1073741823)
check = 2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 1073741824;
result = (x * y);
check = 2305843008139952128;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * 1073741824)
check = 2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (2147483647 * y)
check = 2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * 1073741824)
check = 2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 1073741825;
result = (x * y);
check = 2305843010287435775;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * 1073741825)
check = 2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (2147483647 * y)
check = 2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * 1073741825)
check = 2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -1073741823;
result = (x * y);
check = -2305843005992468481;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * -1073741823)
check = -2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (2147483647 * y)
check = -2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * -1073741823)
check = -2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = (-0x3fffffff-1);
result = (x * y);
check = -2305843008139952128;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * (-0x3fffffff-1))
check = -2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (2147483647 * y)
check = -2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * (-0x3fffffff-1))
check = -2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -1073741825;
result = (x * y);
check = -2305843010287435775;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * -1073741825)
check = -2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (2147483647 * y)
check = -2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * -1073741825)
check = -2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -1073741826;
result = (x * y);
check = -2305843012434919422;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * -1073741826)
check = -2305843012434919422
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (2147483647 * y)
check = -2305843012434919422
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * -1073741826)
check = -2305843012434919422
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 2147483646;
result = (x * y);
check = 4611686011984936962;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * 2147483646)
check = 4611686011984936962
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (2147483647 * y)
check = 4611686011984936962
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * 2147483646)
check = 4611686011984936962
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 2147483647;
result = (x * y);
check = 4611686014132420609;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * 2147483647)
check = 4611686014132420609
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (2147483647 * y)
check = 4611686014132420609
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * 2147483647)
check = 4611686014132420609
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 2147483648;
result = (x * y);
check = 4611686016279904256;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * 2147483648)
check = 4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (2147483647 * y)
check = 4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * 2147483648)
check = 4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 2147483649;
result = (x * y);
check = 4611686018427387903;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * 2147483649)
check = 4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (2147483647 * y)
check = 4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * 2147483649)
check = 4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -2147483647;
result = (x * y);
check = -4611686014132420609;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * -2147483647)
check = -4611686014132420609
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (2147483647 * y)
check = -4611686014132420609
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * -2147483647)
check = -4611686014132420609
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -2147483648;
result = (x * y);
check = -4611686016279904256;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * -2147483648)
check = -4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (2147483647 * y)
check = -4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * -2147483648)
check = -4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -2147483649;
result = (x * y);
check = -4611686018427387903;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * -2147483649)
check = -4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (2147483647 * y)
check = -4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * -2147483649)
check = -4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -2147483650;
result = (x * y);
check = -4611686020574871550;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * -2147483650)
check = -4611686020574871550
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (2147483647 * y)
check = -4611686020574871550
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * -2147483650)
check = -4611686020574871550
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 4294967295;
result = (x * y);
check = 9223372030412324865;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * 4294967295)
check = 9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (2147483647 * y)
check = 9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * 4294967295)
check = 9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = 4294967296;
result = (x * y);
check = 9223372032559808512;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * 4294967296)
check = 9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (2147483647 * y)
check = 9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * 4294967296)
check = 9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
y = -4294967295;
result = (x * y);
check = -9223372030412324865;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * -4294967295)
check = -9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (2147483647 * y)
check = -9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * -4294967295)
check = -9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test26() {
var x;
var y;
var result;
var check;

x = 2147483647;
y = -4294967296;
result = (x * y);
check = -9223372032559808512;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483647 * -4294967296)
check = -9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (2147483647 * y)
check = -9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483647;
result = (x * -4294967296)
check = -9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483648 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 1;
result = (x * y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * 1)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483648 * y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * 1)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -1;
result = (x * y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * -1)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2147483648 * y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * -1)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 2;
result = (x * y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * 2)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2147483648 * y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * 2)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -2;
result = (x * y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * -2)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (2147483648 * y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * -2)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 3;
result = (x * y);
check = 6442450944;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * 3)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2147483648 * y)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * 3)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -3;
result = (x * y);
check = -6442450944;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * -3)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (2147483648 * y)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * -3)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 4;
result = (x * y);
check = 8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * 4)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2147483648 * y)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * 4)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -4;
result = (x * y);
check = -8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * -4)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (2147483648 * y)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * -4)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 8;
result = (x * y);
check = 17179869184;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * 8)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2147483648 * y)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * 8)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -8;
result = (x * y);
check = -17179869184;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * -8)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (2147483648 * y)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * -8)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 1073741822;
result = (x * y);
check = 2305843004918726656;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * 1073741822)
check = 2305843004918726656
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (2147483648 * y)
check = 2305843004918726656
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * 1073741822)
check = 2305843004918726656
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 1073741823;
result = (x * y);
check = 2305843007066210304;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * 1073741823)
check = 2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (2147483648 * y)
check = 2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * 1073741823)
check = 2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 1073741824;
result = (x * y);
check = 2305843009213693952;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * 1073741824)
check = 2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (2147483648 * y)
check = 2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * 1073741824)
check = 2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 1073741825;
result = (x * y);
check = 2305843011361177600;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * 1073741825)
check = 2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (2147483648 * y)
check = 2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * 1073741825)
check = 2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -1073741823;
result = (x * y);
check = -2305843007066210304;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * -1073741823)
check = -2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (2147483648 * y)
check = -2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * -1073741823)
check = -2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = (-0x3fffffff-1);
result = (x * y);
check = -2305843009213693952;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * (-0x3fffffff-1))
check = -2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (2147483648 * y)
check = -2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * (-0x3fffffff-1))
check = -2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -1073741825;
result = (x * y);
check = -2305843011361177600;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * -1073741825)
check = -2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (2147483648 * y)
check = -2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * -1073741825)
check = -2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -1073741826;
result = (x * y);
check = -2305843013508661248;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * -1073741826)
check = -2305843013508661248
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (2147483648 * y)
check = -2305843013508661248
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * -1073741826)
check = -2305843013508661248
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 2147483646;
result = (x * y);
check = 4611686014132420608;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * 2147483646)
check = 4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (2147483648 * y)
check = 4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * 2147483646)
check = 4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 2147483647;
result = (x * y);
check = 4611686016279904256;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * 2147483647)
check = 4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (2147483648 * y)
check = 4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * 2147483647)
check = 4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 2147483648;
result = (x * y);
check = 4611686018427387904;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * 2147483648)
check = 4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (2147483648 * y)
check = 4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * 2147483648)
check = 4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 2147483649;
result = (x * y);
check = 4611686020574871552;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * 2147483649)
check = 4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (2147483648 * y)
check = 4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * 2147483649)
check = 4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -2147483647;
result = (x * y);
check = -4611686016279904256;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * -2147483647)
check = -4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (2147483648 * y)
check = -4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * -2147483647)
check = -4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test27() {
var x;
var y;
var result;
var check;

x = 2147483648;
y = -2147483648;
result = (x * y);
check = -4611686018427387904;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * -2147483648)
check = -4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (2147483648 * y)
check = -4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * -2147483648)
check = -4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -2147483649;
result = (x * y);
check = -4611686020574871552;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * -2147483649)
check = -4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (2147483648 * y)
check = -4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * -2147483649)
check = -4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -2147483650;
result = (x * y);
check = -4611686022722355200;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * -2147483650)
check = -4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (2147483648 * y)
check = -4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * -2147483650)
check = -4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 4294967295;
result = (x * y);
check = 9223372034707292160;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * 4294967295)
check = 9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (2147483648 * y)
check = 9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * 4294967295)
check = 9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = 4294967296;
result = (x * y);
check = 9223372036854775808;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * 4294967296)
check = 9223372036854775808
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (2147483648 * y)
check = 9223372036854775808
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * 4294967296)
check = 9223372036854775808
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -4294967295;
result = (x * y);
check = -9223372034707292160;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * -4294967295)
check = -9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (2147483648 * y)
check = -9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * -4294967295)
check = -9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
y = -4294967296;
result = (x * y);
check = -9223372036854775808;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483648 * -4294967296)
check = -9223372036854775808
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (2147483648 * y)
check = -9223372036854775808
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483648;
result = (x * -4294967296)
check = -9223372036854775808
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (2147483649 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 1;
result = (x * y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * 1)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (2147483649 * y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * 1)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -1;
result = (x * y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * -1)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (2147483649 * y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * -1)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 2;
result = (x * y);
check = 4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * 2)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (2147483649 * y)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * 2)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -2;
result = (x * y);
check = -4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * -2)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (2147483649 * y)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * -2)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 3;
result = (x * y);
check = 6442450947;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * 3)
check = 6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (2147483649 * y)
check = 6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * 3)
check = 6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -3;
result = (x * y);
check = -6442450947;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * -3)
check = -6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (2147483649 * y)
check = -6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * -3)
check = -6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 4;
result = (x * y);
check = 8589934596;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * 4)
check = 8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (2147483649 * y)
check = 8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * 4)
check = 8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -4;
result = (x * y);
check = -8589934596;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * -4)
check = -8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (2147483649 * y)
check = -8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * -4)
check = -8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 8;
result = (x * y);
check = 17179869192;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * 8)
check = 17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (2147483649 * y)
check = 17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * 8)
check = 17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -8;
result = (x * y);
check = -17179869192;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * -8)
check = -17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (2147483649 * y)
check = -17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * -8)
check = -17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 1073741822;
result = (x * y);
check = 2305843005992468478;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * 1073741822)
check = 2305843005992468478
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (2147483649 * y)
check = 2305843005992468478
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * 1073741822)
check = 2305843005992468478
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 1073741823;
result = (x * y);
check = 2305843008139952127;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * 1073741823)
check = 2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (2147483649 * y)
check = 2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * 1073741823)
check = 2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 1073741824;
result = (x * y);
check = 2305843010287435776;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * 1073741824)
check = 2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (2147483649 * y)
check = 2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * 1073741824)
check = 2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 1073741825;
result = (x * y);
check = 2305843012434919425;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * 1073741825)
check = 2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (2147483649 * y)
check = 2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * 1073741825)
check = 2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -1073741823;
result = (x * y);
check = -2305843008139952127;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * -1073741823)
check = -2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (2147483649 * y)
check = -2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * -1073741823)
check = -2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = (-0x3fffffff-1);
result = (x * y);
check = -2305843010287435776;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * (-0x3fffffff-1))
check = -2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (2147483649 * y)
check = -2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * (-0x3fffffff-1))
check = -2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -1073741825;
result = (x * y);
check = -2305843012434919425;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * -1073741825)
check = -2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (2147483649 * y)
check = -2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * -1073741825)
check = -2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test28() {
var x;
var y;
var result;
var check;

x = 2147483649;
y = -1073741826;
result = (x * y);
check = -2305843014582403074;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * -1073741826)
check = -2305843014582403074
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (2147483649 * y)
check = -2305843014582403074
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * -1073741826)
check = -2305843014582403074
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 2147483646;
result = (x * y);
check = 4611686016279904254;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * 2147483646)
check = 4611686016279904254
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (2147483649 * y)
check = 4611686016279904254
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * 2147483646)
check = 4611686016279904254
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 2147483647;
result = (x * y);
check = 4611686018427387903;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * 2147483647)
check = 4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (2147483649 * y)
check = 4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * 2147483647)
check = 4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 2147483648;
result = (x * y);
check = 4611686020574871552;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * 2147483648)
check = 4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (2147483649 * y)
check = 4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * 2147483648)
check = 4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 2147483649;
result = (x * y);
check = 4611686022722355201;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * 2147483649)
check = 4611686022722355201
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (2147483649 * y)
check = 4611686022722355201
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * 2147483649)
check = 4611686022722355201
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -2147483647;
result = (x * y);
check = -4611686018427387903;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * -2147483647)
check = -4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (2147483649 * y)
check = -4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * -2147483647)
check = -4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -2147483648;
result = (x * y);
check = -4611686020574871552;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * -2147483648)
check = -4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (2147483649 * y)
check = -4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * -2147483648)
check = -4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -2147483649;
result = (x * y);
check = -4611686022722355201;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * -2147483649)
check = -4611686022722355201
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (2147483649 * y)
check = -4611686022722355201
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * -2147483649)
check = -4611686022722355201
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = -2147483650;
result = (x * y);
check = -4611686024869838850;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * -2147483650)
check = -4611686024869838850
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (2147483649 * y)
check = -4611686024869838850
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * -2147483650)
check = -4611686024869838850
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 4294967295;
result = (x * y);
check = 9223372039002259455;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * 4294967295)
check = 9223372039002259455
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (2147483649 * y)
check = 9223372039002259455
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * 4294967295)
check = 9223372039002259455
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
y = 4294967296;
result = (x * y);
check = 9223372041149743104;
if(result != check) { fail(test, check, result); } ++test; 


result = (2147483649 * 4294967296)
check = 9223372041149743104
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (2147483649 * y)
check = 9223372041149743104
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 2147483649;
result = (x * 4294967296)
check = 9223372041149743104
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483647 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 1;
result = (x * y);
check = -2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * 1)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483647 * y)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * 1)
check = -2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -1;
result = (x * y);
check = 2147483647;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * -1)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2147483647 * y)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * -1)
check = 2147483647
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 2;
result = (x * y);
check = -4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * 2)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2147483647 * y)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * 2)
check = -4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -2;
result = (x * y);
check = 4294967294;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * -2)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-2147483647 * y)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * -2)
check = 4294967294
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 3;
result = (x * y);
check = -6442450941;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * 3)
check = -6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2147483647 * y)
check = -6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * 3)
check = -6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -3;
result = (x * y);
check = 6442450941;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * -3)
check = 6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-2147483647 * y)
check = 6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * -3)
check = 6442450941
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 4;
result = (x * y);
check = -8589934588;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * 4)
check = -8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2147483647 * y)
check = -8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * 4)
check = -8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -4;
result = (x * y);
check = 8589934588;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * -4)
check = 8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-2147483647 * y)
check = 8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * -4)
check = 8589934588
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 8;
result = (x * y);
check = -17179869176;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * 8)
check = -17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2147483647 * y)
check = -17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * 8)
check = -17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -8;
result = (x * y);
check = 17179869176;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * -8)
check = 17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-2147483647 * y)
check = 17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * -8)
check = 17179869176
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 1073741822;
result = (x * y);
check = -2305843003844984834;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * 1073741822)
check = -2305843003844984834
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-2147483647 * y)
check = -2305843003844984834
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * 1073741822)
check = -2305843003844984834
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 1073741823;
result = (x * y);
check = -2305843005992468481;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * 1073741823)
check = -2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-2147483647 * y)
check = -2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * 1073741823)
check = -2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 1073741824;
result = (x * y);
check = -2305843008139952128;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * 1073741824)
check = -2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-2147483647 * y)
check = -2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * 1073741824)
check = -2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test29() {
var x;
var y;
var result;
var check;

x = -2147483647;
y = 1073741825;
result = (x * y);
check = -2305843010287435775;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * 1073741825)
check = -2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-2147483647 * y)
check = -2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * 1073741825)
check = -2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -1073741823;
result = (x * y);
check = 2305843005992468481;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * -1073741823)
check = 2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-2147483647 * y)
check = 2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * -1073741823)
check = 2305843005992468481
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = (-0x3fffffff-1);
result = (x * y);
check = 2305843008139952128;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * (-0x3fffffff-1))
check = 2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-2147483647 * y)
check = 2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * (-0x3fffffff-1))
check = 2305843008139952128
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -1073741825;
result = (x * y);
check = 2305843010287435775;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * -1073741825)
check = 2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-2147483647 * y)
check = 2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * -1073741825)
check = 2305843010287435775
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -1073741826;
result = (x * y);
check = 2305843012434919422;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * -1073741826)
check = 2305843012434919422
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-2147483647 * y)
check = 2305843012434919422
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * -1073741826)
check = 2305843012434919422
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 2147483646;
result = (x * y);
check = -4611686011984936962;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * 2147483646)
check = -4611686011984936962
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-2147483647 * y)
check = -4611686011984936962
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * 2147483646)
check = -4611686011984936962
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 2147483647;
result = (x * y);
check = -4611686014132420609;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * 2147483647)
check = -4611686014132420609
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-2147483647 * y)
check = -4611686014132420609
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * 2147483647)
check = -4611686014132420609
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 2147483648;
result = (x * y);
check = -4611686016279904256;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * 2147483648)
check = -4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-2147483647 * y)
check = -4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * 2147483648)
check = -4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 2147483649;
result = (x * y);
check = -4611686018427387903;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * 2147483649)
check = -4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-2147483647 * y)
check = -4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * 2147483649)
check = -4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -2147483647;
result = (x * y);
check = 4611686014132420609;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * -2147483647)
check = 4611686014132420609
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-2147483647 * y)
check = 4611686014132420609
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * -2147483647)
check = 4611686014132420609
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -2147483648;
result = (x * y);
check = 4611686016279904256;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * -2147483648)
check = 4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-2147483647 * y)
check = 4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * -2147483648)
check = 4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -2147483649;
result = (x * y);
check = 4611686018427387903;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * -2147483649)
check = 4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-2147483647 * y)
check = 4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * -2147483649)
check = 4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -2147483650;
result = (x * y);
check = 4611686020574871550;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * -2147483650)
check = 4611686020574871550
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-2147483647 * y)
check = 4611686020574871550
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * -2147483650)
check = 4611686020574871550
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 4294967295;
result = (x * y);
check = -9223372030412324865;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * 4294967295)
check = -9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-2147483647 * y)
check = -9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * 4294967295)
check = -9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = 4294967296;
result = (x * y);
check = -9223372032559808512;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * 4294967296)
check = -9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-2147483647 * y)
check = -9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * 4294967296)
check = -9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -4294967295;
result = (x * y);
check = 9223372030412324865;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * -4294967295)
check = 9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-2147483647 * y)
check = 9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * -4294967295)
check = 9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
y = -4294967296;
result = (x * y);
check = 9223372032559808512;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483647 * -4294967296)
check = 9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967296;
result = (-2147483647 * y)
check = 9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483647;
result = (x * -4294967296)
check = 9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483648 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 1;
result = (x * y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * 1)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483648 * y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * 1)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -1;
result = (x * y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * -1)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2147483648 * y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * -1)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 2;
result = (x * y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * 2)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2147483648 * y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * 2)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -2;
result = (x * y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * -2)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-2147483648 * y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * -2)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 3;
result = (x * y);
check = -6442450944;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * 3)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2147483648 * y)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * 3)
check = -6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -3;
result = (x * y);
check = 6442450944;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * -3)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-2147483648 * y)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * -3)
check = 6442450944
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 4;
result = (x * y);
check = -8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * 4)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2147483648 * y)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * 4)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test30() {
var x;
var y;
var result;
var check;

x = -2147483648;
y = -4;
result = (x * y);
check = 8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * -4)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-2147483648 * y)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * -4)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 8;
result = (x * y);
check = -17179869184;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * 8)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2147483648 * y)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * 8)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -8;
result = (x * y);
check = 17179869184;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * -8)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-2147483648 * y)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * -8)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 1073741822;
result = (x * y);
check = -2305843004918726656;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * 1073741822)
check = -2305843004918726656
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-2147483648 * y)
check = -2305843004918726656
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * 1073741822)
check = -2305843004918726656
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 1073741823;
result = (x * y);
check = -2305843007066210304;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * 1073741823)
check = -2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-2147483648 * y)
check = -2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * 1073741823)
check = -2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 1073741824;
result = (x * y);
check = -2305843009213693952;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * 1073741824)
check = -2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-2147483648 * y)
check = -2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * 1073741824)
check = -2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 1073741825;
result = (x * y);
check = -2305843011361177600;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * 1073741825)
check = -2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-2147483648 * y)
check = -2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * 1073741825)
check = -2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -1073741823;
result = (x * y);
check = 2305843007066210304;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * -1073741823)
check = 2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-2147483648 * y)
check = 2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * -1073741823)
check = 2305843007066210304
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = (-0x3fffffff-1);
result = (x * y);
check = 2305843009213693952;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * (-0x3fffffff-1))
check = 2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-2147483648 * y)
check = 2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * (-0x3fffffff-1))
check = 2305843009213693952
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -1073741825;
result = (x * y);
check = 2305843011361177600;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * -1073741825)
check = 2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-2147483648 * y)
check = 2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * -1073741825)
check = 2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -1073741826;
result = (x * y);
check = 2305843013508661248;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * -1073741826)
check = 2305843013508661248
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-2147483648 * y)
check = 2305843013508661248
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * -1073741826)
check = 2305843013508661248
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 2147483646;
result = (x * y);
check = -4611686014132420608;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * 2147483646)
check = -4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-2147483648 * y)
check = -4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * 2147483646)
check = -4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 2147483647;
result = (x * y);
check = -4611686016279904256;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * 2147483647)
check = -4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-2147483648 * y)
check = -4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * 2147483647)
check = -4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 2147483648;
result = (x * y);
check = -4611686018427387904;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * 2147483648)
check = -4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-2147483648 * y)
check = -4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * 2147483648)
check = -4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 2147483649;
result = (x * y);
check = -4611686020574871552;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * 2147483649)
check = -4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-2147483648 * y)
check = -4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * 2147483649)
check = -4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -2147483647;
result = (x * y);
check = 4611686016279904256;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * -2147483647)
check = 4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-2147483648 * y)
check = 4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * -2147483647)
check = 4611686016279904256
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -2147483648;
result = (x * y);
check = 4611686018427387904;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * -2147483648)
check = 4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-2147483648 * y)
check = 4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * -2147483648)
check = 4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -2147483649;
result = (x * y);
check = 4611686020574871552;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * -2147483649)
check = 4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-2147483648 * y)
check = 4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * -2147483649)
check = 4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -2147483650;
result = (x * y);
check = 4611686022722355200;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * -2147483650)
check = 4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-2147483648 * y)
check = 4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * -2147483650)
check = 4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 4294967295;
result = (x * y);
check = -9223372034707292160;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * 4294967295)
check = -9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (-2147483648 * y)
check = -9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * 4294967295)
check = -9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = 4294967296;
result = (x * y);
check = -9223372036854775808;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * 4294967296)
check = -9223372036854775808
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (-2147483648 * y)
check = -9223372036854775808
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * 4294967296)
check = -9223372036854775808
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
y = -4294967295;
result = (x * y);
check = 9223372034707292160;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483648 * -4294967295)
check = 9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4294967295;
result = (-2147483648 * y)
check = 9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483648;
result = (x * -4294967295)
check = 9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483649 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 1;
result = (x * y);
check = -2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * 1)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483649 * y)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * 1)
check = -2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -1;
result = (x * y);
check = 2147483649;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * -1)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2147483649 * y)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * -1)
check = 2147483649
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test31() {
var x;
var y;
var result;
var check;

x = -2147483649;
y = 2;
result = (x * y);
check = -4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * 2)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2147483649 * y)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * 2)
check = -4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -2;
result = (x * y);
check = 4294967298;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * -2)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-2147483649 * y)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * -2)
check = 4294967298
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 3;
result = (x * y);
check = -6442450947;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * 3)
check = -6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2147483649 * y)
check = -6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * 3)
check = -6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -3;
result = (x * y);
check = 6442450947;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * -3)
check = 6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-2147483649 * y)
check = 6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * -3)
check = 6442450947
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 4;
result = (x * y);
check = -8589934596;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * 4)
check = -8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2147483649 * y)
check = -8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * 4)
check = -8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -4;
result = (x * y);
check = 8589934596;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * -4)
check = 8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-2147483649 * y)
check = 8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * -4)
check = 8589934596
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 8;
result = (x * y);
check = -17179869192;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * 8)
check = -17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2147483649 * y)
check = -17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * 8)
check = -17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -8;
result = (x * y);
check = 17179869192;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * -8)
check = 17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-2147483649 * y)
check = 17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * -8)
check = 17179869192
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 1073741822;
result = (x * y);
check = -2305843005992468478;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * 1073741822)
check = -2305843005992468478
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-2147483649 * y)
check = -2305843005992468478
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * 1073741822)
check = -2305843005992468478
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 1073741823;
result = (x * y);
check = -2305843008139952127;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * 1073741823)
check = -2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-2147483649 * y)
check = -2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * 1073741823)
check = -2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 1073741824;
result = (x * y);
check = -2305843010287435776;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * 1073741824)
check = -2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-2147483649 * y)
check = -2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * 1073741824)
check = -2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 1073741825;
result = (x * y);
check = -2305843012434919425;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * 1073741825)
check = -2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-2147483649 * y)
check = -2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * 1073741825)
check = -2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -1073741823;
result = (x * y);
check = 2305843008139952127;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * -1073741823)
check = 2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-2147483649 * y)
check = 2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * -1073741823)
check = 2305843008139952127
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = (-0x3fffffff-1);
result = (x * y);
check = 2305843010287435776;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * (-0x3fffffff-1))
check = 2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-2147483649 * y)
check = 2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * (-0x3fffffff-1))
check = 2305843010287435776
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -1073741825;
result = (x * y);
check = 2305843012434919425;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * -1073741825)
check = 2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-2147483649 * y)
check = 2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * -1073741825)
check = 2305843012434919425
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -1073741826;
result = (x * y);
check = 2305843014582403074;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * -1073741826)
check = 2305843014582403074
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-2147483649 * y)
check = 2305843014582403074
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * -1073741826)
check = 2305843014582403074
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 2147483646;
result = (x * y);
check = -4611686016279904254;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * 2147483646)
check = -4611686016279904254
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-2147483649 * y)
check = -4611686016279904254
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * 2147483646)
check = -4611686016279904254
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 2147483647;
result = (x * y);
check = -4611686018427387903;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * 2147483647)
check = -4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-2147483649 * y)
check = -4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * 2147483647)
check = -4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 2147483648;
result = (x * y);
check = -4611686020574871552;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * 2147483648)
check = -4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-2147483649 * y)
check = -4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * 2147483648)
check = -4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = 2147483649;
result = (x * y);
check = -4611686022722355201;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * 2147483649)
check = -4611686022722355201
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-2147483649 * y)
check = -4611686022722355201
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * 2147483649)
check = -4611686022722355201
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -2147483647;
result = (x * y);
check = 4611686018427387903;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * -2147483647)
check = 4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-2147483649 * y)
check = 4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * -2147483647)
check = 4611686018427387903
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -2147483648;
result = (x * y);
check = 4611686020574871552;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * -2147483648)
check = 4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-2147483649 * y)
check = 4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * -2147483648)
check = 4611686020574871552
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -2147483649;
result = (x * y);
check = 4611686022722355201;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * -2147483649)
check = 4611686022722355201
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-2147483649 * y)
check = 4611686022722355201
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * -2147483649)
check = 4611686022722355201
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
y = -2147483650;
result = (x * y);
check = 4611686024869838850;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483649 * -2147483650)
check = 4611686024869838850
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-2147483649 * y)
check = 4611686024869838850
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483649;
result = (x * -2147483650)
check = 4611686024869838850
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-2147483650 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test32() {
var x;
var y;
var result;
var check;

x = -2147483650;
y = 1;
result = (x * y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * 1)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-2147483650 * y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * 1)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -1;
result = (x * y);
check = 2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * -1)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-2147483650 * y)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * -1)
check = 2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 2;
result = (x * y);
check = -4294967300;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * 2)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-2147483650 * y)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * 2)
check = -4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -2;
result = (x * y);
check = 4294967300;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * -2)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-2147483650 * y)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * -2)
check = 4294967300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 3;
result = (x * y);
check = -6442450950;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * 3)
check = -6442450950
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-2147483650 * y)
check = -6442450950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * 3)
check = -6442450950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -3;
result = (x * y);
check = 6442450950;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * -3)
check = 6442450950
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-2147483650 * y)
check = 6442450950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * -3)
check = 6442450950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 4;
result = (x * y);
check = -8589934600;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * 4)
check = -8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-2147483650 * y)
check = -8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * 4)
check = -8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -4;
result = (x * y);
check = 8589934600;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * -4)
check = 8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-2147483650 * y)
check = 8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * -4)
check = 8589934600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 8;
result = (x * y);
check = -17179869200;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * 8)
check = -17179869200
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-2147483650 * y)
check = -17179869200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * 8)
check = -17179869200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -8;
result = (x * y);
check = 17179869200;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * -8)
check = 17179869200
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-2147483650 * y)
check = 17179869200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * -8)
check = 17179869200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 1073741822;
result = (x * y);
check = -2305843007066210300;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * 1073741822)
check = -2305843007066210300
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-2147483650 * y)
check = -2305843007066210300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * 1073741822)
check = -2305843007066210300
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 1073741823;
result = (x * y);
check = -2305843009213693950;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * 1073741823)
check = -2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-2147483650 * y)
check = -2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * 1073741823)
check = -2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 1073741824;
result = (x * y);
check = -2305843011361177600;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * 1073741824)
check = -2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-2147483650 * y)
check = -2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * 1073741824)
check = -2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 1073741825;
result = (x * y);
check = -2305843013508661250;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * 1073741825)
check = -2305843013508661250
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-2147483650 * y)
check = -2305843013508661250
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * 1073741825)
check = -2305843013508661250
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -1073741823;
result = (x * y);
check = 2305843009213693950;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * -1073741823)
check = 2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-2147483650 * y)
check = 2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * -1073741823)
check = 2305843009213693950
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = (-0x3fffffff-1);
result = (x * y);
check = 2305843011361177600;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * (-0x3fffffff-1))
check = 2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-2147483650 * y)
check = 2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * (-0x3fffffff-1))
check = 2305843011361177600
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -1073741825;
result = (x * y);
check = 2305843013508661250;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * -1073741825)
check = 2305843013508661250
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-2147483650 * y)
check = 2305843013508661250
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * -1073741825)
check = 2305843013508661250
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -1073741826;
result = (x * y);
check = 2305843015656144900;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * -1073741826)
check = 2305843015656144900
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-2147483650 * y)
check = 2305843015656144900
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * -1073741826)
check = 2305843015656144900
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 2147483646;
result = (x * y);
check = -4611686018427387900;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * 2147483646)
check = -4611686018427387900
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-2147483650 * y)
check = -4611686018427387900
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * 2147483646)
check = -4611686018427387900
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 2147483647;
result = (x * y);
check = -4611686020574871550;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * 2147483647)
check = -4611686020574871550
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-2147483650 * y)
check = -4611686020574871550
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * 2147483647)
check = -4611686020574871550
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 2147483648;
result = (x * y);
check = -4611686022722355200;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * 2147483648)
check = -4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-2147483650 * y)
check = -4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * 2147483648)
check = -4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = 2147483649;
result = (x * y);
check = -4611686024869838850;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * 2147483649)
check = -4611686024869838850
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (-2147483650 * y)
check = -4611686024869838850
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * 2147483649)
check = -4611686024869838850
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -2147483647;
result = (x * y);
check = 4611686020574871550;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * -2147483647)
check = 4611686020574871550
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-2147483650 * y)
check = 4611686020574871550
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * -2147483647)
check = 4611686020574871550
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -2147483648;
result = (x * y);
check = 4611686022722355200;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * -2147483648)
check = 4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-2147483650 * y)
check = 4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * -2147483648)
check = 4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
y = -2147483649;
result = (x * y);
check = 4611686024869838850;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * -2147483649)
check = 4611686024869838850
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483649;
result = (-2147483650 * y)
check = 4611686024869838850
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * -2147483649)
check = 4611686024869838850
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test33() {
var x;
var y;
var result;
var check;

x = -2147483650;
y = -2147483650;
result = (x * y);
check = 4611686027017322500;
if(result != check) { fail(test, check, result); } ++test; 


result = (-2147483650 * -2147483650)
check = 4611686027017322500
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483650;
result = (-2147483650 * y)
check = 4611686027017322500
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -2147483650;
result = (x * -2147483650)
check = 4611686027017322500
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4294967295 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 1;
result = (x * y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * 1)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (4294967295 * y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * 1)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -1;
result = (x * y);
check = -4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * -1)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (4294967295 * y)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * -1)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 2;
result = (x * y);
check = 8589934590;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * 2)
check = 8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (4294967295 * y)
check = 8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * 2)
check = 8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -2;
result = (x * y);
check = -8589934590;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * -2)
check = -8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (4294967295 * y)
check = -8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * -2)
check = -8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 3;
result = (x * y);
check = 12884901885;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * 3)
check = 12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (4294967295 * y)
check = 12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * 3)
check = 12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -3;
result = (x * y);
check = -12884901885;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * -3)
check = -12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (4294967295 * y)
check = -12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * -3)
check = -12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 4;
result = (x * y);
check = 17179869180;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * 4)
check = 17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (4294967295 * y)
check = 17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * 4)
check = 17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -4;
result = (x * y);
check = -17179869180;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * -4)
check = -17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (4294967295 * y)
check = -17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * -4)
check = -17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 8;
result = (x * y);
check = 34359738360;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * 8)
check = 34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (4294967295 * y)
check = 34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * 8)
check = 34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -8;
result = (x * y);
check = -34359738360;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * -8)
check = -34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (4294967295 * y)
check = -34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * -8)
check = -34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 1073741822;
result = (x * y);
check = 4611686008763711490;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * 1073741822)
check = 4611686008763711490
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (4294967295 * y)
check = 4611686008763711490
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * 1073741822)
check = 4611686008763711490
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 1073741823;
result = (x * y);
check = 4611686013058678785;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * 1073741823)
check = 4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (4294967295 * y)
check = 4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * 1073741823)
check = 4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 1073741824;
result = (x * y);
check = 4611686017353646080;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * 1073741824)
check = 4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (4294967295 * y)
check = 4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * 1073741824)
check = 4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 1073741825;
result = (x * y);
check = 4611686021648613375;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * 1073741825)
check = 4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (4294967295 * y)
check = 4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * 1073741825)
check = 4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -1073741823;
result = (x * y);
check = -4611686013058678785;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * -1073741823)
check = -4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (4294967295 * y)
check = -4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * -1073741823)
check = -4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = (-0x3fffffff-1);
result = (x * y);
check = -4611686017353646080;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * (-0x3fffffff-1))
check = -4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (4294967295 * y)
check = -4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * (-0x3fffffff-1))
check = -4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -1073741825;
result = (x * y);
check = -4611686021648613375;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * -1073741825)
check = -4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (4294967295 * y)
check = -4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * -1073741825)
check = -4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -1073741826;
result = (x * y);
check = -4611686025943580670;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * -1073741826)
check = -4611686025943580670
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (4294967295 * y)
check = -4611686025943580670
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * -1073741826)
check = -4611686025943580670
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 2147483646;
result = (x * y);
check = 9223372026117357570;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * 2147483646)
check = 9223372026117357570
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (4294967295 * y)
check = 9223372026117357570
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * 2147483646)
check = 9223372026117357570
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 2147483647;
result = (x * y);
check = 9223372030412324865;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * 2147483647)
check = 9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (4294967295 * y)
check = 9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * 2147483647)
check = 9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 2147483648;
result = (x * y);
check = 9223372034707292160;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * 2147483648)
check = 9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (4294967295 * y)
check = 9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * 2147483648)
check = 9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 2147483649;
result = (x * y);
check = 9223372039002259455;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * 2147483649)
check = 9223372039002259455
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (4294967295 * y)
check = 9223372039002259455
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * 2147483649)
check = 9223372039002259455
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = -2147483647;
result = (x * y);
check = -9223372030412324865;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * -2147483647)
check = -9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (4294967295 * y)
check = -9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * -2147483647)
check = -9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test34() {
var x;
var y;
var result;
var check;

x = 4294967295;
y = -2147483648;
result = (x * y);
check = -9223372034707292160;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * -2147483648)
check = -9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (4294967295 * y)
check = -9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * -2147483648)
check = -9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 4294967295;
result = (x * y);
check = 18446744065119617025;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * 4294967295)
check = 18446744065119617025
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (4294967295 * y)
check = 18446744065119617025
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * 4294967295)
check = 18446744065119617025
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
y = 4294967296;
result = (x * y);
check = 18446744069414584320;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967295 * 4294967296)
check = 18446744069414584320
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967296;
result = (4294967295 * y)
check = 18446744069414584320
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967295;
result = (x * 4294967296)
check = 18446744069414584320
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (4294967296 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 1;
result = (x * y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * 1)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (4294967296 * y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * 1)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -1;
result = (x * y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * -1)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (4294967296 * y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * -1)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 2;
result = (x * y);
check = 8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * 2)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (4294967296 * y)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * 2)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -2;
result = (x * y);
check = -8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * -2)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (4294967296 * y)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * -2)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 3;
result = (x * y);
check = 12884901888;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * 3)
check = 12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (4294967296 * y)
check = 12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * 3)
check = 12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -3;
result = (x * y);
check = -12884901888;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * -3)
check = -12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (4294967296 * y)
check = -12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * -3)
check = -12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 4;
result = (x * y);
check = 17179869184;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * 4)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (4294967296 * y)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * 4)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -4;
result = (x * y);
check = -17179869184;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * -4)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (4294967296 * y)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * -4)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 8;
result = (x * y);
check = 34359738368;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * 8)
check = 34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (4294967296 * y)
check = 34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * 8)
check = 34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -8;
result = (x * y);
check = -34359738368;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * -8)
check = -34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (4294967296 * y)
check = -34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * -8)
check = -34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 1073741822;
result = (x * y);
check = 4611686009837453312;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * 1073741822)
check = 4611686009837453312
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (4294967296 * y)
check = 4611686009837453312
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * 1073741822)
check = 4611686009837453312
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 1073741823;
result = (x * y);
check = 4611686014132420608;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * 1073741823)
check = 4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (4294967296 * y)
check = 4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * 1073741823)
check = 4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 1073741824;
result = (x * y);
check = 4611686018427387904;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * 1073741824)
check = 4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (4294967296 * y)
check = 4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * 1073741824)
check = 4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 1073741825;
result = (x * y);
check = 4611686022722355200;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * 1073741825)
check = 4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (4294967296 * y)
check = 4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * 1073741825)
check = 4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -1073741823;
result = (x * y);
check = -4611686014132420608;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * -1073741823)
check = -4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (4294967296 * y)
check = -4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * -1073741823)
check = -4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = (-0x3fffffff-1);
result = (x * y);
check = -4611686018427387904;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * (-0x3fffffff-1))
check = -4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (4294967296 * y)
check = -4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * (-0x3fffffff-1))
check = -4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -1073741825;
result = (x * y);
check = -4611686022722355200;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * -1073741825)
check = -4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (4294967296 * y)
check = -4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * -1073741825)
check = -4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -1073741826;
result = (x * y);
check = -4611686027017322496;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * -1073741826)
check = -4611686027017322496
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (4294967296 * y)
check = -4611686027017322496
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * -1073741826)
check = -4611686027017322496
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 2147483646;
result = (x * y);
check = 9223372028264841216;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * 2147483646)
check = 9223372028264841216
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (4294967296 * y)
check = 9223372028264841216
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * 2147483646)
check = 9223372028264841216
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 2147483647;
result = (x * y);
check = 9223372032559808512;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * 2147483647)
check = 9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (4294967296 * y)
check = 9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * 2147483647)
check = 9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 2147483648;
result = (x * y);
check = 9223372036854775808;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * 2147483648)
check = 9223372036854775808
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (4294967296 * y)
check = 9223372036854775808
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * 2147483648)
check = 9223372036854775808
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test35() {
var x;
var y;
var result;
var check;

x = 4294967296;
y = 2147483649;
result = (x * y);
check = 9223372041149743104;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * 2147483649)
check = 9223372041149743104
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483649;
result = (4294967296 * y)
check = 9223372041149743104
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * 2147483649)
check = 9223372041149743104
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -2147483647;
result = (x * y);
check = -9223372032559808512;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * -2147483647)
check = -9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (4294967296 * y)
check = -9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * -2147483647)
check = -9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = -2147483648;
result = (x * y);
check = -9223372036854775808;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * -2147483648)
check = -9223372036854775808
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (4294967296 * y)
check = -9223372036854775808
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * -2147483648)
check = -9223372036854775808
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
y = 4294967295;
result = (x * y);
check = 18446744069414584320;
if(result != check) { fail(test, check, result); } ++test; 


result = (4294967296 * 4294967295)
check = 18446744069414584320
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4294967295;
result = (4294967296 * y)
check = 18446744069414584320
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 4294967296;
result = (x * 4294967295)
check = 18446744069414584320
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4294967295 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 1;
result = (x * y);
check = -4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * 1)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-4294967295 * y)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * 1)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -1;
result = (x * y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * -1)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-4294967295 * y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * -1)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 2;
result = (x * y);
check = -8589934590;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * 2)
check = -8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-4294967295 * y)
check = -8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * 2)
check = -8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -2;
result = (x * y);
check = 8589934590;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * -2)
check = 8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-4294967295 * y)
check = 8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * -2)
check = 8589934590
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 3;
result = (x * y);
check = -12884901885;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * 3)
check = -12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-4294967295 * y)
check = -12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * 3)
check = -12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -3;
result = (x * y);
check = 12884901885;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * -3)
check = 12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-4294967295 * y)
check = 12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * -3)
check = 12884901885
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 4;
result = (x * y);
check = -17179869180;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * 4)
check = -17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-4294967295 * y)
check = -17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * 4)
check = -17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -4;
result = (x * y);
check = 17179869180;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * -4)
check = 17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-4294967295 * y)
check = 17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * -4)
check = 17179869180
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 8;
result = (x * y);
check = -34359738360;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * 8)
check = -34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-4294967295 * y)
check = -34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * 8)
check = -34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -8;
result = (x * y);
check = 34359738360;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * -8)
check = 34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-4294967295 * y)
check = 34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * -8)
check = 34359738360
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 1073741822;
result = (x * y);
check = -4611686008763711490;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * 1073741822)
check = -4611686008763711490
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-4294967295 * y)
check = -4611686008763711490
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * 1073741822)
check = -4611686008763711490
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 1073741823;
result = (x * y);
check = -4611686013058678785;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * 1073741823)
check = -4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-4294967295 * y)
check = -4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * 1073741823)
check = -4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 1073741824;
result = (x * y);
check = -4611686017353646080;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * 1073741824)
check = -4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-4294967295 * y)
check = -4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * 1073741824)
check = -4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 1073741825;
result = (x * y);
check = -4611686021648613375;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * 1073741825)
check = -4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-4294967295 * y)
check = -4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * 1073741825)
check = -4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -1073741823;
result = (x * y);
check = 4611686013058678785;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * -1073741823)
check = 4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-4294967295 * y)
check = 4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * -1073741823)
check = 4611686013058678785
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = (-0x3fffffff-1);
result = (x * y);
check = 4611686017353646080;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * (-0x3fffffff-1))
check = 4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-4294967295 * y)
check = 4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * (-0x3fffffff-1))
check = 4611686017353646080
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -1073741825;
result = (x * y);
check = 4611686021648613375;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * -1073741825)
check = 4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-4294967295 * y)
check = 4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * -1073741825)
check = 4611686021648613375
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -1073741826;
result = (x * y);
check = 4611686025943580670;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * -1073741826)
check = 4611686025943580670
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-4294967295 * y)
check = 4611686025943580670
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * -1073741826)
check = 4611686025943580670
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 2147483646;
result = (x * y);
check = -9223372026117357570;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * 2147483646)
check = -9223372026117357570
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-4294967295 * y)
check = -9223372026117357570
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * 2147483646)
check = -9223372026117357570
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = 2147483647;
result = (x * y);
check = -9223372030412324865;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * 2147483647)
check = -9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-4294967295 * y)
check = -9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * 2147483647)
check = -9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test36() {
var x;
var y;
var result;
var check;

x = -4294967295;
y = 2147483648;
result = (x * y);
check = -9223372034707292160;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * 2147483648)
check = -9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-4294967295 * y)
check = -9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * 2147483648)
check = -9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -2147483647;
result = (x * y);
check = 9223372030412324865;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * -2147483647)
check = 9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-4294967295 * y)
check = 9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * -2147483647)
check = 9223372030412324865
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
y = -2147483648;
result = (x * y);
check = 9223372034707292160;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967295 * -2147483648)
check = 9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483648;
result = (-4294967295 * y)
check = 9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967295;
result = (x * -2147483648)
check = 9223372034707292160
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 0;
result = (x * y);
check = 0;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 0;
result = (-4294967296 * y)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * 0)
check = 0
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 1;
result = (x * y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * 1)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1;
result = (-4294967296 * y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * 1)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -1;
result = (x * y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * -1)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1;
result = (-4294967296 * y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * -1)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 2;
result = (x * y);
check = -8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * 2)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2;
result = (-4294967296 * y)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * 2)
check = -8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -2;
result = (x * y);
check = 8589934592;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * -2)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2;
result = (-4294967296 * y)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * -2)
check = 8589934592
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 3;
result = (x * y);
check = -12884901888;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * 3)
check = -12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 3;
result = (-4294967296 * y)
check = -12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * 3)
check = -12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -3;
result = (x * y);
check = 12884901888;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * -3)
check = 12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -3;
result = (-4294967296 * y)
check = 12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * -3)
check = 12884901888
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 4;
result = (x * y);
check = -17179869184;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * 4)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4;
result = (-4294967296 * y)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * 4)
check = -17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -4;
result = (x * y);
check = 17179869184;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * -4)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -4;
result = (-4294967296 * y)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * -4)
check = 17179869184
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 8;
result = (x * y);
check = -34359738368;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * 8)
check = -34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 8;
result = (-4294967296 * y)
check = -34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * 8)
check = -34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -8;
result = (x * y);
check = 34359738368;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * -8)
check = 34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -8;
result = (-4294967296 * y)
check = 34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * -8)
check = 34359738368
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 1073741822;
result = (x * y);
check = -4611686009837453312;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * 1073741822)
check = -4611686009837453312
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741822;
result = (-4294967296 * y)
check = -4611686009837453312
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * 1073741822)
check = -4611686009837453312
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 1073741823;
result = (x * y);
check = -4611686014132420608;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * 1073741823)
check = -4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741823;
result = (-4294967296 * y)
check = -4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * 1073741823)
check = -4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 1073741824;
result = (x * y);
check = -4611686018427387904;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * 1073741824)
check = -4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741824;
result = (-4294967296 * y)
check = -4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * 1073741824)
check = -4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 1073741825;
result = (x * y);
check = -4611686022722355200;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * 1073741825)
check = -4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 1073741825;
result = (-4294967296 * y)
check = -4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * 1073741825)
check = -4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -1073741823;
result = (x * y);
check = 4611686014132420608;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * -1073741823)
check = 4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741823;
result = (-4294967296 * y)
check = 4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * -1073741823)
check = 4611686014132420608
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = (-0x3fffffff-1);
result = (x * y);
check = 4611686018427387904;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * (-0x3fffffff-1))
check = 4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


y = (-0x3fffffff-1);
result = (-4294967296 * y)
check = 4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * (-0x3fffffff-1))
check = 4611686018427387904
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -1073741825;
result = (x * y);
check = 4611686022722355200;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * -1073741825)
check = 4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741825;
result = (-4294967296 * y)
check = 4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * -1073741825)
check = 4611686022722355200
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = -1073741826;
result = (x * y);
check = 4611686027017322496;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * -1073741826)
check = 4611686027017322496
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -1073741826;
result = (-4294967296 * y)
check = 4611686027017322496
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * -1073741826)
check = 4611686027017322496
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 2147483646;
result = (x * y);
check = -9223372028264841216;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * 2147483646)
check = -9223372028264841216
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483646;
result = (-4294967296 * y)
check = -9223372028264841216
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * 2147483646)
check = -9223372028264841216
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 2147483647;
result = (x * y);
check = -9223372032559808512;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * 2147483647)
check = -9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483647;
result = (-4294967296 * y)
check = -9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * 2147483647)
check = -9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
y = 2147483648;
result = (x * y);
check = -9223372036854775808;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * 2147483648)
check = -9223372036854775808
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 2147483648;
result = (-4294967296 * y)
check = -9223372036854775808
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * 2147483648)
check = -9223372036854775808
if(result != check) {{ fail(test, check, result); }} ++test; 

}
function test37() {
var x;
var y;
var result;
var check;

x = -4294967296;
y = -2147483647;
result = (x * y);
check = 9223372032559808512;
if(result != check) { fail(test, check, result); } ++test; 


result = (-4294967296 * -2147483647)
check = 9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -2147483647;
result = (-4294967296 * y)
check = 9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


x = -4294967296;
result = (x * -2147483647)
check = 9223372032559808512
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 233;
y = 4608334;
result = (x * y);
check = 1073741822;
if(result != check) { fail(test, check, result); } ++test; 


result = (233 * 4608334)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 4608334;
result = (233 * y)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 233;
result = (x * 4608334)
check = 1073741822
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 11;
y = 97612893;
result = (x * y);
check = 1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (11 * 97612893)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 97612893;
result = (11 * y)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 11;
result = (x * 97612893)
check = 1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 16;
y = 67108864;
result = (x * y);
check = 1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (16 * 67108864)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 67108864;
result = (16 * y)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 16;
result = (x * 67108864)
check = 1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 13;
y = 82595525;
result = (x * y);
check = 1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (13 * 82595525)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 82595525;
result = (13 * y)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 13;
result = (x * 82595525)
check = 1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 11;
y = -97612893;
result = (x * y);
check = -1073741823;
if(result != check) { fail(test, check, result); } ++test; 


result = (11 * -97612893)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -97612893;
result = (11 * y)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 11;
result = (x * -97612893)
check = -1073741823
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 16;
y = -67108864;
result = (x * y);
check = -1073741824;
if(result != check) { fail(test, check, result); } ++test; 


result = (16 * -67108864)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -67108864;
result = (16 * y)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 16;
result = (x * -67108864)
check = -1073741824
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 13;
y = -82595525;
result = (x * y);
check = -1073741825;
if(result != check) { fail(test, check, result); } ++test; 


result = (13 * -82595525)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -82595525;
result = (13 * y)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 13;
result = (x * -82595525)
check = -1073741825
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 59;
y = -18199014;
result = (x * y);
check = -1073741826;
if(result != check) { fail(test, check, result); } ++test; 


result = (59 * -18199014)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -18199014;
result = (59 * y)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 59;
result = (x * -18199014)
check = -1073741826
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 11;
y = 195225786;
result = (x * y);
check = 2147483646;
if(result != check) { fail(test, check, result); } ++test; 


result = (11 * 195225786)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 195225786;
result = (11 * y)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 11;
result = (x * 195225786)
check = 2147483646
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 16;
y = 134217728;
result = (x * y);
check = 2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (16 * 134217728)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 134217728;
result = (16 * y)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 16;
result = (x * 134217728)
check = 2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 16;
y = -134217728;
result = (x * y);
check = -2147483648;
if(result != check) { fail(test, check, result); } ++test; 


result = (16 * -134217728)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -134217728;
result = (16 * y)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 16;
result = (x * -134217728)
check = -2147483648
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 10;
y = -214748365;
result = (x * y);
check = -2147483650;
if(result != check) { fail(test, check, result); } ++test; 


result = (10 * -214748365)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -214748365;
result = (10 * y)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 10;
result = (x * -214748365)
check = -2147483650
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 15;
y = 286331153;
result = (x * y);
check = 4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (15 * 286331153)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 286331153;
result = (15 * y)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 15;
result = (x * 286331153)
check = 4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 16;
y = 268435456;
result = (x * y);
check = 4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (16 * 268435456)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = 268435456;
result = (16 * y)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 16;
result = (x * 268435456)
check = 4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 15;
y = -286331153;
result = (x * y);
check = -4294967295;
if(result != check) { fail(test, check, result); } ++test; 


result = (15 * -286331153)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -286331153;
result = (15 * y)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 15;
result = (x * -286331153)
check = -4294967295
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 16;
y = -268435456;
result = (x * y);
check = -4294967296;
if(result != check) { fail(test, check, result); } ++test; 


result = (16 * -268435456)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


y = -268435456;
result = (16 * y)
check = -4294967296
if(result != check) {{ fail(test, check, result); }} ++test; 


x = 16;
result = (x * -268435456)
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

print("pass");
